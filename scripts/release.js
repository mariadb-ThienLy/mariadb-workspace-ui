#!/usr/bin/env node

import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

// Read package.json to get version
const packageJson = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf-8'))
const version = packageJson.version
const tarballName = `mariadb-workspace-ui-${version}.tgz`
const tagName = `v${version}`

// Helper to run commands
function run(command, options = {}) {
  console.log(`\n> ${command}`)
  try {
    execSync(command, { stdio: 'inherit', cwd: rootDir, ...options })
  } catch {
    console.error(`\n❌ Command failed: ${command}`)
    process.exit(1)
  }
}

// Get release type from command line args
const releaseType = process.argv[2] // 'patch', 'minor', 'major', or 'force'

if (!releaseType || !['patch', 'minor', 'major', 'force'].includes(releaseType)) {
  console.error('Usage: node scripts/release.js [patch|minor|major|force]')
  process.exit(1)
}

console.log(`\n🚀 Starting ${releaseType} release...`)

if (releaseType === 'force') {
  // Force release - delete and recreate same version
  console.log(`\n⚠️  Force releasing version ${version}`)

  // Build and pack
  run('npm run pack:release')

  // Delete GitHub release (ignore errors if doesn't exist)
  console.log(`\n🗑️  Deleting GitHub release ${tagName}...`)
  try {
    execSync(`gh release delete ${tagName} -y`, { stdio: 'inherit', cwd: rootDir })
  } catch {
    console.log('   (Release does not exist, skipping)')
  }

  // Delete local tag
  console.log(`\n🗑️  Deleting local tag ${tagName}...`)
  try {
    execSync(`git tag -d ${tagName}`, { stdio: 'inherit', cwd: rootDir })
  } catch {
    console.log('   (Tag does not exist locally, skipping)')
  }

  // Delete remote tag
  console.log(`\n🗑️  Deleting remote tag ${tagName}...`)
  try {
    execSync(`git push origin :refs/tags/${tagName}`, { stdio: 'inherit', cwd: rootDir })
  } catch {
    console.log('   (Tag does not exist remotely, skipping)')
  }

  // Create new tag
  console.log(`\n🏷️  Creating new tag ${tagName}...`)
  run(`git tag ${tagName}`)

  // Push tag
  console.log(`\n⬆️  Pushing tag to GitHub...`)
  run('git push --tags')

  // Create GitHub release
  console.log(`\n📦 Creating GitHub release ${tagName}...`)
  run(
    `gh release create ${tagName} ${tarballName} --title "${tagName}" --notes "Force release ${tagName}"`
  )

  console.log(`\n✅ Force release complete!`)
  console.log(
    `\n🔗 View release: https://github.com/mariadb-ThienLy/mariadb-workspace-ui/releases/tag/${tagName}`
  )
} else {
  // Normal release - bump version
  console.log(`\n📝 Bumping version (${releaseType})...`)
  run(`npm version ${releaseType} --no-git-tag-version`)

  // Read new version after bump
  const newPackageJson = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf-8'))
  const newVersion = newPackageJson.version
  const newTarballName = `mariadb-workspace-ui-${newVersion}.tgz`
  const newTagName = `v${newVersion}`

  console.log(`\n📦 Building and packing version ${newVersion}...`)
  run('npm run pack:release')

  console.log(`\n💾 Committing version bump...`)
  run(`git add package.json package-lock.json`)
  run(`git commit -m "${newVersion}"`)

  console.log(`\n🏷️  Creating tag ${newTagName}...`)
  run(`git tag ${newTagName}`)

  console.log(`\n⬆️  Pushing to GitHub...`)
  run('git push && git push --tags')

  console.log(`\n📦 Creating GitHub release ${newTagName}...`)
  run(
    `gh release create ${newTagName} ${newTarballName} --title "${newTagName}" --notes "Release ${newTagName}"`
  )

  console.log(`\n✅ Release ${newVersion} complete!`)
  console.log(
    `\n🔗 View release: https://github.com/mariadb-ThienLy/mariadb-workspace-ui/releases/tag/${newTagName}`
  )
}

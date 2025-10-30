#!/usr/bin/env node

/**
 * Downloads the latest release tarball from GitHub and extracts the dist folder
 * for local CDN demo testing.
 */
import { execSync } from 'child_process'
import { existsSync, mkdirSync, rmSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const REPO = 'mariadb-ThienLy/mariadb-workspace-ui'
const DIST_DIR = join(__dirname, 'dist')

console.log('🚀 Downloading latest release for local CDN demo...\n')

// Clean up existing dist folder
if (existsSync(DIST_DIR)) {
  console.log('🗑️  Removing existing dist folder...')
  rmSync(DIST_DIR, { recursive: true, force: true })
}

// Get latest release info
console.log('📡 Fetching latest release info...')
let releaseInfo
try {
  releaseInfo = JSON.parse(
    execSync(`gh release view --repo ${REPO} --json tagName,assets`, {
      encoding: 'utf-8',
    })
  )
} catch {
  console.error(
    '❌ Failed to fetch release info. Make sure you have GitHub CLI installed and authenticated.'
  )
  console.error('   Run: gh auth login')
  process.exit(1)
}

const version = releaseInfo.tagName
const tarballAsset = releaseInfo.assets.find((asset) => asset.name.endsWith('.tgz'))

if (!tarballAsset) {
  console.error('❌ No tarball found in latest release')
  process.exit(1)
}

console.log(`✅ Found release: ${version}`)
console.log(`📦 Tarball: ${tarballAsset.name}\n`)

// Download tarball
console.log('⬇️  Downloading tarball...')
const tarballPath = join(__dirname, tarballAsset.name)
try {
  execSync(`gh release download ${version} --repo ${REPO} --pattern "*.tgz" --dir ${__dirname}`, {
    stdio: 'inherit',
  })
} catch {
  console.error('❌ Failed to download tarball')
  process.exit(1)
}

// Extract dist folder from tarball
console.log('\n📂 Extracting dist folder...')
try {
  // Extract to temp directory
  const tempDir = join(__dirname, 'temp-extract')
  mkdirSync(tempDir, { recursive: true })

  execSync(`tar -xzf ${tarballPath} -C ${tempDir}`, { stdio: 'inherit' })

  // Move dist folder to demo directory
  const extractedDist = join(tempDir, 'package', 'dist')
  if (existsSync(extractedDist)) {
    execSync(`mv ${extractedDist} ${DIST_DIR}`, { stdio: 'inherit' })
    console.log(`✅ Extracted dist folder to: ${DIST_DIR}`)
  } else {
    console.error('❌ dist folder not found in tarball')
    process.exit(1)
  }

  // Clean up
  rmSync(tempDir, { recursive: true, force: true })
  rmSync(tarballPath, { force: true })
} catch (error) {
  console.error('❌ Failed to extract tarball')
  console.error(error)
  process.exit(1)
}

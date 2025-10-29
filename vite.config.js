import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { fileURLToPath, URL } from 'url'

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue({
        template: {
          transformAssetUrls,
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('mariadb-workspace'),
          },
        },
        customElement: true,
      }),
      vuetify({ styles: { configFile: 'src/styles/variables/vuetify.scss' } }),
      components({ dirs: ['src/components/common'], dts: false }),
      autoImport({
        imports: ['vue', 'vuex', 'vue-i18n'],
        dts: false,
        dirs: ['src/composables/common'],
        eslintrc: {
          enabled: mode === 'development',
          filepath: '.eslintrc-auto-import.local.json',
          globalsPropValue: true,
        },
      }),
      // Copy monacoEditorSetup.js
      viteStaticCopy({ targets: [{ src: 'src/monacoEditorSetup.js', dest: '.' }] }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        sass: { api: 'modern-compiler' },
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use '@/styles/variables/vuetify.scss' as vuetifyVar;
            @use '@/styles/variables/colors.scss' as colors;`,
        },
      },
    },
    server: { port: 3002 },
    optimizeDeps: {
      include: ['monaco-editor'],
      exclude: ['vuetify', 'vue-chartjs', 'd3-zoom', 'd3-transition'],
    },
    exclude: ['node_modules/.cache'],
    esbuild: { pure: ['console.log'] },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      // Inline assets smaller than 100kb as base64 (includes codicon font ~90kb)
      assetsInlineLimit: 100000,
      lib: {
        entry: fileURLToPath(new URL('./src/main.js', import.meta.url)),
        name: 'MariaDBWorkspace',
        formats: ['es'],
        fileName: () => 'index.js',
      },
      rollupOptions: {
        external: ['monaco-editor'],
        maxParallelFileOps: 20,
        output: {
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
          manualChunks: (id) => {
            // Return the chunk name based on the baseName and moduleName
            if (id.includes('node_modules'))
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
          },
        },
      },
    },
  })
}

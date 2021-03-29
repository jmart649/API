import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default{
  plugins: [vue(), ViteComponents() ],
}

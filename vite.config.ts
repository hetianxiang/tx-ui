import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsx(), Unocss({
    presets: [presetUno(), presetAttributify(), presetIcons()]
  })]
})

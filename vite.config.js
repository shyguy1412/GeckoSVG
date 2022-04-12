import { defineConfig } from 'vite'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: 'test',
  resolve: {
     alias: {
        '@elements': resolve(__dirname, 'src/elements'),
        'geckosvg': resolve(__dirname, 'src/geckosvg')
     }
 }
})

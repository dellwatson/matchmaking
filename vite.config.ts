import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react-swc";

import unocss from "unocss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unocss(), react()],
  resolve: {
    alias: {
      // BUILD
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@game": path.resolve(__dirname, "./src/_game"),
    },
  },
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    target: "esnext",
  },
  assetsInclude: [
    "**/*.gltf",
    "**/*.json",
    "**/*.mp3",
    "**/*.cube",
    "**/*.hdr",
  ],
});

// import { defineConfig } from 'vite'
// import React from '@vitejs/plugin-react'
// import UnoCSS from 'unocss/vite'
// import presetAttributify from '@unocss/preset-attributify'
// import presetIcons from '@unocss/preset-icons'
// import presetUno from '@unocss/preset-uno'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     UnoCSS({
//       shortcuts: [
//         { logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180' },
//       ],
//       presets: [
//         presetUno(),
//         presetAttributify(),
//         presetIcons({
//           extraProperties: {
//             'display': 'inline-block',
//             'vertical-align': 'middle',
//           },
//         }),
//       ],
//     }),
//     React(),
//   ],
// })

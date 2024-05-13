import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react-swc";

import unocss from "unocss/vite";
import path from "path";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   port: 3006,
  // },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  plugins: [
    unocss(),
    react(),
    glsl(),
    // nodePolyfills({
    //   include: ["node_modules/**/*.js", new RegExp("node_modules/.vite/.*js")],
    // }),
  ],
  resolve: {
    alias: {
      // BUILD
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@game": path.resolve(__dirname, "./src/_game"),

      // web3modal?
      // stream: "stream-browserify",
      // process: "process/browser",
      // https: "agent-base",
    },
  },
  // esbuild: {
  //   jsxFactory: "React.createElement",
  //   jsxFragment: "React.Fragment",
  //   target: "esnext",
  // },
  assetsInclude: [
    // "**/*.json",
    "**/*.gltf",
    "**/*.glb",
    "**/*.jpeg",
    "**/*.png",
    "**/*.lottie",
    "**/*.mp3",
    "**/*.cube",
    "**/*.hdr",
    "**/*.glsl",
  ],
  // build: {
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //   },
  // },
  // testing for wagmi-v2
  // build: {
  //   rollupOptions: {
  //     // this is included because it breaks the build if not included
  //     // this is almost certainly a bug in wagmi (or these libraries transatively
  //     // and likely can be removed in the future
  //     external: [
  //       "@safe-globalThis/safe-apps-provider",
  //       "@safe-globalThis/safe-apps-sdk",
  //     ],
  //   },
  // },
  // define: {
  //   global: "globalThis",
  // },

  //trying fix wagmiv2
  // build: {
  //   rollupOptions: {
  //     external: [
  //       "node_modules/@wagmi/connectors/node_modules/@coinbase/wallet-sdk/dist/index.js",
  //       "node_modules/@rollup/plugin-node-resolve/dist/es/index.js",
  //       "@safe-globalThis/safe-apps-provider",
  //       "@safe-globalThis/safe-apps-sdk",
  //     ],
  //     plugins: [
  //       // require("@rollup/plugin-json")(),
  //       // require("@rollup/plugin-node-resolve")({
  //       //   // Specify the 'json' option to resolve JSON files
  //       //   json: true,
  //       // }),
  //       //   nodePolyfills({
  //       //     // include: null,
  //       //     // include: [
  //       //     //   "node_modules/**/*.js",
  //       //     //   new RegExp("node_modules/.vite/.*js"),
  //       //     // ],
  //       //   }),
  //     ],
  //   },
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //   },
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     define: {
  //       global: "globalThis",
  //     },
  //     plugins: [
  //       NodeGlobalsPolyfillPlugin({
  //         buffer: true,
  //       }),
  //     ],
  //   },
  // },
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

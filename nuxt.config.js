const pkg = require("./package");

module.exports = {
  mode: "spa",
  /*
   ** Global CSS 无效 使用 @nuxtjs/style-resources
   */
  // css: ["@/assets/css/base.scss", "@/assets/css/theme.scss"],

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  // css: ["ant-design-vue/dist/antd.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/antd-ui", { src: "@/plugins/axios", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // ['nuxt-sass-resources-loader', "~/assets/css/base.scss"]
    "@nuxtjs/style-resources"
  ],
  styleResources: {
    scss: ["./assets/css/*.scss"]
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
  }
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/smoothie-app/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_global.scss";`
      }
    }
  }
};

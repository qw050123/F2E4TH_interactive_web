const IN_PRODUCTION = process.env.NODE_ENV === "production";
module.exports = {
    publicPath: '/F2E4TH_interactive_web',
    productionSourceMap: false,
    chainWebpack: config => {
        IN_PRODUCTION &&
      config.module
        .rule("images")
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: [0.65, 0.9], speed: 4 },
          gifsicle: { interlaced: false },
        })
        .end();
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/style/_varible.scss";`
              },
        }
    }
}
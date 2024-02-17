module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: config => {
    const files = config.module.rule('images')
    files
      .test(/\.(png|jpe?g|gif|webp|avif)$/i)
  },
}

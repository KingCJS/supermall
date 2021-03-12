module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'compoents': '@/compoents',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 9999,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/user/*': {
<<<<<<< HEAD
        target: 'http://127.0.0.1:8082'  // 请求本地 需要咕泡商城后台项目 默认127.0.0.1:8080
=======
        target: 'http://127.0.0.1:8082'  // 请求本地 需要咕泡商城后台项目 默认127.0.0.1:8082
>>>>>>> upstream/stu_dev_0809
      },
      '/shopping/**': {
        target: 'http://127.0.0.1:8081'  // 请求本地 需要咕泡商城后台项目 默认127.0.0.1:8081
      },
      '/cashier/**': {
        target: 'http://127.0.0.1:8083'  // 请求本地 需要咕泡商城后台项目 默认127.0.0.1:8083
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}

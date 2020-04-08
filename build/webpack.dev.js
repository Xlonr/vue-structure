const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: "/",
    historyApiFallback: false,
    hot: true,
    inline: true,
    port: "7071"
  }
})
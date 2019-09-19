/**
 * Created by xm on 2017/9/10.
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin') // css样式从js文件中分离出来
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/main.js'),
    vendors: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist',
    // 所有通过相对路径获取到的资源都会打到./目录下
    filename: '[name].js'
    // chunkFilename: '[id].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.sass'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        // exclude: /node_modules/,
        include: [path.resolve(__dirname, 'node_modules/ujs_js')]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(vue|js)/,
        use: ['eslint-loader'],
        exclude: /node_modules/,
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(png|jpg|gif|svg|woff|ttf|eot)$/,
        // loader: 'url-loader?limit=8192&name=asset',
        // options: {
        //   name: '[name].[ext]?[hash]'
        // }
        use: [{
          loader: 'file-loader?limit=8192&name=static/[name].[ext]'
        }]
      },
      {
        test: /\.md$/,
        use: ['html-loader', 'markdown-loader'],
        // options: {
        //   name: utils.assetsPath('docs/[name].[ext]')
        // }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("app.css"),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: [
    //         require('autoprefixer') // 样式加入各个浏览器的前缀
    //     ]
    //   }
    // }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.resolve(__dirname, './src/index.html'),
      inject: true,   // script引用放在body之后  true、body、head
      minify: {
        removeAttributeQuotes: true   // html压缩去除引号
      }
    }),
    new VueLoaderPlugin(),
    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: "/",
    historyApiFallback: false,
    hot: true,
    inline: true,
    port: "7070"
  }
}

console.log('env:', process.env.NODE_ENV)

if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'development') {
  module.exports.devtool = 'source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ])
}

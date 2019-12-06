const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin') // css样式从js文件中分离出来
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/main.js'),
    vendors: ['vue', 'vue-router', 'vuex']
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.sass'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(vue|js)/,
        use: {
	        loader: 'eslint-loader', 
          options: {
            formatter: require('eslint-friendly-formatter')
          }
	      },
        // exclude: /node_modules/,
        enforce: 'pre',
        include: [path.resolve(__dirname, '../src/')] 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          MiniCSSExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        // exclude: /node_modules/,
        // include: [path.resolve(__dirname, '../node_modules/ujs_js')]
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: true
          }
        },
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|jpg|gif|svg|woff|ttf|eot)$/,
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
    new MiniCSSExtractPlugin({
      filename: 'css/app.[contenthash].css',
      // allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,   // script引用放在body之后  true、body、head
      minify: {
        removeAttributeQuotes: true   // html压缩去除引号
      }
    }),
    new VueLoaderPlugin(),
    // new BundleAnalyzerPlugin()
  ]
}
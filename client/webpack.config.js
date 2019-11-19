
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool:"cheap-module-eval-source-map",

  // entry: ['./src/index.js'],
  entry: ['react-hot-loader/patch', './src/index.js'],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  output: {
    //输出目录
    path: path.join(__dirname, "dist"),
    //文件名称
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/, path.resolve(__dirname, 'src/style/global')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: [/\.css$/, /\.scss$/],
        include: [/node_modules/, path.resolve(__dirname, 'src/style/global')],
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'images/',
            limit: 10 * 1024
          }
        }
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'fonts/',
            publicPath: 'fonts/',
            limit: 5 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "./dist"),
    host: "127.0.0.1",// 可以使用手机访问
    port: 10011,
    historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
    clientLogLevel: "error",
    stats: 'errors-only',
    open: true,
    proxy: {
      // 代理到后端的服务地址，会拦截所有以api开头的请求地址
      "/api": "http://localhost:10010"
    }
  },


}
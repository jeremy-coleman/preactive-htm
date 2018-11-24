const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var TerserWebpackPlugin = require('terser-webpack-plugin')
const WebpackShellPlugin = require('./tasks/shell-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  stats: 'minimal',
  entry: "./src/index.ts",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".mjs"]
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: [
          {loader: "babel-loader"},
          {loader: "ts-loader"}
        ]
      }
    ]
  },
  
  //cache: true,
  devtool: "none",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({template: path.join(__dirname, "src/index.html")}),
    new TerserWebpackPlugin(),
    new WebpackShellPlugin({onBuildEnd: {scripts: ["node size.js"]}})
  ]
};

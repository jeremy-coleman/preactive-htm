const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
  
  entry: "./src/index.ts",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".mjs"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {loader: "ts-loader"}
        ]
      }
    ]
  },
  cache: true,
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.join(__dirname, "src/index.html")}),
    new TerserWebpackPlugin()
  ]
};

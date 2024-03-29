const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  mode: "development",
  output: {
    filename: "[name][hash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/templates/template.html",
      favicon: "./src/favicons/favicon.ico",
      chunks: ["gamecss", "index"],
    }),
    new HtmlWebpackPlugin({
      filename: "battle.html",
      template: "./src/templates/battle.html",
      favicon: "./src/favicons/favicon.ico",
      chunks: ["networkcss", "battle"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
        ]
      }
    ]
  }
});
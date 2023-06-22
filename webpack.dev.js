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
      template: "./src/templates/template.html",
      favicon: "./src/favicons/favicon.ico",
      blocks: ["gamecss", "index"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/template.html",
      favicon: "./src/favicons/favicon.ico",
      blocks: ["networkcss", "index"]
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
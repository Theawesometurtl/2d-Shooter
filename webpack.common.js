const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  entry: {
    networkcss: "./src/styling/networkStuff.css",
    vendor: "./src/vendor.ts",
    gamecss: "./src/styling/game.css",
    index: "./src/index.ts",
    battle: "./src/battle.ts",
    
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  }
};
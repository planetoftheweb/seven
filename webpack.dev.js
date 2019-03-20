const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/script.js"
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader" },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [require("autoprefixer")];
              }
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
});

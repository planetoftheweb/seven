const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  watch: false,
  entry: [
    "./_process/scss/style.scss",
    "./_process/js/app.js",
    "./_process/js/script.js"
  ],

  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["_process/scss"]
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "_site/js/"),
    filename: "script.js"
  },
  plugins: [
    new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
    new VueLoaderPlugin()
  ]
};

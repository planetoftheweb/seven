const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  watch: true,
  entry: ["./_process/js/app.js", "./_process/js/script.js"],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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

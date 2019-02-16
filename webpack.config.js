const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  watch: true,
  entry: ["./process/js/app.js", "./process/js/script.js"],
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
    path: path.resolve(__dirname, "src/js/"),
    filename: "script.js"
  },
  plugins: [
    new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
    new VueLoaderPlugin()
  ]
};

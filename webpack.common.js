const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "./_process/js/app.js",
    "./_process/js/script.js",
    "./_process/scss/style.scss"
  ],
  plugins: [new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" })]
};

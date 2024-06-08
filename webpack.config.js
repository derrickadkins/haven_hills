const { watch } = require("fs");
const path = require("path");

module.exports = {
  mode: "development", // or 'production' or 'none'
  entry: "./public/js/firebase.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
  watch: true,
};

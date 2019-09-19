const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2"
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  mode: "production"
};

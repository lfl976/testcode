const path = require("path");
const RemoveCommentPlugin = require("./remove-comment-plugin");
/**@type {import('webpack').Configuration} */
const config = {
  entry: "./src/index.js",
  mode: "none",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.md$/,
        use: "./markdown-loader",
      },
    ],
  },
  plugins: [new RemoveCommentPlugin()],
  optimization: {
    // usedExports: true,
    // minimize: false,
    // concatenateModules: true,
    // sideEffects: true,
  },
  devServer: {},
};

module.exports = config;

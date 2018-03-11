const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "/dist/"
  },


  resolve: {
    extensions: [".js"]
  },

  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      { enforce: "pre", test: /\.js$/ }
    ]
  },

  plugins: []
};

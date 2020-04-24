const path = require("path");
const webpack = require("webpack");
const basePath = path.resolve(__dirname);

module.exports = {
  context: path.join(basePath, "src"),
  output: {
    path: path.join(basePath, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/dist",
  },
  devServer: {
    contentBase: basePath,
    watchContentBase: true,
  },
  resolve: {
    alias: {
      videojs: "video.js",
      WaveSurfer: "wavesurfer.js",
      RecordRTC: "recordrtc",
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      videojs: "video.js/dist/video.cjs.js",
      RecordRTC: "recordrtc",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
};

// Allow webpack to transpile the code into javascript

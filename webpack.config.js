const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: 'style-loader',
        },
      },
    ],
  },
  plugins: [
    new CompressionPlugin(),
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProccesorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
    ],
  },
};

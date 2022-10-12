const path = require('path')

module.exports = {
  mode: "development",
  entry: "./client/index.jsx",
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "bundle.js"
    },
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use:{
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: {
            loader:'style-loader'
          }
        }
      ]
    }
}
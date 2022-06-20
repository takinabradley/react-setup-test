// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path")

const isProduction = process.env.NODE_ENV == "production" // eslint-disable-line 

const stylesHandler = "style-loader"

const config = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'main.js'
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  target: "web",
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = "production"
  } else {
    config.mode = "development"
  }
  return config
}

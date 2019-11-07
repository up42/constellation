const config = require("../constellation.config");
const webpack = require("webpack");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const webpackConfig = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: ["./src/styles/marketing.scss", "./src/styles/base.scss"],
  output: {
    path: config.output.base
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "css/[name].css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader?-url"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new OptimizeCSSPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      }
    }),
    new CopyWebpackPlugin([
      {
        from: config.assets,
        to: config.output.assets,
        ignore: [".*"]
      },
      {
        from: `${config.components}/**/*.vue`,
        to: config.output.components
      }
    ])
  ]
};

module.exports = webpackConfig;

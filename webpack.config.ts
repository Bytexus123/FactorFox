// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// import MiniCssExtractPlugin from "mini-css-extract-plugin";

// module.exports = {
//   mode: "development",
//   entry: "./src/index.tsx",
//   devServer: {
//     host: "localhost",
//     compress: true,
//     static: path.join(__dirname, "public"),
//     server: "https",
//     port: 3300,
//     devMiddleware: {
//       writeToDisk: true,
//     },
//     hot: true,
//     liveReload: false,
//   },
//   devtool: "inline-source-map",
//   output: {
//     path: path.join(__dirname, "/dist"),
//     filename: "bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.(sass|css|scss)$/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "Caching",
//       filename: "index.html",
//       template: "./src/index.html",
//       hash: true,
//     }),
//     new MiniCssExtractPlugin({
//       filename: "styles.css",
//     }),
//   ],
// };

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Configuration as WebpackConfig } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";

interface Configuration extends WebpackConfig {
  devServer?: DevServerConfig;
}

export default (_env: Record<string, any>, argv:any): Configuration => ({
  entry: "./src/index.tsx",
  devtool: argv.mode === 'production' ? undefined : 'source-map',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    host: "localhost",
    compress: true,
    static: path.join(__dirname, "public"),
    server: "https",
    port: 3300,
    devMiddleware: {
      writeToDisk: true,
    },
    hot: true,
    liveReload: false,
  },
  module: {
    unsafeCache: false,
    rules: [
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Caching",
      filename: "index.html",
      template: "./src/index.html",
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "all.css",
    }),
  ],
});

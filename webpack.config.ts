import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Configuration as WebpackConfig } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";
import i18nextWebpackLocaleSync from "i18next-webpack-locale-sync";

interface Configuration extends WebpackConfig {
  devServer?: DevServerConfig;
}

export default (_env: Record<string, any>, argv: any): Configuration => ({
  entry: "./src/index.tsx",
  devtool: argv.mode === "production" ? undefined : "source-map",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    host: "localhost",
    compress: true,
    static: path.join(__dirname, "public"),
    server: "https",
    port: 3300,
    historyApiFallback: true,
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
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // {
      //   test: /\.(gif|png|jpe?g)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: '[path][name].[ext]',
      //         publicPath: 'assets/'
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        include: /node_modules/,
        type: "assets/resource",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            esModule: false,
          },
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
    publicPath: "/",
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  plugins: [
    new i18nextWebpackLocaleSync({
      masterLocale: "en",
      produceCSV: true,
      verbose: true,
    }),
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

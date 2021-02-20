const path = require("path");
const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const dotenv = require('dotenv');

module.exports = (env, argv) => {
  const environments = {
    ...dotenv.config({
        path: path.resolve(__dirname, `.env.${env}`),
    }).parsed,
  };
  return {
    entry: "./src/App/index.tsx",
    devServer: {
      port: 7777,
      publicPath: "/",
      contentBase: "./public",
      hot: true,
    },
    resolve: {
      alias: {
        modules: path.resolve(__dirname, 'src/modules/'),
        components: path.resolve(__dirname, 'src/components/'),
      },
      extensions: [".tsx", ".ts", ".js", ".scss"],
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ["babel-loader", "source-map-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.ts(x)?$/,
          use: ["babel-loader", "awesome-typescript-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "local",
                  localIdentName: "[name]__[local]--[hash:base64:5]",
                },
                sourceMap: true,
                url: false,
              },
            },
            { loader: "sass-loader" },
          ],
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          { from: "images/*.*", to: "images/", context: "public" },
        ],
      }),
      new HTMLWebpackPlugin({
        template: __dirname + "/src/App/index.html",
        filename: "index.html",
        inject: "body",
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({ ...environments }),
      }),
    ],
  }
};

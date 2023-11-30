const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

let target = "web";
let mode = "development"; //
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode,
  plugins,
  target,
  resolve: {
    extensions: ["*", ".js", ".jsx", ".less", ".svg"],
  },

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),

    assetModuleFilename: "assets/[hash][ext][query]",

    clean: true,
  },

  devtool: "source-map",
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.(html)$/, use: ["html-loader"] },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === "production" ? "asset" : "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};

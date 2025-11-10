import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.tsx",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new ModuleFederationPlugin({
      name: "Home",
      remotes: {
        Product: "Product@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          strictVersion: true,
          eager: false,
          requiredVersion: "18.2.0",
        },
        "react-dom": {
          singleton: true,
          strictVersion: true,
          eager: false,
          requiredVersion: "18.2.0",
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: "7.9.5",
          eager: false,
          strictVersion: true,
        },
      },
    }),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {},
  },

  devServer: {
    historyApiFallback: true,
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
  },

  mode: "development",
};

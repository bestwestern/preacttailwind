const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreactRefreshPlugin = require("@prefresh/webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const makeConfig = () => {
  const { NODE_ENV, t1 } = process.env;
  console.log(t1);
  const isProduction = NODE_ENV === "production";
  const time = new Date().getTime();
  var plugins = [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
      Version: 123,
      isProduction,
    }),
    new HtmlWebpackPlugin({
      title: "Testside",
      cssLink: isProduction ? "styles.css" : "styles.css", // "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
      template: "./src/index.html",
    }),
  ];
  if (isProduction) {
    plugins = [new CleanWebpackPlugin(), ...plugins];
  } else {
    plugins = [
      ...plugins,
      new PreactRefreshPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ];
  }
  const babelPlugins = [
    ["@babel/transform-runtime"],
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "h",
        pragmaFrag: "Fragment",
      },
    ],
    ["@babel/plugin-proposal-class-properties"],
  ];
  // Return configuration
  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.js",
    stats: "normal",
    devServer: {
      contentBase: path.join(__dirname, "assets"),
      host: "localhost",
      port: 3008,
      historyApiFallback: true,
      hot: true,
      inline: true,
      publicPath: "/",
      clientLogLevel: "info",
      open: true,
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name][contenthash].js",
      publicPath: "/",
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.js$|\.jsx$/,
          include: [path.resolve(__dirname, "src")],
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "> 9.25%" }]],
            plugins: isProduction
              ? [...babelPlugins]
              : ["react-refresh/babel", ...babelPlugins],
          },
        },
      ],
    },
  };
};

module.exports = makeConfig();

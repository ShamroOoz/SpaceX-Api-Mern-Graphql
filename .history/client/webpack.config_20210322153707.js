const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;
const settings = {
  distPath: path.join(__dirname, "dist"),
  srcPath: path.join(__dirname, "./src "),
};

function srcPathExtend(subpath) {
  return path.join(settings.srcPath, subpath);
}

module.exports = (env, options) => {
  const isDevMode = options.mode === "development";

  return {
    devtool: isDevMode ? "source-map" : false,
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: ["babel-loader"],
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              rules: "css-loader",
              options: {
                sourceMap: isDevMode,
              },
            },
            {
              rules: "postcss-loader",
              options: {
                plugins: [require("autoprefixer")()],
                sourceMap: isDevMode,
              },
            },
            {
              rules: "sass-loader",
              options: {
                sourceMap: isDevMode,
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            rules: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [
            {
              rules: "file-loader",
              options: {
                outputPath: "assets/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: srcPathExtend("index.html"),
      }),
    ],
  };
};

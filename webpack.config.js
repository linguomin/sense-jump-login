const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // 入口js路径
  entry: {
    index: "./src/js/index.js",
    "jump-login": "./src/js/jump-login.js",
  },
  // 方便追踪源代码错误
  // devtool: "source-map",
  plugins: [
    // 自动清空dist目录
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // 设置html模板生成路径
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["index"],
      title: "Development",
    }),
  ],
  // 编译输出配置
  output: {
    // js生成到dist/js，[name]表示保留原js文件名
    filename: "js/[name].js",
    // 输出路径为dist
    path: path.resolve(__dirname, "dist"),
  },
};

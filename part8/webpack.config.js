// const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // 파일을 읽어들이는 진입점 설정
  entry: "./src/main.js",

  // 결과물 반환 옵션
  output: {
    // 기본은 path dist, filename main.js
    // path: path.resolve(__dirname, "dist"),
    // filename: "mai.js",
    clean: true,
    // 기존 빌드 결과 제거
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        // 순서 중요, 뒤에서부터 로드
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    // 복사해서 목표 폴더(dist)로 copy해줌
    new CopyPlugin({
      patterns: [{ from: "statics" }],
    }),
  ],
};

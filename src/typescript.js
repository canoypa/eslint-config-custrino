module.exports = {
  extends: ["./no-ts"],

  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],

  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error", // メンバーのオーバーロードはグループ化してー！
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }] // 配列の型は場合に応じて使い分けてー！
  }
};

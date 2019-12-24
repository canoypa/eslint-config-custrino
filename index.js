module.exports = {

  rules: {
    // eval 使うな
    "no-eval": "error",
    // 文字列コードを使うな
    "no-implied-eval": "error",
    // with 使うな
    "no-with": "error",
    // arguments 使うな
    "no-caller": "error",
    // script url を使うな
    "no-script-url": "error",
    // var 使うな
    "no-var": "error",
    // Function コンストラクタを使うな
    "no-new-func": "error",
    // グローバルオブジェクトを呼び出すな
    "no-obj-calls": "error",

    //条件分で代入するな eslint:recommended
    "no-cond-assign": "error",
    // ネイティブオブジェクトを拡張するな
    "no-extend-native": "error",
    // プリミティブラッパーインスタンスするな
    "no-new-wrappers": "error",
    // 正規表現で空の文字クラスを作るな
    "no-empty-character-class": "error",
    // catch した例外を再割り当てするな
    "no-ex-assign": "error",
    // -0 と比較するな
    "no-compare-neg-zero": "error",
    // debugger 使うな
    "no-debugger": "error",

    // 未使用の変数をほっぽかすな
    "no-unused-vars": "error",
    // throw 出来るものを制限する
    "no-throw-literal": "error",
    // Getter は値返せ
    "getter-return": "error",
    // Setter は値返すな
    "no-setter-return": "error",
    // プロパティはドット表記で取得しろ
    "dot-notation": "error",
    // "=="/"!=" は曖昧だから使うな
    "eqeqeq": "error",
    // alert, confirm, prompt を使うな
    "no-alert": "error",
    // 浮動小数点は分かりにくいから使うな
    "no-floating-decimal": "error",
    // 暗黙の型変換するな
    "no-implicit-coercion": "error",
    // 自己比較するな
    "no-self-compare": "error",
    // 条件分に定数を使うな
    "no-constant-condition": "error",
    // .call(), .apply() を使うな
    "no-useless-call": "error",
    // 無意味なリテラル連結するな
    "no-useless-concat": "error",
    // case の重複
    "no-duplicate-case": "error",
    // 配列に空のスロットを含むな
    "no-sparse-arrays": "error",
    // 到達不可能なコードを書くな
    "no-unreachable": "error",
    // 単純な条件式に三項演算を使うな
    "no-unneeded-ternary": "error",
    // 無限ループこわぃ ><
    "for-direction": "error",
    // ループ内での await はパフォーマンス悪いからやめろ
    "no-await-in-loop": "error",
    // 引数の名前を重複させるな
    "no-dupe-args": "error",
    // 同じ条件を重複させるな
    "no-dupe-else-if": "error",
    "no-duplicate-case": "error",
    // オブジェクトのキーを重複させるな
    "no-dupe-keys": "error",
    // 無意味なブールキャストするな
    "no-extra-boolean-cast": "error",
    // function を上書きするな
    "no-func-assign": "error",
    // インポートしたものを上書きするな
    "no-import-assign": "error",
    // 正規表現でスペースを複数使うな
    "no-regex-spaces": "error",
    // 分かりづらい否定文書くな
    "no-unsafe-negation": "error",
    // isNaN() 使え
    "use-isnan": "error",

    // インデントは 2
    "indent": ["error", 2],
    // セミコロン入れろ
    "semi": "error",
    // 変なスペース入れるな eslint:recommended
    "no-irregular-whitespace": "error",
    // 混乱する複数行式を書くな eslint:recommended
    "no-unexpected-multiline": "error",
    // ダブル クオート使え
    "quotes": "error",
    // 演算子の前後にスペースを入れろ
    "space-infix-ops": "error",
    // 余計なスペースを入れるな
    "no-multi-spaces": "error",
    // 単項演算子の前後にスペースを入れろ
    "space-unary-ops": "error",
    // arrow function の => 前後にスペース入れろ
    "arrow-spacing": "error",
    // キーワードの前後にスペース入れろ
    "keyword-spacing": "error",
    // () 前後にスペースを入れるな
    "space-in-parens": "error",
    // 改行するならプロパティの前にドットを置け
    "dot-location": ["error", "property"],
    // テンプレートリテラル使って
    "prefer-template": "error",
    // 文字列を複数行にしたいならテンプレートリテラル使え
    "no-multi-str": "error",
    // yoda はダメだよーだ
    "yoda": ["error", "never", { "exceptRange": true }],
    // 無駄なセミコロンを付けるな
    "no-extra-semi": "error",

    // 空の関数あるけどいいんですか
    "no-empty": "warn",
    // return あるなら値を返してあげて
    "consistent-return": "warn",
    // parseInt() の基数は省略しないほうがいいんじゃないかな
    "radix": "warn",
    // 不要な () ありますよ
    "no-extra-parens": "warn"
  }

};

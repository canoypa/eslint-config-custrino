module.exports = {

  rules: {
    // eval 使わないでー！
    "no-eval": "error",
    // 文字列コードを使わないでー！
    "no-implied-eval": "error",
    // with 使わないでー！
    "no-with": "error",
    // arguments 使わないでー！
    "no-caller": "error",
    // script url を使わないでー！
    "no-script-url": "error",
    // var 使わないでー！
    "no-var": "error",
    // Function コンストラクタを使わないでー！
    "no-new-func": "error",
    // グローバルオブジェクトを呼び出すなー！
    "no-obj-calls": "error",

    //条件分で代入しないでー！ eslint:recommended
    "no-cond-assign": "error",
    // ネイティブオブジェクトを拡張しないでー！
    "no-extend-native": "error",
    // プリミティブラッパーインスタンスしないでー！
    "no-new-wrappers": "error",
    // 正規表現で空の文字クラスを作らないでー！
    "no-empty-character-class": "error",
    // catch した例外を再割り当てしないでー！
    "no-ex-assign": "error",
    // -0 と比較しないでー！
    "no-compare-neg-zero": "error",
    // debugger 使わないでー！
    "no-debugger": "error",

    // 未使用の変数をほっぽかさないでー！
    "no-unused-vars": "error",
    // throw 出来るものを制限するよ
    "no-throw-literal": "error",
    // Getter は値返してー！
    "getter-return": "error",
    // Setter は値返さないでー！
    "no-setter-return": "error",
    // プロパティはドット表記で取得してー！
    "dot-notation": "error",
    // "=="/"!=" は曖昧だから使わないでー！
    "eqeqeq": "error",
    // alert, confirm, prompt を使わないでー！
    "no-alert": "error",
    // 浮動小数点は分かりにくいから使わないでー！
    "no-floating-decimal": "error",
    // 暗黙の型変換しないでー！
    "no-implicit-coercion": "error",
    // 自己比較しないでー！
    "no-self-compare": "error",
    // 条件分に定数を使わないでー！
    "no-constant-condition": "error",
    // .call(), .apply() を使わないでー！
    "no-useless-call": "error",
    // 無意味なリテラル連結しないでー！
    "no-useless-concat": "error",
    // case が重複してるよー！
    "no-duplicate-case": "error",
    // 配列に空のスロットを含まないでー！
    "no-sparse-arrays": "error",
    // 到達不可能なコードがあるよー！
    "no-unreachable": "error",
    // 単純な条件式に三項演算を使わないでー！
    "no-unneeded-ternary": "error",
    // 無限ループこわぃ ><
    "for-direction": "error",
    // ループ内での await はパフォーマンス悪いからやめたほうがいいよー！
    "no-await-in-loop": "error",
    // 引数の名前を重複させないでー！
    "no-dupe-args": "error",
    // 同じ条件を重複させないでー！
    "no-dupe-else-if": "error",
    "no-duplicate-case": "error",
    // オブジェクトのキーを重複させないでー！
    "no-dupe-keys": "error",
    // 無意味なブールキャストしないでー！
    "no-extra-boolean-cast": "error",
    // function を上書きしないでー！
    "no-func-assign": "error",
    // インポートしたものを上書きしないでー！
    "no-import-assign": "error",
    // 正規表現でスペースを複数使わないでー！
    "no-regex-spaces": "error",
    // 分かりづらい否定文書かないでー！
    "no-unsafe-negation": "error",
    // isNaN() 使ってー！
    "use-isnan": "error",

    // インデントは 2 だよー！
    "indent": ["error", 2],
    // セミコロン入れてねー！
    "semi": "error",
    // 変なスペース入れないでー！ eslint:recommended
    "no-irregular-whitespace": "error",
    // 混乱する複数行式を書かないでー！ eslint:recommended
    "no-unexpected-multiline": "error",
    // ダブル クオート使ってー！
    "quotes": "error",
    // 演算子の前後にスペースを入れてー！
    "space-infix-ops": "error",
    // 余計なスペースを入れないでー！
    "no-multi-spaces": "error",
    // 単項演算子の前後にスペースを入れてー！
    "space-unary-ops": "error",
    // arrow function の => 前後にスペース入れてー！
    "arrow-spacing": "error",
    // キーワードの前後にスペース入れてー！
    "keyword-spacing": "error",
    // () 前後にスペースを入れないでー！
    "space-in-parens": "error",
    // 改行するならプロパティの前にドットを置いてー！
    "dot-location": ["error", "property"],
    // テンプレートリテラル使ってー！
    "prefer-template": "error",
    // 文字列を複数行にしたいならテンプレートリテラル使ってー！
    "no-multi-str": "error",
    // yoda はダメだよーだ
    "yoda": ["error", "never", { "exceptRange": true }],
    // 無駄なセミコロンを付けないでー！
    "no-extra-semi": "error",

    // 空の関数あるけどいいのー？
    "no-empty": "warn",
    // return あるなら値を返してあげてー？
    "consistent-return": "warn",
    // parseInt() の基数は省略しないほうがいいんじゃないかなー？
    "radix": "warn",
    // 不要な () ありますよー？
    "no-extra-parens": "warn"
  }

};

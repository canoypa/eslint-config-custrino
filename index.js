module.exports = {
  rules: {
    // エラーのもと 早期根絶
    "no-global-assign": "error", // グローバルオブジェクトを上書きしないでー！
    "no-extend-native": "error", // ネイティブオブジェクトを拡張しないでー！
    "no-obj-calls": "error", // グローバルオブジェクトを呼び出すなー！
    "no-new-symbol": "error", // new Symbol() しないでー！
    "no-sparse-arrays": "error", // 配列に空のスロットを含まないでー！
    "no-irregular-whitespace": "error", // 変なスペース入れないでー！
    "no-compare-neg-zero": "error", // -0 と比較しないでー！
    "no-empty-character-class": "error", // 正規表現で空の文字クラスを作らないでー！
    "no-empty-pattern": "error", // エラー！わかんないけど！！
    "no-func-assign": "error", // function を上書きしないでー！
    "no-class-assign": "error", // クラス変数を書き換えないでー！
    "no-import-assign": "error", // インポートしたものを上書きしないでー！
    "no-ex-assign": "error", // catch した例外を再割り当てしないでー！
    "constructor-super": "error", // 無効な super しないでー！
    eqeqeq: "error", // "=="/"!=" は曖昧だから使わないでー！

    // 不適切なコード 良くないのだ
    "no-cond-assign": "error", // 条件分で代入しないでー！
    "no-useless-call": "error", // .call(), .apply() を使わないでー！
    "no-new-wrappers": "error", // プリミティブラッパーインスタンスしないでー！
    "no-dupe-args": "error", // 引数の名前を重複させないでー！
    "no-dupe-else-if": "error", // 同じ条件を重複させないでー！
    "no-duplicate-case": "error",
    "no-dupe-keys": "error", // オブジェクトのキーを重複させないでー！
    "no-implicit-coercion": "error", // 暗黙の型変換しないでー！
    "no-extra-boolean-cast": "error", // 無意味なブールキャストしないでー！
    "no-self-compare": "error", // 自己比較しないでー！
    "no-constant-condition": "error", // 条件分に定数を使わないでー！
    "accessor-pairs": "error", // getter/setter のペアを強制する
    "getter-return": "error", // Getter は値返してー！
    "no-setter-return": "error", // Setter は値返さないでー！
    "no-var": "error", // var 使わないでー！
    "prefer-rest-params": "error", // arguments 使わないでー！
    "no-with": "error", // with 使わないでー！
    "no-alert": "error", // alert, confirm, prompt を使わないでー！
    "no-debugger": "error", // debugger 使わないでー！
    "for-direction": "error", // 無限ループこわぃ ><

    // 改善 より良くするのだ
    "prefer-spread": "error", // .apply() じゃなくてスプレッド構文使ってー！
    "require-await": "error", // async 関数なのに await 使ってないよー？
    "require-yield": "error", // ジェネレータ関数では yield 使ってー！
    "no-await-in-loop": "error", // ループ内での await はパフォーマンス悪いからやめたほうがいいよー！
    "use-isnan": "error", // isNaN() 使ってー！
    "array-callback-return": "error", // 配列メソッドのコールバック関数は値返してー！
    "prefer-const": "warn", // 一回しか呼ばれてないよ！ const にしない？
    "no-unsafe-negation": "error", // 分かりづらい否定文書かないでー！
    "no-floating-decimal": "error", // 浮動小数点は分かりにくいから使わないでー！
    "no-unneeded-ternary": "error", // 単純な条件式に三項演算を使わないでー！
    "no-regex-spaces": "error", // 正規表現でスペースを複数使わないでー！
    "no-throw-literal": "error", // throw 出来るものを制限するよ
    "no-constructor-return": "error", // コンストラクタで値を返さないでー！
    "default-param-last": "warn", // デフォルト引数は最後にしよー！
    "grouped-accessor-pairs": "error", // getter/setter はグループ化してー！
    "no-useless-escape": "error", // 不要なエスケープ使わないでー！
    "no-self-assign": "error", // 自己割当しないでー！
    "no-sequences": "error", // コンマ演算子を使わいでー！
    "no-use-before-define": "error", // 宣言前に使わないでー！
    "no-shadow": "warn", // 外部スコープと同名の変数を作らないでー！
    "no-array-constructor": "error", // Array コンストラクタはサイズ指定のときだけ使ってー！
    "no-lonely-if": "error", // else 内に単体 if を書かないでー！
    "no-negated-condition": "error", // 否定条件で分かりづらくしないでー！
    "no-duplicate-imports": "warn", // 同じモジュールからインポートしてますよー？
    "no-useless-rename": "error", // インポートを同名に割り当てないでー！
    "no-path-concat": "error", // __dirnameand __filename の連結をしないでー！
    "@typescript-eslint/adjacent-overload-signatures": "error", // メンバーのオーバーロードはグループ化してー！
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }], // 配列の型は場合に応じて使い分けてー！

    // スタイル わたしいろ
    "no-tabs": "error", // tab を使わないでー！
    indent: ["error", 2, { SwitchCase: 1 }], // インデントは 2 だよー！
    quotes: "error", // ダブル クオート使ってー！
    semi: "error", // セミコロン入れてねー！
    "dot-notation": "error", // プロパティはドット表記で取得してー！
    "no-unexpected-multiline": "error", // 混乱する複数行式を書かないでー！
    "space-unary-ops": "error", // 余計なスペースを入れないでー！
    "no-multi-spaces": "error", // 演算子の前後にスペースを入れてー！
    "arrow-spacing": "error", // 単項演算子の前後にスペースを入れてー！
    "keyword-spacing": "error", // キーワードの前後にスペース入れてー！
    "space-in-parens": "error", // () 前後にスペースを入れないでー！
    "space-infix-ops": "error", // 関数と()の間にスペースを入れないでー！
    "space-before-function-paren": ["error", "never"], // 関数の () の前にスペースを入れないでねー！
    "block-spacing": "error", // ブロックの最初にはスペース入れてー！
    "comma-spacing": "error", // カンマの後にスペース入れてー！
    "func-call-spacing": "error", // arrow function の => 前後にスペース入れてー！
    "key-spacing": "error", // コロン前後のスペース！
    "no-trailing-spaces": "error", // 末端にスペースがありますよー！
    "no-whitespace-before-property": "error", // プロパティ前のスペースやめてー！
    "object-curly-spacing": ["error", "always"], // {} の後にスペース入れてー！
    "space-before-blocks": "error", // ブロックの前にスペースを入れてねー！
    "spaced-comment": "error", // コメントは // の後にスペースを入れてねー！
    "switch-colon-spacing": "error", // swich のコロン前後のスペース！
    "rest-spread-spacing": ["error", "never"], // スプレッド演算子と変数の間にスペースを入れないでー！
    "dot-location": ["error", "property"], // 改行するならプロパティの前にドットを置いてー！
    "prefer-template": "error", // テンプレートリテラル使ってー！
    "no-multi-str": "error", // 文字列を複数行にしたいならテンプレートリテラル使ってー！
    yoda: ["error", "never", { exceptRange: true }], // yoda はダメだよーだ
    "no-extra-semi": "error", // 無駄なセミコロンを付けないでー！
    "array-bracket-spacing": ["error", "never"], // 配列の最初にスペースを入れないでー！
    "brace-style": ["error", "1tbs"], // 改行は 1tbs スタイルにしてー！
    "comma-style": "error", // コンマは改行前に入れてー！
    "implicit-arrow-linebreak": "error", // ブロックじゃないアロー関数で改行しないでー！
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }], // クラスメンバー間に改行を入れてー！
    "new-cap": ["error", { properties: false }], // コンストラクタは大文字で始めてー！
    "new-parens": "error", // コンストラクタには必ず () を付けてー！
    "line-comment-position": "error", // コメントはコードの上に書いてー！
    "semi-style": "error", // セミコロンを行頭に置かないでねー！
    "nonblock-statement-body-position": "error", // 単一ステートメントは一行で！
    "prefer-arrow-callback": "error", // コールバック関数にはアロー関数を使ってー！
    "arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: true }], // 省略できるアロー関数は省略してー！

    // 注意 エラーにはならないけど
    "consistent-return": "warn", // return あるなら値を返してあげてー？
    radix: "warn", // parseInt() の基数は省略しないほうがいいんじゃないかなー？
    "no-extra-parens": "warn", // 不要な () ありますよー？
    "no-empty": "warn", // 空の関数あるけどいいのー？
    "no-empty-function": "warn" // 空の function 作らないでー！

    // 待機 使いたいけど使えない

    // ES2018 -> 正規表現で名前付きグループが使えるようになるよ
    // TypeScript が未対応
    // "prefer-named-capture-group": "warn",

    // ジェネレータ関数は function* ！
    // pritter と重複
    // "generator-star-spacing": ["error", { before: false, after: true }],
    // "yield-star-spacing": ["error", "after"],
  }
};

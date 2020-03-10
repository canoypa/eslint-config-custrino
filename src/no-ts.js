module.exports = {
  rules: {
    // エラーそのもの
    "no-global-assign": "error", // グローバルオブジェクトを上書きしないでー！
    "no-extend-native": "error", // ネイティブオブジェクトを拡張しないでー！
    "no-func-assign": "error", // function を上書きしないでー！
    "no-class-assign": "error", // クラス変数を書き換えないでー！
    "no-import-assign": "error", // インポートしたものを上書きしないでー！
    "no-ex-assign": "error", // catch した例外を再割り当てしないでー！
    "constructor-super": "error", // 無効な super しないでー！
    "no-compare-neg-zero": "error", // -0 と比較しないでー！
    "no-empty-character-class": "error", // 正規表現で空の文字クラスを作らないでー！
    "no-irregular-whitespace": "error", // よく分かんない空白文字を入れないでー！
    "no-new-symbol": "error", // new Symbol() しないでー！
    "no-obj-calls": "error", // グローバルオブジェクトを呼び出すなー！
    "no-unmodified-loop-condition": "error", // while の条件が不変だよ！

    // エラーの元
    "no-var": "error", // var 使わないでー！
    "no-sparse-arrays": "error", // 配列に空のスロットを含まないでー！
    eqeqeq: "error", // "=="/"!=" は曖昧だから使わないでー！
    "no-empty-pattern": "error", // エラー！わかんないけど！！
    "no-cond-assign": "error", // 条件分で代入しないでー！
    "no-useless-call": "error", // .call(), .apply() は通常の関数呼び出しに置き換えてー！
    "prefer-spread": "error", // .apply() じゃなくてスプレッド構文使ってー！
    "no-new-wrappers": "error", // プリミティブラッパーインスタンスしないでー！
    "no-dupe-args": "error", // 引数の名前を重複させないでー！
    "no-dupe-else-if": "error", // 同じ条件を重複させないでー！
    "no-duplicate-case": "error",
    "no-dupe-keys": "error", // オブジェクトのキーを重複させないでー！
    "no-implicit-coercion": "error", // 暗黙の型変換しないでー！
    "no-extra-boolean-cast": "error", // 無意味なブールキャストしないでー！
    "no-self-compare": "error", // 自己比較しないでー！
    "no-constant-condition": "error", // 条件分に定数を使わないでー！
    "accessor-pairs": ["error", { enforceForClassMembers: true }], // getter/setter のペアを強制する
    "getter-return": "error", // Getter は値返してー！
    "no-setter-return": "error", // Setter は値返さないでー！
    "prefer-rest-params": "error", // arguments 使わないでー！
    "no-with": "error", // with 使わないでー！
    "no-alert": "error", // alert, confirm, prompt を使わないでー！
    "no-debugger": "error", // debugger 使わないでー！
    "for-direction": "error", // for ループの条件分の形を強制する

    // 著しく可読性を損なったり損なわなかったりするもの
    "no-unexpected-multiline": "error", // 混乱する複数行式を書かないでー！
    "space-unary-ops": "error", // foo ++; <- みたいなのはやめてー！
    "prefer-template": "error", // テンプレートリテラル使ってー！
    "no-multi-str": "error", // 文字列を複数行にしたいならテンプレートリテラル使ってー！
    "use-isnan": "error", // isNaN() 使ってー！
    "no-constructor-return": "error", // コンストラクタで値を返さないでー！
    "no-self-assign": "error", // 自己割当しないでー！
    "no-use-before-define": "error", // 宣言前に使わないでー！
    "no-useless-escape": "error", // 不要なエスケープ使わないでー！
    "dot-notation": "error", // プロパティはドット表記で取得してー！
    "dot-location": ["error", "property"], // 改行するならプロパティの前にドットを置いてー！
    "no-whitespace-before-property": "error", // プロパティ取得の . 前後にスペース入れないでー！
    "rest-spread-spacing": ["error", "never"], // スプレッド演算子と変数の間にスペースを入れないでー！
    yoda: ["error", "never", { exceptRange: true }], // "red" === color とかやめてー！
    "no-extra-semi": "error", // 無駄なセミコロンを付けないでー！
    "brace-style": ["error", "1tbs"], // 改行は 1tbs スタイルにしてー！
    "comma-style": "error", // コンマは改行前に入れてー！
    "implicit-arrow-linebreak": "error", // ブロックじゃないアロー関数で改行しないでー！
    "semi-style": "error", // セミコロンを行頭に置かないでねー！
    "nonblock-statement-body-position": "error", // 単一ステートメントは一行で！
    "prefer-arrow-callback": "error", // コールバック関数にはアロー関数を使ってー！
    "arrow-body-style": ["error", "as-needed"], // 省略できるアロー関数は省略してー！
    "no-negated-condition": "error", // 否定条件で分かりづらくしないでー！
    "no-useless-rename": "error", // インポートを同名に割り当てないでー！
    "no-array-constructor": "error", // Array コンストラクタを使わないでー！
    "require-await": "error", // async 関数では await 使ってー！
    "require-yield": "error", // ジェネレータ関数では yield 使ってー！
    "no-await-in-loop": "error", // ループ内での await はパフォーマンス悪いからやめたほうがいいよー！
    "array-callback-return": "error", // 配列メソッドのコールバック関数は値返してー！
    "no-unsafe-negation": "error", // 分かりづらい否定文書かないでー！
    "no-floating-decimal": "error", // 浮動小数点は分かりにくいから使わないでー！
    "no-unneeded-ternary": "error", // 単純な条件式に三項演算を使わないでー！
    "no-regex-spaces": "error", // 正規表現でスペースを複数使わないでー！
    "no-throw-literal": "error", // throw 出来るものを制限するよ
    "grouped-accessor-pairs": "error", // getter/setter はグループ化してー！
    "no-sequences": "error", // コンマ演算子を使わいでー！
    "no-shadow": "error", // 外部スコープと同名の変数を作らないでー！
    "default-param-last": "error", // デフォルト引数は最後にしよー！
    "space-before-function-paren": ["error", "never"], // 関数の () の前にスペースを入れないでねー！
    "func-call-spacing": "error", // 関数呼び出しの () 前にスペース入れないでー！
    "new-parens": "error", // コンストラクタには必ず () を付けてー！
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }], // クラスメンバー間に改行を入れてー！
    "new-cap": ["error", { properties: false }], // コンストラクタ名は大文字で始めてー！
    "no-confusing-arrow": "error", // 比較と勘違いしそうな array function は括弧で囲ってね！

    // 可読性に著しく影響を与えるほどではないけど
    "no-tabs": "warn", // tab を使わないでー！
    indent: ["warn", 2, { SwitchCase: 1 }], // インデントは 2 だよー！
    quotes: "warn", // ダブル クオート使ってー！
    semi: "warn", // セミコロン入れてねー！
    "no-multi-spaces": "warn", // 余計なスペース入れないでー！
    "arrow-spacing": "warn", // アロー関数の => の前後にスペース入れてー！
    "keyword-spacing": "warn", // キーワードの前後にスペース入れてー！
    "space-in-parens": "warn", // () 内にスペースを入れないでー！
    "space-infix-ops": "warn", // 演算子の前後にスペースを入れてー！
    "block-spacing": "warn", // ブロックの最初にはスペース入れてー！
    "comma-spacing": "warn", // カンマの後にスペース入れてー！
    "key-spacing": "warn", // コロン前後のスペース！
    "no-trailing-spaces": "warn", // 末端にスペースがありますよー！
    "object-curly-spacing": ["warn", "always"], // {} の後にスペース入れてー！
    "space-before-blocks": "warn", // ブロックの前にスペースを入れてねー！
    "spaced-comment": "warn", // コメントは // の後にスペースを入れてねー！
    "switch-colon-spacing": "warn", // swich のコロン前後のスペース！
    "array-bracket-spacing": ["warn", "never"], // 配列内にスペースを入れないでー！
    "no-duplicate-imports": "warn", // 同じモジュールからのインポートはまとめてー！
    "no-lonely-if": "warn", // else 内に単体 if を書かないでー！
    "consistent-return": "warn", // return あるなら値を返してー！
    radix: "warn", // parseInt() の基数は省略しないでー！
    "no-extra-parens": ["warn", "all", { enforceForArrowConditionals: false, ignoreJSX: "multi-line" }], // 不要な () ！
    "no-empty": "warn", // 空のブロック作らないでー！
    "no-empty-function": "warn", // 空の function 作らないでー！
    "prefer-const": "warn", // const に出来るよー！
    "operator-assignment": "warn", // 出来るだけ演算子を省略してね！
    "operator-linebreak": ["warn", "before"], // オペレータの前で改行してね！
    "prefer-exponentiation-operator": "warn", // Math.pow の代わりに ** が使えるよ！

    // Node.js
    "no-path-concat": "error" // __dirnameand __filename の連結をしないでー！

    // 待機 使いたいけど使えない

    // TypeScript が未対応?
    // "prefer-named-capture-group": "warn", // グループに名前付けてー！

    // pritter と重複?
    // "generator-star-spacing": ["warn"", "after"], // ジェネレータ関数 * の後ろにスペース入れてー！
    // "yield-star-spacing": ["warn"", "after"], // yield* の後ろにスペース入れてー！
  }
};
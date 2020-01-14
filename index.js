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
    eqeqeq: "error",
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
    indent: ["error", 2, { SwitchCase: 1 }],
    // セミコロン入れてねー！
    semi: "error",
    // 変なスペース入れないでー！ eslint:recommended
    "no-irregular-whitespace": "error",
    // 混乱する複数行式を書かないでー！ eslint:recommended
    "no-unexpected-multiline": "error",
    // ダブル クオート使ってー！
    quotes: "error",
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
    yoda: ["error", "never", { exceptRange: true }],
    // 無駄なセミコロンを付けないでー！
    "no-extra-semi": "error",

    // 空の関数あるけどいいのー？
    "no-empty": "warn",
    // return あるなら値を返してあげてー？
    "consistent-return": "warn",
    // parseInt() の基数は省略しないほうがいいんじゃないかなー？
    radix: "warn",
    // 不要な () ありますよー？
    "no-extra-parens": "warn",

    // getter/setter のペアを強制する
    "accessor-pairs": "error",
    // 配列メソッドのコールバック関数は値返してー！
    "array-callback-return": "error",
    // クラスメソッドでは this 使ってー！
    "class-methods-use-this": "error",
    // デフォルト引数は最後にしよー！
    "default-param-last": "warn",
    // getter/setter はグループ化してー！
    "grouped-accessor-pairs": "error",
    // コンストラクタで値を返さないでー！
    "no-constructor-return": "error",
    // 空の function 作らないでー！
    "no-empty-function": "error",
    // エラー！わかんないけど！！
    "no-empty-pattern": "error",
    // グローバルオブジェクトを上書きしないでー！
    "no-global-assign": "error",
    // 自己割当しないでー！
    "no-self-assign": "error",
    // コンマ演算子を使わいでー！
    "no-sequences": "error",
    // 不要なエスケープ使わないでー！
    "no-useless-escape": "error",
    // ES2018 -> 正規表現で名前付きグループが使えるようになるよ
    // "prefer-named-capture-group": "warn",
    // async 関数なのに await 使ってないよー？
    "require-await": "error",
    // 宣言前に使わないでー！
    "no-use-before-define": "error",
    // 外部スコープと同名の変数を作らないでー！
    "no-shadow": "warn",
    // __dirnameand __filename の連結をしないでー！
    "no-path-concat": "error",
    // 配列の最初に改行しないでー！
    "array-bracket-newline": ["error", "never"],
    // 配列の最初にスペースを入れないでー！
    "array-bracket-spacing": ["error", "never"],
    // ブロックの最初にはスペース入れてー！
    "block-spacing": "error",
    // 改行は 1tbs スタイルにしてー！
    "brace-style": ["error", "1tbs"],
    // カンマの後にスペース入れてー！
    "comma-spacing": "error",
    // コンマは改行前に入れてー！
    "comma-style": "error",
    // 関数と()の間にスペースを入れないでー！
    "func-call-spacing": "error",
    // ブロックじゃないアロー関数で改行しないでー！
    "implicit-arrow-linebreak": "error",
    // コロン前後のスペース！
    "key-spacing": "error",
    // クラスメンバー間に改行を入れてー！
    "lines-between-class-members": "error",
    // コンストラクタは大文字で始めてー！
    "new-cap": ["error", { properties: false }],
    // コンストラクタには必ず () を付けてー！
    "new-parens": "error",
    // Array コンストラクタはサイズ指定のときだけ使ってー！
    "no-array-constructor": "error",
    // else 内に単体 if を書かないでー！
    "no-lonely-if": "error",
    // コメントはコードの上に書いてー！
    "line-comment-position": "error",
    // コメントの前にはスペース入れてー！
    "lines-around-comment": ["error", { beforeLineComment: true, allowBlockStart: true, allowObjectStart: true, allowArrayStart: true }],
    // 否定条件で分かりづらくしないでー！
    "no-negated-condition": "error",
    // tab を使わないでー！
    "no-tabs": "error",
    // 末端にスペースがありますよー！
    "no-trailing-spaces": "warn",
    // プロパティ前のスペースやめてー！
    "no-whitespace-before-property": "error",
    // 単一ステートメントは一行で！
    "nonblock-statement-body-position": "error",
    // {} の後にスペース入れてー！
    "object-curly-spacing": ["error", "always"],
    // セミコロンを行頭に置かないでねー！
    "semi-style": "error",
    // ブロックの前にスペースを入れてねー！
    "space-before-blocks": "error",
    // 関数の () の前にスペースを入れないでねー！
    "space-before-function-paren": ["error", "never"],
    // コメントは // の後にスペースを入れてねー！
    "spaced-comment": "error",
    // swich のコロン前後のスペース！
    "switch-colon-spacing": "error",
    // 省略できるアロー関数は省略してー！
    "arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: true }],
    // 無効な super しないでー！
    "constructor-super": "error",
    // ジェネレータ関数は function* ！
    // pritter と重複
    // "generator-star-spacing": ["error", { before: false, after: true }],
    // "yield-star-spacing": ["error", "after"],
    // クラス変数を書き換えないでー！
    "no-class-assign": "error",
    // 同じモジュールからインポートしてますよー？
    "no-duplicate-imports": "warn",
    // new Symbol() しないでー！
    "no-new-symbol": "error",
    // インポートを同名に割り当てないでー！
    "no-useless-rename": "error",
    // コールバック関数にはアロー関数を使ってー！
    "prefer-arrow-callback": "error",
    // 一回しか呼ばれてないよ！ const にしない？
    "prefer-const": "warn",
    // .apply() じゃなくてスプレッド構文使ってー！
    "prefer-spread": "error",
    // ジェネレータ関数では yield 使ってー！
    "require-yield": "error",
    // スプレッド演算子と変数の間にスペースを入れないでー！
    "rest-spread-spacing": ["error", "never"],
    // arguments 使わないでー！
    "prefer-rest-params": "error"
  }
};

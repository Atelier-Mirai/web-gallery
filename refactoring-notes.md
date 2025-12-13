web-gallery/sample/を参照してください。
1/から12/までのサンプルサイトが用意されています。
このうち 8/と12/のリファクタリングは失敗しています。
web-gallery-org/sample/8
web-gallery-org/sample/12
を参考にして、もう一度、リファクタリングしてください。

### 1. 全般的な方針
* 古いので、html, css, javascriptをモダンな形でリファクタリングしてください。

### 2. CSSについて
* nested css, range query, 論理プロパティ、rgb(rr gg bb / aa%)などモダンな記法を用いてください。
* nested css は、古い記法では body { & h1 { color: red; } } と書く必要がありましたが、現在の仕様では、body h1 { color: red; } と書くことができます。不要な & は用いないようにしてください。
* 色については、`_wa-no-iro.css` から 似ている色を探して、root変数として定義してください。
* reset.cssも古いので、css layer を用いて、`@import url('https://cdn.jsdelivr.net/npm/@acab/reset.css@0.11.0/index.min.css') layer(reset);` で置き換えてください。
* 基本的に一つの巨大なcssファイルが用いられていますが、機能ごと、部品ごとに分割し、`studio-wave/stylesheets/master.css`のように、各部品cssをimportするようにしてください。(css layerを用いて綺麗に整理して下さい)
* 古いCSSなので、ベンダープリフィックスが付いていますが、基本的に不要なので外してください。（ここ１，２年のモダンブラウザのみ対応していればOKです）
* `z-index: 9999999;` などという記法も見られますが、popover属性などモダンな機能を用いてください。
* `display: flex` ではなく (極力) `display: grid` で実装してください。
* 元のコードは `position: absolute`, `position: relative` を多用しています。細かい装飾については`position`プロパティを用いても良いですが、レイアウト調整などの目的には、(極力) `display: grid` で実装してください。

### 3. JavaScriptについて
* jQueryを前提として書かれていますが、バニラJSで書き直してください。
* vegasについては `studio-wave/javascripts/hero-slideshow.js` を（少し改良する形で）実装可能かと思います。

### 4. クラス名、IDについて
* cssのクラス名、IDはケバブケースを使ってください。
* jsの変数名はキャメルケースを使ってください。
* 例：`$("#page-top").addClass("UpMove")`など、UpMoveクラスを付与する処理が行なわれています。そもそもこのUpMoveクラスという命名自体が美しくないです。他に適切な名は体を表すクラス名にしてください。（もちろん、UpMove のような、パスカルケースではなく `.up-move` クラスを付与するようにしてください。）

### 5. コメントについて
* 適宜コメントを付与してください。（既存のコメントは破棄してもOKです。適切なコメントを付与してください。）

### 6. 画像について
* `img/` ディレクトリは、`images/` ディレクトリにリネームしてください。
* 画像ファイル名もケバブケースを用いるように、リネームしてください。
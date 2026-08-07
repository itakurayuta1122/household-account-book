# React + TypeScript + Next.js

## 公開URL
https://itakurayuta1122.github.io/household-account-book/

## プロジェクトの目的
このプロジェクトは、家計簿アプリケーションの開発を通じて、React、TypeScript、およびNext.js (App Router) の基本的な概念（コンポーネント設計、状態管理、propsの受け渡し、useEffectによる副作用管理、localStorageによるデータ永続化など）を学習・実践するために作成された練習用アプリケーションです。

## 評価基準
- 1: 用語を聞いたことがない、または全く分からない
- 2: 概念は理解したが、自分でコードを書くのは難しい
- 3: 基本的な使い方が分かり、参考資料を見ながら実装できる
- 4: 独力で実装でき、簡単なトラブルシューティングも可能
- 5: 他人に教えることができ、高度な最適化や設計も意識できる

## 学習項目
- [2] JSXとComponentの基本
- [2] Propsによるコンポーネント間のデータ受け渡し
- [2] TypeScriptのinterface定義
- [2] useStateによる状態管理
- [2] useEffectによる副作用の制御（ライフサイクル）
- [2] localStorageを用いたデータの永続化
- [2] map() を用いたリストレンダリング
- [2] filter() を用いたデータ削除処理
- [2] reduce() を用いたデータ集計
- [2] コンポーネント分割と再利用性
- [1] Hydrationミスマッチの解決策
- [2] TailwindCSSによるスタイリング
- [1] Next.jsのApp Routerにおけるルーティングと描画の仕組み

## 質問と回答（Q&A）

ここでは、開発中に疑問に思ったことや重要な学びをQ&A形式でまとめています。

### Q: `export default function Home()` は自動で実行される関数ですか？
A: はい。Next.js (App Router) では、`app/page.tsx` で `export default` された関数は、そのパス（ルートURL `/`）へユーザーがアクセスした際、Next.jsによって自動的に呼び出され、UIとして描画（レンダリング）されます。

### Q: `useState<Transaction[]>(() => { ... })` の `() =>` は何をしていますか？
A: 「遅延初期化（Lazy Initialization）」と呼ばれる手法です。Stateの初期値を決めるための関数を渡しており、コンポーネントの初回レンダリング時のみ実行されます。これにより、毎回無駄に `localStorage` へアクセスするのを防いでいます。

### Q: `if (typeof window !== 'undefined')` の意味は？
A: 現在の環境が「ブラウザであるか」を確認する安全策です。Next.jsはサーバーサイドでも実行されるため、ブラウザ専用の `localStorage` などにサーバーで直接アクセスするとエラーになります。`typeof window` を使うことで、安全に判定しています。

### Q: `localStorage.getItem('transactions')` で何を取得していますか？
A: `localStorage` にキー `'transactions'` で保存されているデータを「文字列」として取得しています。`localStorage` は値を文字列としてしか保存できないためです。

### Q: `return JSON.parse(stored)` は何をしていますか？
A: `localStorage` から取得した「JSON形式の文字列」を、JavaScriptで扱える「配列（オブジェクト）」の形に変換（パース）しています。これでReactのStateとして扱えるようになります。

### Q: `useEffect` が自動で動く仕組みは？
A: `useEffect` は React コンポーネントのライフサイクルと同期しており、第2引数の「依存配列（`[transactions]`）」が変化したタイミングで React が自動的に中身の関数を実行します。これにより、データ更新と `localStorage` への保存を自動的に同期できます。

### Q: フォームが未入力で出るメッセージはReactの機能ですか？
A: いいえ、ブラウザ（HTML5）の標準機能です。`<input required />` のように属性を設定すると、ブラウザが自動的にチェックしメッセージを表示します。

### Q: なぜ「Hydration failed」エラーが出たのですか？
A: サーバー側でレンダリングした内容（空の配列）と、クライアント側でレンダリングした内容（localStorageから読み込んだデータ）が一致しなかったためです。レンダリング直後にハイドレーション（DOMの結合）が行われる際、初期データの食い違いによって発生しました。`isLoaded` ステートを使って、データ読み込み完了までレンダリングを待つことで解決しました。

## 感想
Next.jsとViteの違いを学ぶことができた。
TailwindCSSの場合CSSを記載することが多いことを体感できた。
分割代入、propsの少し理解が進んだ。
コードを遡ったりできるようになり、さらに少し読めるようになったのは進歩。
バックエンドにpythonをいれるような研鑽もいれたいと思った。

## AIの環境

### 質問とコーディング
Gemini CLI→gemini-3.1-Flash-lite

# GitHub Pages Deployment Rules

GitHub Pagesに静的エクスポート（`output: "export"`）でNext.jsプロジェクトをデプロイする際は、以下のルールを遵守してください。

## 1. .nojekyll の配置
GitHub Pagesはデフォルトでアンダースコア（`_`）から始まるディレクトリを無視するため、Next.jsのアセット（`_next` フォルダ）が404エラーになります。
- `public/.nojekyll` ファイルを必ず配置し、Jekyllのビルド処理をスキップさせてください。
- **注意**: `gh-pages` コマンドを使用してデプロイする場合、デフォルトでは `.nojekyll` などのドットファイルが無視されます。必ず `gh-pages -d out -t`（`-t` または `--dotfiles` オプション）を使用して、ドットファイルも含めてデプロイするようにしてください。

## 2. ベースパス（basePath）の設定
GitHub Pagesではリポジトリ名がサブディレクトリとしてURLに含まれるため（例: `https://<user>.github.io/<repo-name>/`）、`next.config.ts` で適切な `basePath` を設定してください。
- 開発環境（`next dev`）でのアクセス性を保つため、本番ビルド時のみベースパスを適用することを推奨します。
  ```typescript
  const isProd = process.env.NODE_ENV === "production";
  const nextConfig: NextConfig = {
    output: "export",
    basePath: isProd ? "/household-account-book" : "",
  };
  ```

## 3. ローカル画像アセットの参照方法
`<Image>` コンポーネントに `"/next.svg"` のように文字列パスを直接渡すと、ビルド時に `basePath` が自動付与されない場合があります。
- ローカル画像を表示する際は、必ず画像を静的インポート（例: `import logo from "../public/logo.png"`）し、`<Image src={logo} />` のようにオブジェクトとして渡してください。Next.jsがビルド時に自動的に `basePath` を付与した正しいパスに解決します。

# 家計簿アプリ 開発ルール（設計書・学習TODOに基づく）

このプロジェクトは、React + TypeScript + Next.js (App Router) を用いた学習用のシンプルな家計簿アプリ開発プロジェクトです。開発の際は以下の設計ルールおよびTODOリストのステップを遵守してください。

## 1. アプリケーション設計と基本方針
- **構成**: 家計簿一覧画面（1画面構成）のシンプルなアプリケーションです。
- **データ永続化**: 外部データベースは使用せず、`LocalStorage`（ブラウザのローカルストレージ）を用いた保存・読込処理のみで実装します。
- **UIライブラリ**: TailwindCSS を使用してスタイリングを行います。

## 2. 厳格なデータ型（Transaction）の遵守
収支データ（トランザクション）を扱う型定義には、必ず以下の `Transaction` インターフェースを使用してください。
```typescript
export interface Transaction {
  id: number;
  date: string;
  type: 'income' | 'expense';
  category: string;
  title: string;
  amount: number;
}
```

## 3. コンポーネント設計とPropsの流れ
コンポーネントの作成やリファクタリングを行う際は、設計書に従って以下の構造を守り、データ（State）を適切に受け渡してください。
- `page.tsx` (メインページ。ここで `transactions` などのメインStateを管理する)
  - `TransactionForm`: 収支データの入力フォーム
  - `TransactionList`: 一覧エリア
    - `TransactionItem`: 一覧内の各データ行（1件分の表示）
  - `Summary`: 収入・支出・全体の収支を表示する集計エリア

## 4. 段階的な学習TODOリストの尊重
- このプロジェクトは段階的に機能を実装する「学習用」のプロジェクトです。
- 一度にすべての機能を盛り込むのではなく、 `docs/家計簿アプリ_学習TODOリスト.md` に記載されている「フェーズ（0〜10）およびステップ（1〜23）」の進行に合わせた実装を心がけてください。
- 余計な機能（認証、外部API連携など）を自己判断で追加しないようにしてください。



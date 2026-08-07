# 家計簿アプリ 学習TODOリスト

## フェーズ0 開発環境

### STEP 1 プロジェクト作成

**目的** - Next.jsプロジェクトを作成する

**学ぶこと** - create-next-app - App Router - ディレクトリ構成

**完了条件** - \[ \] アプリが起動する

------------------------------------------------------------------------

# フェーズ1 画面を表示する

### STEP 2 タイトル表示

**学ぶこと** - JSX - page.tsx

### STEP 3 レイアウト作成

**学ぶこと** - form - input - select - button - table

**完了条件** - [x] 入力フォーム表示 - [x] 一覧エリア表示 - [x]
集計エリア表示

------------------------------------------------------------------------

# フェーズ2 Component

### STEP 4 TransactionForm作成

-   入力フォームをComponent化

### STEP 5 TransactionList作成

-   一覧Component作成

### STEP 6 TransactionItem作成

-   1件表示Component作成

### STEP 7 Summary作成

-   集計表示Component作成

------------------------------------------------------------------------

# フェーズ3 TypeScript

### STEP 8 Transaction型作成

``` ts
interface Transaction{
 id:number;
 date:string;
 type:"income"|"expense";
 category:string;
 title:string;
 amount:number;
}
```

### STEP 9 ダミーデータ表示

-   配列
-   オブジェクト

------------------------------------------------------------------------

# フェーズ4 map / Props

### STEP 10 mapで一覧表示

-   map
-   key

### STEP 11 Propsで受け渡し

page → TransactionList → TransactionItem

------------------------------------------------------------------------

# フェーズ5 useState

### STEP 12 各入力欄をState化

-   date
-   type
-   category
-   title
-   amount

### STEP 13 一覧をState化

``` ts
const [transactions,setTransactions]=useState<Transaction[]>([])
```

------------------------------------------------------------------------

# フェーズ6 Event

### STEP 14 入力フォーム

-   onChange

### STEP 15 追加ボタン

-   onClick
-   setTransactions

------------------------------------------------------------------------

# フェーズ7 削除

### STEP 16 削除機能

-   filter()

------------------------------------------------------------------------

# フェーズ8 集計

### STEP 17 収入・支出・収支表示

-   reduce()

------------------------------------------------------------------------

# フェーズ9 useEffect

### STEP 18 LocalStorage保存

-   useEffect
-   localStorage.setItem()

### STEP 19 LocalStorage読込

-   useEffect
-   localStorage.getItem()

------------------------------------------------------------------------

# フェーズ10 リファクタリング

### STEP 20 typesフォルダ作成

### STEP 21 Props整理

### STEP 22 コード整理

### STEP 23 完成

-   全コードを読み返す

------------------------------------------------------------------------

# 最終確認

-   [ ] useEffectとは何か
-   [ ] LocalStorageを使う理由
-   [ ] mapとfilterの違い
-   [ ] reduceを使う理由
-   [ ] Propsの流れを説明できる
-   [ ] State管理を説明できる
-   [ ] データが page → TransactionList → TransactionItem と流れる理由

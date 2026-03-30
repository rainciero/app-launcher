# App Launcher

個人製作のWebアプリを一元管理するダッシュボード。
アプリ一覧はGoogleスプレッドシートで管理し、GitHub Pagesにデプロイ。

## ローカル起動

```bash
npm install
npm run dev
# → http://localhost:5173/app-launcher/ で確認
```

## アプリの追加方法

1. スプレッドシートを開く:
   https://docs.google.com/spreadsheets/d/1BOfAw18vXVRUstmMdvZN8Wb4ULbiSh0L8Rf16ec-2HU
2. `apps` シートに1行追加（name / url / category / description / emoji）
3. ダッシュボードをリロード → 自動で反映

## カテゴリの追加方法

スプレッドシートの category 列に新しい名前を書くだけで自動追加される。

## GitHub へのデプロイ

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/rainciero/app-launcher.git
git push -u origin main
```

push後:
1. GitHubの「Actions」タブで緑チェックを確認
2. Settings → Pages → Source を `gh-pages` ブランチに設定
3. `https://rainciero.github.io/app-launcher/` でアクセス可能

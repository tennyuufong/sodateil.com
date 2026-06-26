# 児童発達支援・放課後等デイサービス ホームページ

日本語の施設ホームページ用 Next.js アプリです。施設写真は `public/images/` に配置しています。

## ローカル確認

```bash
pnpm install
pnpm dev
```

ブラウザで `http://localhost:3000` を開いて確認します。

## 本番ビルド

```bash
pnpm build
pnpm start
```

## Vercel へのデプロイ

1. このリポジトリを Vercel に接続します。
2. Framework Preset は `Next.js` を選択します。
3. Install Command は `pnpm install`、Build Command は `pnpm build` を指定します。
4. Environment Variables に `NEXT_PUBLIC_SITE_URL` を追加し、公開する本番 URL を設定します。
5. デプロイ後、施設名・住所・電話番号・開所時間・問い合わせ先が本番内容になっているか確認します。

## 置き換えが必要な情報

- 施設名
- 住所
- 電話番号
- 開所時間
- 問い合わせ用メールアドレスまたはフォーム URL
- プライバシーポリシーのリンク先
- `NEXT_PUBLIC_SITE_URL` に設定する本番 URL

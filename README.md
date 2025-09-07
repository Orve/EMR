# 🎬 EMR — Emotion Movie Review

映画レビュー × 感情分析 × グラフ可視化  
**AIと感性をつなぐ、パーソナルレビューアプリ**

---

## ✅ プロジェクト概要

| 項目         | 内容                                                                 |
|--------------|----------------------------------------------------------------------|
| 🎯 目的       | 映画の感想文からAIが感情スコアを解析・数値化し、グラフで可視化            |
| 🧑‍💻 対象       | 映画好き／感情表現を深めたい人／AI活用に関心がある全ユーザー             |
| 💡 開発背景     | 感性・言語化・自己理解への探求から生まれた個人開発プロジェクト             |

---

## 📦 技術スタック

| 分類          | 使用技術                                     |
|---------------|----------------------------------------------|
| フロントエンド   | React 19 / TypeScript / Vite                 |
| UIデザイン     | Tailwind CSS                                 |
| 状態管理       | Zustand                                      |
| 感情分析API     | OpenAI GPT-3.5 Turbo                         |
| データベース     | Firebase Firestore（レビュー保存）           |
| テスト        | Vitest / React Testing Library               |
| CI/CD        | GitHub Actions（CI構築済）                   |
| 本番環境       | Vercel or Firebase Hosting（検討中）         |

---

## 🗂️ ディレクトリ構成
```
src/
├── assets/
├── components/
│ ├── EmotionChart.tsx
│ ├── EmotionForm.tsx
│ └── EmotionResult.tsx
├── features/
│ └── reviews/
│ ├── reviewSlice.ts
│ └── reviewService.ts
├── pages/
│ ├── Home.tsx
│ └── ReviewDetail.tsx
├── utils/
│ └── openai.ts
├── types/
│ └── review.ts
├── App.tsx
├── main.tsx
firebase.ts
.env
```

---

## 🚧 実装状況（2025-09-03）

- ✅ 感情スコアAPI連携（OpenAI）
- ✅ 入力フォームUI（テキスト入力／分析ボタン）
- ✅ グラフ表示（Recharts・色分け対応）
- ✅ Firestore保存機能
- ✅ CIパイプライン（GitHub Actions）
- ✅ テスト導入（Vitest）
- ⏳ 認証／レビュー履歴／デプロイ準備中…

---

## 🗓️ スプリント計画

| フェーズ     | 内容                                              |
|--------------|---------------------------------------------------|
| Sprint 1     | 感情分析 → Firestore保存までのベース機能完成            |
| Sprint 2     | UI整備・コンポーネント分離・Rechartsでのグラフ可視化     |
| Sprint 3（今）| Firebase Authによる認証機能／履歴管理／README整備・デプロイ |

---

## 💻 実行コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# テスト実行
npm run test

# ESLintチェック
npm run lint
```

## 🛠 今後の実装予定
 レーダーチャートによる感情スコアの可視化（Recharts）

 Firestoreにユーザー別のレビュー履歴を保存

 Zustandによる状態管理の統合（ユーザー／レビュー）

 Firebase Authの導入（匿名 or メール認証）

 VercelまたはFirebase Hostingへの本番デプロイ

 .envをGitHub SecretsでCI/CD連携

## 🌈 特徴と強み
🎨 Tailwind CSSでクリーンかつ感性的なデザイン構築

🤖 OpenAIによる高度な自然言語処理・感情分析

🔧 ZustandやViteを活用した高速でモダンな開発体験

📊 感情スコアを視覚化することで、自己理解や表現力の向上に寄与

🧠 "言語化された感情" を通じた新しい映画の楽しみ方を提案

## 🖼 スクリーンショット（任意）
※ UI完成後に掲載予定（Tailwind構成済み）

## 📝 ライセンス
MIT

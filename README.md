<<<<<<< HEAD
# EMR

# 🎬 映画レビュー × 感情分析アプリ（React + TypeScript 個人開発課題）

## ✅ プロジェクト概要

- **目的**：映画レビューを投稿すると、OpenAI API（GPT）で感情分析され、グラフで可視化される。
- **対象ユーザー**：映画好き・感情表現を言語化したい人・AI活用に興味がある人。
- **開発背景**：感性・感情・言語化に興味があり、自分の趣味嗜好に合う形でAIを活用したアプリを作る。

---

## 🧱 技術構成（使用技術）

| 分類         | 技術                            | 補足                                               |
|--------------|----------------------------------|----------------------------------------------------|
| フロントエンド | React + TypeScript              | 課題指定で必須                                     |
| UI            | Tailwind CSS                    | 使用経験あり     |
| 状態管理     | Zustand                         | 軽量・わかりやすく、Reactとの親和性◎               |
| 認証         | Firebase Auth                   | Googleログインなど簡単に導入可能                   |
| DB           | Firebase Firestore              | 柔軟なNoSQL構造・サーバー不要                      |
| AI連携       | OpenAI API（GPT-4 / 3.5）       | 感情分析・要約などに使用                           |
| デプロイ     | Vercel または Netlify           | GitHub連携・環境変数管理が簡単                     |

---

## 🖼️ 画面構成（予定）

- ホーム（映画一覧＋レビュー件数）
- 映画詳細／レビュー投稿ページ
- 感情分析結果ページ（グラフ表示）
- 自分の投稿履歴ページ
- 絞り込み検索／タグ機能（フェーズ2以降）

---

## 📁 ディレクトリ構成（仮）

```
src/
├── assets/
├── components/
│   └── MovieCard.tsx
│   └── ReviewForm.tsx
│   └── EmotionChart.tsx
├── features/
│   └── reviews/
│       ├── reviewSlice.ts (zustand)
│       └── reviewService.ts (firebase連携)
├── pages/
│   └── Home.tsx
│   └── ReviewDetail.tsx
├── utils/
│   └── openai.ts (GPT API処理)
├── types/
│   └── review.ts
├── App.tsx
├── main.tsx
firebase.ts
.env
=======
# Emotion Movie Review App（感情分析映画レビューツール）

## 🎯 プロジェクト概要
- 映画の感想文から感情をスコア化（喜び / 怒り / 悲しみ / 驚き / 恐れ）
- OpenAI API を活用し、ユーザーが入力したレビューに対して感情スコアを提示
- フロントは React + TypeScript + Tailwind CSS
- 将来的に Recharts による可視化、Firebase 保存、CI/CD パイプラインまで展開予定

---

## 📦 技術スタック
| 分類 | 使用技術 |
|------|----------|
| フロント | React 19 / TypeScript / Vite |
| スタイリング | Tailwind CSS |
| 状態管理 | Zustand |
| 感情分析API | OpenAI GPT-3.5 Turbo（Chat Completions）|
| CI/CD | GitHub Actions（予定）／CircleCI（一部試験済）|
| テスト | Vitest + React Testing Library + jsdom |
| その他 | Firebase（今後導入予定）|

---

## 🧱 開発構成・初期化
- `emotion-movie-review-app/` 直下にフロントアプリの全構成を整理
- `.env` に OpenAI API キーを設定
- Firebase は導入準備中（ファイル構成のみ反映）

```bash
VITE_OPENAI_API_KEY=your_key_here
```

- `vite.config.ts`, `tailwind.config.js`, `eslint.config.js`, `tsconfig.json` などもプロジェクトルートに配置
- `src/` 配下に各種コンポーネント、ユーティリティ、状態管理、テストなどを分離

---

## ✅ 現在の実装状況（2025-09-03）

- [x] 感情スコアAPI連携（OpenAI）
- [x] フォームUI作成（テキスト入力 / 分析ボタン / 結果表示）
- [x] 初期テストファイル作成（App.tsx → `感情分析テスト` が表示される）
- [x] Vitest動作確認 & `setupTests.ts` 設置
- [x] テストパス ✅
- [x] Vite + TypeScript + Tailwind構成でアプリ構築済
- [ ] Firebase 保存機能
- [ ] Recharts 可視化
- [ ] GitHub ActionsによるCIパイプライン
- [ ] 本番デプロイ（Vercel or Firebase Hosting）

---

## 💻 実行コマンド一覧

```bash
# 開発環境起動
npm run dev

# ビルド
npm run build

# テスト
npm run test

# ESLintチェック
npm run lint
>>>>>>> 4062c7394f233874acd3b59e80a036b373a5c618
```

---

<<<<<<< HEAD
## 🧠 感情分析プロンプト（例）

```
以下の映画レビュー文から、以下の感情について0〜100でスコアを出してください：
・喜び・怒り・哀しみ・驚き・恐れ
その理由を200文字以内で解説してください。

【レビュー文】
終盤の展開が胸を打った。自分の人生と重ねて泣いてしまった。
=======
## 🧪 テスト構成
- `vitest.config.ts`：`globals: true` / `jsdom` 環境指定 / `setupFiles` 経由で `jest-dom` 拡張
- `src/setupTests.ts`：`@testing-library/jest-dom` をグローバル拡張
- `src/__tests__/App.test.tsx`：アプリ内に`"感情分析テスト"` のh1が表示されることを確認

```tsx
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders main heading', () => {
  render(<App />)
  expect(screen.getByText(/感情分析テスト/i)).toBeInTheDocument()
})
>>>>>>> 4062c7394f233874acd3b59e80a036b373a5c618
```

---

<<<<<<< HEAD
## 🔧 MVPステップ

1. 映画一覧表示（モックでも可）
2. 投稿フォーム（タイトル・テキスト・星）
3. GPT API接続 → 感情スコア取得
4. Zustandで状態管理／Firestoreに保存
5. EmotionChartで可視化（Rechartsなど）

---

## 🌈 備考・この構成の強み

- Reactベースで最小構成に抑えつつ、AI×感情×UIの要素を融合できる
- Tailwindでデザイン性を担保しつつ、Zustandでコードも美しく管理
- GPTによる分析内容は文章力・読解力の証明にもなり、ポートフォリオで差別化可能

=======
## 🔧 今後の方向性
- [ ] Recharts で `EmotionScore` をレーダーチャート or バーチャート表示
- [ ] Firebase Firestore or Realtime DB に履歴保存
- [ ] ユーザーごとのレビュー履歴画面（状態管理：Zustand）
- [ ] GitHub Actions で `npm run test` 自動化
- [ ] `.env` を GitHub Secrets に登録しCI/CD対応

---

## 🌈 備考
- 初期のViteテンプレートとのコンフリクトも手動でマージ解消済
- Copilotによる Jest 構成提案 → Vitest構成に置き換え済
- コンポーネント単体テストから統合テストまで拡張予定

---
>>>>>>> 4062c7394f233874acd3b59e80a036b373a5c618

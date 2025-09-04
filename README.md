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

## ✅ 現在の実装状況（2025-09-04）

- [x] 感情スコアAPI連携（OpenAI）
- [x] フォームUI作成（テキスト入力 / 分析ボタン / 結果表示）
- [x] 初期テストファイル作成（App.tsx → `感情分析テスト` が表示される）
- [x] Vitest動作確認 & `setupTests.ts` 設置
- [x] テストパス ✅
- [x] Vite + TypeScript + Tailwind構成でアプリ構築済
- [x] Firebase 保存機能
- [ ] Recharts 可視化
- [x] GitHub ActionsによるCIパイプライン
- [ ] 本番デプロイ（Vercel or Firebase Hosting）

---

| フェーズ             | 内容                           |
| ---------------- | ---------------------------- |
| **Sprint 1（現在）** | 感情分析 → Firestore保存までのベース機能完成 |
| **Sprint 2**     | UI整備・コンポーネント分離・グラフ表示などUX強化   |
| **Sprint 3**     | 認証機能・履歴管理・デプロイ＆README整備      |

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
```

---

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
```

---

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

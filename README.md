# EMR

## 🎬 映画レビュー × 感情分析アプリ（React + TypeScript 個人開発課題）

### ✅ プロジェクト概要
- **目的**：映画レビューを投稿すると、OpenAI API（GPT）で感情分析され、グラフで可視化される。
- **対象ユーザー**：映画好き・感情表現を言語化したい人・AI活用に興味がある人。
- **開発背景**：感性・感情・言語化に興味があり、自分の趣味嗜好に合う形でAIを活用したアプリを作る。

---

### 📦 技術スタック
| 分類         | 使用技術                          |
|--------------|----------------------------------|
| フロントエンド | React 19 / TypeScript / Vite     |
| スタイリング   | Tailwind CSS                    |
| 状態管理     | Zustand                         |
| 感情分析API   | OpenAI GPT-3.5 Turbo            |
| CI/CD        | GitHub Actions（予定）           |
| テスト       | Vitest + React Testing Library  |
| その他       | Firebase（今後導入予定）         |

---

### 📁 ディレクトリ構成
```
src/
├── assets/
├── components/
│   ├── MovieCard.tsx
│   ├── ReviewForm.tsx
│   └── EmotionChart.tsx
├── features/
│   └── reviews/
│       ├── reviewSlice.ts
│       └── reviewService.ts
├── pages/
│   ├── Home.tsx
│   └── ReviewDetail.tsx
├── utils/
│   └── openai.ts
├── types/
│   └── review.ts
├── App.tsx
├── main.tsx
firebase.ts
.env
```

---

### ✅ 現在の実装状況（2025-09-03）
- [x] 感情スコアAPI連携（OpenAI）
- [x] フォームUI作成（テキスト入力 / 分析ボタン / 結果表示）
- [x] 初期テストファイル作成（App.tsx → `感情分析テスト` が表示される）
- [x] Vitest動作確認 & `setupTests.ts` 設置
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

### 💻 実行コマンド一覧
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

### 🔧 今後の方向性
- [ ] Recharts で `EmotionScore` をレーダーチャート or バーチャート表示
- [ ] Firebase Firestore or Realtime DB に履歴保存
- [ ] ユーザーごとのレビュー履歴画面（状態管理：Zustand）
- [ ] GitHub Actions で `npm run test` 自動化
- [ ] `.env` を GitHub Secrets に登録しCI/CD対応

---

### 🌈 備考
- Tailwindでデザイン性を担保しつつ、Zustandでコードも美しく管理
- GPTによる分析内容は文章力・読解力の証明にもなり、ポートフォリオで差別化可能

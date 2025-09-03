# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

## 🖼️ 画面構成（予定）

- ホーム（映画一覧＋レビュー件数）
- 映画詳細／レビュー投稿ページ
- 感情分析結果ページ（グラフ表示）
- 自分の投稿履歴ページ
- 絞り込み検索／タグ機能（フェーズ2以降）

---

## 📁 ディレクトリ構成（仮）
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
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

以下の映画レビュー文から、以下の感情について0〜100でスコアを出してください：
・喜び・怒り・哀しみ・驚き・恐れ
その理由を200文字以内で解説してください。

【レビュー文】
終盤の展開が胸を打った。自分の人生と重ねて泣いてしまった。
```

---

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

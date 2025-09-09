# 🎬 EMR - Emotion Movie Review App

映画レビューを投稿すると、OpenAI（GPT-3.5）を用いて5つの感情（喜び・怒り・悲しみ・驚き・恐れ）を分析し、グラフで可視化して保存できるアプリです。

## 🌟 特徴

- ✨ 映画レビュー × 感情分析 × グラフ可視化
- 🔐 Firebase匿名認証により個人情報不要で即利用可能
- 💾 自分のレビュー履歴をローカルで保持・閲覧可能
- 📊 感情スコアをRechartsで直感的に表示
- 🧠 Zustandで状態管理、TailwindでスタイリッシュなUI
- 🚀 Vercelにてデプロイ・CI連携済

---

## 🖼 デモ

**本番環境URL**  
🔗 https://emr-ebon.vercel.app/
<img width="1269" height="911" alt="brave_screenshot_emr-ebon vercel app (2)" src="https://github.com/user-attachments/assets/923e287d-0110-4424-94b3-79a28116fdca" />

<img width="1253" height="513" alt="brave_screenshot_emr-ebon vercel app (3)" src="https://github.com/user-attachments/assets/3c1b8b3f-0b3b-4d27-adcd-d40c91618f1a" />


---

## 🔧 使用技術

| カテゴリ        | 技術                          |
|----------------|-------------------------------|
| フロントエンド  | React 19 / Vite / TypeScript |
| UI            | Tailwind CSS                 |
| 状態管理       | Zustand                      |
| データベース    | Firebase Firestore           |
| 認証           | Firebase Authentication（匿名） |
| 感情分析API    | OpenAI（GPT-3.5 Turbo）      |
| グラフ         | Recharts                     |
| テスト         | Vitest + Testing Library     |
| デプロイ       | Vercel                       |

---

## 📝 機能一覧

- [x] 映画タイトルとレビューの入力
- [x] OpenAIによる感情分析（JSONフォーマット）
- [x] レビュー＋スコアをFirestoreに保存
- [x] レーダーチャートで感情を視覚化
- [x] 履歴一覧表示（ログイン不要、匿名UIDで管理）
- [x] バリデーション（文字数制限・未入力防止）
- [x] Light/Darkモード対応（自動切替）
- [ ] レビュー削除・編集（今後対応予定）

---

## 🛠 開発環境セットアップ

```bash
git clone https://github.com/Orve/EMR.git
cd EMR
npm install
cp .env.example .env   # ← 環境変数を手元で設定してください
npm run dev
```

🔐 .env について
開発に必要な環境変数は .env.example を参考に .env を作成してください。
```
# Firebase
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
...

# OpenAI
VITE_OPENAI_API_KEY=your-openai-key
.env は .gitignore に含まれており、Gitには含めないようにしてください。
```

📁 ディレクトリ構成（主要）
```
src/
├── components/       # UIコンポーネント
├── pages/            # ルーティングページ
├── stores/           # Zustand状態管理
├── utils/            # APIラッパーなど
├── services/         # Firebase用クエリ管理
├── assets/           # 画像・アイコン等
🧪 テスト

npm run test
```
🗺 今後の予定（フェーズ4以降）
 感情のフィルタリング機能

 類似レビューの提案（AI補助）

 Googleログイン拡張（任意）

 レビュー編集・削除

 モバイルUI最適化

🧠 作者について

野口 瑠偉（Rui Noguchi）

フロントエンド／業務アプリ開発経験あり。趣味開発でもAI活用・UIデザイン・体験設計を大事にしています。

📫 Mail: laboruy@gmail.com

🧠 使用技術: React / PHP / Firebase / Tailwind / Zustand など

📝 ライセンス: MIT License

import React, { useState }  from 'react'

interface Props {
  text: string
  title: string
  setText: (value: string) => void
  setTitle: (title: string) => void
  onAnalyze: () => void
}

const EmotionForm: React.FC<Props> = ({ text, title, setText, setTitle, onAnalyze }) => {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = () => {
    // ✅ バリデーションチェック
    if (title.trim().length < 2) {
      setError('🎬 映画タイトルは2文字以上で入力してください')
      return
    }
    if (text.trim().length < 20) {
      setError('📝 レビュー本文は20文字以上で入力してください')
      return
    }

    setError(null) // エラークリア
    onAnalyze() // 分析処理へ
  }
  return (
    <>
      <input
        type="text"
        className="w-full p-2 border rounded text-black dark:text-white dark:bg-gray-700 mb-2"
        placeholder="映画タイトルを入力してね"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full h-32 p-2 border rounded text-black dark:text-white dark:bg-gray-700"
        placeholder="映画の感想を書いてね"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="text-sm text-gray-400 text-right">
        {text.length} / 1000文字
      </p>

      {error && <p className="text-red-400 mt-2">{error}</p>}

      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={onAnalyze}
      >
        分析する
      </button>
    </>
  )
}

export default EmotionForm

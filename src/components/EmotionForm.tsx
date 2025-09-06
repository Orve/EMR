import React from 'react'

interface Props {
  text: string
  title: string
  setText: (value: string) => void
  setTitle: (title: string) => void
  onAnalyze: () => void
}

const EmotionForm: React.FC<Props> = ({ text, title, setText, setTitle, onAnalyze }) => {
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

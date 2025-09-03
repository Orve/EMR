import React, { useState } from 'react'
import { analyzeEmotion } from './utils/openai'
import type { EmotionScore } from './utils/openai'

const App: React.FC = () => {
  const [text, setText] = useState('')
  const [result, setResult] = useState<EmotionScore | null>(null)

  const handleAnalyze = async () => {
    try {
      const emotion = await analyzeEmotion(text)
      setResult(emotion)
    } catch (err) {
      console.error('分析エラー', err)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">感情分析テスト</h1>

      <textarea
        className="w-full h-32 p-2 border rounded"
        placeholder="映画の感想を書いてね"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleAnalyze}
      >
        分析する
      </button>

      {result && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <h2 className="font-semibold">感情スコア：</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default App

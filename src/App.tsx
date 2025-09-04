import React, { useState } from 'react'
import { analyzeEmotion } from './utils/openai'
import type { EmotionScore } from './utils/openai'
import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const App: React.FC = () => {
  console.log('ENV KEY:', import.meta.env.VITE_OPENAI_API_KEY)
  const [text, setText] = useState('')
  const [result, setResult] = useState<EmotionScore | null>(null)

  const handleSaveReview = async () => {
  try {
    await addDoc(collection(db, 'reviews'), {
      text,
      timestamp: serverTimestamp(),
      emotionScore: result || {
        joy: 0,
        anger: 0,
        sadness: 0,
        surprise: 0,
        fear: 0,
      },
    })
    alert('Firestoreに保存できたよ！✨')
  } catch (e) {
    console.error('保存エラー:', e)
    alert('保存に失敗しちゃった💦')
  }
}
const handleAnalyze = async () => {
  try {
    console.log('🚀 handleAnalyze START')
    const emotion = await analyzeEmotion(text)
    console.log('✅ analyzeEmotion response', emotion)
    setResult(emotion)
  } catch (err) {
    console.error('🔥 analyzeEmotion ERROR', err)
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

          <button
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={handleSaveReview}
          >
            Firestoreに保存！
          </button>
        </div>
      )}
    </div>
  )
}

export default App


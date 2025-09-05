import EmotionChart from './EmotionChart'
import React, { useState } from 'react'
import { analyzeEmotion } from './utils/openai'
import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import EmotionForm from './components/EmotionForm'
import EmotionResult from './components/EmotionResult'
import type { EmotionScore } from './utils/openai'

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  try {
    return <>{children}</>
  } catch (error) {
    console.error('ErrorBoundary caught an error:', error)
    return <div>エラーが発生しました。再読み込みしてください。</div>
  }
}

const App: React.FC = () => {
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
      alert('保存に失敗しちゃった💦')
    }
  }
  const handleAnalyze = async () => {
    try {
      console.log('🚀 handleAnalyze START')
      const emotion = await analyzeEmotion(text)
      console.log('✅ analyzeEmotion response', emotion)
      setResult(emotion)

      // 🧹 テキストクリア！
      setText('')
    } catch (err) {
      console.error('🔥 analyzeEmotion ERROR', err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4">感情分析テスト</h1>

        <textarea
          className="w-full h-32 p-2 border rounded text-black dark:text-white dark:bg-gray-700"
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
          <div className="mt-4 bg-white dark:bg-gray-700 text-black dark:text-white p-4 rounded">
            <h2 className="font-semibold">感情スコア：</h2>
            <EmotionChart data={result} />
            <button
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={handleSaveReview}
            >
              Firestoreに保存！
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const WrappedApp = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

export default WrappedApp


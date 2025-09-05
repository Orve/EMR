import React, { useState } from 'react'
import { analyzeEmotion } from './utils/openai'
import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import EmotionForm from './components/EmotionForm'
import EmotionResult from './components/EmotionResult'
import type { EmotionScore } from './utils/openai'

const App: React.FC = () => {
  const [text, setText] = useState('')
  const [result, setResult] = useState<EmotionScore | null>(null)

  const handleAnalyze = async () => {
    try {
      const emotion = await analyzeEmotion(text)
      setResult(emotion)
      setText('') // テキストクリア
    } catch (err) {
      console.error('analyzeEmotion ERROR', err)
    }
  }

  const handleSaveReview = async () => {
    try {
      await addDoc(collection(db, 'reviews'), {
        text,
        timestamp: serverTimestamp(),
        emotionScore: result ?? { joy: 0, anger: 0, sadness: 0, surprise: 0, fear: 0 },
      })
      alert('Firestoreに保存できたよ！✨')
    } catch (e) {
      alert('保存に失敗しちゃった💦')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4">感情分析テスト</h1>

        <EmotionForm text={text} setText={setText} onAnalyze={handleAnalyze} />

        {result && (
          <EmotionResult result={result} onSave={handleSaveReview} />
        )}
      </div>
    </div>
  )
}

export default App

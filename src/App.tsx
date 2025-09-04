import React, { useState } from 'react'
import { analyzeEmotion } from './utils/openai'
import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import EmotionForm from './components/EmotionForm'
import EmotionResult from './components/EmotionResult'
import type { EmotionScore } from './utils/openai'

const App: React.FC = () => {
  console.log('ENV KEY:', import.meta.env.VITE_OPENAI_API_KEY)
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

  const handleSaveReview = async () => {
    try {
      await addDoc(collection(db, 'reviews'), {
        text,
        timestamp: serverTimestamp(),
        emotionScore: result,
      })
      alert('Firestoreに保存できたよ！✨')
    } catch (e) {
      console.error('保存エラー:', e)
      alert('保存に失敗しちゃった💦')
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">感情分析ツール</h1>

      <EmotionForm text={text} onTextChange={setText} onAnalyze={handleAnalyze} />

      {result && <EmotionResult result={result} onSave={handleSaveReview} />}
    </div>
  )
}

export default App

// src/pages/Home.tsx
import EmotionForm from '../components/EmotionForm'
import EmotionResult from '../components/EmotionResult'
import { useReviewStore } from '../stores/reviewStore'
import { useUserStore } from '../stores/userStores'
import { analyzeEmotion } from '../utils/openai'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useEffect } from 'react'
import { signInAnonymously } from 'firebase/auth'
import { auth } from '../firebase'

const Home: React.FC = () => {
  const { text, title, setText, setTitle, setResult, setLastAnalyzedText, setLastAnalyzedTitle, result } = useReviewStore()
  const userId = useUserStore((state) => state.userId)
  const setUserId = useUserStore((state) => state.setUserId)
  

  useEffect(() => {
    signInAnonymously(auth)
      .then((res) => {
        setUserId(res.user.uid)
      })
      .catch((err) => {
        console.error('ログイン失敗:', err)
      })
  }, [])

  const handleAnalyze = async () => {
    const emotion = await analyzeEmotion(text)
    setResult(emotion)
    setLastAnalyzedText(text)
    setLastAnalyzedTitle(title)
    setText('')
    setTitle('')
  }

  const { lastAnalyzedText, lastAnalyzedTitle } = useReviewStore()

  const handleSaveReview = async () => {
    await addDoc(collection(db, 'reviews'), {
      userId,
      title: lastAnalyzedTitle,
      text: lastAnalyzedText,
      timestamp: serverTimestamp(),
      emotionScore: result,
    })
    alert('保存できたよ！')
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">感情分析テスト</h1>
      <EmotionForm text={text} title={title} setText={setText} setTitle={setTitle} onAnalyze={handleAnalyze} />
      {result && <EmotionResult result={result} onSave={handleSaveReview} />}
    </div>
  )
}

export default Home

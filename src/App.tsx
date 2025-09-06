import { analyzeEmotion } from './utils/openai'
import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import EmotionForm from './components/EmotionForm'
import EmotionResult from './components/EmotionResult'
import { useReviewStore } from './stores/reviewStore'
import { useEffect } from 'react'
import { signInAnonymously } from 'firebase/auth'
import { auth } from './firebase'
import { useUserStore } from './stores/userStores'  // ← Zustandのuser用ストア


const App: React.FC = () => {
  const { text, title, setTitle, setText, setResult, setLastAnalyzedText,setLastAnalyzedTitle  } = useReviewStore()
  const setUserId = useUserStore((state) => state.setUserId)

  useEffect(() => {
    signInAnonymously(auth)
      .then((res) => {
        console.log('🆔 Firebase匿名ログイン成功:', res.user.uid)
        setUserId(res.user.uid)
      })
      .catch((err) => {
        console.error('🚨 Firebaseログイン失敗:', err)
      })
  }, )

  const handleAnalyze = async () => {
    try {
      const emotion = await analyzeEmotion(text)
      setResult(emotion)
      setLastAnalyzedText(text)
      setLastAnalyzedTitle(title)
      setText('')
      setTitle('')
    } catch (err) {
      console.error('analyzeEmotion ERROR', err)
    }
  }

  const { lastAnalyzedText, lastAnalyzedTitle, result } = useReviewStore()
  const userId = useUserStore((state) => state.userId)

  const handleSaveReview = async () => {
    try {
      await addDoc(collection(db, 'reviews'), {
        userId,
        title: lastAnalyzedTitle, 
        text: lastAnalyzedText,
        timestamp: serverTimestamp(),
        emotionScore: result ?? { joy: 0, anger: 0, sadness: 0, surprise: 0, fear: 0 },
      })
      alert('Firestoreに保存できたよ！✨')
    } catch {
      alert('保存に失敗しちゃった💦')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4">感情分析テスト</h1>
        <EmotionForm
          text={text}
          title={title}
          setText={setText}
          setTitle={setTitle}
          onAnalyze={handleAnalyze}
        />

        {result && (
          <EmotionResult result={result} onSave={handleSaveReview} />
        )}
      </div>
    </div>
  )
}

export default App

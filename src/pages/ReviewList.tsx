import React, { useEffect, useState } from 'react'
import { signInAnonymously } from 'firebase/auth'
import { auth } from '../firebase'
import { fetchReviewsByUser } from '../services/reviewService'
import { useUserStore } from '../stores/userStores'


type Review = {
  id: string
  title: string
  text: string
  timestamp: firebase.firestore.Timestamp
  emotionScore: {
    joy: number
    anger: number
    sadness: number
    surprise: number
    fear: number
  }
}

const ReviewList: React.FC = () => {
  const userId = useUserStore((state) => state.userId)
  const setUserId = useUserStore((state) => state.setUserId)

  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      signInAnonymously(auth)
        .then((res) => {
          console.log('✅ 匿名ログイン成功:', res.user.uid)
          setUserId(res.user.uid)
        })
        .catch((err) => {
          console.error('❌ ログイン失敗:', err)
        })
      return
    }

    // ✅ userId がある状態で fetch
    fetchReviewsByUser(userId).then((data) => {
      console.log('📦 レビュー取得:', data)
      setReviews(data as Review[])
      setLoading(false)
    })
  }, [userId])

  if (loading) {
    return <p className="text-gray-400 p-4">読み込み中...</p>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">🎞 あなたのレビュー履歴</h1>

      {reviews.length === 0 ? (
        <p className="text-gray-400">まだレビューがありません。</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li key={review.id} className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-xl font-semibold text-yellow-300">🎬 {review.title}</h2>
              <p className="text-sm text-gray-400">
                {review.timestamp?.toDate?.()
                  ? new Date(review.timestamp.toDate()).toLocaleString()
                  : '日付不明'}
              </p>
              <pre className="mt-2 text-sm bg-gray-700 p-2 rounded overflow-x-auto">
                {JSON.stringify(review.emotionScore, null, 2)}
              </pre>
              {/* <p className="mt-2 text-sm">{review.text}</p> ← 表示したい場合はこちら */}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


export default ReviewList

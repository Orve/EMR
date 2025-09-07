import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

export const fetchReviewsByUser = async (userId: string) => {
  const q = query(
    collection(db, 'reviews'),
    where('userId', '==', userId),
    orderBy('timestamp', 'desc')
  )

  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

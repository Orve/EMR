import { create } from 'zustand'
import type { EmotionScore } from '../utils/openai'

type ReviewState = {
  text: string
  title: string
  result: EmotionScore | null
  lastAnalyzedText: string
  lastAnalyzedTitle: string
  setText: (text: string) => void
  setTitle: (title: string) => void
  setResult: (result: EmotionScore) => void
  setLastAnalyzedText: (text: string) => void
  setLastAnalyzedTitle: (title: string) => void
  reset: () => void
}

export const useReviewStore = create<ReviewState>((set) => ({
  text: '',
  title: '',
  result: null,
  lastAnalyzedText: '',
  lastAnalyzedTitle: '',
  setText: (text) => set({ text }),
  setTitle: (title) => set({ title }),
  setResult: (result) => set({ result }),
  setLastAnalyzedText: (text) => set({ lastAnalyzedText: text }),
  setLastAnalyzedTitle: (title) => set({ lastAnalyzedTitle: title }),
  reset: () => set({ text: '', result: null }),
}))

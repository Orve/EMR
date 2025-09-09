import React from 'react'
import EmotionChart from './EmotionChart'
import type { EmotionScore } from '../utils/openai'
import { useReviewStore } from '../stores/reviewStore'

interface Props {
  result: EmotionScore
  onSave: () => void
}

const EmotionResult: React.FC<Props> = ({ result, onSave }) => {
  const { lastAnalyzedText,lastAnalyzedTitle } = useReviewStore() || { lastAnalyzedText: '', lastAnalyzedTitle: '' }

  return (
    <div className="mt-4 bg-white dark:bg-gray-700 text-black dark:text-white p-4 rounded">
      <p className="text-lg font-semibold text-black dark:text-white">
        🎬 {lastAnalyzedTitle}
      </p>
      <p className="text-lg text-black dark:text-white">
        「{lastAnalyzedText}」
      </p>
      <p className="mt-2 text-sm italic text-black">
        <h2 className="font-semibold">感情スコア：</h2>
      </p>
      <EmotionChart data={result} />
      <button
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={onSave}
      >
        Firestoreに保存！
      </button>
    </div>
  )
}

export default EmotionResult

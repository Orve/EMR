// src/components/EmotionResult.tsx
import React from 'react'
import type { EmotionScore } from '../utils/openai'

type Props = {
  result: EmotionScore
  onSave: () => void
}

const EmotionResult: React.FC<Props> = ({ result, onSave }) => (
  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 space-y-3">
    <h2 className="text-lg font-semibold text-gray-700">感情スコア</h2>

    <ul className="space-y-2">
      {Object.entries(result).map(([key, value]) => (
        <li key={key}>
          <span className="block text-sm font-medium text-gray-600 capitalize">{key}</span>
          <div className="w-full bg-gray-200 rounded h-4">
            <div className="bg-blue-500 h-4 rounded" style={{ width: `${value}%` }}></div>
          </div>
          <span className="text-sm text-gray-500">{value}</span>
        </li>
      ))}
    </ul>

    <button
      className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
      onClick={onSave}
    >
      保存する
    </button>
  </div>
)

export default EmotionResult

// src/components/EmotionForm.tsx
import React from 'react'

type Props = {
  text: string
  onTextChange: (value: string) => void
  onAnalyze: () => void
}

const EmotionForm: React.FC<Props> = ({ text, onTextChange, onAnalyze }) => (
  <div className="space-y-4">
    <textarea
      className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      placeholder="映画の感想を書いてね"
      value={text}
      onChange={(e) => onTextChange(e.target.value)}
    />

    <button
      className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
      onClick={onAnalyze}
    >
      感情を分析
    </button>
  </div>
)

export default EmotionForm

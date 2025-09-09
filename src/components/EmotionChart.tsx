// components/EmotionChart.tsx
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import type { EmotionScore } from '../utils/openai'

interface Props {
  data: EmotionScore
}

const EmotionChart: React.FC<Props> = ({ data }) => {
  const chartData = Object.entries(data).map(([emotion, value]) => ({
    name: emotion,
    value: value,
  }))

const emotionColors: Record<string, string> = {
  joy: '#facc15',      // yellow-400
  anger: '#ef4444',    // red-500
  sadness: '#3b82f6',  // blue-500
  surprise: '#8b5cf6', // purple-500
  fear: '#6b7280',     // gray-500
}
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" stroke="#000" />
          <YAxis domain={[0, 100]} stroke="#000" />
          <Tooltip />
          <Bar dataKey="value">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={emotionColors[entry.name]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EmotionChart

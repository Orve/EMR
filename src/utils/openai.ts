// src/utils/openai.ts
export type EmotionScore = {
  joy: number
  anger: number
  sadness: number
  surprise: number
  fear: number
}
export async function analyzeEmotion(text: string): Promise<EmotionScore> {
  const systemPrompt = `
  あなたは映画レビューから感情を数値化するAIです。
  以下の5感情（喜び、怒り、悲しみ、驚き、恐れ）を0〜100の数値で評価し、次の形式で出力してください：

  {
    "joy": 数値,
    "anger": 数値,
    "sadness": 数値,
    "surprise": 数値,
    "fear": 数値
  }
  `;

  if (!import.meta.env.VITE_OPENAI_API_KEY) {
    throw new Error('🚨 VITE_OPENAI_API_KEY が undefined です！.env の読み込みを確認してね！')
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: text },
      ],
      temperature: 0.7,
    }),
  })

  const data = await response.json()

  const match = data.choices?.[0]?.message?.content?.match(/\{[^}]+\}/)
  if (!match) throw new Error('Invalid response format from OpenAI')

  return JSON.parse(match[0])
}

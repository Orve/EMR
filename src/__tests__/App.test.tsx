import { render, screen } from '@testing-library/react'
import App from '../App'
import { vi } from 'vitest'

vi.mock('../stores/reviewStore', () => ({
  useReviewStore: vi.fn(() => ({
    text: '',
    result: null,
    lastAnalyzedText: 'テスト用のテキスト',
    setText: vi.fn(),
    setTitle: vi.fn(),
    setResult: vi.fn(),
    setLastAnalyzedText: vi.fn(),
    reset: vi.fn(),
  })),
}))

test('renders main heading', () => {
  render(<App />)
  expect(screen.getByText(/感情分析テスト/i)).toBeInTheDocument()
})

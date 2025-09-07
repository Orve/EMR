import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { vi } from 'vitest'

vi.mock('../firebase', () => ({
  auth: {
    signInAnonymously: vi.fn(() => Promise.resolve({ user: { uid: 'test-user-id' } })),
  },
  db: {},
}))

vi.mock('../stores/reviewStore', () => ({
  useReviewStore: vi.fn(() => ({
    text: '',
    result: null,
    lastAnalyzedText: 'テスト用のテキスト',
    setText: vi.fn(),
    setResult: vi.fn(),
    setLastAnalyzedText: vi.fn(),
    reset: vi.fn(),
  })),
}))

test('renders main heading', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByText(/感情分析テスト/i)).toBeInTheDocument()
})

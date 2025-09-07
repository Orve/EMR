// ✅ この内容で App.tsx を「完全上書き」でOK！

import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ReviewList from './pages/ReviewList'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="p-4 bg-gray-800 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">🎬 EMR</Link>
        <Link to="/reviews" className="text-sm text-gray-300 hover:underline">履歴を見る</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<ReviewList />} />
      </Routes>
    </div>
  )
}

export default App

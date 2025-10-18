import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <footer className="bg-indigo-900 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="font-outfit">© 2025 Blogify. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

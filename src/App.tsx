import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import '../src/assets/style/App.css'
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  )
}

export default App

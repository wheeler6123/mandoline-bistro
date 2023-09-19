import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import '../src/assets/style/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar />
    </Router>
  )
}

export default App

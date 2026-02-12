import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import DataDeletion from './pages/DataDeletion'
import Registration from './pages/Registration'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/delete-data" element={<DataDeletion />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  )
}

export default App

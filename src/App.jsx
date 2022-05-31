import React,{ useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './pages/Header'
import Nav from './components/Nav'
import Home from './pages/Home'
import Employee from './pages/Employee'
import T_0052 from './pdf/T_0052.pdf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/T_0052" element={<T_0052 />} />
      </Routes>
    </Router>
  );
}

export default App

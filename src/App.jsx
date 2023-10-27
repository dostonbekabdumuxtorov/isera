import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import Centres from './components/Centres/Centres.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Map from './components/Map/Map.jsx'
import Footer from './components/Footer/Footer'
function App() {
  const [searchWord, setsearchWord] = useState('')
  return (
    <>
      <div className="first_cover">
        <BrowserRouter>
         <Navbar setsearchWord={setsearchWord} />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kirish' element={<Register />} />
          <Route path='/map' element={<Map />} />
          <Route path='/markazlar' element={<Centres setsearchWord={setsearchWord} searchWord={searchWord} />} />
          
        </Routes>
        <Footer />
       </BrowserRouter>
      </div>
        
    </>
  )
}

export default App

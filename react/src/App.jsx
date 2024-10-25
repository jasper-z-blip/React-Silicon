import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/style.css'
import './css/contact-form.css'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Features from './pages/Features'

import Header from './components/Header'
import Footer from './components/Footer'



function App() {

  return (
    <BrowserRouter>
     <div className='wrapper'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>
      <Footer />
     </div>
    </BrowserRouter>
  )
}

export default App

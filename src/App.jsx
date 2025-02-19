import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Home_card from './components/Properties/Home_card'
import Flat_card from './components/Properties/Flat_card'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Home_card/>
      <Flat_card/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
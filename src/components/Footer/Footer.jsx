import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
         <div className="footer-text container">
            <h1>Contact Us</h1>
            <p>+1 234 567 8900</p>
            <p>homenest@gmail.com</p>
            <p>Visakhapatnam, India</p>
            <p>Copyrights &copy; {new Date().getFullYear()} Reserved</p>
         </div>
    </div>
  )
}

export default Footer
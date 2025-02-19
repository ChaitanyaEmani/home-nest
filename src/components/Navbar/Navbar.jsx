import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = ()=>{
       mobileMenu ? setMobileMenu(false): setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'darknav':""}`}>
        <div className="logo">
            Home Nest
        </div>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
           <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
           <li><Link to='about' smooth={true} offset={-190} duration={500} >About us</Link></li>
           <li><Link to='property' smooth={true} offset={-260} duration={500} >Properties</Link></li>
           <li><Link to='testimonial' smooth={true} offset={-200} duration={500} >Testimonials</Link></li>
           <li><Link to='footer' smooth={true} offset={-150} duration={500} ><button className='btn'>Contact us</button></Link></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </nav>
  )
}

export default Navbar
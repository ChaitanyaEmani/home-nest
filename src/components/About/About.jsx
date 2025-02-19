import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpg'


const About = () => {
  return (
    <div className='about-co container'>
        <h1 className='sub'>About Us</h1>
        <div className="about">
        
        <img src={about_img} alt="" />
        <div className="about-text">
            <div className="about-top">
               <h2>Who We Are</h2>
               <p>Founded in 20XX, MyRealEstate has been a trusted platform for property buyers, sellers, and investors. Whether you're searching for a dream home or selling your property hassle-free, we offer a seamless experience with expert guidance.</p>
            </div>
             
            <div className="about-bottom">
             <h2>Our Mission</h2>
             <p>To make buying and selling properties simple, transparent, and accessible to everyone.</p>
            </div>   
        </div>
        </div>
        
    </div>
  )
}
     
export default About 
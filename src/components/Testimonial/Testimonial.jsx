import React,{useRef} from 'react'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import './Testimonial.css'
import { FaMapMarkerAlt } from "react-icons/fa";

const Testimonial = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
      if(tx>-50){
        tx -= 25;
      }   
      slider.current.style.transform = `translateX(${tx}%)` 
  }

  const slideBackward =()=>{
    if(tx<0){
      tx += 25;
    }   
    slider.current.style.transform = `translateX(${tx}%)` 
  }


  return (
    <div className="properties">
        <h1 className='sub'>Testimonials</h1>
        <div className='testimonial container'>
           <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
           <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
           <div className="slider-1">
             <ul ref={slider}>
              <li>
                  <div className="card-info-1">
                    <img src={user_1} alt="" />
                    <div className="card-text-1">
                      <h2>1 BHK Luxury Villa</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Whitefield, Bangalore</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aperiam neque blanditiis id libero harum ratione, nam omnis quos totam non veniam nesciunt ipsa nulla. Rem dolor hic doloribus fuga?</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info-1">
                    <img src={user_2} alt="" />
                    <div className="card-text-1">
                      <h2>2 BHK Luxury Villa</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Whitefield, Bangalore</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aperiam neque blanditiis id libero harum ratione, nam omnis quos totam non veniam nesciunt ipsa nulla. Rem dolor hic doloribus fuga?</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info-1">
                    <img src={user_3} alt="" />
                    <div className="card-text-1">
                      <h2>3 BHK Luxury Villa</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Whitefield, Bangalore</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aperiam neque blanditiis id libero harum ratione, nam omnis quos totam non veniam nesciunt ipsa nulla. Rem dolor hic doloribus fuga?</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info-1">
                    <img src={user_4} alt="" />
                    <div className="card-text-1">
                      <h2>4 BHK Luxury Villa</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Whitefield, Bangalore</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aperiam neque blanditiis id libero harum ratione, nam omnis quos totam non veniam nesciunt ipsa nulla. Rem dolor hic doloribus fuga?</p>
                    </div>
                  </div>
                
              </li>
          
             </ul>
           </div>
        </div>
    </div> 
  )
}

export default Testimonial

import React,{useRef} from 'react'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import flat_1 from '../../assets/flats/flat-1.jpg'
import flat_2 from '../../assets/flats/flat-2.jpg'
import flat_3 from '../../assets/flats/flat-3.jpg'
import flat_4 from '../../assets/flats/flat-4.jpeg'
import flat_5 from '../../assets/flats/flat-5.jpeg'
import flat_6 from '../../assets/flats/flat-6.jpeg'
import flat_7 from '../../assets/flats/flat-7.jpeg'

import { FaMapMarkerAlt } from "react-icons/fa";

const Flat_card = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
      if(tx>-58){
        tx -= 14.28;
      }   
      slider.current.style.transform = `translateX(${tx}%)` 
  }

  const slideBackward =()=>{
    if(tx<0){
      tx += 14.28;
    }   
    slider.current.style.transform = `translateX(${tx}%)` 
  }


  return (
    <div className="properties">
        
        <h2 className='card-name'>FLATS</h2>
        <div className='property container'>
           <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
           <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
          
           <div className="slider">
             <ul ref={slider}  >
              <li>
                  <div className="card-info">
                    <img src={flat_1} alt="" />
                    <div className="card-text">
                      <h2>Skyline Residency</h2>
                      <p><FaMapMarkerAlt size={20} color="black" />Juhu, Mumbai</p>
                      <p className='price'>$70,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={flat_2} alt="" />
                    <div className="card-text">
                      <h2>Oceanview Apartments</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Whitefield, Bangalore</p>
                      <p className='price'>$80,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={flat_3} alt="" />
                    <div className="card-text">
                      <h2>Greenwood Heights</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Gachibowli, Hyderabad</p>
                      <p className='price'>$75,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={flat_4} alt="" />
                    <div className="card-text">
                      <h2>Sunrise Towers</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Andheri West, Mumbai</p>
                      <p className='price'>$90,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={flat_5} alt="" />
                    <div className="card-text">
                      <h2>Palm Grove Flats</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Dilshukh nagar, Hyderabad</p>
                      <p className='price'>$50,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={flat_6} alt="" />
                    <div className="card-text">
                      <h2>Elite Heights Residency</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Anna Nagar, Chennai</p>
                      <p className='price'>$80,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={flat_7} alt="" />
                    <div className="card-text">
                      <h2>Serene Nest Apartments</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Kukatpally, Hyderabad</p>
                      <p className='price'>$100,000</p>
                    </div>
                  </div>
                
              </li>
             </ul>
           </div>
        </div>
    </div> 
  )
}

export default Flat_card

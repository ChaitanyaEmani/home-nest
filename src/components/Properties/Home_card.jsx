import React,{useRef} from 'react'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import home_1 from '../../assets/homes/home-1.jpg'
import home_2 from '../../assets/homes/home-2.jpg'
import home_3 from '../../assets/homes/home-3.jpg'
import home_4 from '../../assets/homes/home-4.jpg'
import home_5 from '../../assets/homes/home-5.jpg'
import home_6 from '../../assets/homes/home-6.jpg'
import home_7 from '../../assets/homes/home-7.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";

const Home_card = () => {

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
        <h1 className='sub'>Properties for Sale</h1>
        <h2 className='card-name'>HOMES</h2>
        <div className='property container'>
          <div className="icons">
          <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
          <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
          </div>
           
           <div className="slider">
             <ul ref={slider} >
              <li>
                  <div className="card-info">
                    <img src={home_1} alt="" />
                    <div className="card-text">
                      <h2>Elegant Heights Villa</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Whitefield, Bangalore</p>
                      <p className='price'>$ 200,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={home_2} alt="" />
                    <div className="card-text">
                      <h2>Sunrise Residency</h2>
                      <p><FaMapMarkerAlt size={20} color="black" />Andheri West, Mumbai</p>
                      <p className='price'>$100,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={home_3} alt="" />
                    <div className="card-text">
                      <h2>Greenwood Mansion</h2>
                      <p><FaMapMarkerAlt size={20} color="black" />  Gachibowli, Hyderabad</p>
                      <p className='price'>$102,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={home_4} alt="" />
                    <div className="card-text">
                      <h2>Oceanview Apartment</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Juhu Beach, Mumbai</p>
                      <p className='price'>$125,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={home_5} alt="" />
                    <div className="card-text">
                      <h2>Skyline Luxury Home</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Kukatpally, Hyderabad</p>
                      <p className='price'>$180,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={home_6} alt="" />
                    <div className="card-text">
                      <h2>Serene Nest Villa</h2>
                      <p><FaMapMarkerAlt size={20} color="black" />Anna Nagar, Chennai</p>
                      <p className='price'>$100,000</p>
                    </div>
                  </div>
                
              </li>
              <li>
                  <div className="card-info">
                    <img src={home_7} alt="" />
                    <div className="card-text">
                      <h2>Palm Grove Residency</h2>
                      <p><FaMapMarkerAlt size={20} color="black" /> Rajajinagar, Bangalore</p>
                      <p className='price'>$220,000</p>
                    </div>
                  </div>
                
              </li>
             </ul>
           </div>
        </div>
    </div> 
  )
}

export default Home_card

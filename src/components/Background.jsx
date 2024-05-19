import React from 'react'
import { Link } from 'react-router-dom'
import './styles/background.css'
const Background = () => {

  
  return (
    <>
    <div className='wallpaper' style={{
      backgroundImage: `url("./pic.jpg")`
    }}>
     
      <div className='quote'>
      <p>Some people want it to happen,<br></br>Some wish it would happen.<br></br>Others make it happen with</p>
      <div className='type'>
       #UPLINEfitness
     </div>
     <div className='btn'>
     
      <Link to="Signup"><button>JOIN NOW!</button></Link>
      {/* <FontAwesomeIcon icon={fas.chevronRight} /> */}
     
      
     </div>
      </div> 
      </div>
      <div className='form'>
        <h1>EXPERIENCE THE FITNESS WAVE </h1>
      <h1>AT KOLKATA'S  FRIENDLIEST GYM IN PARK STREET!</h1>
        <span>JOIN UPLINE FITNESS NOW</span>
        <div className='input'>
        <input type='text' name='name' id='name' placeholder='Name'></input>
        <input type='Email' name='email' id='email' placeholder='email'></input>
        <input type='number' name='number' id='number' placeholder='Number'></input>
        <select name='select' id='select'>
        <option value="">Choose One</option>
            <option value="free">Free 1 Day Pass</option>
            <option value="complimentary">Complimentary Personal Training Session</option>
            <option value="zumba">Complimentary Zumba classes</option>
            <option value="cycling">Complimentary Spin Class/Indoor Cycling classes</option>
            <option value="yoga">Complimentary Yoga classes</option>
            <option value="kickboxing">Complimentary Kickboxing Classes</option>
        </select>
        
        </div>

         <button>GET STARTED</button>
    
        <p>#20 YEARS OF SERVICE<br></br> TO THE FITNESS & WELLNESS COMMUNITY<br></br> #HEREFORYOU<br></br>#HERETOSTAY</p> 
      </div>
      <div className='experience'>
        <p>EXPERIENCED & INTERNATIONALLY CERTIFIED PERSONAL TRAINERS</p>
        <span>THE BEST FITNESS EXPERIENCE IN KOLKATA</span>
        <p>We're are commited to bring out the best workout experience</p>
     
      <div className='facility'>
        <div className='box'><img src='body.jpg'></img><h1>Body composition Assessment</h1></div>
        <div className='box'><img src='day.jpg'></img><h1>Open 7 days a week</h1></div>
        <div className='box'><img src='park.jpg'></img><h1>Complimentary Valet Parking</h1></div>
        <div className='box'><img src='clean.jpg'></img><h1>Clean, Comfortable and Safe</h1></div>

      </div>
      <div className='today'>
       <Link to="Membership"><button>Know more!</button></Link> 
      </div>
      </div>
      <div className='container'>
      <div className='photo'>
        <span>EXPERIENCE THE ENVIRONMENT OF UPLINE GYM</span>
        <p>The best group classes in kolkata</p>
        <div className='content'>
        
        {/* <button  id='prevslide' className='symbol'><FontAwesomeIcon icon={fas.faChevronLeft} /></button> */}
        <div className='images'>
        <div id='Slider-img1'></div>
        <div id='Slider-img2'></div>
        <div id='Slider-img3'></div>
        <div id='Slider-img4'></div>
        <div id='Slider-img5'></div>

</div>


     
      </div>
      <div className='see'>
      <Link to="Gallery"><button>see more</button></Link>
      </div>
      </div>
      </div>

       
    
    
    
</>
  )
}

export default Background
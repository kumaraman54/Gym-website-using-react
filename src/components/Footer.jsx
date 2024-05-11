import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas} from "@fortawesome/free-solid-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons'
import LocationBase from '../utils/LocationBase'

const Footer = () => {
  return (
    <>
             <div className='footer'>
     <div className='location'>
      <span>OUR LOCATION:</span>
      <p>Building 7th Floor, Park Centre, 24, Mother Teresa Sarani, Park Street area, Kolkata, West Bengal 700016</p>
      <p>Phone: +9122 6678 7970<br></br>
        Email: info@uplinefitness.com</p>
        <div className='social-icons'>
          <p>Social Media</p>
          <div className='icon'>
           <div className='fb'><FontAwesomeIcon icon={fab.faFacebook}/></div>
           <div className='insta'><FontAwesomeIcon icon={fab.faInstagram}></FontAwesomeIcon></div>
     <div className='gmail'><a href="mailto:routhaman831@gmail.com"><FontAwesomeIcon icon={fas.faEnvelopeOpen} /></a></div>

           </div>
      </div>

      </div>
      <div className='sitemap'>
        <span>SITEMAP</span>
        <LocationBase />
      </div>
    
     </div>
     <div className='copyright'>
      <p>© Copyright 2024 Heavenly Fitness & Health Pvt. Ltd. All Rights Reserved .</p>
      <span>Made with ❤ by Aman Kumar Routh</span>
     </div>
    </>
  )
}

export default Footer
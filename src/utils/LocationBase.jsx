import React from 'react'

const LocationBase = () => {
  return (
    <>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.753426802833!2d88.34918789678957!3d22.550907599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771b68bf18df%3A0x46dd6e584497b945!2sPark%20Center%20Building!5e0!3m2!1sen!2sin!4v1715016572714!5m2!1sen!2sin" 
        width="400" 
        height="300" 
        style={{border:0,borderRadius:"5px"}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </>
  )
}

export default LocationBase
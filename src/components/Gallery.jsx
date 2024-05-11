import React, { useRef, useState } from 'react'
import './styles/gallery.css'


const Gallery = () => {
  const [model,setModel] = useState(false)
      const data=[
        {
          id:"1",
          imgsrc:"gy1.jpg"
        },
        {
          id:"2",
          imgsrc:"gy8.jpg"
        },
        {
          id:"3",
          imgsrc:"gy3.jpg"
        },
        {
          id:"4",
          imgsrc:"gy12.jpg"
        },
        {
          id:"5",
          imgsrc:"gy5.jpg"
        },
        {
          id:"6",
          imgsrc:"gy6.jpeg"
        },
        {
          id:"7",
          imgsrc:"gy7.jpg"
        },
        {
          id:"8",
          imgsrc:"gy4.jpg"
        },
        {
          id:"9",
          imgsrc:"gy9.png"
        },
        {
          id:"10",
          imgsrc:"gy10.jpeg"
        },
        {
          id:"11",
          imgsrc:"gy11.jpeg"
        },

      ]

      const video =[
        {
          id:'1',
          poster:'pos1.jpeg',
          videourl:'vid2.mp4',
        },
        {
          id:'1',
          poster:'pos3.jpeg',
          videourl:'vid4.mp4',
        }
      ]
  return (
    <>
    <section><h1>PHOTOS</h1>
    <div className='gallery'>
      {data.map((item,index)=>{
        return (
          <div className='gal-img' key={index}>
          <img src={item.imgsrc} ></img>
          </div>
        )
      })}
    </div>
    </section>
    <section><h1>VIDEOS</h1>
    <div className='video'>
       
       { video.map((item,index)=>{
        let divRef = useRef(null);

        const openModel  = ()=>{
       
          divRef.current.classList.remove('vid-content')
          divRef.current.classList.add('model')
          setModel(true);
        }
        const closeModel  = ()=>{
          divRef.current.classList.add('vid-content')
          divRef.current.classList.remove('model')
          setModel(false);
        }
        return(
          <div ref={divRef} className='vid-content' key={index}>
          {model && <button className='btn-close' onClick={()=>closeModel()}>X</button>}
          <div className='vid-detail' onClick={()=>openModel()} >
              <video style={{width:'100%'}} 
              autoPlay={model}
              controls={['PlayPause','Seek','Time','Volume','Fullscreen']}
              poster= {item.poster}
              >
              <source src={item.videourl} type='video/mp4'></source>

              </video>

          </div>

          </div>
        )

        })
       }
    </div>
    </section>
    </>
  )
}

export default Gallery
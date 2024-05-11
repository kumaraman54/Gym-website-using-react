import React, { useEffect, useState } from 'react'
import './styles/blog.css'
const Blog = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const divs = Array.from(document.querySelectorAll(".blg-div"));



  const handleScroll = (e) => {
    if(window.scrollY){
      setScrollPosition(window.scrollY);
    }
  }

  useEffect(()=>{
    if(scrollPosition > 300 ){
      divs.forEach((div)=>{
        div.classList.add("animate");
      })
    }
    
  },[scrollPosition])
  const blog=[{
    name:"shivam",
    span1:"Great experience, great machines, and great staff",
    para:" I've tried it once when i was in Kolkata and it was great. The cardio machines were separated which is quite good to prevent the noise, the machines were quite maintained, and there is quite good set of different machines. ",
    datename:"Date of experience:",
    date:"February 2024.",
    logo:"url(boy.jpg)",
    delay:"delay-100"

  }
,
{
  name:"aman",
  span1:"The trainers at upline fitness have helped me reach my fitness goals beyond anything I could’ve hoped for. ",
  para:"Joining Upline Fitness Within has been life changing. They have helped me learn how to eat well while achieving my goals of losing weight and getting stronger. The coaches are all so nice and supportive.",
  datename:"Date of experience:",
  date:"March 2024.",
  logo:"url(boy.jpg)",
  delay:"delay-200"
},
{
  name:"Kalyan",
  span1:"The trainers at upline fitness have helped me reach my fitness goals beyond anything I could’ve hoped for. ",
  para:"Joining Upline Fitness Within has been life changing. They have helped me learn how to eat well while achieving my goals of losing weight and getting stronger. The coaches are all so nice and supportive.",
  datename:"Date of experience:",
  date:"March 2024.",
  logo:"url(boy.jpg)",
  delay:"delay-300"
},
{
  name:"shwet",
  span1:"The trainers at upline fitness have helped me reach my fitness goals beyond anything I could’ve hoped for. ",
  para:"Joining Upline Fitness Within has been life changing. They have helped me learn how to eat well while achieving my goals of losing weight and getting stronger. The coaches are all so nice and supportive.",
  datename:"Date of experience:",
  date:"March 2024.",
  logo:"url(boy.jpg)",
  delay:"delay-400"
}
]

 document.addEventListener('scroll', handleScroll);
  return (
    <>
    <div className='blg-content'>
    <div className='blg-desc'>
    <div>
    <span>Our Success Stories</span>
    <p>WHAT CLIENT'S SAY </p>
    </div>
    </div>
       <div className='blg-detail'>
       <h2> Testimonials </h2>
       {
          blog.map((blogg,i)=>(
        <div className={`blg-div ${blogg.delay}`}>
       
            <div className='blg-img' >
          <div style={{backgroundImage:blogg.logo}}>
           </div>
           <p>{blogg.name}</p>
          </div>
          <div className='blg-para'>
              <span>{blogg.span1}</span>
              <p>{blogg.para}</p>
               <div><b>{blogg.datename}</b>{blogg.date}</div>
              </div>
              </div>
          ))
            }
     
      </div> 
      
    </div>
    <div className='reviews'>
        <div className='rev-form'>
        <h1>Send A Message</h1>
        <div>
        <input type='text' name='name' id='name' placeholder='FirstName'></input>
        <input type='text' name='name' id='name' placeholder='LastName'></input>

        </div>
        <div className='row1'>
        <input type='number' name='number' id='number' placeholder='Number'></input>
        <input type='Email' name='email' id='email' placeholder='Enter Valid Email address'></input>
        </div>
        <div className='row2'>
        <textarea id="freeform" name="freeform" rows="4" cols="50" placeholder='Enter Your Message'></textarea>
        </div>
        <div className='form-btn'>
          <button>Submit</button>
        </div>
        </div>
        <div className='msg'>
          <p>We Would Love To Hear From You!</p>
          <span>REVIEWS</span>
        </div>
       
      </div>
      <div className='note'>
        <p>*This review is the subjective opinion of a Upline fitness member. Upline fitness performs checks on reviews as part of our industry-leading trust & safety standards. Read our transparency report to learn more.</p>
        </div>
      </>
  )
}

export default Blog


       {/* <div className='disc'>
            <p>
              This review is the subjective opinion of a Upline fitness member. Upline fitness performs checks on reviews as part of our industry-leading trust & safety standards. Read our transparency report to learn more.
              </p>
          </div> */}
import React,{useState,useEffect} from 'react'
import './styles/member.css'
import Tab from './Tab'
import Drop from './Drop'
import Sidebar from './Sidebar'




const Membership = () => {

  const [key, setKey] = useState("pass");
  const [pack, setPack] = useState(0);

  const objectArr ={
    pass : [
      {
          title: "Basic Plan",
          desc:  "Reserve upto 5 workouts at any fitness center in the network",
          discardPrice: "₹ 2500",
          price: "₹ 1200",
          time: "1 month",
          id: "fs-01",
          logo: "red",
          addmsg: "Falana wali ke pyaar mein"
      },
      {
        title: "Intermediate Plan",
        desc: "Reserve upto 10 workouts at any fitness center in the network",
        discardPrice: "₹ 4000",
        price: "₹ 2000",
        time: "1 month",
        id: "fs-02",
        logo: "red",
        addmsg: "Falana wali ke pyaar mein"
    },
    {
      title: "Premium Plan",
      desc: " Unlimited Workout Reservation",
      discardPrice: "₹ 8000",
      price: "₹ 4000",
      time: "3 month",
      id: "fs-03",
      logo: "red",
      addmsg: "Falana wali ke pyaar mein"
  }
    ],
    feast : [
      {
          title: "1 Month Membership",
          desc: "Experts nutrional advice for guaranteed results ",
          discardPrice: "",
          price: "₹ 1270",
          time: "1 month",
          id: "sec-01",
          logo: "red",
          addmsg: "Falana wali ke pyaar mein"
      },
      {
          title: "3 Month Membership",
          desc: "Experts nutrional advice for guaranteed results",
          discardPrice: "",
          price: "₹ 3200",
          time: "3 month",
          id: "sec-02"
      },
      {
          title: "Uplinefeast",
          desc: "Experts nutrional advice for guaranteed results",
          discardPrice: "",
          price: "₹ 7000",
          time: "6 month",
          id: "sec-03"
      }
  ],
  coach : [
    {
        title: "UPLINECOACH",
        desc: "Self evolutionary fitness coach",
        discardPrice: "₹ 499",
        price: "₹ 249",
        time: "1 month",
        id: "th-01",
        logo: "red",
        addmsg: "Falana wali ke pyaar mein"
    },
    {
        title: "UPLINECOACH",
        desc: "Self evolutionary fitness coach",
        discardPrice: "₹ 1200",
        price: "₹ 600",
        time: "3 month",
        id: "th-02"
    },
    {
        title: "UPLINECOACH",
        desc: "Self evolutionary fitness coach",
        discardPrice: "",
        price: "₹ 2300",
        time: "6 month",
        id: "th-03"
    }
  ],
  online : [
    {
        title: "UPLINETV",
        desc: "Get the best of fitness with unlimited access to to-notch online workouts",
        discardPrice: "₹ 500",
        price: "₹ 199",
        time: "1 month",
        id: "fr-01",
        logo: "vite.svg",
        addmsg: "Falana wali ke pyaar mein"
    },
    {
        title: "UPLINETV",
        desc: "Get the best of fitness with unlimited access to to-notch online workouts",
        discardPrice: "₹ 1500",
        price: "₹ 324",
        time: "3 month",
        id: "fr-02"
    },
    {
        title: "UPLINETV",
        desc: "Get the best of fitness with unlimited access to to-notch online workouts",
        discardPrice: "3000",
        price: "₹ 600",
        time: "6 month",
        id: "fr-03"
    }
  ]
    
  }
  
  useEffect(()=>{
    console.log(objectArr[key]);
}, [key])
  return (
    <>
    <div className='val'>
    <div className='pic'>
    <div id='bg-img1'></div>
        <div id='bg-img2'> </div>
        <div id='bg-img3'></div>
        <div id='bg-img4'></div>
        <div id='bg-img5'></div>
       
      
 
    </div>
    <div className='line'>
        <span>MEMBERSHIP</span>
        <p>Take your fitness journey to the next level with a<br></br> gym membership
        We are all about you and it's our<br></br> privilage to serve you</p>
      </div> 
    </div>
        <div className='wrapper'>
          <div className='left'>
          <h1>Complete fitness solution</h1>
            <Tab
                whatsKey={setKey}
                whichPack={setPack}
              />
            
            <Drop 
              objArr = {objectArr[key]}
              whichPack= {setPack} 
            />
          
          </div>
          <div className='right'>
            <h1>Order details</h1>
            <Sidebar  selectedObj={objectArr[key][pack]}/>
          </div>
        </div>
        <div className='mem-details'>
        <div className='mem-content'>
          <div className='text'>
          <span>UPLINE FITNESS: A 20-YEAR FITNESS LEGACY!</span>
          <h2>Unleash Your Potential with World-Class Facilities and Expert Trainers</h2>
          <p>At Upline fitness, we believe in empowering your fitness journey with our internationally<br></br>certified personal trainers, state-of-the-art equipment, and a welcoming environment. Our<br></br>newly renovated 10,000 Sq. Ft. gym floor is equipped with top-tier brands like Life Fitness,<br></br>Nautilus, Cybex, and Matrix, ensuring a premium workout experience.</p>
          <h2>Diverse Workouts for Every Fitness Level</h2>
          <p>Whether you’re a beginner or a fitness enthusiast, our over 150 group fitness classes,<br></br>including Yoga, Zumba, Tabata, and Kickboxing, cater to every preference. Dive into our High-<br></br>Intensity Interval Training (HIIT) for strength and stamina, or challenge yourself in our 1500 Sq<br></br>Ft. outdoor CrossFit area, TRX bands, and more.</p>
          </div>
          <div className='mem-form'>
            <span>Contact Us <br></br>Today!</span>
            <div className='mem-input'>
         <input type='text' name='name' id='name' placeholder='Name'></input>
          <input type='Email' name='email' id='email' placeholder='email'></input>
        <input type='number' name='number' id='number' placeholder='Number'></input>
        </div>
        <div className='mem-check'>
        <input type="checkbox" id="click" name="click" value="click"/>
            <label for="click"> I am interested at <b>Membership</b> at<br></br> Upline fitness parkstreet,kolkata.<br></br>Please call me!</label></div>
            <div className='mem-send'>
            <div className='mem-btn'>
            <button>Send</button>
            </div>
          </div>
          </div>
        
        </div>
        </div>
    
    </>
  )
}

export default Membership
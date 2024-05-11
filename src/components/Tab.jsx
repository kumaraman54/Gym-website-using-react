import React from 'react'

const Tab = ({whatsKey, whichPack}) => {
    const clickHandler = (e) => {
        let key = e.target.id;
        whatsKey(key);
        whichPack(0);
        console.log(e.target.id);
    }
  return (
    <div className='tab'>
     <input type="radio" name="menu" value="pass" id="pass" onClick={clickHandler} defaultChecked/>
     <label htmlFor="pass">UPLINEPASS</label>
     <input type="radio" name="menu" value="feast" id="feast" onClick={clickHandler}/>
     <label htmlFor="feast">UPLINEFEAST</label>
     <input type="radio" name="menu" value="coach" id="coach" onClick={clickHandler}/>
     <label htmlFor="coach">UPLINECOACH</label>
     <input type="radio" name="menu" value="online" id="online" onClick={clickHandler}/>
     <label htmlFor="online">UPLINEONLINE</label>
    </div>
  )
}

export default Tab
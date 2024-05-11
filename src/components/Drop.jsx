import React from 'react'

const Drop = ({objArr, whichPack}) => {
    const changeHandler = (e) => {
        let pack = e.target.value;
        whichPack(pack);
    }

  return (
    <div className='drop'>
    {
        objArr.map((obj, index)=>{
                const {id, title, desc, discardPrice, price, time} = obj
            
       return <div className='list-item' key={id}>
            <input 
            type="radio" 
            name="package" 
            value={index}  
            id={id} 
            onClick={changeHandler}
            // some conditions to make first default checked
            defaultChecked={index===0}
            ></input>
            <label htmlFor={id}>
                <div className='info'>
                    <h1>{title}</h1>
                    <p className='desc'>{desc}</p>
                </div>
                

                <div className="price">
                    <span className='discounted'> {discardPrice}</span><strong>{price}</strong><span className='time'>/{time}</span>
                </div>
            </label>

        
        </div>
    })
    }
    </div>
  )
}

export default Drop
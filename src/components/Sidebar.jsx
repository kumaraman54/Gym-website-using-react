import React from 'react'

const Sidebar = ({selectedObj}) => {
  const {logo, title, time, price, addmsg} = selectedObj;
  return (
    <>
    <div className='plan'>
    <div className='sidebar'>
      <div className='start'>
        <div className='logo'></div>
        <div className='time'>
          <h2>{title}</h2>
          <p>{time} Membership</p>
        </div>
      </div>
      <div className="price">{price}</div>
    </div>
    { addmsg && <div className='add'>
            <p>{addmsg}</p>
    </div>}
    <div className='coupon'>
      <input type='text' name='text' id='text' placeholder='Have a coupon code?'></input>
      <button>Apply</button>
    </div>
    <div className='amount'>
      <p>Payable Amount</p>
      <span> {price}</span>
    </div>
    <div className="pay">
      <button>Pay {price}</button>
  </div>
  </div>
    </>
  )
}

export default Sidebar
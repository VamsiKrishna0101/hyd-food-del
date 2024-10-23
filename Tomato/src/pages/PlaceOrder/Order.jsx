import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../components/content/StoreContext'
const Order = () => {
  const {gettotalcartamount}=useContext(StoreContext)
  const totalAmount = gettotalcartamount()||0;
  const deliveryFee = totalAmount === 0 ? 0 : 2;
  return (
    <div className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='info'>
        <div className="multifields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <div className="multifields" id='ema' >
        <input type="email" placeholder='Enter Email' />
        </div>
        <div className="multifields" id='str'>
        <input type="Text" placeholder='Street' />
        </div>
        <div className="multifields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multifields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <div className="multifields">
        <input type="text" placeholder='Enter Phone Number' />
        </div>
        </div>
      </div>
      <div className='place-order-right'>
      <div className='cart-total'>
           <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>${totalAmount}</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${deliveryFee}</p>
              </div>
              <div className="cart-total-details">
                <p>Total</p>
                <p>${totalAmount+deliveryFee}</p>
              </div>
            </div>
            <hr />
            <button className='payment'> Proceed To payment</button>
         </div>
      </div>
    </div>
  )
}

export default Order
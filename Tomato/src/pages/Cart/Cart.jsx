import React, { useContext } from 'react';
import { StoreContext } from '../../components/content/StoreContext'; // Correct import path
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { food_list, CartItems, removefromcart, gettotalcartamount } = useContext(StoreContext);
  const navigate = useNavigate();
  const totalAmount = gettotalcartamount()||0;
  const deliveryFee = totalAmount === 0 ? 0 : 2;

  return (
    <div className='Cart'>
      <div className='cart-title'>
        <div className='cart-items'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (CartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items cart-items-item'>
                  <p><img src={item.image} alt={item.name} className='cart-item-image' /></p>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p className='quantity'>{CartItems[item._id]}</p>
                  <p>${(item.price * CartItems[item._id])}</p>
                  <p><button className='pp' onClick={() => removefromcart(item._id)}>x</button></p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${(totalAmount + deliveryFee).toFixed(2)}</p>
            </div>
          </div>
          <hr />
          <button onClick={() => navigate('/Order')}>Proceed To CheckOut</button>
        </div>
        <div className="promo-code">
          <div>
            <p>If you have a promo code, enter it here:</p>
            <div className="promo-code-hold">
              <input type="text" placeholder='promo-code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets'; // Ensure this import is correct
import { StoreContext } from '../content/StoreContext';
const FoodItem = ({ id, name, price, description, image }) => {
  const[itemcount,setitemcount]=useState(0);
  const{CartItems,addtocart,removefromcart}=useContext(StoreContext)
  return (
    <div className='Food-Item'>
      <div className="food-item-img-container">
        <img className='food-Image' src={image} alt={name} />
        {
          !CartItems[id]?<img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white}/>:
          <div className='food-counter'>
            <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
            <p>{CartItems[id]}</p>
            <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className='Food-Info'>
        <div className="item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className='food-descr'>{description}</p>
        <p className='food-price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

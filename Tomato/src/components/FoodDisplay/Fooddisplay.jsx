import React, { useContext } from 'react';
import { StoreContext } from '../content/StoreContext';
import './Fooddisplay.css';
import FoodItem from '../FoodItem/FoodItem';
const Fooddisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='Food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>
      <div className='Food-display-list'>
        {food_list.map((item, index) => {
          if(category==="All"||category==item.category){
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          );
        }
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;

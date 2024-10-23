import { createContext, useState } from "react";
import { food_list } from "../../assets/assets"; // Ensure this import is correct
import { useEffect } from "react";

export const StoreContext = createContext(null);
const url="http://localhost:4000"
const StoreContextProvider = (props) => {
  const [CartItems, setCartItems] = useState({});
  const[token,settoken]=useState("")
  const addtocart = (itemid) => {
    setCartItems((prev) => ({
      ...prev,
      [itemid]: (prev[itemid] || 0) + 1,
    }));
  };

  const removefromcart = (itemid) => {
    setCartItems((prev) => {
      if (prev[itemid] === 1) {
        const { [itemid]: _, ...rest } = prev;
        return rest;
      } else {
        return {
          ...prev,
          [itemid]: prev[itemid] - 1,
        };
      }
    });
  };
  const gettotalcartamount = () => {
    return food_list.reduce((total, item) => {
      const quantity = CartItems[item._id] || 0;
      return total + item.price * quantity;
    }, 0);
  };
  
  const cartcount=()=>{
    let count=0;
    for(const item in CartItems){
       count+=CartItems[item]
    }
    return count
  };
  useEffect(()=>{
    if(localStorage.getItem("token")){
      settoken(localStorage.getItem("token"))
    }
  },[])
  const contextValue = {
    food_list,
    CartItems,
    setCartItems,
    addtocart,
    removefromcart,
    gettotalcartamount,
    cartcount,
    url,
    token,
    settoken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

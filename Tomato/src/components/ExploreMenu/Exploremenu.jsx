import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'
const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='Explore-Menu' id='explore-menu'>
        <h1>Explore Our menu</h1>
        <p>Choose From Our Wide variety of Styles From here
            Our Mission Is To Satisfy Your Carving Stomach With Our 
            Wide Variety of Delicious Foods.Order Now
        </p>
        <div className='explore-menu-items'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key ={index} className='explore-menu-list'>
                        <img className={category===item.menu_name?"Active":""} src={item.menu_image} alt="" />
                        <p className='item-name'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='ihr'/> 

    </div>
  )
}

export default Exploremenu
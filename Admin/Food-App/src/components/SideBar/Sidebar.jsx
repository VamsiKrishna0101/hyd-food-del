import React from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='SideBar'>
        <div className="side-bar-options">
            <NavLink to='/add' className="option">
                <img src={assets.add_icon} />
                <p>Add item</p>
            </NavLink>
            <NavLink to='/list' className="option">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/order' className="option">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
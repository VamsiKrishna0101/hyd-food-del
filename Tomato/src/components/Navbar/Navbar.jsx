import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link,useNavigate } from 'react-router-dom';
import { StoreContext } from '../content/StoreContext';

const Navbar = ({ setshowlogin }) => {
  const [menu, setmenu] = useState('menu');
  const { gettotalcartamount,cartcount,token,settoken} = useContext(StoreContext);
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem("token")
    settoken("")
    navigate("/")
  }
  return (
    <div className='Navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="Logo" /></Link>
      <ul className='navbar-menu'>
        <li><Link to='/' onClick={() => setmenu('menu')} className={menu === 'menu' ? 'active' : ''}>Home</Link></li>
        <li><a href='#explore-menu' onClick={() => setmenu('Menu1')} className={menu === 'Menu1' ? 'active' : ''}>Menu</a></li>
        <li><a href='#app-download' onClick={() => setmenu('Mobile-App')} className={menu === 'Mobile-App' ? 'active' : ''}>Mobile-App</a></li>
        <li><a href='#footer' onClick={() => setmenu('About')} className={menu === 'About' ? 'active' : ''}>About Us</a></li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" />
        <div className='navbar-shop-icon'>
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Basket" />
            {gettotalcartamount() > 0 && <div className='dot'>{cartcount()}</div>}
          </Link>
        </div>
        {!token? <button onClick={() => setshowlogin(true)}>Sign In</button>:
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
             <div className="profile-dropdown">
               <li><img src={assets.bag_icon} />Orders</li>
               <hr />
               <li onClick={logout} ><img src={assets.logout_icon} />LogOut</li>
             </div>
          </div>
        }
      </div>
    </div>
  );
};
export default Navbar;

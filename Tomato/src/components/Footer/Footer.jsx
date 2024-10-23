import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer' id='footer'>
        <div className='footer-container'>
            <div className="footer-left">
                <img src={assets.logo} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam accusantium sed quaerat nulla non consequuntur exercitationem provident totam praesentium doloremque itaque culpa, deserunt voluptatum ex facilis molestiae inventore, officia eum reprehenderit.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 9876543210</li>
                    <li>tomato0101@gmail.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className='Footer-copyright'>copyright @2024 Tomato.com -All Rights Reserved</p>
    </div>
  )
}

export default Footer
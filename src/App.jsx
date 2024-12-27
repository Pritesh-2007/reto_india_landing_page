import { useState } from 'react'

import './App.css'
import rlogo from "./assets/r-letter-logo-vector.jpg";
import { ImSearch } from "react-icons/im";
import { LuLocate } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function App() {

  return (
    <>
      <div className='retopage'>
        <nav className='navbar'>
          <div className="divlogo">
        
          <img src={rlogo} height="100%" width="100%"/>

          </div>
          <div className="menu">
              
              <div>Home</div>
              <div>Products</div>
              <div>About</div>
             
              <div>Contact Us</div>
              <div>Login</div>

          </div>
          <div className="menu_end">
          <div className="tracker">Tracker  <LuLocate style={{paddingLeft:'10px'}}/> </div>                
          <div className="search">
          <ImSearch/>
          </div>
          </div>
  
        </nav>
        <main className ="diamond-box">
          <h1 className='gem-heading'>Track your gem</h1>
          <div className='order-form'>
          <label for="order-id">Your Order ID</label>
          <input type="text" id="order-id" name="order-id" placeholder="AOD1235..."/>
          <label for="registration">Registration No</label>
          <input type="text" id="registration" name="registration" placeholder="registartion no..."/>
          <label for="order-status">Order Status</label>
          <input type="text" id="order-status" name="order-status" placeholder="Order status.."/>
          <label for="details">Order Details</label>
          <textarea id="details" name="details" placeholder="Write details..."/>
          </div>
        
        </main>
        <div className='social'>
            <div style={{color:"aqua"}}><FaTwitter/></div>
            <div><FaFacebook style={{color:"blue"}}/></div>
            <div><FaInstagram style={{color:"pink"}}/></div>
            <div><FaLinkedin style={{color:"blue"}}/></div>
          </div>
      </div>
    </>
  )
}

export default App

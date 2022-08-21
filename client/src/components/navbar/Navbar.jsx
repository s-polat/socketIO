import React from 'react'
import './navbar.css'
import Notification from '../../img/bell-solid.svg'
import Message from '../../img/message.svg'
import Settings from '../../img/settings.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>Chat </span>
        <div className="icons">
            <div className="icon">
                <img src={Notification} className='iconImg' alt="" />
                <div className="counter">2</div>
            </div>
            <div className="icon">
                <img src={Message} className='iconImg' alt="" />
                <div className="counter">2</div>
            </div>
            <div className="icon">
                <img src={Settings} className='iconImg' alt="" />
                <div className="counter">2</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
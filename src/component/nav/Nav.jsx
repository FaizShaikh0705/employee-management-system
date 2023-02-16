import React, { Component } from 'react'
import './Nav.css'
import Logo1 from "../../assets/logo1.svg"
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

class Nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <nav id='navbar'>
        <div className="navbar1">
          <img className='logo1' src={Logo1} alt="logo_img1" href="#"/>
          <div className="navbar_option">
            <ul id='navbar_menu'className={this.state.clicked ? "navbar_menu active" : "#navbar_menu"}>
              <li><a href="HOme" className='navbar-list'>Home</a></li>
              <li><a href="Services" className='navbar-list'>Services</a></li>
              <li><a href="About" className='navbar-list'>About</a></li>
              <li><a href="Contact" className='navbar-list'>Contact</a></li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <div id='bars'>
            {this.state.clicked ? <FaBars /> : <FaTimes />}
          </div>
        </div>
        </div>
       
      </nav>
    )
  }
}

export default Nav
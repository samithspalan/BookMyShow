import React from 'react'
import logo from "./assets/logo.svg"
import "./App.css"
import Hamburger from "./assets/hamburger.png"
import Darkmode from "./assets/Darkmode.png"
function Header() {
  return (
    <nav>
    <img src={logo} height="50"></img>
    <input placeholder="Search movie's here"></input>
    <select>
    <option value="bangalore">Bangalore</option>
    <option value="delhi">Delhi</option>
    <option value="mumbai">Mumbai</option>
    <option value="chennai">Chennai</option>
    <option value="kolkata">Kolkata</option>
    <option value="hyderabad">Hyderabad</option>
</select>
<button><img src={Darkmode}height="20"></img> Dark Mode</button>
 <div className='login'>sign in</div>
 <img src={Hamburger}height="30"></img>
   </nav>
  )
}

export default Header

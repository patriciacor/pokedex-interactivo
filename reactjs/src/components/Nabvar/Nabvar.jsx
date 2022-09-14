import React, { Fragment } from 'react';
import LogoP from "../../assets/logo.png";
import heart from "../../assets/Vector.png";
import "./Navbar.css";
const Nabvar = () => {
  return (
<Fragment>
 <div className="navbar">
  <img className='logo' src={LogoP} alt=""/>
  <img className='heart-img' src={heart} alt=""/>
 </div>

</Fragment>  )
}

export default Nabvar
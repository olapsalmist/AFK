import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './navbar.css'
import afk from '../images/afk2.jpg'

const navbar = () => {
  return (
    <div className='navb'>
      <div className='logo'>
      <img src={afk} alt=""/>
      <h2 >
        AFRICA-KITCHEN
      </h2>
      </div>
      <ul className='list'>
        <li><Link className='link' to='/'> Home </Link> &nbsp;<span>|</span></li>
        <li> <Link className='link' to='/Services'>Services </Link> &nbsp;<span>|</span></li>
        <li> <Link className='link' to='/AboutUs' >About Us </Link> &nbsp;<span>|</span></li>
        <li> <Link className='link' to='Contact'>Contact Us </Link></li>
      </ul>
    </div>
  )
}

export default navbar
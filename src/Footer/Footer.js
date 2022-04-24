import React from 'react'
import './footer.css'
import face from '../assets/face.png'
import twi from '../assets/twi.png'
import inst from '../assets/insta.png'

const Footer = () => {
  return (
    <div className='foot'>
      <div className='footnav'>
          <p> Product of AFricaKitchen &copy; 2022</p>
          <ul>
            <li>
              <img src={face} alt='' />        
            </li>
            <li>
              <img src={twi} alt='' />        
            </li>
            <li>
              <img src={inst} alt='' />        
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Footer
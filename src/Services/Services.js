import React from 'react'
// import Box from '../Box/Box'
import './services.css'
import amala from '../assets/amala.jpg'
import eba from '../assets/eba.jpg'
import abula from '../assets/abula.jpg'
import eko from '../assets/eko.jpg'
import fufu from '../assets/fufu.jpg'
import iyan from '../assets/iyan.jpg'
import moimoi from '../assets/moi-moi.jpg'
import ogi from '../assets/ogi.jpg'
import rice from '../assets/rice.jpg'
import efo from '../assets/efo riro.jpg'


const Services = () => {

  const foods = [
    {d: 1, foodname: 'Amala', Image: amala, Price: '#1500'},
    {d: 1, foodname: 'Abula', Image: abula, Price: '#1000'},
    {d: 1, foodname: 'Eba', Image: eba, Price: '#1350'},
    {d: 1, foodname: 'Eko & Moi-moi', Image: eko, Price: '#1100'},
    {d: 1, foodname: 'Fufu', Image: fufu, Price: '#1500'},
    {d: 1, foodname: 'Iyan', Image: iyan, Price: '#2500'},
    {d: 1, foodname: 'Moi-moi', Image: moimoi, Price: '#500'},
    {d: 1, foodname: 'Ogi-Akara', Image: ogi, Price: '#1000'},
    {d: 1, foodname: 'Rice', Image: rice, Price: '#1200'},
    {d: 1, foodname: 'Efo Riro', Image: efo, Price: '#1200'}

  ]

  return (
    <div className='main-service'>
      <div className='intro'>
        <h1>
          Find below our African foods at a TakeAway price
        </h1>
      </div>
      
      <div className='boxall'>
        {
          foods && foods.map((food)=>
            <div className='cards'>
                  <div className='img'>
                    <img src={food.Image} alt=''  />
                  </div>
                  <h4>{food.foodname} </h4>
                  <h4>{food.Price} </h4>
                  <button> ADD TO CART</button>
            </div> 
          )
        }
      </div>
    </div>
  )
}

export default Services
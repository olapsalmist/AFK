import React from 'react';
import Button from '../button/Button';
// import Caro from '../carousel/caro';
import './homepage.css';
import { Link } from 'react-router-dom';
import afk from '../images/afk2.jpg'
// import { useNavigate } from 'react-router-dom';


const Box = () => {
  // const navigate = useNavigate();

  return (
    <div className='bg'>
     {/* <img src='./images/capstone.jpg' alt=''/> */}
      <div className='bbg'>
          <div >
            <div className='biglogo'> 
              <img src={afk} alt='' />
            </div>
            <h1>
              AFrica-Kitchen
            </h1>
            <h3>
              for all sorts of african Delicacies
            </h3> 
            <div className='bktop'>
                <Link to='/Services'> <Button  text={'ORDER HERE'} /> </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Box
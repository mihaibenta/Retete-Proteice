import React from 'react'
import {FiHeart,FiCoffee} from 'react-icons/fi'
const Footer = () => {
    return (
        <footer className='page-footer'>
            <div>
                <p>  &copy; {new Date().getFullYear()} <span> ReteteProteice</span> </p>
            </div>
            <div>
               <a href='https://portfolio.mihaibenta.com' target='blank'> 
               <p> Coded with <span className='icons'><FiHeart/></span>  and  <span className='icons'><FiCoffee/></span></p> 
               </a>
            </div>
        </footer> 
         
    )
}

export default Footer

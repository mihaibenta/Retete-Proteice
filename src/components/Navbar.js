import React,{useState} from 'react'
import {Link} from 'gatsby'
import {FiAlignJustify} from 'react-icons/fi'
import {StaticImage} from 'gatsby-plugin-image'
const Navbar = () => {
    const [show,setShow] =useState(false)
    
    return (
       <nav className='navbar'>
           <div className="nav-center">
               <div className="nav-header">
                <Link to='/'>
                    <StaticImage src='../assets/images/logo.png' 
                    alt='eggs'
                    className='testing_img'
                    placeholder='tracedSVG' 
                    layout='fullWidth'>

     </StaticImage>
                </Link>
                <button className='nav-btn'onClick={()=>setShow(!show)}>
                    <FiAlignJustify/>
                </button>
                </div>
                   <div className={show ? 'nav-links show-links':'nav-links'}>
                        <Link to='/' 
                            className='nav-link'
                            activeClassName='active-link'
                            onClick={()=>setShow(false)}
                        >
                            Acasă
                        </Link>
                        <Link to='/recipes' 
                            className='nav-link'
                            activeClassName='active-link'
                            onClick={()=>setShow(false)}>
                            Rețete
                        </Link>
                        <Link to='/tags' 
                            className='nav-link'
                            activeClassName='active-link'
                            onClick={()=>setShow(false)}>
                            Tags
                        </Link>
                        <Link to='/about' 
                            className='nav-link'
                            activeClassName='active-link'
                            onClick={()=>setShow(false)}>
                            Despre
                        </Link>
                        <div className='nav-link contact-link'>
                        <Link to='/contact' 
                            className='btn'
                            onClick={()=>setShow(false)}>
                            Contact
                        </Link>
                        </div>
                   
               </div>
           </div>
       </nav>
    )
}

export default Navbar

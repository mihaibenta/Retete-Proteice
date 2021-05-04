import React from "react"
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import AllRecipes from '../components/AllRecipes'
import Seo from '../components/Seo'
export default function Home() {
  return (
  
  <Layout>
    <Seo title='Home' />
   <main className='page'>
     <header className="hero">
       <StaticImage src='../assets/images/big.jpg' 
        alt='eggs'
        className='hero-img' 
        placeholder='tracedSVG' 
        layout='fullWidth'>

     </StaticImage>
     <div className="hero-container">
       <div className="hero-text">
         <h1>Rețete Proteice</h1>
         <h4>Sursa ta de alimente bogate în proteine</h4>
       </div>
     </div>
     </header>
    
   <AllRecipes/>
   </main>
  </Layout>
  )
}

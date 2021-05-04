import React from 'react'
import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'
import Seo from '../components/Seo'


const recipes = () => {
    return (
        <Layout>
            <Seo title='Retete'/>
         <main className='page'>
             <AllRecipes/>
         </main>
        </Layout>
    )
}



export default recipes

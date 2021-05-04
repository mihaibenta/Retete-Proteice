import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'



const Error = () => {
    return (
        <Layout>
        <Seo title='Error'/>
           <main className='error-page'>
                <section>
                    <h1>404</h1>
                    <h3>Niciun rezultat</h3>
                </section>
                                   
           </main>
        </Layout>
    )
} 



export default Error

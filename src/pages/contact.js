import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'



const Contact = () => {
    return (
        <Layout>
            <Seo title='Contact'/>
            <main className='page'>
               <section className="contact-page">
                   <article className='contact-info'>
                   <h3>Aici e titlu</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi soluta corporis tempora adipisci repellendus, facilis dolores iste vitae velit!</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi soluta corporis tempora adipisci repellendus, facilis dolores iste vitae velit!</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi soluta corporis tempora adipisci repellendus, facilis dolores iste vitae velit!</p>
                    </article>
                <article>
                    <form className='form contact-form'
                    action="https://formspree.io/f/xgeroneo"
                    method="POST">
                        
                        <div className='form-row'>
                            <label htmlFor='name'>Nume</label>
                            <input type='text' name='name' id='name'></input>
                        </div>
                         <div className='form-row'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' name='email' id='email'></input>
                        </div>
                        <div className="form-row">
                            <label htmlFor='message'>Mesaj</label>
                            <textarea name='message' id='message'></textarea>
                        </div>
                        <button type='submit' className='btn block'>
                            Trimite
                        </button>
                    </form>
                </article>
                </section>
            </main>    
           
        </Layout>
    )
}



export default Contact

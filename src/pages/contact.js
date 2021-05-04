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
                   <h3>Scrie-mi un mesaj</h3>
                   <p>Vrei să vorbim? Completează formularul alăturat și îți voi răspunde în cel mai scurt timp posibil.</p>
                   <p>Ai vreo retetă pe care vrei să o împărtășești cu noi? Scrie-mi și o să revin cu detalii. </p>
                   <p>Pot fi contactat de asemenea la adresele de mail: <span>sport@mihaibenta.com </span>și <span>webdev@mihaibenta.com</span></p>
                   <h3>Poftă bună!</h3>
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

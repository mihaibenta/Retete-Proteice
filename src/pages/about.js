import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import {Link,graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'
import Seo from '../components/Seo'


const About = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
    return (
        <Layout>
            <Seo title='About'/>
           <main className='page'>
                <section className='about-page'>
                    <article>
                        <h2>Sursa ta de alimente bogate în proteine</h2>
                        <p>Scopul site-ului este să îți ofere variante cât mai sănătoase pentru alimentele tale preferate, este perfect pentru persoanele care nu vor o dietă "clasică" și vor cât mai multă diversitate în alimentație.</p>
                        <p>Accesul este 100% gratuit, fără reclame sau sponsorizări. Toate alimentele prezentate sunt alegerea  mea personală.</p>
                        <p>Informațiile întâlnite pe site au caracter informativ și educațional, este responsabilitate fiecăruia dintre noi să filtreze informațiile întâlnite pe web. Dacă considerați ca este nevoie consultați medicul dvs. personal.</p>
                        <Link to ='/contact' className='btn'>
                            contact
                        </Link>
                    </article>
                    <StaticImage src='../assets/images/big.jpg' alt='Person Pouring Salt in Bowl'
                    className='about-img'
                    placeholder='tracedSVG'
                    />
                </section>
                <section className="featured-recipes">
                    <h2>Ceva bun</h2>
                    <RecipesList recipes={recipes}/>
                </section>
           </main>
        </Layout>
    )
}
export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`


export default About

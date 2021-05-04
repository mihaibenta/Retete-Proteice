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
                        <h2>Aici este titlul pentru about page</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt molestiae vero iusto sit beatae velit, mollitia quisquam ut sed earum officiis unde doloremque adipisci veritatis, nobis et distinctio corporis! Fugit?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit quam beatae, odit, repellendus consequuntur ipsa nostrum facere necessitatibus animi harum. Fugit in totam, consequuntur assumenda vitae necessitatibus laboriosam dolores?</p>
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

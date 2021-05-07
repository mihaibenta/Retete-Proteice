import React from 'react'
import {graphql,Link} from 'gatsby'
import {GatsbyImage,getImage} from 'gatsby-plugin-image'
import {BsClockHistory, BsClock, BsPeople} from 'react-icons/bs'
import Layout from '../components/Layout'
import slugify from 'slugify'
import Seo from '../components/Seo'


const  RecipeTemplate = ({data}) => {
    
    const {title,
        cookTime,
        content,
        prepTime,
        servings,
        proteine,
        carbohidrati,
        grasimi,
        kcal,
        description:{description},
        image,   
        } 
        = data.contentfulRecipe
        const pathToImage = getImage(image)
        const {tags,instructions,ingredients,tools} = content
    return ( 
        <Layout>
            <Seo title={title} description={description}/>
        <main className='page'>
            <div className='recipe-page'>
                <section className='recipe-hero'>
                    <GatsbyImage image={pathToImage} alt={title}
                    className='about-img'/>
                    <article>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className="recipe-icons">
                        <article>
                            <BsClock/>
                            <h5>Timp Preparare</h5>
                            <p>{prepTime}</p>
                        </article>
                        <article>
                            <BsClockHistory/>
                            <h5>Timp Gătire</h5>
                            <p>{cookTime}</p>
                        </article>
                        <article>
                            <BsPeople/>
                            <h5>Serviri</h5>
                            <p>{servings}</p>
                        </article>
                        </div>
                        <p className="recipe-tags">
                            Tags: {tags.map((tag,index)=>{
                                const slug= slugify(tag, {lower:true})
                                return (
                                    <Link to={`/tags/${slug}`} key={index}>
                                    {tag}
                                    </Link>
                                    )
                            })}</p>  
                    </article>
                </section>
                <section className="recipe-content">
                    <article className='instructiuni'>
                        <h4>instrucțiuni</h4>
                        {instructions.map((item,index)=>{
                            return (<div key={index} className='single-instruction'>
                                    <header>
                                        <p>Pasul {index + 1}</p>
                                    </header>
                                    <p>{item}</p>
                            </div>)
                            
                        })}
                          <div className='nutrition'>
                            <h4>valori nutriționale per 100g* </h4>
                            <table>
                                <tbody>
                                <tr>
                                <th>Proteine</th>
                                <th>Carbohidrați</th>
                                <th>Grăsimi</th>
                                <th>Kcal</th>
                                </tr>
                                <tr>
                                    <td>{proteine}</td>
                                    <td>{carbohidrati}</td>
                                    <td>{grasimi}</td>
                                    <td>{kcal}</td>
                                </tr>
                                </tbody>
                            </table>
                            <p className='tabel-nutritie'> * Valorile nutriționale ale alimentelor au fost calculate înainte de gătire</p>
                        </div>
                    </article>
                    <article className='second-column'>
                        <div>
                            <h4>ingrediente</h4>
                            {ingredients.map((item,index)=>{
                                return <p key={index} className='single-ingredient'>
                                    {item}
                                </p>
                            })}
                        </div>
                         <div>
                            <h4>Ustensile</h4>
                            {tools.map((item,index)=>{
                                return <p key={index} className='single-tool'>
                                    {item}
                                </p>
                            })}
                        </div>
                    </article>
                    
                </section>
              
            </div>
        </main>
       </Layout> 
    )
}

export  const query = graphql`
query getSingleRecipe($title: String) {
  contentfulRecipe(title: {eq: $title}) {
    title
    cookTime
    content {
      ingredients
      instructions
      tags
      tools
    }
    description {
      description
    }
    proteine
    carbohidrati
    grasimi
    kcal
    prepTime
    servings
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
  }
}

`

export default RecipeTemplate

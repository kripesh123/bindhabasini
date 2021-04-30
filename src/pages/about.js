import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
const About = ({ data }) => {
    const {
        about
    } = data
    const { childContentfulAboutInfoTextNode, stack, title, image } = about
    const img = getImage(image)
    return (
        <Layout>
            <Seo title="About Us" description="Top Construction Company in South Lalitpur Nepal. Bindha Basini Construction, Best Construction Firm in Nepal South-Lalitpur Godawari Chapagaun." />
            <section className="about-page">
                <div className="section-center about-center">
                    <GatsbyImage image={img} alt={title} className="about-img" />
                    <article className="about-text">
                        <Title title={title} />
                        <p>{childContentfulAboutInfoTextNode.info}</p>
                        <div className="about-stack">
                            {stack.map(item => {
                                return <span key={item.id}>{item.title}</span>
                            })}
                        </div>
                    </article>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
{
    about: contentfulAbout(info: {}) {
        stack {
        id
        title
        }
        title
        childContentfulAboutInfoTextNode{
        info
        }
        image {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              layout: CONSTRAINED
            )
        }
    }   
  }
`

export default About
import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import Seo from "../components/SEO"

const Blog = ({
  data: {
    blogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="articles" />
      </section>
    </Layout>
  )
}

export const query = graphql`
{
    blogs: allContentfulBlog {
      nodes {
        category
        slug
        description
        date(formatString: "MMMM Do, YYYY")
        id
        title
        image {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              layout: CONSTRAINED
            )
          }
      }
    }
  }
  
`
export default Blog
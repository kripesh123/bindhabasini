import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Jobs from "../components/Jobs"
import Services from "../components/Services"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Newsletters from "../components/Newsletters"

export default ({ data }) => {
  const {
    allContentfulJob: { nodes: jobs },
    allContentfulProject: { nodes: projects },
    allContentfulBlog: { nodes: blogs },
  } = data

  return (
   <Layout>
     <SEO title="Bindha Basini Construction" description="Top Construction Company in South Lalitpur Nepal. Bindha Basini Construction, Best Construction Firm in Nepal South-Lalitpur Godawari Chapagaun. " />
     <Hero />
     <Services />
     <Jobs jobs={jobs} title="products" showLink/>
     <Projects projects={projects} title="accomplished projects" showLink/>
     <Blogs blogs={blogs} title="latest articles" showLink />
      <Newsletters />
   </Layout>
  )
}

export const query = graphql`
  {
    allContentfulJob(sort: { fields: company }, limit: 3) {
      nodes {
        id
        company
        date
        position
        description {
          id
          name
        }
      }
    }
    allContentfulProject(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description {
          description
        }
        title
        url
        stack {
          id
          title
        }
      }
    }
    allContentfulBlog(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        description
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
      }
    }
  }
`


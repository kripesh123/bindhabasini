import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Services from "../components/Services"
import Experiences from "../components/Experiences"
import Hero from "../components/Hero"
import Newsletters from "../components/Newsletters"

const App = () => {
  return (
   <Layout>
     <Seo title="Bindha Basini Construction" description="Top Construction Company in South Lalitpur Nepal. Bindha Basini Construction, Best Construction Firm in Nepal South-Lalitpur Godawari Chapagaun. " />
     <Hero />
     <Services />
     <Experiences/>
     <Newsletters />
   </Layout>
  )
}

export default App
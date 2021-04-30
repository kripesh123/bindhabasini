import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Seo from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <Seo title="You're Lost" />
      <main className="error-page">
        <div className="error-container">
          <h1>oops ! <br/> are you lost ?</h1>
          <Link to="/" className="btn">
            back to home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
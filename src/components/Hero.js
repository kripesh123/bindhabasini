import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Bindha Basini Construction</h1>
            <h4>Best Construction Company in Nepal, (South) Lalitpur, <br/> Godawari-Chapagaun</h4>
            <Link to="/inquiry" className="btn">
              contact us
            </Link>
            <SocialLinks />
          </div>
        </article>
        <StaticImage 
        src="../assets/bhai.png" 
        alt="Owner Image" 
        className="hero-img" 
        placeholder="blurred"
        layout="fullWidth"
        />
      </div>
    </header>
  )
}

export default Hero
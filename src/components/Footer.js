import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> Best Construction Company Lalitpur Nepal - Bindha Basini Construction  </span> all rights reserved
        </h4>
        <h4>
          powered by <a href="https://kripeshbista.com"><span> Kripesh Bista </span></a>
        </h4>
      </div>
    </footer>
  )
}

export default Footer

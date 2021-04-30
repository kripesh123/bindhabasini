import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/bindhabasiniconstruction/",
  },
  {
    id: 2,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://youtube.com/bindhabasiniconstruction",
  },
  {
    id: 3,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/bindhabasiniconstruction",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/bindhabasiniconstruction",
  },
  {
    id: 5,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://youtube.com/bindhabasiniconstruction",
  },
  {
    id: 6,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/bindhabasiniconstruction/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
export default SocialLinks

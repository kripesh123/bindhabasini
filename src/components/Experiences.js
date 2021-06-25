import React from "react"
import Title from "./Title"
import experiences from "../constants/experiences"

const Experiences = () => {
  return (
    <section className="section experiences">
      <Title title="experiences" />
      <div className="section-center experiences-center">
        {experiences.map(service => {
          const { id, icon, title, text } = service

          return (
            <article key={id} className="experience">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Experiences

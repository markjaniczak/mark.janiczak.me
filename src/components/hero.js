import React from "react"

const Hero = () => {

  return (
    <section
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "100vh", position: 'relative' }}
    >
      <div className="container">
        <p className="text-uppercase">Web Developer</p>
        <h1 className="display-2">Mark Janiczak</h1>
        <a href="mailto:mark@janiczak.me" className="underline">mark@janiczak.me</a>
      </div>
    </section>
  )
}

export default Hero

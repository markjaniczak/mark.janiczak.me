import React from "react"

const Hero = () => {

  return (
    <section
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "100vh", position: 'relative' }}
    >
      <div className="container">
        <h1 className="display-2">Mark Janiczak</h1>
        <p className="h3">Web Developer</p>
        <p className="h3">Brisbane, Australia</p>
      </div>
      <div style={{ position: 'absolute', bottom: 50 }}>
        <div class="icon-scroll"></div>
      </div>
    </section>
  )
}

export default Hero

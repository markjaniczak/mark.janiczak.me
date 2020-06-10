import React from "react"

import Me from "./me"

const About = () => {
  return (
    <section className="container mb-4" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="col">
          <h2 className="display-4">About Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-xl-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
            sed adipiscing diam donec adipiscing tristique risus. Vel eros donec
            ac odio tempor orci dapibus ultrices in. Lectus proin nibh nisl
            condimentum. Platea dictumst vestibulum rhoncus est pellentesque.
            Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris
            cursus mattis molestie a iaculis. Adipiscing vitae proin sagittis
            nisl. Cursus euismod quis viverra nibh cras pulvinar. Consequat nisl
            vel pretium lectus quam. Vitae sapien pellentesque habitant morbi
            tristique senectus et netus et. Adipiscing vitae proin sagittis nisl
            rhoncus mattis rhoncus urna. Massa vitae tortor condimentum lacinia
            quis vel eros donec. Nullam non nisi est sit amet facilisis magna
            etiam. Sagittis aliquam malesuada bibendum arcu vitae elementum.
          </p>
          <p>
            Mi quis hendrerit dolor magna eget. Etiam tempor orci eu lobortis.
            Duis tristique sollicitudin nibh sit amet commodo nulla facilisi
            nullam. Pellentesque id nibh tortor id aliquet. At risus viverra
            adipiscing at in. Ac turpis egestas integer eget aliquet nibh. Sit
            amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.
            Donec ac odio tempor orci dapibus ultrices in. Amet massa vitae
            tortor condimentum lacinia quis vel. Quis viverra nibh cras
            pulvinar. Varius vel pharetra vel turpis nunc eget. Lectus quam id
            leo in vitae turpis. Suspendisse sed nisi lacus sed viverra tellus
            in hac. Aliquet enim tortor at auctor urna. Viverra justo nec
            ultrices dui sapien eget mi proin.
          </p>
        </div>
        <div className="col-12 col-xl-6">
          <Me />
        </div>
      </div>
    </section>
  )
}

export default About

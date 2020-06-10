import React, { Children, useMemo } from "react"

const experiences = [
  {
    workplace: "Neto eCommerce",
    link: "https://netohq.com",
    children: [
      {
        role: "Developer Advocate",
        fromDate: "2020-03-01",
        blurb: `Assisting technology partners with integrating their services as add-ons in Neto. 
            Most add-ons utilise Neto's API to fetch and update data but they also utilise front-end scripts on the webstore.
            As part of the Solutions team I'm also involved in initiatives such as redesigning and developing our API documentation.`,
      },
      {
        role: "Enterprise Support",
        fromDate: "2018-02-01",
        toDate: "2020-02-01",
        blurb: `Supporting enterprise level customers with the use of Neto. 
            At a higher level also involves consulting on technical projects that these customers initiate.`,
      },
      {
        role: "Web Application Support",
        fromDate: "2017-02-01",
        toDate: "2018-02-01",
        blurb: "",
      },
    ],
  },
  {
    workplace: "ISGQ",
    link: "https://www.isgq.com.au",
    children: [
      {
        role: "Managed Services Support",
        fromDate: "2015-07-01",
        toDate: "2017-02-01",
        blurb: "",
      },
    ],
  },
  {
    workplace: "RoyalCDS",
    link: "https://www.royalcds.com.au",
    children: [
      {
        role: "Service Desk Support",
        fromDate: "2014-09-01",
        toDate: "2015-07-01",
        blurb: "",
      },
    ],
  },
]

const Experience = ({ role, fromDate, toDate, blurb }) => {
  const from = new Date(fromDate)
  const to = toDate ? new Date(toDate) : new Date()

  const duration = useMemo(() => {
    let months = 0
    months += (to.getFullYear() - from.getFullYear()) * 12
    months += to.getMonth()
    months -= from.getMonth()
    return months
  }, [fromDate, toDate])

  const shortMonthName = new Intl.DateTimeFormat("en-AU", {
    month: "short",
  }).format

  return (
    <div className="row mb-1" style={{ minHeight: 180 }}>
      <div className="col-12 col-lg-6">
        <h4>{role}</h4>
        <small>
          {`${shortMonthName(from)} ${from.getFullYear()} - `}
          {toDate ? `${shortMonthName(to)} ${to.getFullYear()}` : "Present"}
          {" — "}
          {`${duration} months`}
        </small>
      </div>
      <div className="col-12 col-lg-6">{blurb}</div>
    </div>
  )
}

const ExperienceGroup = ({ workplace, link, children }) => {
  return (
    <div>
      <div className="mb-2">
        <h3 className="d-inline">{workplace} </h3>
        <a title={workplace} target="_blank" rel="noopener" href={link}>
          <i className="fa fa-link"></i>
        </a>
      </div>
      <hr />
      <ul className="list-unstyled">
        {children.map((experience, k) => (
          <li key={k}>
            <Experience {...experience} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const Work = () => {
  const nodes = useMemo(
    () => experiences.map((group, k) => <ExperienceGroup {...group} key={k} />),
    []
  )

  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <h2 className="display-4">Experience</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">{nodes}</div>
      </div>
    </section>
  )
}

export default Work

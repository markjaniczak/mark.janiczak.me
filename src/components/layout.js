import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  let websiteTheme
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme
  }

  const [theme, setTheme] = useState(websiteTheme)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const toggleTheme = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark")
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="d-none d-xl-block col-xl-2 sticky-top">
          <span
            className="text-uppercase position-absolute"
            style={{
              bottom: 50,
              left: 50,
              transformOrigin: "left",
              transform: "rotateZ(-90deg)",
            }}
          >
            <a href="mailto:mark@janiczak.me">mark@janiczak.me</a>
          </span>
        </aside>
        <main className="col-12 col-xl-8">{children}</main>
        <aside className="d-none d-xl-block col-xl-2 sticky-top">
          <div
            className="position-absolute"
            style={{ top: 50, right: 50, left: "auto" }}
          >
            <a onClick={toggleTheme} style={{ cursor: "pointer" }}>
              {theme === "dark" ? (
                <i className="fa fa-sun" />
              ) : (
                <i className="fa fa-moon" />
              )}
            </a>
          </div>
          <div
            className="d-flex justify-content-between text-uppercase text-right position-absolute"
            style={{
              bottom: 50,
              right: 50,
              left: "auto",
              width: 300,
              transformOrigin: "right",
              transform: "rotateZ(90deg)",
            }}
          >
            <span>Get in touch</span>
            <span className="line"></span>
            <span>
              <a
                className="mr-2"
                title="github"
                rel="noopener"
                target="_blank"
                href="https://github.com/markjaniczak"
              >
                <i className="fab fa-lg fa-github" />
              </a>
              <a
                className="mr-2"
                title="npm"
                rel="noopener"
                target="_blank"
                href="https://www.npmjs.com/~markjaniczak"
              >
                <i className="fab fa-lg fa-npm" />
              </a>
              <a
                title="linkedin"
                rel="noopener"
                target="_blank"
                href="https://www.linkedin.com/in/markjaniczak/"
              >
                <i className="fab fa-lg fa-linkedin" />
              </a>
            </span>
          </div>
        </aside>
      </div>
      <footer className="row d-xl-none mb-4">
        <div className="col text-center">
          <span className="text-uppercase">
            E: <a href="mailto:mark@janiczak.me">mark@janiczak.me</a>
          </span>
          <hr style={{ borderColor: "var(--border-color)" }} />
          <span>
            <a
              className="mr-3"
              title="github"
              rel="noopener"
              target="_blank"
              href="https://github.com/markjaniczak"
            >
              <i className="fab fa-2x fa-github" />
            </a>
            <a
              className="mr-3"
              title="npm"
              rel="noopener"
              target="_blank"
              href="https://www.npmjs.com/~markjaniczak"
            >
              <i className="fab fa-2x fa-npm" />
            </a>
            <a
              title="linkedin"
              rel="noopener"
              target="_blank"
              href="https://www.linkedin.com/in/markjaniczak/"
            >
              <i className="fab fa-2x fa-linkedin" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

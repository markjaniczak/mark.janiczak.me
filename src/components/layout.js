import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const Layout = ({ children }) => {
  let websiteTheme
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme
  }

  const [key, setKey] = useState("browser")
  const [theme, setTheme] = useState(websiteTheme)

  useEffect(() => {
    setTheme(window.__theme)
    setKey("client")
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const toggleTheme = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark")
  }

  return (
    <div className="d-flex">
      <aside className="d-none d-xl-flex flex-column align-self-stretch" style={{ width: 200 }}>
        <div style={{ height: '100vh' }} />
        <div style={{ flexGrow: 1 }}>
          <div className="sticky-top" style={{ top: 50, left: 50 }}>
          </div>
        </div>
      </aside>
      <main className="container">
        {children}
        <footer className="row mb-4">
          <div className="col text-center">

            <hr style={{ borderColor: "var(--border-color)" }} />
            <p>
             © {new Date().getFullYear()} All Rights Reserved · Mark Janiczak 
            </p>
            <p>
              <a
                title="github"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/markjaniczak"
              >
                GitHub
              </a>
              <span className="mx-2">·</span>
              <a
                title="npm"
                rel="noreferrer"
                target="_blank"
                href="https://www.npmjs.com/~markjaniczak"
              >
                NPM
              </a>
              <span className="mx-2">·</span>
              <a
                title="linkedin"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/markjaniczak/"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </footer>

      </main>
      <aside className="d-none d-xl-block" style={{ width: 200 }}>
        <div
          className="position-fixed"
          style={{ top: 50, right: 50 }}
        >
          <button
            key={key}
            className={classNames("btn", {
              "btn-light": theme === "light",
              "btn-dark": theme === "dark",
            })}
            title="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <i className="fa fa-sun" />
            ) : (
                <i className="fa fa-moon" />
              )}
          </button>
        </div>
        <div
          className="d-flex justify-content-between text-uppercase text-right position-fixed"
          style={{
            bottom: 50,
            right: 50,
            width: 300,
            transformOrigin: "right",
            transform: "rotateZ(90deg)",
          }}
        >
          <span>Get in touch</span>
          <span className="line"></span>
          <span>
            <a
              style={{
                transform: "rotateZ(-90deg)",
              }}
              className="mr-2 d-inline-block"
              title="github"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/markjaniczak"
            >
              <i className="fab fa-lg fa-github" />
            </a>
            <a
              style={{
                transform: "rotateZ(-90deg)"
              }}
              className="mr-2 d-inline-block"
              title="npm"
              rel="noreferrer"
              target="_blank"
              href="https://www.npmjs.com/~markjaniczak"
            >
              <i className="fab fa-lg fa-npm" />
            </a>
            <a
              style={{
                transform: "rotateZ(-90deg)"
              }}
              className="d-inline-block"
              title="linkedin"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/markjaniczak/"
            >
              <i className="fab fa-lg fa-linkedin" />
            </a>
          </span>
        </div>
      </aside>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

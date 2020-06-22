const React = require("react")
const { default: Layout } = require("./src/components/layout")
require("./src/styles/global.css")

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

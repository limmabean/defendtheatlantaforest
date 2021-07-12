/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image';

import 'milligram/dist/milligram.min.css';
import Header from "./header"
import "../css/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      desktop: file(relativePath: { eq: "forest.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
    }
  `)

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <>
      <BackgroundImage
        Tag="section"
        className={"bg-image"}
        fluid={imageData}
        backgroundColor={"#ffffff"}
      >
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className={"row"}>
          <div className={"column column-side"}></div>
          <div className={"column column-main"}>
              <main>{children}</main>
          </div>
          <div className={"column column-side"}></div>
        </div>
        <div className={"row"}>
          <div className={"column column-side"}></div>
          <div className={"column column-main"}>
          <footer>
            © 2021 Defend the Atlanta Forest
          </footer>
          </div>
          <div className={"column column-side"}></div>
        </div>
      </BackgroundImage>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

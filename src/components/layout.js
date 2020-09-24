import React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from "../styles/components"
import Header from "./header"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>
        con{" "}
        <span role="img" aria-label="emoji heart">
          💚
        </span>{" "}
        por
        <a href="https://www.platzi.com">Platzi</a>
      </Footer>
    </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

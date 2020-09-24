import React from "react"
import { StyledJumbo } from "../styles/components"
import PropTypes from "prop-types"
import { Image } from "./"

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>{description}</h2>
        <small></small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}

Jumbo.defaultProps = {
  description: ``,
}

Jumbo.propTypes = {
  description: PropTypes.string,
}

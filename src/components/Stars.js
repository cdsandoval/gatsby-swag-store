import React, { useState } from "react"
import { SelectStars } from "../styles/components"

export default function Stars() {
  const [stars, setStars] = useState(5)
  return (
    <SelectStars selected={stars}>
      <span onClick={() => setStars(1)} role="img" aria-label="emoji">
        ⭐
      </span>
      <span onClick={() => setStars(2)} role="img" aria-label="emoji">
        ⭐
      </span>
      <span onClick={() => setStars(3)} role="img" aria-label="emoji">
        ⭐
      </span>
      <span onClick={() => setStars(4)} role="img" aria-label="emoji">
        ⭐
      </span>
      <span onClick={() => setStars(5)} role="img" aria-label="emoji">
        ⭐
      </span>
    </SelectStars>
  )
}

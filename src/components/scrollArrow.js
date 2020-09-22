import React, { useState } from "react"
import { FaArrowCircleUp } from "react-icons/fa"
import "./index.scss"

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  window.addEventListener("scroll", checkScrollTop)

  return (
    <div>
      <FaArrowCircleUp
        className="scrollTop"
        onClick={scrollTop}
        style={{
          height: 40,
          display: showScroll ? "flex" : "none",
          color: "#457b9d",
        }}
      />
    </div>
  )
}

export default ScrollArrow

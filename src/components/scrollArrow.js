import React, { useState } from "react"
import { FaArrowCircleUp } from "react-icons/fa"
import "./index.scss"

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
  if (window) {
    window.addEventListener("scroll", checkScrollTop)
  }

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

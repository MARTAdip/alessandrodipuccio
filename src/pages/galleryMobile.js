import React from "react"

import "../components/gallery-mobile.scss"
import { Gallery } from "gatsby-theme-gallery"
import Link from "gatsby-link"

const GalleryMobile = () => (
  <div className="gallery-mobile-container">
    <div className="gallery-mobile-wrapper">
      <button className="button-is-large" style={{ marginTop: "10%", color: "white" }}>
        <Link to="/about/" className="button-go-back" style={{  color: "white" }}>
          go back 🔙
        </Link>
      </button>
      <Gallery />
    </div>
  </div>
)

export default GalleryMobile

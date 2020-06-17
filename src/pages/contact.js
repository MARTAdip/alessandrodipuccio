import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/contact.scss"

const Contact = () => (
  <div className="contact-outer-wrapper">
    <Layout>
      <SEO title="Contact" />

      <div className="flex-wrapper">
        <div className="contact-container">
          <div className="inner">
            <span>For info & lessons</span>
            <a href="mailto:alessandro.dipuccio@alice.it">
              Alessandro Di Puccio
            </a>
          </div>
          <div className="inner">
            <span>For bookings</span>
            <a href="mailto:alessandro.dipuccio@alice.it">
              Alessandro Di Puccio
            </a>
          </div>
          <div className="inner">
            <span>Press</span>
            <a href="mailto:dpelati@icloud.com">Daniela Pelati</a>
          </div>
        </div>
      </div>
      {/* <footer style={{ color: ` white` }}>
        © {new Date().getFullYear()}, Built with love
        {` `}
      </footer> */}
    </Layout>
  </div>
)

export default Contact

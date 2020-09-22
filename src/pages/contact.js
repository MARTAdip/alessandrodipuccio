import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/contact.scss"
import privacyPolicy from "../markdown-pages/privacyPolicy.pdf"

const Contact = () => (
  <div className="contact-outer-wrapper">
    <Layout>
      <SEO title="Contact" />

      <div className="flex-wrapper">
        <div className="contact-container">
          <div className="inner">
            <span>For info & lessons</span>
            <a href="mailto:info@alessandrodipuccio.com" rel="noreferrer">
              Alessandro Di Puccio
            </a>
          </div>
          <div className="inner">
            <span>For bookings</span>
            <a href="mailto:dipuccio02@gmail.com" rel="noreferrer">Alessandro Di Puccio</a>
          </div>
          <div className="inner">
            <span>Press</span>
            <a href="mailto:danielapelati@icloud.com" rel="noreferrer">Daniela Pelati</a>
          </div>
          <div className="inner">
            <a
              href={privacyPolicy}
              target="_blank"
              rel="noreferrer"
              style={{ color: `purple`, textDecoration: `underline` }}
            >
              Privacy Policy
            </a>
          </div>
          <div className="info-web inner" >
            <div className="info-web-inner">
              <span className="info-name">Web design & Web development</span>{" "}
              <span className="info-name"><a href="mailto:martadipuccio@me.com" rel="noreferrer">Marta Di Puccio</a></span>
            </div>
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

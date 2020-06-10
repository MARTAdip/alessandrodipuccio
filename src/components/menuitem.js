import * as React from "react"
import { motion } from "framer-motion"
import Link from "gatsby-link"
import { FiFacebook, FiYoutube, FiInstagram } from "react-icons/fi"
import { FaPatreon } from "react-icons/fa"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <Link className="link" to="/">
          Home
        </Link>
      </div>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <Link to="/about" className="link">
          About
        </Link>
      </div>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <Link to="/teaching" className="link">
          Teaching
        </Link>
      </div>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <Link to="/music-video" className="link">
          Music & Video
        </Link>
      </div>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>

      <div
        className="icon-wrapper"
        style={{
          marginTop: "50px",
        }}
      >
        <a
          href="https://www.facebook.com/alessandro.dipuccio"
          target="blank"
          className="icon"
          style={{
            marginBottom: "15px",
          }}
        >
          <FiFacebook color="#0000000" size="30px" />
        </a>
        <a
          href="https://www.youtube.com/channel/UChCWBb3bJHHF08ktBunb21Q/"
          target="blank"
          className="icon"
          style={{
            marginBottom: "15px",
          }}
        >
          <FiYoutube color="#0000000" size="30px" />
        </a>
        <a
          href="https://www.instagram.com/alessandrodipuccio/"
          target="blank"
          className="icon"
          style={{
            marginBottom: "15px",
          }}
        >
          <FiInstagram color="#0000000" size="30px" />
        </a>
        <a
          href="https://www.patreon.com/alessandrodipuccio/"
          target="blank"
          className="icon"
          style={{
            marginBottom: "15px",
          }}
        >
          <FaPatreon color="#0000000" size="30px" />
        </a>
      </div>
    </motion.li>
  )
}

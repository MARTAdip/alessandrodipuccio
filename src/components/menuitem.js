import * as React from "react"
import { motion } from "framer-motion"
import Link from "gatsby-link"

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
        <Link className="link" to="/">Home</Link>
      </div>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <Link to="/about" className="link">About</Link>
      </div>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <Link to="/teaching" className="link">Teaching</Link>
      </div>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <Link to="/music" className="link">Music</Link>
      </div>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <Link to="/video" className="link">Other Projects</Link>
      </div>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <Link to="/contact" className="link">Contact</Link>
      </div>
      

      {/* <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} /> */}
    </motion.li>
  )
}

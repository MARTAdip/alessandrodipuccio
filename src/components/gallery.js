import * as React from "react"

import { motion } from "framer-motion"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./gallery.scss"
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
}

const frameVariants = {
  hover: { scale: 0.95 },
}

const imageVariants = {
  hover: { scale: 1.1 },
}

const Thumbnail = ({ id, props }) => (
  <>
    <motion.div className="thumbnail" variants={thumbnailVariants}>
      <motion.div
        className="frame"
        whileHover="hover"
        variants={frameVariants}
        transition={transition}
      >
        <Img key={id} fixed={props} alt="babbo" />
        <motion.img
          src={`${id}`}
          alt="hello"
          variants={imageVariants}
          transition={transition}
        />
        {/* </Link> */}
      </motion.div>
    </motion.div>
    <style>{`
            .thumbnail {
                flex: 1 0 33%;
                margin: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                
            }

            .frame {
                overflow: hidden;
            }

            .thumbnail img {
                width: 100%;
                height: 100%;
            }
        `}</style>
  </>
)

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 500) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      image: file(relativePath: { eq: "home.jpeg" }) {
        id
        childImageSharp {
          fixed(
            width: 400
            duotone: { highlight: "#ffffff", shadow: "#222222" }
          ) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="grid-gallery">
            {/* <motion.div
              className="thumbnails"
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
            > */}
              {data.images.nodes.map(image => (
                <figure variants={thumbnailVariants} className="img-container" key={image.id}>
                  <Img
                    key={image.id}
                    fixed={image.childImageSharp.fixed}
                    alt="babbo"
                  />
                </figure>
              ))}
            {/* </motion.div> */}
          </div>
        </div>
    </section>
  )
}

export default Gallery

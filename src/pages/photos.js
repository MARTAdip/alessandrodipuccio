// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Layout from "../components/layout"
// // import Image from "../components/image"
// import SEO from "../components/seo"
// import Img from "gatsby-image"

// const Photos = props => {
//   const data = useStaticQuery(graphql`
//     query Images {
//       images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
//         nodes {
//           id
//           childImageSharp {
//             fixed(width: 200) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//       image: file(relativePath: { eq: "home.jpeg" }) {
//         id
//         childImageSharp {
//           fixed(
//             width: 400
//             duotone: { highlight: "#ffffff", shadow: "#222222" }
//           ) {
//             ...GatsbyImageSharpFixed
//           }
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//   console.log(data)

//   return (
//     <Layout>
//       <SEO title="Alessandro Di Puccio" />

//       <Img fixed={data.image.childImageSharp.fixed} alt="babbo" />
//       <div>
//         {data.images.nodes.map(image => (
//           <Img key={image.id} fixed={image.childImageSharp.fixed} alt="babbo" />
//         ))}
//       </div>
//     </Layout>
//   )
// }

// export default Photos

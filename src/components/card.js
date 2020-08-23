
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
// import Image from "../components/image"

// const Card = ({ siteTitle, siteDescription }) => {
const Card = (props) => {
  const data = useStaticQuery(graphql`
    query MyHeaderImages1 {
      file(relativePath: {eq: "bg1.png"}) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
`)
console.log('ndksfjkdf', props)
  return (
      <div className="card" style={{ width: 400, height: 300, border: "1px solid #000", ...props.style }}>
          <h1>hfiosdghdoigshg</h1>
          {props.children}
          
      </div>
    // <header
    //   style={{
    //     background: `#096ab0`,
    //     marginBottom: `1.45rem`,
    //     // backgroundImage: data.file.childImageSharp.fluid,
    //     // height: 300,
    //   }}
    // >

    //   <div 
    //       style={{
    //         margin: `0 auto`,
    //         maxWidth: 960,
    //         height: 300,
    //         textAlign: `center`,
    //         paddingTop: 100,
    //         // padding: `0 1.0875rem 1.45rem`,
    //     }}
    //   >
    //     <h1 style={{ margin: 0 }}>
    //       <Link
    //       to="/"
    //       style={{
    //         color: `white`,
    //         textDecoration: `none`,
    //       }}
    //     >
    //       {siteTitle}
          
    //     </Link>
    //     </h1>
    //     <p style={{ color: `white` }}>{siteDescription}</p>

    //     {/* <Image fluid={image} /> */}
    //     {/* <Img fluid={data.file.childImageSharp.fluid}
    //       alt="It is resume"
    //     >
    //       <h1>fsagdsfkdsjfhkdsjhfkjdshfkjdsfh Manu</h1>
    //     </Img> */}
    //     <div class="s9-widget-wrapper"
    //           style={{ marginLeft: 340 }}
    //     ></div>
    //   </div>
    // </header>
  );
}

Card.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Card.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Card;

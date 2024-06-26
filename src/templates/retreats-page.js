import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from '../components/Content'
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthImage from "../components/FullWidthImage";
import RetreatRoll from "../components/RetreatRoll"; // a few recent blogs
import { useEffect } from 'react'


// eslint-disable-next-line
export const RetreatsPageTemplate = ({
	image,
	title,
	heading,
	description,
	content,
	contentComponent,
	// intro,
	// main,
	// testimonials,
	// fullImage,
	// pricing,
}) => {
	const PageContent = contentComponent || Content
	const heroImage = getImage(image) || image
	// const fullWidthImage = getImage(fullImage) || fullImage;

	useEffect(() => {
		setTimeout(() => {
			// force reset of hubspot js so that new buttons will be parsed without forcing a page refresh
			window.hubspot_web_interactives_running = false
			var script = document.createElement('script')
			script.src = 'https://js.hubspot.com/web-interactives-embed.js'
			document.body.appendChild(script)
		}, 500) // wait for dom to finish loading
	}, []) // Empty dependency array means this effect runs only once after the component mounts

	return (
		<div className='content'>
			<FullWidthImage img={heroImage} title={title} />

			{/* INTRO */}
			<section className='section tan'>
				<div className='container'>
					<div className='column is-7 is-offset-1'>
						{heading && <h3 className='has-text-weight-semibold is-size-2'>{heading}</h3>}
						<PageContent className='content' content={content} />
					</div>
				</div>
				<div className='column is-12 has-text-centered'>
					{/* Hubspot Popup Trigger Button */}
					<button className='button mt-5 is-primary is-medium hs-cta-trigger-button hs-cta-trigger-button-165573647794'>
						Reserve Your Spot Today
					</button>
				</div>
			</section>

			{/* Upcomnig Retreats */}
			<section className='section'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-10 is-ofset-1'>
							<h3 className='has-text-weight-semibold is-size-2 mb-0'>Upcoming Retreats</h3>
						</div>
					</div>
				</div>
			</section>
			<RetreatRoll />

			{/* More Info */}
			{/* <section className='section'>
				<h3 className='has-text-weight-semibold is-size-2'>More About Retreats</h3>
				<div className='columns'>
					<div className='column is-10 is-offset-1'>
						<Features gridItems={intro.blurbs} />
						<div className='columns'>
							<div className='column is-7'>
								<h3 className='has-text-weight-semibold is-size-3'>{main.heading}</h3>
								<p>{main.description}</p>
							</div>
						</div>
						<div className='grid'>
							<article className='cell'>
								<PreviewCompatibleImage imageInfo={main.image1} />
							</article>
							<article className='cell'>
								<PreviewCompatibleImage imageInfo={main.image2} />
							</article>
							<article className='cell'>
								<PreviewCompatibleImage imageInfo={main.image3} />
							</article>
						</div>
						<Testimonials testimonials={testimonials} />
					</div>
				</div>
			</section> */}

			{/* <FullWidthImage img={fullWidthImage} imgPosition={'bottom'} /> */}
			{/* <section className='section section--gradient'>
				<div className='container'>
					<div className='section'>
						<div className='columns'>
							<div className='column is-10 is-offset-1'>
								<h2 className='has-text-weight-semibold is-size-2'>{pricing.heading}</h2>
								<p className='is-size-5'>{pricing.description}</p>
								<Pricing data={pricing.plans} />
							</div>
						</div>
					</div>
				</div>
			</section> */}

			<section className='section pt-0'>
				<div className='column is-12 has-text-centered'>
					{/* Hubspot Popup Trigger Button */}
					<button className='button is-primary is-medium hs-cta-trigger-button hs-cta-trigger-button-165573647794'>
						Reserve Your Spot Today
					</button>
				</div>
			</section>
		</div>
	)
};

RetreatsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  // main: PropTypes.shape({
  //   heading: PropTypes.string,
  //   description: PropTypes.string,
  //   image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  //   image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  //   image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // }),
  // testimonials: PropTypes.array,
  // fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // pricing: PropTypes.shape({
  //   heading: PropTypes.string,
  //   description: PropTypes.string,
  //   plans: PropTypes.array,
  // }),
};

const RetreatsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { markdownRemark: post } = data

  return (
		<Layout>
			<RetreatsPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				description={frontmatter.description}
				content={post.html}
				contentComponent={HTMLContent}
				// intro={frontmatter.intro}
				// main={frontmatter.main}
				// testimonials={frontmatter.testimonials}
				// fullImage={frontmatter.full_image}
				// pricing={frontmatter.pricing}
			/>
		</Layout>
	)
};

RetreatsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default RetreatsPage;

export const retreatsPageQuery = graphql`
  query RetreatsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html # this guy's for the converted markdown
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
        # intro {
        #   blurbs {
        #     image {
        #       childImageSharp {
        #         gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
        #       }
        #     }
        #     text
        #   }
        #   heading
        #   description
        # }
        # main {
        #   heading
        #   description
        #   image1 {
        #     alt
        #     image {
        #       childImageSharp {
        #         gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
        #       }
        #     }
        #   }
        #   image2 {
        #     alt
        #     image {
        #       childImageSharp {
        #         gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
        #       }
        #     }
        #   }
        #   image3 {
        #     alt
        #     image {
        #       childImageSharp {
        #         gatsbyImageData(quality: 72, layout: FULL_WIDTH)
        #       }
        #     }
        #   }
        # }
        # testimonials {
        #   author
        #   quote
        # }

        # full_image {
        #   childImageSharp {
        #     gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        #   }
        # }
        # pricing {
        #   heading
        #   description
        #   plans {
        #     description
        #     items
        #     plan
        #     price
        #   }
        # }
      }
    }
  }
`;

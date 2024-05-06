import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features"; // a list of features
import BlogRoll from "../components/BlogRoll"; // a few recent blogs
import RetreatRoll from "../components/RetreatRoll"; // latest retreats
import LandingHeroImage from "../components/LandingHeroImage"; // Hero Image Zone
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { useEffect } from 'react'

import Markdown from 'react-markdown' // this library lets us parse markdown to html (well really its converting to a JSX react component)

// eslint-disable-next-line
export const IndexPageTemplate = ({
	// image,
	// title,
	// subtitle,
	hero,
	intro,
	retreats,
	about,
	corporate,
	reviews,
	showBlog,
}) => {
	const heroImage = getImage(hero.image) || hero.image

	useEffect(() => {
		setTimeout(() => {
			// force reset of hubspot js so that new buttons will be parsed without forcing a page refresh
			window.hubspot_web_interactives_running = false
			var script = document.createElement('script')
			script.src = 'https://js.hubspot.com/web-interactives-embed.js'
			document.body.appendChild(script)
		}, 500) // wait for dom to finish loading
	}, []) // Empty dependency array means this effect runs only once after the component mounts

	// console.log('description', intro.description)
	// console.log('toHTML():', toHTML(intro.description))
	// console.log('remark:', remark)
	// console.log('toHTML():', remark().use(remarkHTML).processSync(intro.description))

	return (
		<div>
			{/* Hero */}
			<LandingHeroImage
				height={'100vh'}
				imgPosition='bottom center'
				img={heroImage}
				title={hero.title}
				subtitle={hero.subtitle}
				extraClasses='landingHero'
				cta_btn_text={hero.cta_btn_text}
				cta_btn_link={hero.cta_btn_link}
			/>

			{/* Intro Section */}
			{intro.enabled && (
				<section className='section tan'>
					<div className='container'>
						<div className='columns'>
							<div className='column is-8 is-offset-2'>
								<div className='content'>
									<h3
										className={`has-text-weight-semibold is-size-2 ${
											intro.centered && 'has-text-centered'
										}`}
									>
										{intro.heading}
									</h3>
									<p className={intro.centered && 'has-text-centered is-size-5'}>
										{/* {toHTML(intro.description)} */}
										<Markdown>{intro.description}</Markdown>
									</p>
								</div>
							</div>
						</div>
						<div className='columns'>
							<div className='column is-12'>
								<div className='content'>
									<Features gridItems={intro.features} />
								</div>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Retreats */}
			{retreats.enabled && (
				<div>
					<section className='section'>
						<div className='container'>
							<div className='columns'>
								<div className='column is-8 is-offset-2'>
									<div className='content'>
										<h3 className='has-text-weight-semibold is-size-2'>{retreats.heading}</h3>
										<p className='mb-6 is-size-5'>
											<Markdown>{retreats.description}</Markdown>
										</p>
									</div>
									<div className='column is-12 has-text-centered'>
										{/* Hubspot Popup Trigger Button */}
										<button className='button is-primary is-medium hs-cta-trigger-button hs-cta-trigger-button-165573647794'>
											Reserve Your Spot Today
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
					<RetreatRoll />
					<section className='section pt-0'>
						<div className='column is-12 has-text-centered'>
							<Link className='button is-primary is-medium' to='/retreats'>
								{retreats.cta_btn_text}
							</Link>
						</div>
					</section>
				</div>
			)}

			{/* About Jesse */}
			{about.enabled && (
				<section className='section tan'>
					<div className='container'>
						<div className='columns'>
							<div className='column is-half mr-5'>
								<PreviewCompatibleImage imageInfo={about.image} />
							</div>
							<div className='column is-half'>
								<div className='content'>
									<h3 className='has-text-weight-semibold is-size-2'>{about.heading}</h3>
									<p className='is-size-5'>
										<Markdown>{about.description}</Markdown>
									</p>
									<div className='column is-12 has-text-centered'>
										<Link className='button is-primary is-outlined' to={about.cta_btn_link}>
											{about.cta_btn_text}
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Corporate Wellness */}
			{corporate.enabled && (
				<section className='section'>
					<div className='container'>
						<div className='columns'>
							<div className='column is-8 is-offset-2'>
								<div className='content'>
									<h3 className='has-text-weight-semibold is-size-2'>{corporate.heading}</h3>
									<p className='is-size-5'>
										<Markdown>{corporate.description}</Markdown>
									</p>
									<div className='column is-12 has-text-centered'>
										<Link className='button is-primary is-outlined' to={corporate.cta_btn_link}>
											{corporate.cta_btn_text}
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Reviews */}
			{reviews.enabled && (
				<section className='section tan'>
					<div className='container'>
						<div className='columns'>
							<div className='column is-8 is-offset-2'>
								<div className='content'>
									<h3 className='has-text-weight-semibold is-size-2'>{reviews.heading}</h3>
									<p className='is-size-5'>{reviews.description}</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Blog */}
			{showBlog && (
				<section className='section'>
					<div className='container'>
						<div className='columns'>
							<div className='column is-10 is-offset-1'>
								<div className='content'>
									<h3 className='has-text-weight-semibold is-size-2'>Latest Blog Entries</h3>
									<BlogRoll />
									<div className='column is-12 has-text-centered'>
										<Link className='button is-primary is-outlined' to='/blog'>
											Read More
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</div>
	)
}

IndexPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string,
  // heading: PropTypes.string,
  // subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  // description: PropTypes.string,
  intro: PropTypes.shape({
    features: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
		<Layout transparentNavbar={true}>
			<IndexPageTemplate
				// image={frontmatter.image}
				// title={frontmatter.title}
				// subtitle={frontmatter.subtitle}
				hero={frontmatter.hero}
				intro={frontmatter.intro}
				retreats={frontmatter.retreats}
				about={frontmatter.about}
				corporate={frontmatter.corporate}
				reviews={frontmatter.reviews}
				showBlog={frontmatter.showBlog}
			/>
		</Layout>
	)
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				showBlog
				image {
					childImageSharp {
						gatsbyImageData(quality: 100, layout: FULL_WIDTH)
					}
				}
				hero {
					title
					subtitle
					cta_btn_text
					cta_btn_link
					image {
						childImageSharp {
							gatsbyImageData(quality: 100, layout: FULL_WIDTH)
						}
					}
				}
				intro {
					enabled
					heading
					centered
					description
					features {
						image {
							childImageSharp {
								gatsbyImageData(width: 300, quality: 64, layout: CONSTRAINED)
							}
						}
						text
						description
					}
				}
				retreats {
					enabled
					heading
					description
					cta_btn_text
				}
				about {
					enabled
					heading
					description
					cta_btn_text
					cta_btn_link
					image {
						childImageSharp {
							gatsbyImageData(width: 1000, quality: 100, layout: CONSTRAINED)
						}
					}
				}
				corporate {
					enabled
					heading
					description
					cta_btn_text
					cta_btn_link
				}
				reviews {
					enabled
					heading
					description
					reviews {
						name
						quote
						image {
							childImageSharp {
								gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
							}
						}
					}
				}
			}
		}
	}
`

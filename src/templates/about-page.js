import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from 'gatsby-plugin-image'
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from '../components/FullWidthImage'

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const heroImage = getImage(image) || image

  return (
		<div className='content'>
			{image && <FullWidthImage img={heroImage} title={title} brightness={0.8} />}
			<section className='section tan'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-10 is-offset-1'>
							<div className='section'>
								<h2 className='title is-size-3 has-text-weight-bold is-bold-light'>{title}</h2>
								<PageContent className='content' content={content} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
};

AboutPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
		<Layout>
			<AboutPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
				image={post.frontmatter.image}
			/>
		</Layout>
	)
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				image {
					childImageSharp {
						gatsbyImageData(quality: 100, layout: FULL_WIDTH)
					}
				}
			}
		}
	}
`

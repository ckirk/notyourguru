import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from 'gatsby-plugin-image'
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from '../components/FullWidthImage'

// eslint-disable-next-line
export const TrainingPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const heroImage = getImage(image) || image;

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
							<div className='column is-12 has-text-centered'>
								<Link className='button is-primary is-outlined' to='/contact'>
									Inquire About In-Person Training
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
};

TrainingPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

const TrainingPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TrainingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

TrainingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TrainingPage;

export const trainingPageQuery = graphql`
	query TrainingPage($id: String!) {
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

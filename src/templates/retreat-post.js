import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// Template for individual post (on its own page)
// eslint-disable-next-line
export const RetreatPostTemplate = ({
	title,
	subtitle,
  startDate,
	endDate,
	content,
	contentComponent,
	description,
	price,
	tags,
	helmet,
	featuredRetreat,
	soldOut
	// test
}) => {
	const PostContent = contentComponent || Content
	// console.log('entry:', test)

	return (
		<section className='section'>
			{helmet || ''}
			<div className='container content'>
				<div className='columns'>
					<div className='column is-10 is-offset-1'>
						<h1 className='title is-size-2 has-text-weight-bold is-bold-light'>{title}</h1>
						<p className='is-size-4'>{subtitle}</p>
						{/* <p>Subtitle: {subtitle}</p> */}
						{/* <p>Price: {price}</p> */}
						<p className='mb-0'>
							<b>Start Date:</b> {startDate}
						</p>
						<p>
							<b>End Date:</b> {endDate}
						</p>

						<p>{description}</p>

						{/* Everything Else Goes Here */}
						<PostContent content={content} />

						<section className='section'>
							<div className='column is-12 has-text-centered'>
								
								{/* Hubspot Popup Trigger Button */}
								<button className='button is-primary is-medium hs-cta-trigger-button hs-cta-trigger-button-165573647794'>
									Reserve Your Spot Today
								</button>
							</div>
						</section>

						{/* TAGS */}
						{tags && tags.length ? (
							<div style={{ marginTop: `4rem` }}>
								<h4>Tags</h4>
								<ul className='taglist'>
									{tags.map((tag) => (
										<li key={tag + `tag`}>
											<Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</section>
	)
}

RetreatPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	helmet: PropTypes.object,
}

const RetreatPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
		<Layout>
			<RetreatPostTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate='%s | Retreat'>
						<title>{`${post.frontmatter.title}`}</title>
						<meta name='description' content={`${post.frontmatter.description}`} />
					</Helmet>
				}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
				subtitle={post.frontmatter.subtitle}
				price={post.frontmatter.price}
				startDate={post.frontmatter.startDate}
				endDate={post.frontmatter.endDate}
			/>
		</Layout>
	)
};

RetreatPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default RetreatPost;

export const retreatQuery = graphql`
	query RetreatPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				startDate(formatString: "MMMM DD, YYYY")
				endDate(formatString: "MMMM DD, YYYY")
				price
				title
				subtitle
				description
				featuredRetreat
				soldOut
				tags
				featuredimage {
					childImageSharp {
						gatsbyImageData(width: 120, quality: 100, layout: CONSTRAINED)
					}
				}
			}
		}
	}
`

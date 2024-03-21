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
	content,
	contentComponent,
	description,
	price,
	tags,
	helmet
}) => {
	const PostContent = contentComponent || Content

	return (
		<section className='section'>
			{helmet || ''}
			<div className='container content'>
				<div className='columns'>
					<div className='column is-10 is-offset-1'>
						<h1 className='title is-size-2 has-text-weight-bold is-bold-light'>{title}</h1>
						<p>Subtitle: {subtitle}</p>
						<p>Price: {price}</p>
						<p>Start Date: {startDate}</p>

						<p>{description}</p>

						<PostContent content={content} />
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

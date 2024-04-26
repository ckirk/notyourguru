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
								{/* HUBSPOT PROSPECT POPUP/SIGNUP */}
								<div
									class='hs-cta-embed hs-cta-simple-placeholder hs-cta-embed-165573647789'
									style={{
										maxWidth: '100%',
										maxHeight: '100%',
										width: '250px',
										height: '42.3984375px',
										margin: '0 auto',
									}}
									data-hubspot-wrapper-cta-id='165573647789'
								>
									<a
										href='https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLJXWC0Zfime7StE8LwUFpn1GmPf%2BHP5d1k%2B7aM%2F8A04DVO05WYnOwngm1YSKVRu2BvHx8oJtQVbymQKCx3bZ6S3so46BUPQkizb7VDAP5y19Y1FrKXEBXBJPVmTTtNxxWzs9GrCKtreKvx1ZhJr%2F8xTFw%3D%3D&webInteractiveContentId=165573647789&portalId=39505965'
										target='_blank'
										rel='noopener'
										crossorigin='anonymous'
									>
										<img
											alt='Reserve Your Spot Today'
											loading='lazy'
											src='https://no-cache.hubspot.com/cta/default/39505965/interactive-165573647789.png'
											style={{
												height: '100%',
												width: '100%',
												objectFit: 'fill',
											}}
											onerror="this.style.display='none'"
										/>
									</a>
								</div>
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

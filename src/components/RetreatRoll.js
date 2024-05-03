import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

// Template for showing multiple retreats on a page
const RetreatsRollTemplate = (props) => {
  
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
		<div className='retreats-scroll'>
			{/* {console.log(posts)} */}
			{posts && posts.map(({ node: post }, index) => {
				// console.log(index)
        return (<RetreatPreview post={post} key={post.id} />)
			})}
		</div>
	)
}

const RetreatPreview = (props) => {
  const { post } = props

  return (
		<div className='retreatContainer'>
			<div className={`retreat ${post.frontmatter.featuredRetreat ? 'is-featured' : ''}`}>
				{/* Header */}
				<header>
					{post?.frontmatter?.featuredimage && (
						<Link to={post.fields.slug}>
							<div className='featured-thumbnail'>
								<PreviewCompatibleImage
									imageInfo={{
										image: post.frontmatter.featuredimage,
										alt: `featured image thumbnail for post ${post.frontmatter.title}`,
										style: {
											filter: 'brightness(0.85)',
										},
									}}
								/>
								<div className='imgOverlay'>
									<h2
										className='is-size-3 is-size-4-mobile has-text-weight-semibold'
										style={{
											whiteSpace: 'normal',
										}}
									>
										{post.frontmatter.title}
									</h2>
									{/* <p className='has-text-centered'>{post.frontmatter.subtitle}</p> */}
								</div>
							</div>
						</Link>
					)}
				</header>

				{/* Body */}
				<div className='body'>
					<div className='post-meta'>
						<Link
							className='subtitle has-text-primary is-size-4 is-size-5-mobile has-text-weight-semibold'
							to={post.fields.slug}
							style={{
								whiteSpace: 'normal',
							}}
						>
							{post.frontmatter.subtitle}
						</Link>
						<p className='is-size-5 is-block dates'>
							{`${post.frontmatter.startDate} - ${post.frontmatter.endDate}`}
						</p>
						<p className='excerpt is-block'>{post.frontmatter.description}</p>
						{/* <p className='excerpt is-block'>{post.excerpt}</p> */}
					</div>

					<Link className='button' to={post.fields.slug}>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	)
}

RetreatsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function RetreatsRoll() {
  return (
		<StaticQuery
			query={graphql`
				query RetreatsRollQuery {
					allMarkdownRemark(
						sort: { order: ASC, fields: [frontmatter___startDate] }
						filter: { frontmatter: { templateKey: { eq: "retreat-post" } } }
					) {
						edges {
							node {
								excerpt(pruneLength: 100)
								id
								fields {
									slug
								}
								frontmatter {
									title
									subtitle
									description
									templateKey
									startDate(formatString: "MMMM DD, YYYY")
									endDate(formatString: "MMMM DD, YYYY")
									price
									featuredRetreat
									soldOut
									featuredimage {
										childImageSharp {
											gatsbyImageData(width: 600, quality: 100, layout: CONSTRAINED) # CONSTRAINED, FIXED, FULL_WIDTH
										}
									}
								}
							}
						}
					}
				}
			`}
			render={(data, count) => <RetreatsRollTemplate data={data} count={count} />}
		/>
	)
}

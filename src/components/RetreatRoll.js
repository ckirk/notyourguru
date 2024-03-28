import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

// Template for showing multiple retreats on a page
const RetreatsRollTemplate = (props) => {
  
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
		<div className='columns is-multiline'>
			{posts && posts.map(({ node: post }) => (
        <RetreatPreview post={post} />
      ))}
		</div>
	)
}

const RetreatPreview = (props) => {
  const { post } = props
  console.log('POST:', post)

  return (
		<div className='column is-6' key={post.id}>
			<div className={`retreat ${post.frontmatter.featuredpost ? 'is-featured' : ''}`}>
				{/* Header */}
				<header>
					{post?.frontmatter?.featuredimage && (
						<Link to={post.fields.slug}>
							<div className='featured-thumbnail'>
								<PreviewCompatibleImage
									imageInfo={{
										// height: '100vh',
										// imgPosition: 'center center',
										image: post.frontmatter.featuredimage,
										alt: `featured image thumbnail for post ${post.frontmatter.title}`,
										// width: '100px',
										// height:
										//   post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.height,
									}}
								/>
								<div className='imgOverlay'>
									<h2 className='is-size-3 has-text-weight-semibold'>{post.frontmatter.title}</h2>
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
							className='subtitle has-text-primary is-size-4 has-text-weight-semibold'
							to={post.fields.slug}
						>
							{post.frontmatter.subtitle}
						</Link>
						<p className='is-size-5 is-block dates'>
							{`${post.frontmatter.startDate} - ${post.frontmatter.endDate}`}
						</p>
						<p className='excerpt is-block'>{post.excerpt}</p>
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
						sort: { order: DESC, fields: [frontmatter___date] }
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
									templateKey
									startDate(formatString: "MMMM DD, YYYY")
									endDate(formatString: "MMMM DD, YYYY")
									price
									featuredpost
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

import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'
import { ForceTheme } from './ForceTheme'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
		<>
			<ForceTheme />
			<BlogPostTemplate
				content={widgetFor('body')}
				description={entry.getIn(['data', 'description'])}
				tags={tags && tags.toJS()}
				title={entry.getIn(['data', 'title'])}
			/>
		</>
	)
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview

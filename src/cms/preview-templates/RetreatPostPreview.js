import React from 'react'
import PropTypes from 'prop-types'
import { RetreatPostTemplate } from '../../templates/retreat-post'
import { ForceTheme } from './ForceTheme'

const RetreatPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
		<>
			<ForceTheme />
			<RetreatPostTemplate
				content={widgetFor('body')}
				description={entry.getIn(['data', 'description'])}
				tags={tags && tags.toJS()}
				title={entry.getIn(['data', 'title'])}
				subtitle={entry.getIn(['data', 'subtitle'])}
				price={entry.getIn(['data', 'price'])}
				// startDate={entry.getIn(['data', 'startDate'])}
			/>
		</>
	)
}

RetreatPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RetreatPostPreview
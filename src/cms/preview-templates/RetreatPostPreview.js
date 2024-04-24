import React from 'react'
import PropTypes from 'prop-types'
import { RetreatPostTemplate } from '../../templates/retreat-post'
import { ForceTheme } from './ForceTheme'

const RetreatPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
	const startDate = entry.getIn(['data', 'startDate'])
	// const tags = entry.getIn(['data', 'tags'])
	// console.log('TAGS:', tags)
	// console.log('startData:', startDate)
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
				// test={entry}
				// startDate={startDate && startDate.toJS()}
				// endDate={entry.getIn(['data', 'endDate'])}
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
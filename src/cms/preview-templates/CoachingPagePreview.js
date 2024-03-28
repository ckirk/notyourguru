import React from 'react'
import PropTypes from 'prop-types'
import { CoachingPageTemplate } from '../../templates/coaching-page'
import { ForceTheme } from './ForceTheme'

const CoachingPagePreview = ({ entry, widgetFor }) => (
	<>
    <ForceTheme />
		<CoachingPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
	</>
)

CoachingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CoachingPagePreview
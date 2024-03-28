import React from 'react'
import PropTypes from 'prop-types'

// Still using AboutPageTemplate here for simplicity
// Will work as long as all simple pages share the same template
import { AboutPageTemplate } from '../../templates/about-page'
import { ForceTheme } from './ForceTheme'

const SimplePagePreview = ({ entry, widgetFor }) => (
	<>
    <ForceTheme theme='light' />
		<AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
	</>
)

SimplePagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
}

export default SimplePagePreview

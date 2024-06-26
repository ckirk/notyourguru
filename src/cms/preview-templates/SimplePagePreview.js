import React from 'react'
import PropTypes from 'prop-types'

// Still using AboutPageTemplate here for simplicity
// Will work as long as all simple pages share the same template
import { SimplePageTemplate } from '../../templates/simple-page'
import { ForceTheme } from './ForceTheme'

const SimplePagePreview = ({ entry, widgetFor, getAsset }) => (
	<>
		<ForceTheme theme='light' />
		<SimplePageTemplate
			title={entry.getIn(['data', 'title'])}
			image={getAsset(entry.getIn(['data', 'image']))}
			body={entry.getIn(['data', 'body'])}
			content={widgetFor('body')}
		/>
	</>
)

SimplePagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
}

export default SimplePagePreview

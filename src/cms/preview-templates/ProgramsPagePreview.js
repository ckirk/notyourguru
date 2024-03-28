import React from 'react'
import PropTypes from 'prop-types'
import { ProgramsPageTemplate } from '../../templates/programs-page'
import { ForceTheme } from './ForceTheme'

const ProgramsPagePreview = ({ entry, widgetFor }) => (
	<>
		<ForceTheme />
		<ProgramsPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
	</>
)

ProgramsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProgramsPagePreview

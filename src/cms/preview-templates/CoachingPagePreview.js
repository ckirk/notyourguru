import React from 'react'
import PropTypes from 'prop-types'
import { CoachingPageTemplate } from '../../templates/coaching-page'

const CoachingPagePreview = ({ entry, widgetFor }) => (
  <CoachingPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CoachingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CoachingPagePreview
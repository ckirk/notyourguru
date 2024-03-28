import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import { ForceTheme } from './ForceTheme'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
			<>
				<ForceTheme />
				<IndexPageTemplate
					image={getAsset(data.image)}
					title={data.title}
					heading={data.heading}
					subheading={data.subheading}
					description={data.description}
					intro={data.intro || { features: [] }}
					mainpitch={data.mainpitch || {}}
				/>
			</>
		)
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview

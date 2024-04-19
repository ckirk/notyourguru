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
					// image={getAsset(data.image)}
					// title={data.title}
					// heading={data.heading}
					// subheading={data.subheading}
					// description={data.description}
					hero={{
						// data.hero || {}
						title: data.hero.title,
						subtitle: data.hero.subtitle,
						image: getAsset(entry.getIn(['data', 'hero', 'image'])),
						cta_btn_text: data.hero.cta_btn_text,
						cta_btn_link: data.hero.cta_btn_link,
					}}
					intro={data.intro || { features: [] }}
					retreats={data.retreats || {}}
					about={data.about || {}}
					corporate={data.corporate || {}}
					reviews={data.reviews || {}}
					showBlog={data.showBlog || {}}
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

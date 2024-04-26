import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Markdown from 'react-markdown' // this library lets us parse markdown to html (well really its converting to a JSX react component)

const Feature = (props) => {
	const { item } = props
	const [isTruncated, setIsTruncated] = useState(true)

	const handleToggleTruncate = () => {
		// console.log('BOOM!!!')
		setIsTruncated(!isTruncated)
	}

	return (
		// FEATURE
		<div className='column is-4 feature'>
			<section className='section'>
				<div className='has-text-centered'>
					<div
						style={{
							// width: '240px',
							display: 'inline-block',
						}}
					>
						<PreviewCompatibleImage imageInfo={item} />
					</div>
				</div>
				<p className='featureTitle has-text-weight-semibold is-size-4 has-text-centered-desktop'>
					{item.text}
				</p>

				<div className='bottom'>
					{item.description && (
						<p className={`has-text-justified-desktop ${isTruncated && 'truncated'}`}>
							<Markdown>{item.description}</Markdown>
						</p>
					)}

					<div className='column is-12 has-text-centered'>
						<div className='button is-primary is-outlined' onClick={handleToggleTruncate}>
							{isTruncated ? 'Show More' : 'Show Less'}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

// Features grid on landing page
const FeatureGrid = ({ gridItems }) => (
	<div className='features columns is-gapless is-multiline'>
		{gridItems.map((item) => (
			<Feature item={item} key={item.text} />
		))}
	</div>
)

FeatureGrid.propTypes = {
	gridItems: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			text: PropTypes.string,
		})
	),
}

export default FeatureGrid

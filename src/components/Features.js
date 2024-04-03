import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// Features grid on landing page
const FeatureGrid = ({ gridItems }) => (
	<div className='features columns is-multiline'>
		{gridItems.map((item) => (

      // FEATURE
			<div key={item.text} className='column is-4'>
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
					<p className='featureTitle has-text-weight-semibold is-size-5'>{item.text}</p>
					{item.description && <p>{item.description}</p>}
				</section>
			</div>
      
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
};

export default FeatureGrid;

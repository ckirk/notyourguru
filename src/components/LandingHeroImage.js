import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    subheading,
    imgPosition = "top left",
		extraClasses = false
  } = props;

  return (
		<React.Fragment>
			<div
				className={`margin-top-0 ${extraClasses && extraClasses}`}
				style={{
					display: 'grid',
					alignItems: 'center',
				}}
			>
				{img?.url ? (
					<img
						src={img}
						objectFit={'cover'}
						objectPosition={imgPosition}
						style={{
							gridArea: '1/1',
							// You can set a maximum height for the image, if you wish.
							height: height,
							width: '100%',
							// filter: 'brightness(0.7)',
						}}
						// You can optionally force an aspect ratio for the generated image
						aspectratio={3 / 1}
						// This is a presentational image, so the alt should be an empty string
						alt=''
						formats={['auto', 'webp', 'avif']}
					/>
				) : (
					<GatsbyImage
						image={img}
						objectFit={'cover'}
						objectPosition={imgPosition}
						style={{
							gridArea: '1/1',
							// You can set a maximum height for the image, if you wish.
							maxHeight: height,
							// maxHeight: '100vh',
							// filter: 'brightness(0.7)',
						}}
						layout='fullWidth'
						// You can optionally force an aspect ratio for the generated image
						aspectratio={3 / 1}
						// This is a presentational image, so the alt should be an empty string
						alt=''
						formats={['auto', 'webp', 'avif']}
					/>
				)}
				{(title || subheading) && (
					<div
						style={{
							// By using the same grid area for both, they are stacked on top of each other
							gridArea: '1/1',
							position: 'relative',
							// This centers the other elements inside the hero component
							placeItems: 'center',
							display: 'grid',
							// marginTop: '-15%',
							padding: '20px',
							textAlign: 'center'
						}}
					>
						{/* Any content here will be centered in the component */}
						{title && (
							<h1
								className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
								style={{
									color: 'white',
									lineHeight: '1',
									padding: '0.25em',
								}}
							>
								{title}
							</h1>
						)}
						{subheading && (
							<h3
								className='has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen'
								style={{
									color: 'white',
									lineHeight: '1',
									padding: '0.25rem',
									marginTop: '0.5rem',
								}}
							>
								{subheading}
							</h3>
						)}
					</div>
				)}
			</div>
		</React.Fragment>
	)
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};

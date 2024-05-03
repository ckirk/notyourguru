import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

// A modified version of FullWidthImage for the landing page
	// make the image bigger on desktop
export default function LandingHeroImage(props) {
  const {
    height = 400,
    img,
    title,
    subtitle,
    imgPosition = "top left",
		extraClasses = false,
		cta_btn_text,
		cta_btn_link
  } = props;

  return (
		<>
			<div
				className={`margin-top-0 ${extraClasses && extraClasses}`}
				style={{
					display: 'grid',
					alignItems: 'center',
					// height: '50vh'
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
							height: '100%',
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
							height: '100vh',
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
				{(title || subtitle) && (
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
							textAlign: 'center',
						}}
					>
						{/* Any content here will be centered in the component */}
						{title && (
							<h1
								className='heroBigText has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
								style={{
									color: 'white',
									// fontSize: '4rem !important'
									// lineHeight: '1',
									// padding: '0.25em',
								}}
							>
								{title}
							</h1>
						)}
						{subtitle && (
							<h3
								className='has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-3-widescreen'
								style={{
									color: 'white',
									lineHeight: '1',
									padding: '0.25rem',
									marginTop: '0.5rem',
									marginBottom: '1rem',
								}}
							>
								{subtitle}
							</h3>
						)}
						{cta_btn_text && (
							<a className='button is-primary is-medium' href={cta_btn_link}>
								{cta_btn_text}
							</a>
						)}
					</div>
				)}
			</div>
		</>
	)
}

LandingHeroImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.string,
  subtitle: PropTypes.string,
};

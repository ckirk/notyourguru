import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// This is used to force a light or dark theme in preview pane (in Decap CMS)
	// because for some reason Decap strips away the theme
export const ForceTheme = ({ theme='light' }) => {
	// Code to execute after component has mounted
	useEffect(() => {
		const iframe = document.getElementById('preview-pane')
		console.log('iframe: ', iframe)
		var iframeDocument = iframe.contentDocument || iframe.contentWindow.document
		var htmlTag = iframeDocument.documentElement // Access the <html> tag
		htmlTag.setAttribute('data-theme', theme)
	}, []) // Empty dependency array means this effect runs only once after the component mounts
	return('')
}

ForceTheme.propTypes = {
	theme: PropTypes.string
}
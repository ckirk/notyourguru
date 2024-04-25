import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/bulma-style.sass";
import "../style/custom-style.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

// Injects Navbar and Footer around content
// adds meta tags via Helmet
const TemplateWrapper = (props) => {
  const { title, description } = useSiteMetadata();
  const { children, transparentNavbar = false } = props
  return (
		<div>
			<Helmet>
				<html lang='en' data-theme='light' /> {/* force light mode */}
				<title>{title}</title>
				<meta name='description' content={description} />
				<link 
					rel="shortcut icon" 
					href={`${withPrefix('/')}img/favicon.ico`}
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href={`${withPrefix('/')}img/apple-touch-icon.png`}
				/>
				<link
					rel='icon'
					type='image/png'
					href={`${withPrefix('/')}img/favicon-32x32.png`}
					sizes='32x32'
				/>
				<link
					rel='icon'
					type='image/png'
					href={`${withPrefix('/')}img/favicon-16x16.png`}
					sizes='16x16'
				/>
				<link
					rel='mask-icon'
					href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
					color='#5bbad5'
				/>
				<meta name='theme-color' content='#fff' />
				<meta property='og:type' content='business.business' />
				<meta property='og:title' content={title} />
				<meta property='og:url' content='/' />
				<meta property='og:image' content={`${withPrefix('/')}img/og-image.jpg`} />
				{/* <!-- Start of HubSpot Embed Code --> */}
				<script
					type='text/javascript'
					id='hs-script-loader'
					async
					defer
					src='//js.hs-scripts.com/39505965.js'
				></script>
				{/* <!-- End of HubSpot Embed Code --> */}
			</Helmet>

			<Navbar transparent={transparentNavbar} />
			<div>{children}</div>
			<Footer />
		</div>
	)
};

export default TemplateWrapper;

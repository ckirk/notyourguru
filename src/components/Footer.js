import * as React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// import logo from "../img/logo_500.jpg"
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import x from '../img/social/x.svg'
import youtube from '../img/social/youtube.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from "../img/social/vimeo.svg";


// Site Footer
const Footer = () => {

	// Custom graphql query to fetch global settings data from src/config/globalSettings.md
	// this data is then used to modify the navbar menu items
	const data = useStaticQuery(
		graphql`
			query {
				markdownRemark(frontmatter: { usage: { eq: "settings" } }) {
					id
					frontmatter {
						usage
						title
						color

						# what to include in the menu (bool)
						menu {
							blog
							coaching
							programs
							training
							about
						}
						socials {
							facebook {
								link
								enabled
							}
							x {
								link
								enabled
							}
							instagram {
								link
								enabled
							}
							youtube {
								link
								enabled
							}
						}
						logo {
							childImageSharp {
								gatsbyImageData(width: 100, quality: 100, layout: FULL_WIDTH)
							}
						}
					}
				}
			}
		`
	)

	const allData = data.markdownRemark.frontmatter
	const menu = data.markdownRemark.frontmatter.menu
	const socials = data.markdownRemark.frontmatter.socials
	let logo = getImage(data.markdownRemark.frontmatter.logo?.childImageSharp?.gatsbyImageData)

	// console.log('DATA:', allData)

	return (
		// using dark mode theme for footer
		<footer data-theme='dark' className='footer'>
			<div className='content has-text-centered'>
				<div
					className='container has-text-centered'
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Link
						to='/'
						title='Logo'
						style={{
							flex: '0 0 auto',
							width: '100px',
							borderRadius: '6px',
							overflow: 'hidden',
						}}
					>
						<GatsbyImage
							image={logo}
							style={{
								maxHeight: '100px',
								maxWidth: '100px',
							}}
							alt=''
							formats={['auto', 'webp', 'avif']}
						/>
					</Link>
				</div>

				<h1 className='footerTitle has-text-weight-bold is-size-1 mt-5'>{allData.title}</h1>
			</div>

			<div className='content has-text-centered'>
				<div className='container has-text-primary-light'>
					<div style={{ maxWidth: '100vw' }} className='columns'>
						{/* Column 1 */}
						<div className='column is-4'>
							{/* MENU 1 */}
							<section className='menu'>
								<ul className='menu-list'>
									<li>
										<Link to='/'>Home</Link>
									</li>

									<li>
										<Link to='/retreats'>Retreats</Link>
									</li>

									{menu.training && (
										<li>
											<Link to='/training'>In-Person Training</Link>
										</li>
									)}

									{menu.coaching && (
										<li>
											<Link to='/coaching'>Online Coaching</Link>
										</li>
									)}

									{menu.programs && (
										<li>
											<Link to='/programs'>Ready-Made Programs</Link>
										</li>
									)}
								</ul>
							</section>
						</div>

						{/* Column 2 */}
						<div className='column is-4'>
							<section className='menu'>
								<ul className='menu-list'>
									
									{menu.about && (
										<li>
											<Link to='/about'>About</Link>
										</li>
									)}

									{menu.blog && (
										<li>
											<Link to='/blog'>Blog</Link>
										</li>
									)}

									<li>
										<Link to='/contact'>Contact</Link>
									</li>

									{/* <li>
										<Link to='/contact/examples'>Form Examples</Link>
									</li> */}

									<li>
										<a href='/admin/' target='_blank' rel='noopener noreferrer'>
											Admin
										</a>
									</li>
								</ul>
							</section>
						</div>
						<div className='column is-4 social'>
							{socials.facebook.enabled && (
								<a title='facebook' href={socials.facebook.link}>
									<img src={facebook} alt='Facebook' style={{ width: '1em', height: '1em' }} />
								</a>
							)}
							{socials.x.enabled && (
								<a title='x' href={socials.x.link}>
									<img
										className='fas fa-lg'
										src={x}
										alt='Twitter'
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
							)}

							{socials.instagram.enabled && (
								<a title='instagram' href={socials.instagram.link}>
									<img src={instagram} alt='Instagram' style={{ width: '1em', height: '1em' }} />
								</a>
							)}

							{socials.youtube.enabled && (
								<a title='youtube' href={socials.youtube.link}>
									<img src={youtube} alt='YouTube' style={{ width: '1em', height: '1em' }} />
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
};

export default Footer;
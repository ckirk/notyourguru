import * as React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'

import logo from "../img/logo_500.jpg"
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
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
						}
						logo {
							childImageSharp {
								gatsbyImageData(quality: 100, layout: FULL_WIDTH)
							}
						}
					}
				}
			}
		`
	)

	const allData = data.markdownRemark.frontmatter
	const menu = data.markdownRemark.frontmatter.menu

	return (
		// using dark mode theme for footer
		<footer data-theme='dark' className='footer'>
			<div className='content has-text-centered'>
				<Link to='/' title='Logo'>
					<img
						src={logo}
						alt=''
						style={{
							maxHeight: '100px',
							borderRadius: '6px',
							marginRight: '20px',
						}}
					/>
					<h1 className='footerTitle has-text-weight-bold is-size-1 mt-5'>Not Your Guru</h1>
				</Link>
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
							<a title='facebook' href='https://facebook.com'>
								<img src={facebook} alt='Facebook' style={{ width: '1em', height: '1em' }} />
							</a>
							<a title='twitter' href='https://twitter.com'>
								<img
									className='fas fa-lg'
									src={twitter}
									alt='Twitter'
									style={{ width: '1em', height: '1em' }}
								/>
							</a>
							<a title='instagram' href='https://instagram.com'>
								<img src={instagram} alt='Instagram' style={{ width: '1em', height: '1em' }} />
							</a>
							<a title='vimeo' href='https://vimeo.com'>
								<img src={vimeo} alt='Vimeo' style={{ width: '1em', height: '1em' }} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
};

export default Footer;
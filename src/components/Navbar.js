import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
// import github from "../img/github-icon.svg";
import logo from "../img/logo_500.jpg";


// Site Navigation and Branding
const Navbar = (props) => {
  const [isActive, setIsActive] = useState(false);
	const { transparent = false } = props // default prop value

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
		<nav
			className={`navbar ${transparent && 'is-transparent'}`}
			// className={`navbar is-transparent`}
			role='navigation'
			aria-label='main-navigation'
		>
			<div className='container'>
				<div className='navbar-brand'>
					<Link to='/' className='navbar-item' title='Logo'>
						<img
							src={logo}
							alt=''
							style={{
								maxHeight: '40px',
								borderRadius: '6px',
								marginRight: '10px',
							}}
						/>
						<h1 className='is-size-5 siteTitle has-text-weight-bold'>Not Your Guru</h1>
					</Link>

					{/* Hamburger menu */}
					<button
						className={`navbar-burger burger ${isActive && 'is-active'}`}
						aria-expanded={isActive}
						onClick={() => setIsActive(!isActive)}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
				<div className={`navbar-start has-text-centered navbar-menu ${isActive && 'is-active'}`}>
					<Link className='navbar-item' to='/retreats' activeClassName='is-selected'>
						Retreats
					</Link>

					{menu.training && (
						<Link className='navbar-item' to='/training' activeClassName='is-selected'>
							Training
						</Link>
					)}

					{menu.coaching && (
						<Link className='navbar-item' to='/coaching' activeClassName='is-selected'>
							Online Coaching
						</Link>
					)}

					{menu.programs && (
						<Link className='navbar-item' to='/programs' activeClassName='is-selected'>
							Ready-Made Programs
						</Link>
					)}

					{menu.blog && (
						<Link className='navbar-item' to='/blog' activeClassName='is-selected'>
							Blog
						</Link>
					)}

					<Link className='navbar-item' to='/contact' activeClassName='is-selected'>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	)
};

export default Navbar;

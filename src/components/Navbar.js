import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = (props) => {
  const [isActive, setIsActive] = useState(false);
	const { transparent } = props
	console.log('transparent:', transparent)

  return (
		<nav className={`navbar ${transparent ? 'transparent' : ''}`} role='navigation' aria-label='main-navigation'>
			<div className='container'>
				<div className='navbar-brand'>
					<Link to='/' className='navbar-item' title='Logo'>
						{/* <img src={logo} alt='' style={{ width: '88px' }} /> */}
            <h1 className='siteTitle'>Not Your Guru</h1>
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
				<ul
					id='navMenu'
					className={` navbar-start has-text-centered navbar-menu ${isActive && 'is-active'}`}
				>
					<li className='navbar-item' style={{ padding: '0px' }}>
						<Link className='navbar-item' to='/retreats' activeClassName='active'>
							Retreats
						</Link>
					</li>
					<li className='navbar-item' style={{ padding: '0px' }}>
						<Link className='navbar-item' to='/training' activeClassName='active'>
							Training
						</Link>
					</li>
					<li className='navbar-item' style={{ padding: '0px' }}>
						<Link className='navbar-item' to='/coaching' activeClassName='active'>
							Online Coaching
						</Link>
					</li>
					<li className='navbar-item' style={{ padding: '0px' }}>
						<Link className='navbar-item' to='/programs' activeClassName='active'>
							Ready-Made Programs
						</Link>
					</li>
					<li className='navbar-item' style={{ padding: '0px' }}>
						<Link className='navbar-item' to='/blog' activeClassName='active'>
							Blog
						</Link>
					</li>
					<li className='navbar-item' style={{ padding: '0px' }}>
						<Link className='navbar-item' to='/contact' activeClassName='active'>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
};

export default Navbar;

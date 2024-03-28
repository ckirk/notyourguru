import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo_500_square.jpg"
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  
  return (
		// using dark mode theme for footer
		<footer data-theme='dark' className='footer'>
			<div className='content has-text-centered'>
				<Link to='/' title='Logo'>
					<img
						src={logo}
						alt=''
						style={{
							maxHeight: '40px',
							borderRadius: '6px',
							marginRight: '20px',
						}}
					/>
					<h1 className='footerTitle has-text-weight-bold is-size-1 mt-5'>
						Not Your Guru
					</h1>
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
									{/* <li>
                    <Link className='navbar-item' to='/about'>
                      About
                    </Link>
                  </li> */}
									<li>
										<Link to='/retreats'>Retreats</Link>
									</li>
									<li>
										<Link to='/training'>In-Person Training</Link>
									</li>
									<li>
										<Link to='/coaching'>Online Coaching</Link>
									</li>
									<li>
										<Link to='/programs'>Ready-Made Programs</Link>
									</li>
								</ul>
							</section>
						</div>

						{/* Column 2 */}
						<div className='column is-4'>
							<section className='menu'>
								<ul className='menu-list'>
									<li>
										<Link to='/blog'>
											Blog
										</Link>
									</li>
									<li>
										<Link to='/contact'>
											Contact
										</Link>
									</li>
									<li>
										<Link to='/contact/examples'>
											Form Examples
										</Link>
									</li>
									<li>
										<a
											href='/admin/'
											target='_blank'
											rel='noopener noreferrer'
										>
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
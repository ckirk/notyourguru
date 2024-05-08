import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import { navigate } from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import FullWidthImage from '../components/FullWidthImage'

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}

// eslint-disable-next-line
export const ContactPageTemplate = ({ title, image, content, contentComponent, state }) => {
	const PageContent = contentComponent || Content
	const heroImage = getImage(image) || image

	const [formData, setFormData] = useState({})


	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...formData,
			}),
		})
			.then(() => navigate(form.getAttribute('action')))
			.catch((error) => alert(error))
	}

	return (
		<div className='content'>
			{image && <FullWidthImage img={heroImage} title={title} brightness={0.8} />}

			<section className='section tan'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-8 is-offset-2'>
							<h2 className='title is-size-3 has-text-weight-bold is-bold-light'>{title}</h2>
							<PageContent className='content' content={content} />
						</div>
					</div>
				</div>
			</section>

			{/* CONTACT */}
			<section className='section'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-8 is-offset-2'>
							<div className='content'>
								<form
									name='contact'
									method='post'
									action='/contact/thanks/'
									data-netlify='true'
									data-netlify-honeypot='bot-field'
									onSubmit={handleSubmit}
								>
									{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
									<input type='hidden' name='form-name' value='contact' />
									<div hidden>
										<label>
											Don’t fill this out: <input name='bot-field' onChange={handleChange} />
										</label>
									</div>
									<div className='field mb-5'>
										<label className='label' htmlFor={'name'}>
											Name
										</label>
										<div className='control'>
											<input
												className='input'
												type={'text'}
												name={'name'}
												onChange={handleChange}
												id={'name'}
												required={true}
											/>
										</div>
									</div>
									<div className='field mb-5'>
										<label className='label' htmlFor={'email'}>
											Email
										</label>
										<div className='control'>
											<input
												className='input'
												type={'email'}
												name={'email'}
												onChange={handleChange}
												id={'email'}
												required={true}
											/>
										</div>
									</div>
									<div className='field mb-5'>
										<label className='label' htmlFor={'message'}>
											Message
										</label>
										<div className='control'>
											<textarea
												className='textarea'
												name={'message'}
												onChange={handleChange}
												id={'message'}
												required={true}
											/>
										</div>
									</div>
									<div className='field'>
										<button className='button is-link' type='submit'>
											Send
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

ContactPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const ContactPage = ({ data }) => {
	const { markdownRemark: post } = data

	return (
		<Layout>
			<ContactPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
				image={post.frontmatter.image}
			/>
		</Layout>
	)
}

ContactPage.propTypes = {
	data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
	query ContactPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				image {
					childImageSharp {
						gatsbyImageData(quality: 100, layout: FULL_WIDTH)
					}
				}
			}
		}
	}
`

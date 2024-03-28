import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features"; // a list of features
import BlogRoll from "../components/BlogRoll"; // a few recent blogs
import RetreatRoll from "../components/RetreatRoll"; // latest retreats
import LandingHeroImage from "../components/LandingHeroImage"; // Hero Image Zone

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
		<div>
			<LandingHeroImage
				height={'100vh'}
				imgPosition='bottom center'
				img={heroImage}
				title={title}
				subheading={subheading}
				extraClasses='landingHero'
			/>

			{/* What is Not Your Guru? */}
			<section className='section'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-10 is-offset-1'>
							<div className='content'>
								<h3 className='has-text-weight-semibold is-size-2'>{heading}</h3>
								<p>{description}</p>
								<Features gridItems={intro.features} />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Retreats */}
			<section className='section'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-10 is-offset-1'>
							<div className='content'>
								<h3 className='has-text-weight-semibold is-size-2'>Join Me On A Retreat</h3>
								<p>{description}</p>
								{/* <h1 className="title">{mainpitch.title}</h1> */}
								{/* <h3 className="subtitle">{mainpitch.description}</h3> */}
							</div>

							<div className='column is-12'>
								<h3 className='has-text-weight-semibold is-size-2'>Upcoming Retreats</h3>
								<RetreatRoll />
								<div className='column is-12 has-text-centered'>
									<Link className='button is-primary is-outlined' to='/retreats'>
										View All Upcoming Retreats
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Jesse */}
			<section className='section'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-10 is-offset-1'>
							<div className='content'>
								<h3 className='has-text-weight-semibold is-size-2'>About Jesse</h3>
								<p>{description}</p>
								<div className='column is-12 has-text-centered'>
									<Link className='button is-primary is-outlined' to='/training'>
										Inquire About Personal Training
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Corporate Wellness */}
			<section className='section'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-10 is-offset-1'>
							<div className='content'>
								<h3 className='has-text-weight-semibold is-size-2'>Corporate Wellness</h3>
								<p>{description}</p>
								<div className='column is-12 has-text-centered'>
									<Link className='button is-primary is-outlined' to='/training'>
										Inquire About Corporate Wellness
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Reviews */}
			<section className='section'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-10 is-offset-1'>
							<div className='content'>
								<h3 className='has-text-weight-semibold is-size-2'>Reviews</h3>
								<p>{description}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Blog */}
			<section className='section'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-10 is-offset-1'>
							<div className='content'>
								<h3 className='has-text-weight-semibold is-size-2'>Latest Blog Entries</h3>
								<BlogRoll />
								<div className='column is-12 has-text-centered'>
									<Link className='button is-primary is-outlined' to='/blog'>
										Read More
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    features: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout transparentNavbar={true}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        description
        intro {
          features {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
        }
      }
    }
  }
`;

import * as React from "react";

import Layout from "../../components/Layout";
import RetreatRoll from "../../components/RetreatRoll";

export default class RetreatIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/placeholder_image.jpeg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#000",
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Retreats
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <RetreatRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

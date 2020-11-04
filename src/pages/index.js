import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <ul>
          {edges.map(({ node }) => {
            const { path } = node.frontmatter;
            const { id } = node;
            return (
              <li>
                <Link key={id} to={`${path}`}>
                  {path}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            path
          }
          id
          html
        }
      }
    }
  }
`;

export default IndexPage;

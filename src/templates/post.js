import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";
import Layout from "../components/layout";

const Post = ({ data }) => {
  return <Layout>{parse(data.markdownRemark.html)}</Layout>;
};
export default Post;

export const query = graphql`
  query Post($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;

import { gql } from "tinacms";

// Query for fetching all posts
export const GET_ALL_POSTS_DOCUMENT = gql`
  query {
    postConnection {
      edges {
        node {
          id
          title
          date
          body
          _sys {
            filename
          }
        }
      }
    }
  }
`;

// Query for fetching a single post by relative path
export const GET_POST_DOCUMENT = gql`
  query GetPostDocument($relativePath: String!) {
    post(relativePath: $relativePath) {
      id
      title
      date
      body
      _sys {
        filename
      }
    }
  }
`;

// Query for fetching global site configuration
export const GET_GLOBAL_DOCUMENT = gql`
  query {
    global(relativePath: "index.json") {
      id
      header {
        name
        nav {
          label
          href
        }
      }
      _sys {
        filename
      }
    }
  }
`;

// Export all queries
export default {
  GET_ALL_POSTS_DOCUMENT,
  GET_POST_DOCUMENT,
  GET_GLOBAL_DOCUMENT,
};
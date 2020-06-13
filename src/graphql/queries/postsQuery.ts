import gql from "graphql-tag";

export const POSTS_QUERY = gql`
  {
    articles {
      author {
        name
      }
      title
      thumbnail_image {
        image_url
      }
    }
  }
`;
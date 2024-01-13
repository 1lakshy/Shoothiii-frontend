// ./graphql/queries.js

import { gql } from '@apollo/client';

// Define your GraphQL query
export const GET_QUERY_SONGS = gql`
  query GetQuerySongs($name:String!) {

    song(name: $name) {
      title
      artwork
      artist
      description
      url
      # lyricsBy

      }
  }
`;

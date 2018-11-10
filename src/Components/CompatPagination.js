import * as React from 'react';
import Relay from 'react-relay/classic';
import { QueryRenderer, graphql } from 'react-relay/compat';
import RelayLocalSchema from 'relay-local-schema/lib/classic';

import Table from './Table';
import schema from '../schema';
import withPagination from '../withPagination';

Relay.injectNetworkLayer(
  new RelayLocalSchema.NetworkLayer({ schema })
);

const query = graphql`
  query CompatPaginationQuery(
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    posts(
      first: $first
      after: $after
      before: $before
      last: $last
    ) {
      total
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const Paginator = withPagination(QueryRenderer);

export default () => (
  <Paginator
    environment={Relay.Store}
    pathToConnection="posts"
    query={query}
    render={({ props, error }) => {
      console.log('compat', props);
      if (error) throw error;
      if (props) return <Table {...props} />;
      return null;
    }}
  />
);

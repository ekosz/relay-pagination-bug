import * as React from 'react';
import { Environment, RecordSource, Store } from 'relay-runtime';
import { Network } from 'relay-local-schema';
import { QueryRenderer, graphql } from 'react-relay';

import Table from './Table';
import schema from '../schema';
import withPagination from '../withPagination';

const environment = new Environment({
  network: Network.create({ schema }),
  store: new Store(new RecordSource()),
});

const query = graphql`
  query ModernPaginationQuery(
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
    ) @connection(key: "Query_posts") {
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
    environment={environment}
    pathToConnection="posts"
    query={query}
    render={({ props, error }) => {
      if (error) throw error;
      if (props) return <Table {...props} />;
      return null;
    }}
  />
);

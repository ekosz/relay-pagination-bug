/**
 * @flow
 * @relayHash c57d471edcc05fafb7c992fa71d0ee53
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ModernPaginationQueryVariables = {|
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type ModernPaginationQueryResponse = {|
  +posts: {|
    +total: ?number,
    +pageInfo: ?{|
      +hasNextPage: boolean,
      +startCursor: string,
      +endCursor: string,
    |},
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
      |}
    |}>,
  |}
|};
export type ModernPaginationQuery = {|
  variables: ModernPaginationQueryVariables,
  response: ModernPaginationQueryResponse,
|};
*/


/*
query ModernPaginationQuery(
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  posts(first: $first, after: $after, before: $before, last: $last) {
    total
    pageInfo {
      hasNextPage
      startCursor
      endCursor
      hasPreviousPage
    }
    edges {
      node {
        id
        name
        __typename
      }
      cursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "total",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageInfo",
    "storageKey": null,
    "args": null,
    "concreteType": "PageInfo",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasNextPage",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "startCursor",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "endCursor",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasPreviousPage",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "PostConnectionEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Post",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }
    ]
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first",
    "type": "Int"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "last",
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ModernPaginationQuery",
  "id": null,
  "text": "query ModernPaginationQuery(\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  posts(first: $first, after: $after, before: $before, last: $last) {\n    total\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n      hasPreviousPage\n    }\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "bidirectional",
        "path": [
          "posts"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "ModernPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "posts",
        "name": "__Query_posts_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "PostConnection",
        "plural": false,
        "selections": v1
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ModernPaginationQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": v2,
        "concreteType": "PostConnection",
        "plural": false,
        "selections": v1
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "posts",
        "args": v2,
        "handle": "connection",
        "key": "Query_posts",
        "filters": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e7d9afc955b5d026868ed6c674b395e1';
module.exports = node;

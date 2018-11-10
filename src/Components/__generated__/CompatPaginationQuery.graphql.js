/**
 * @flow
 * @relayHash df4ede747e5151b58294d9e1b3ed11bc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompatPaginationQueryVariables = {|
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type CompatPaginationQueryResponse = {|
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
export type CompatPaginationQuery = {|
  variables: CompatPaginationQueryVariables,
  response: CompatPaginationQueryResponse,
|};
*/


/*
query CompatPaginationQuery(
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
    }
    edges {
      node {
        id
        name
      }
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
    "kind": "LinkedField",
    "alias": null,
    "name": "posts",
    "storageKey": null,
    "args": [
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
    ],
    "concreteType": "PostConnection",
    "plural": false,
    "selections": [
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
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CompatPaginationQuery",
  "id": null,
  "text": "query CompatPaginationQuery(\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  posts(first: $first, after: $after, before: $before, last: $last) {\n    total\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CompatPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CompatPaginationQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9d6812ed812c999c6f28fa70f06f1d4b';
module.exports = node;

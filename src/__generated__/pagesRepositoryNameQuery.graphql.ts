/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type pagesRepositoryNameQueryVariables = {};
export type pagesRepositoryNameQueryResponse = {
    readonly viewer: {
        readonly name: string | null;
    };
};
export type pagesRepositoryNameQuery = {
    readonly response: pagesRepositoryNameQueryResponse;
    readonly variables: pagesRepositoryNameQueryVariables;
};



/*
query pagesRepositoryNameQuery {
  viewer {
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6671a461b41feb9ee6ba45d67cf74522",
    "id": null,
    "metadata": {},
    "name": "pagesRepositoryNameQuery",
    "operationKind": "query",
    "text": "query pagesRepositoryNameQuery {\n  viewer {\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '11e87e238e6029d912fc4f72792e49f8';
export default node;

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type pages_indexQueryVariables = {};
export type pages_indexQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"BlogPosts_viewer">;
    };
};
export type pages_indexQuery = {
    readonly response: pages_indexQueryResponse;
    readonly variables: pages_indexQueryVariables;
};



/*
query pages_indexQuery {
  viewer {
    ...BlogPosts_viewer
  }
}

fragment BlogPostPreview_post on BlogPost {
  id
  title
  content
}

fragment BlogPosts_viewer on Viewer {
  allBlogPosts(first: 10, orderBy: {createdAt: desc}) {
    edges {
      node {
        ...BlogPostPreview_post
        id
      }
    }
  }
  allUsers(first: 10) {
    edges {
      node {
        firstName
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_indexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BlogPosts_viewer"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_indexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              (v0/*: any*/),
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": {
                  "createdAt": "desc"
                }
              }
            ],
            "concreteType": "BlogPostConnection",
            "kind": "LinkedField",
            "name": "allBlogPosts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BlogPostEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BlogPost",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "content",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "allBlogPosts(first:10,orderBy:{\"createdAt\":\"desc\"})"
          },
          {
            "alias": null,
            "args": [
              (v0/*: any*/)
            ],
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "allUsers",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "firstName",
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "allUsers(first:10)"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "pages_indexQuery",
    "operationKind": "query",
    "text": "query pages_indexQuery {\n  viewer {\n    ...BlogPosts_viewer\n  }\n}\n\nfragment BlogPostPreview_post on BlogPost {\n  id\n  title\n  content\n}\n\nfragment BlogPosts_viewer on Viewer {\n  allBlogPosts(first: 10, orderBy: {createdAt: desc}) {\n    edges {\n      node {\n        ...BlogPostPreview_post\n        id\n      }\n    }\n  }\n  allUsers(first: 10) {\n    edges {\n      node {\n        firstName\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cf1ef336b38ff173d892fa48d2501e5c';
export default node;

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BlogPosts_viewer = {
    readonly allBlogPosts: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"BlogPostPreview_post">;
            };
        } | null> | null;
    };
    readonly allUsers: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly firstName: string;
            };
        } | null> | null;
    };
    readonly " $refType": "BlogPosts_viewer";
};
export type BlogPosts_viewer$data = BlogPosts_viewer;
export type BlogPosts_viewer$key = {
    readonly " $data"?: BlogPosts_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"BlogPosts_viewer">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlogPosts_viewer",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "BlogPostPreview_post"
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
                }
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
  "type": "Viewer"
};
})();
(node as any).hash = 'ff2c564f146e4e1fb801aecd51a072f8';
export default node;

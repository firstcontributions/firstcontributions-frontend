/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BlogPostPreview_post = {
    readonly id: string;
    readonly title: string;
    readonly content: string;
    readonly " $refType": "BlogPostPreview_post";
};
export type BlogPostPreview_post$data = BlogPostPreview_post;
export type BlogPostPreview_post$key = {
    readonly " $data"?: BlogPostPreview_post$data;
    readonly " $fragmentRefs": FragmentRefs<"BlogPostPreview_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlogPostPreview_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
  "type": "BlogPost"
};
(node as any).hash = 'c6926d947d96b911f1b290a24ee95ba7';
export default node;

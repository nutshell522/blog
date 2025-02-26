import { allPosts, Post } from 'contentlayer/generated';
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files';

import { compareDesc } from 'date-fns';
export { defineDocumentType, defineNestedType, makeSource, allPosts };
export type { Post };

export const allPostsNewToOld = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))) || [];

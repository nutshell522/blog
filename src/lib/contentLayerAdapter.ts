import { allPosts, Post } from 'contentlayer/generated';
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files';

export { defineDocumentType, defineNestedType, makeSource, allPosts };
export type { Post };

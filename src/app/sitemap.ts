import type { MetadataRoute } from 'next'
import { allPosts } from 'contentlayer/generated'

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : ''

// TODO 確認最終會有哪些頁面
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // 首頁
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      // 文章列表
      url: `${siteUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...allPosts.map((post) => ({
      // 部落格文章
      url: `${siteUrl}/posts/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
  ]
}

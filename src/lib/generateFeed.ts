import { Feed } from 'feed'
import { siteConfigs } from '@/configs/siteConfigs'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

const generateFeed = (): Feed => {
  const author = {
    name: siteConfigs.author.name,
    email: siteConfigs.author.email,
    link: siteConfigs.fqdn,
  }

  const feed = new Feed({
    title: siteConfigs.title,
    description: siteConfigs.description,
    id: siteConfigs.fqdn,
    link: siteConfigs.fqdn,
    // image: siteConfigs.logoUrl,
    // favicon: siteConfigs.logoUrl,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteConfigs.fqdn}/feed.xml`,
      json: `${siteConfigs.fqdn}/feed.json`,
      atom: `${siteConfigs.fqdn}/atom.xml`,
    },
    author: author,
    language: siteConfigs.locale,
  })

  allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .forEach((post) => {
      feed.addItem({
        id: siteConfigs.fqdn + post.path,
        title: post.title,
        link: siteConfigs.fqdn + post.path,
        description: post.description,
        // image: getPostOGImage(post.socialImage),
        author: [author],
        contributor: [author],
        date: new Date(post.date),
        // content: post.body.html,
      })
    })

  return feed
}

export default generateFeed

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : ''

export const siteConfigs = {
  title: 'Ted Yin的前端技術筆記',
  description:
    'Ted Yin的個人筆記部落格，主要記錄前端技術相關的文章。以及個人經歷。',
  fqdn: siteUrl,
  language: 'zh-TW',
  favicon: `${siteUrl}/favicon.ico`,
  copyright: `All rights reserved ${new Date().getFullYear()}`,
  author: {
    name: '殷易暄',
    email: 'jjboy830227@gmail.com',
    link: siteUrl,
  },
  locale: 'zh-tw',
}

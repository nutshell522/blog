// robot.txt
export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const robots = `
User-agent: *
Disallow: /admin/
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
RSS: ${siteUrl}/rss.xml
  `.trim()

  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain; charset=UTF-8' },
  })
}

import generateFeed from '@/lib/generateFeed'

// rss
export async function GET() {
  return new Response(generateFeed().rss2(), {
    headers: { 'Content-Type': 'application/rss+xml; charset=UTF-8' },
  })
}

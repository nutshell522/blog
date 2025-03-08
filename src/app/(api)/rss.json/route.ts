import generateFeed from '@/lib/generateFeed'

// rss
export async function GET() {
  return new Response(generateFeed().json1(), {
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  })
}

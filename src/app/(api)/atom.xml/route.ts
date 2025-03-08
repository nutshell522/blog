import generateFeed from '@/lib/generateFeed'

// atom
export async function GET() {
  return new Response(generateFeed().atom1(), {
    headers: { 'Content-Type': 'application/atom+xml; charset=UTF-8' },
  })
}

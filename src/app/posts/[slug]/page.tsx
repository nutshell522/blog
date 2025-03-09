import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import mdxComponents from '@/lib/mdxComponents'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const slug = (await params).slug
  const post = allPosts.find((post) => post.slug === slug)

  return {
    title: `${post?.title}`,
    description: post?.description,
    openGraph: {
      title: `${post?.title}`,
      description: post?.description,
      images: [
        {
          // url: post?.coverImage?.url, // TODO: Add coverImage to contentlayer
          width: 800,
          height: 600,
          alt: '部落格封面',
        },
      ],
      locale: 'zh_TW',
      site_name: "Ted's Blog",
      article: {
        publishedTime: post?.date,
        modifiedTime: post?.date,
        type: 'article',
        // tags: post?.tags, // TODO: Add tags to contentlayer
      },
    },
    //TODO Add Twitter/Facebook... Card
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) return notFound()

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6">
      <main className="w-full max-w-3xl py-12">
        <h1 className="text-4xl font-bold text-blue-400">{post.title}</h1>
        <time dateTime={post.date} className="text-gray-400 text-sm mt-2 block">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>

        <Mdx code={post.body.code} />
      </main>
    </div>
  )
}
interface MdxProps {
  code: string
}
export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code)
  return (
    <div>
      <MDXContent components={mdxComponents} />
    </div>
  )
}

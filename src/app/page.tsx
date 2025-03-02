import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Image from 'next/image'

export const metadata = {
  title: "Ted's Blog",
  description:
    'Ted 的個人筆記部落格，主要記錄前端技術相關的文章。以及個人經歷。',
  openGraph: {
    title: "Ted's Blog",
    description:
      'Ted 的個人筆記部落格，主要記錄前端技術相關的文章。以及個人經歷。',
    images: [
      {
        // TODO: Add coverImage to contentlayer
        // url: 'https://og-image.vercel.app/**Ted**%27s%20Blog.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fog-image.vercel.app%2F%2A%2ATed%2A%2A%2527s%2520Blog.png%3Ftheme%3Ddark%26md%3D1%26fontSize%3D100px',
        width: 800,
        height: 600,
        alt: "Ted's Blog",
      },
    ],
    locale: 'zh_TW',
    site_name: "Ted's Blog",
  },
  //TODO Add Twitter/Facebook... Card
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <header className="w-full py-6 text-center bg-gray-800 shadow-md">
        <h1 className="text-3xl font-bold">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-blue-400 hover:underline"
          >
            Next.js!
          </a>
        </h1>
        <p className="text-gray-400 mt-2">
          Get started by editing{' '}
          <code className="bg-gray-700 px-2 py-1 rounded text-sm">
            pages/index.tsx
          </code>
        </p>
      </header>

      <main className="w-full max-w-4xl px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={post.path}
              className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-400 mt-2">{post.description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="w-full py-6 mt-auto bg-gray-800 text-center text-gray-400">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Powered by{' '}
          <span className="inline-block align-middle">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

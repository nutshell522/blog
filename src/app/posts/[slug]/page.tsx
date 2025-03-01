import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer2/hooks';

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) return notFound();

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
  );
}

const components = {
  h1: ({ ...props }) => <h1 className={'mt-2 text-4xl font-bold tracking-tight text-red-300'} {...props} />,
  h2: ({ ...props }) => <h2 className={'mt-10 pb-1 text-3xl font-semibold tracking-tight'} {...props} />,
  h3: ({ ...props }) => <h3 className={'mt-8 text-2xl font-semibold tracking-tight'} {...props} />,
  h4: ({ ...props }) => <h4 className={'mt-6 text-xl font-semibold tracking-tight'} {...props} />,
  h5: ({ ...props }) => <h5 className={'mt-4 text-lg font-semibold tracking-tight'} {...props} />,
  h6: ({ ...props }) => <h6 className={'mt-4 text-lg font-semibold tracking-tight'} {...props} />,
  p: ({ ...props }) => <p className="mt-8 text-base leading-7" {...props} />,
  a: ({ ...props }) => <a className="text-blue-400 hover:underline" {...props} />,
  ul: ({ ...props }) => <ul className="mt-6 list-disc pl-8" {...props} />,
  ol: ({ ...props }) => <ol className="mt-6 list-decimal pl-8" {...props} />,
  li: ({ ...props }) => <li className="mt-2" {...props} />,
  blockquote: ({ ...props }) => <blockquote className="mt-6 pl-4 border-l-4 border-gray-400 italic" {...props} />,
  hr: ({ ...props }) => <hr className="mt-8 border-gray-700" {...props} />,
  pre: ({ ...props }) => <pre className="mt-8 overflow-x-auto" {...props} />,
  code: ({ ...props }) => <code className="text-sm bg-gray-800 text-gray-400 p-1 rounded" {...props} />,
  img: ({ ...props }) => <img className="mt-8" {...props} />,
  table: ({ ...props }) => <table className="mt-8 w-full" {...props} />,
  th: ({ ...props }) => <th className="font-semibold text-left" {...props} />,
  td: ({ ...props }) => <td className="border-t border-gray-700 p-2" {...props} />,
  strong: ({ ...props }) => <strong className="font-semibold" {...props} />,
  em: ({ ...props }) => <em className="italic" {...props} />,
  del: ({ ...props }) => <del className="line-through" {...props} />,
  inlineCode: ({ ...props }) => <code className="text-sm bg-gray-800 text-gray-400 p-1 rounded" {...props} />,
};
interface MdxProps {
  code: string;
}
export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code);
  return (
    <div>
      <MDXContent components={components} />
    </div>
  );
}

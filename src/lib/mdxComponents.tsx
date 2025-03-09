import CustomPre from '@/components/CustomPre'
import Image from 'next/image'
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
} from '@/components/CustomHeading'

/**
 * MDX components
 */
const mdxComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
  pre: CustomPre,
  p: ({ ...props }) => <p className="mt-8 text-base leading-7" {...props} />,
  a: ({ ...props }) => (
    <a className="text-blue-400 hover:underline" {...props} />
  ),
  ul: ({ ...props }) => <ul className="mt-6 list-disc pl-8" {...props} />,
  ol: ({ ...props }) => <ol className="mt-6 list-decimal pl-8" {...props} />,
  li: ({ ...props }) => <li className="mt-2" {...props} />,
  blockquote: ({ ...props }) => (
    <blockquote
      className="mt-6 pl-4 border-l-4 border-gray-400 italic"
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="mt-8 border-gray-700" {...props} />,
  img: ({ src, alt, ...props }: { src: string; alt: string }) => (
    <Image className="mt-8" src={src} alt={alt} {...props} />
  ),
  table: ({ ...props }) => <table className="mt-8 w-full" {...props} />,
  th: ({ ...props }) => <th className="font-semibold text-left" {...props} />,
  td: ({ ...props }) => (
    <td className="border-t border-gray-700 p-2" {...props} />
  ),
  strong: ({ ...props }) => <strong className="font-semibold" {...props} />,
  em: ({ ...props }) => <em className="italic" {...props} />,
  del: ({ ...props }) => <del className="line-through" {...props} />,
  inlineCode: ({ ...props }) => (
    <code
      className="text-sm bg-gray-800 text-gray-400 p-1 rounded"
      {...props}
    />
  ),
}

export default mdxComponents

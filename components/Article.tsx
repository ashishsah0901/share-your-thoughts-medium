import Link from 'next/link'
import { urlFor } from '../sanity/sanity'
import { Post } from '../typings'

interface Props {
  post: Post
}

const Article = ({ post }: Props) => {
  return (
    <Link href={`post/${post.slug.current}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border">
        <img
          className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          src={urlFor(post.mainImage).url()!}
          alt=""
        />
        <div className="flex justify-between bg-white p-5">
          <div>
            <p className="text-lg font-bold">{post.title}</p>
            <p className="text-xs">
              {post.description} by {post.author.name}
            </p>
          </div>
          <img
            className="h-12 w-12 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt=""
          />
        </div>
      </div>
    </Link>
  )
}

export default Article

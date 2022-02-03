import { Post } from '../typings'
import Article from './Article'

interface Props {
  posts: [Post]
}

const Posts = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
      {posts.map((post) => (
        <Article key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Posts

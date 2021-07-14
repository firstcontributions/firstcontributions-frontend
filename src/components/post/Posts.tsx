import Post from './Post'

const Posts = ({ posts }) => (
  <>
    {posts.map((post) => (
      <Post post={post} key={post.id} />
    ))}
  </>
)

export default Posts

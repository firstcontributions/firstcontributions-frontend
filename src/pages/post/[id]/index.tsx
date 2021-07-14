import { useRouter } from 'next/router'
import Post from '../../../components/post/Post'
import { posts } from '../../../../cypress/fixtures/posts.json'

const PostContent = () => {
  const router = useRouter()
  const { id } = router.query
  const post = posts.find((p) => p.id === id)

  return post ? (
    <>
      <Post post={post} />
    </>
  ) : (
    <></>
  )
}

export default PostContent

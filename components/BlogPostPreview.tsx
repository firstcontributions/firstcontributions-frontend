import { createFragmentContainer, graphql } from 'react-relay'

const BlogPostPreview = ({ post }) => {
  return <div key={post.id}>{post.title}<p>{post.content}</p></div>
}

export default createFragmentContainer(BlogPostPreview, {
  post: graphql`
    fragment BlogPostPreview_post on BlogPost {
      id
      title
      content
    }
  `,
})

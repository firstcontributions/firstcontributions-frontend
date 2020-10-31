import { createFragmentContainer, graphql } from 'react-relay'
import BlogPostPreview from './BlogPostPreview'

const BlogPosts = ({ viewer }) => (
  <div>
    <h1>Users</h1>
    {viewer.allUsers.edges.map(node => (
      <span>{JSON.stringify(node)}</span>
    ))}
    <h1>Blog posts</h1>
    {viewer.allBlogPosts?.edges.map(({ node }) => (
      <BlogPostPreview key={node.id} post={node} />
    ))}
  </div>
)

export default createFragmentContainer(BlogPosts, {
  viewer: graphql`
    fragment BlogPosts_viewer on Viewer {
      allBlogPosts(first: 10, orderBy: { createdAt: desc }) {
        edges {
          node {
            ...BlogPostPreview_post
            id
          }
        }
      }
      allUsers(first: 10) {
        edges {
          node {
            firstName
          }
        }
      }
    }
  `,
})

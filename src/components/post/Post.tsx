import CoverImage from './CoverImage'
import AuthorProfile from '../AuthorProfile'
import Link from 'next/link'
import PostContent from './PostContent';

const Post = ({ post }) => (
  <div className="post flex">
      <div className="content-container">
        <AuthorProfile
          avatar={post.author.avatar}
          reputation={post.author.reputation}
        />
        <Link href="/post/[post.id]" as={`/post/${post.id}`}>
          <h2 className="text-3xl">{post.title}</h2>
        </Link>
        <PostContent data={post.content} />
        <div className="tags flex">
          {post.tags.map((tag: string) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="engagement">
          <span>{post.votes}</span>
          <span>{post.comments.length}</span>
        </div>
      </div>
    <style jsx>{`
      .post {
        margin: 1rem; 0;
      }
      .post-content-truncated {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      .content-container {
          background-color: #ffffff;
          padding: 1rem;
          border-radius: .5rem;
      }
      .tags {
      }
      .tag {
          padding: 0.25rem 1rem;
          margin: 0 .2rem;
          border-radius: 1rem;
          background: #ddd;
      }
      .engagement {
          display: flex;
          margin-top: .5rem;
      }
      .engagement span {
          padding: 0.25rem 1rem;
          margin: 0 .2rem;
          border-radius: 1rem;
          background: #ddd;
      }
    `}</style>
  </div>
)

export default Post

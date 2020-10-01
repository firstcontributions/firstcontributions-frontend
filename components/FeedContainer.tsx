import * as React from 'react'
import Posts from './post/Posts'
import { posts } from '../cypress/fixtures/posts.json'
import PostEditor from './post/PostEditor';

// eslint-disable-next-line
export interface FeedCotainerProps {}

const FeedCotainer: React.SFC<FeedCotainerProps> = () => {
  return (
    <div className="feed-container flex flex-col justify-center w-full">
      <PostEditor />
      <Posts posts={posts} />
      <style jsx>{`
        .feed-container {
        }
      `}</style>
    </div>
  )
}

export default FeedCotainer

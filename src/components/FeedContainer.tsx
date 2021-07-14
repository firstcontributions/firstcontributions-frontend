import * as React from 'react'
import Posts from './post/Posts'
import { posts } from '../../cypress/fixtures/posts.json'
// eslint-disable-next-line
export interface FeedCotainerProps {}

const FeedCotainer = ({}: FeedCotainerProps) => {
  return (
    <div className="feed-container flex flex-col justify-center w-full">
      <Posts posts={posts} />
      <style jsx>{`
        .feed-container {
        }
      `}</style>
    </div>
  )
}

export default FeedCotainer

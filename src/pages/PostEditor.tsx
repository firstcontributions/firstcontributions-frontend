import dynamic from 'next/dynamic'
import Navigation from '../components/Navigation'

const Editor = dynamic(() => import('../components/post/Editor'), {
  ssr: false,
})

const placeHolderData = {
  time: 1556098174501,
  blocks: [
    {
      type: 'header',
      data: {
        text: 'Post Title',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      data: {
        text: 'Edit this to add post content',
      },
    },
  ],
}

const PostEditor = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Editor data={placeHolderData} />
      </div>
      <style jsx>{`
        .feed-container {
        }
      `}</style>
    </>
  )
}

export default PostEditor

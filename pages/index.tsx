import { graphql, fetchQuery } from 'react-relay'
import { useQuery } from 'relay-hooks'

import { initEnvironment } from '../lib/createEnvironment'
import BlogPosts from '../components/BlogPosts'

import Head from 'next/head'
import FeedCotainer from '../components/FeedContainer'
import UserProfile from '../components/UserProfile'


const query = graphql`
  query pages_indexQuery {
    viewer {
      ...BlogPosts_viewer
    }
  }
`

export const Home = (): JSX.Element => {
  const { error, props } = useQuery(query)
 return (
  <div className="container flex justify-center">
    <BlogPosts viewer={props.viewer} />
   <Head>
      <title>First Contributions</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <aside className="p-4 invisible lg:visible flex flex-col lg:w-1/5 items-center">
      <UserProfile />
    </aside>
    <main className="w-full md:w-2/3">
      <FeedCotainer />
    </main>
    <aside className="p-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a className="text-2xl">Login with Github</a>
      </button>
      <footer></footer>
    </aside>

    <style jsx>{`
      .container {
        margin: auto;
      }
      main {
        background-color: #eef0f1;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)
    }


export async function getStaticProps() {
  const { environment, relaySSR } = initEnvironment()

  await fetchQuery(environment, query)

  const relayData = (await relaySSR.getCache())?.[0]

  return {
    props: {
      relayData: !relayData ? null : [[relayData[0], relayData[1].json]],
    },
  }
}

export default Home

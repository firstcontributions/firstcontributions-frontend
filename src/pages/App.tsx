import { Suspense } from 'react'
import Head from 'next/head'
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  graphql,
} from 'react-relay/hooks';
import RelayEnvironment from '../relay/RelayEnvironment'
import FeedCotainer from '../components/FeedContainer'
import UserProfile from '../components/UserProfile'
import CircularProgress from '../components/CircularProgress'
import Navigation from '../components/Navigation'

const RepositoryNameQuery = graphql`
    query pagesRepositoryNameQuery { 
      viewer {
        name,
      }
  }
`;


export const Home = (props): JSX.Element => {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);
  return (
    <div className="flex flex-col justify-center">
      <Head>
        <title>First Contributions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="flex flex-row container">
        <aside className="p-4 hidden md:block flex flex-col lg:w-1/5 items-center">
          <UserProfile />
          {JSON.stringify(data.viewer)}
        </aside>
        <main className="w-full md:w-2/3">
          <FeedCotainer />
        </main>
        <aside className="p-4 hidden md:block">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a className="text-2xl">Login with Github</a>
          </button>
          <footer></footer>
        </aside>
      </div>
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

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});


function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <Home preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}


export default AppRoot

import Head from 'next/head'
import ContributionsGraph from '../components/ContributionsGraph'
import contributorsData from './contributorData.json'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>First Contributions</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <ContributionsGraph data={contributorsData} />
    </main>

    <footer></footer>

    <style jsx>{`
      main {
        height: 80vh;
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)

export default Home

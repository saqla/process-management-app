import Head from 'next/head'
import Header from '../components/Header'
import HouseMaker from '../components/HouseMaker'

export default function Home() {
  return (
    <div>
      <Head>
        <title>かんりくん</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <HouseMaker />
      </main>

    </div>
  )
}

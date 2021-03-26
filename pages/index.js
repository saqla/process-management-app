import Head from 'next/head'
import Header from '../components/Header'
import HouseMaker from '../components/HouseMakers'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>かんりくん</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex justify-center">
        <HouseMaker />
      </main>

    </div>
  )
}

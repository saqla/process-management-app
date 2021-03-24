import Head from 'next/head'
import Header from '../components/Header'
import HouseMaker from '../components/HouseMaker'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>かんりくん</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <HouseMaker />
      </main>

    </div>
  )
}

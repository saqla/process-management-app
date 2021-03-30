import { useEffect, FC, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import HouseMakers from '../components/HouseMakers'

import { auth } from '../utils/firebase'

const Home: FC = (props: any) => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<null | object>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : router.push('/login')
    })
  }, [])

  const logOut = async () => {
    try {
      await auth.signOut()
      router.push('/login')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <div className="hidden-area">
        <pre>{currentUser && JSON.stringify(currentUser, null, 4)}</pre>
        <button onClick={logOut}>Logout</button>
      </div>

      <div className="container">
        <Head>
          <title>かんりくん</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="flex justify-center">
          <HouseMakers />
        </main>
      </div>
    </div>
  )
}

export default Home


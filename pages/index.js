import { useEffect, FC, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import HouseMaker from '../components/HouseMakers'

import { auth } from '../src/utils/firebase'

const Home = (props) => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState(null)

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
    <>
      {/* <div>
        <pre>{currentUser && JSON.stringify(currentUser, null, 4)}</pre>
        <button onClick={logOut}>Logout</button>
      </div> */}

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
    </>
  )
}

export default Home
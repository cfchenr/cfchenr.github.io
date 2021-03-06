import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Interface from '../components/Interface'

const Home: React.FC = () => {
  const router = useRouter()
  const { color, world } = router.query

  return (
    <>
      <Head>
        <title>cfchenr - {world ? world : 'CV'}</title>
      </Head>
      <Interface
        color={color ? (color as string) : 'ffb74d'}
        world={world ? (world as string) : 'World'}
      />
    </>
  )
}

export default Home

import React from 'react'
import Head from 'next/head'
import Interface from '../components/Interface'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Interface color="ffb74d" company="World" />
    </>
  )
}

export default Home

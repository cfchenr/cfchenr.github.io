import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Interface from '../../../components/Interface'

const Home: React.FC = () => {
  const router = useRouter()
  const { color, company } = router.query

  return (
    <>
      <Head>
        <title>Homepage - {company}</title>
      </Head>
      <Interface color={color as string} company={company as string} />
    </>
  )
}

export default Home

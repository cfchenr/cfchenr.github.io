import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Interface from '../components/Interface'

const Home: React.FC = () => {
  const router = useRouter()
  const { color, company } = router.query

  return (
    <>
      <Head>
        <title>cfchenr - {company ? company : 'CV'}</title>
      </Head>
      <Interface
        color={color ? (color as string) : 'ffb74d'}
        company={company ? (company as string) : 'World'}
      />
    </>
  )
}

export default Home

import Head from 'next/head'
import { FunctionComponent } from 'react'
import Foo from 'components/Foo'

interface IHome {
  foo?: any
}

const Home: FunctionComponent<IHome> = () => {
  return (
    <>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Go and create" />
      </Head>
      <html lang="en">
        <main>
          <Foo />
        </main>
      </html>
    </>
  )
}

export default Home

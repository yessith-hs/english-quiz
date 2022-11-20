import Head from 'next/head'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='robots' content='noindex'></meta>
        <meta name="theme-color" content="#4285f4"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import fs from 'node:fs/promises'
import { ListComics } from 'components/ListComics'
import { MainLayout } from 'components/MainLayout'
import Head from 'next/head'

export default function Home({ latesComics }) {
  return (
    <>
      <Head>
        <title>xkcd - Comics for developers</title>
        <meta name='description' content='Comics for developers next app' />
      </Head>

      <MainLayout>
        <h1 className='text-3xl font-bold text-center'>Latest Comics!</h1>
        <ListComics latesComics={latesComics} />
      </MainLayout>
    </>
  )
}

export const getStaticProps = async () => {
  // * se lee el directorio de commics y devuelve un array con todos los comics
  const files = await fs.readdir('./comics')
  const lastesComicsFiles = files.slice(-10, files.length) // * se traen los ultimos 10 comics

  const promiseReadFiles = lastesComicsFiles.map(async file => {
    // * se recorren cada uno de los 10 archivos json para poder leer su información
    // * lo cual devueven una lista de promesas que se resuleven con promise all
    const content = await fs.readFile(`./comics/${file}`, 'utf8')
    return JSON.parse(content)
  })

  const latesComics = await Promise.all(promiseReadFiles).catch(error =>
    console.error(error)
  )
  return { props: { latesComics } }
}

import Image from 'next/image'
import path from 'path'
import fs from 'node:fs/promises'
import { Header } from 'components/Header'
import { MetaHeadSeo } from 'components/MetaHeadSeo'
import { NavLink } from 'components/NavLink'
import { Footer } from 'components/Footer'
import Head from 'next/head'
import { MainLayout } from 'components/MainLayout'

function comic({
  img,
  width,
  height,
  restOfComic,
  nextId,
  prevId,
  hasPrevious,
  hasNext
}) {
  return (
    <>
      <Head>
        <title>xkcd - Details Comic</title>
        <meta name='description' content='Details Comic for developers' />
      </Head>

      <MainLayout>
        <section className='px-2.5 max-w-lg  m-auto mt-10'>
          <article>
            <h1 className='mb-4 text-xl font-bold text-center'>
              {restOfComic.title}
            </h1>
            <div className='max-w-xs m-auto mb-5'>
              <Image
                src={img}
                alt={restOfComic.title}
                layout='responsive'
                objectFit='contain'
                width={width}
                height={height}
              />
            </div>
            <p>{restOfComic.alt}</p>
          </article>
          <div className='flex justify-between mt-5 font-bold'>
            {hasPrevious && (
              <NavLink href={`/comic/${prevId}`}>⬅ Previous</NavLink>
            )}
            {hasNext && <NavLink href={`/comic/${nextId}`}>Next ➡</NavLink>}
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default comic

// * el getStaticPaths es útil si se tiene una pequeña cantidad de rutas para crear o si no se agregan nuevos datos de página con frecuencia (2500 paginas es bastante).

export async function getStaticPaths() {
  const jsonFiles = await fs.readdir('./comics')

  const paths = jsonFiles.map(file => {
    const basePath = path.basename(file, '.json')
    const [, id] = basePath.split('-')
    return { params: { id } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  //* Get data comic
  const content = await fs.readFile(`./comics/comic-${id}.json`, 'utf8')
  const comic = JSON.parse(content)

  // * Pagination
  const idNumber = +id
  const nextId = idNumber + 1
  const prevId = idNumber - 1

  // * Se evalua si el comic con el nextId o prevId existe dentro del File Sistem, por lo que se usa un Promise.allSettled para verificar su estatus de fulfilled o rejected
  const [nextResult, prevResult] = await Promise.allSettled([
    fs.stat(`./comics/comic-${nextId}.json`),
    fs.stat(`./comics/comic-${prevId}.json`)
  ])

  const hasPrevious = prevResult.status === 'fulfilled'
  const hasNext = nextResult.status === 'fulfilled'

  return {
    props: {
      ...comic,
      nextId,
      prevId,
      hasPrevious,
      hasNext
    }
  }
}

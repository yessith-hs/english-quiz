import fs from 'fs/promises'
import Image from 'next/image'
import { Header } from 'components/Header'
import { MetaHeadSeo } from 'components/MetaHeadSeo'
import { NavLink } from 'components/NavLink'
import path from 'path'

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
      <MetaHeadSeo
        title='xkcd - Details Comic'
        description='Details Comic for developers'
      />
      <Header />
      <main className='px-2.5 max-w-md  m-auto mt-10'>
        <section>
          <article>
            <h1 className='font-bold'>{restOfComic.title}</h1>
            <Image
              src={img}
              alt={restOfComic.title}
              layout='responsive'
              objectFit='contain'
              width={width}
              height={height}
            />
            <p>{restOfComic.alt}</p>
          </article>
          <div className='flex justify-between'>
            {hasPrevious && (
              <NavLink href={`/comic/${prevId}`}>Previous</NavLink>
            )}
            {hasNext && <NavLink href={`/comic/${nextId}`}>Next</NavLink>}
          </div>
        </section>
      </main>
    </>
  )
}

export default comic

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

import { CardComic } from 'components/CardComic'

export function ListComics({ latesComics }) {
  return (
    <section className='grid gap-2 sm:grid-cols-2 md:grid-cols-3'>
      {latesComics.map(comic => (
        <CardComic
          key={comic.id}
          id={comic.id}
          img={comic.img}
          width={comic.width}
          height={comic.height}
          comic={comic.restOfComic}
        />
      ))}
    </section>
  )
}

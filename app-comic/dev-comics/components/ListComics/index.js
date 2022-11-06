import { CardComic } from 'components/CardComic'

export const ListComics = ({ latesComics }) => {
  return (
    <section className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
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

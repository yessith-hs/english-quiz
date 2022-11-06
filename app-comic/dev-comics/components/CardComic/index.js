import { NavLink } from 'components/NavLink'
import Image from 'next/image'

export const CardComic = ({ id, comic,img,width,height }) => {
  return (
    <article>
      <NavLink href={`/comic/${id}`}>
        <h2 className='text-sm font-bold text-center'>{comic.title}</h2>
        <figure>
          <Image
            src={img}
            alt={comic.title}
            layout='responsive'
            objectFit='contain'
            width={width}
            height={height}
          />
          {/* <img src={comic.img} alt={comic.title} /> */}
        </figure>
      </NavLink>
    </article>
  )
}

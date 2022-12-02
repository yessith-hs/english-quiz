import Image from 'next/image'
import { NavLink } from 'components/NavLink'
import logo from '../../public/logo.png'

export function Header  () {
  return (
    <header className='flex items-center justify-between px-2.5 max-w-xl  m-auto'>
      <NavLink href='/'>
        <figure className='w-28'>
          <Image src={logo} alt='logo' layout={'responsive'} />
        </figure>
      </NavLink>

      <nav>
        <ul className='flex items-center gap-2'>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/search'>Search</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

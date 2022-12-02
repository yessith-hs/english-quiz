import Link from 'next/link'

export function NavLink({ children, href }) {
  return (
    <Link href={href}>
      <a className='text-sm font-semibold'>{children}</a>
    </Link>
  )
}

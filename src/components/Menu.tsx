import Link from 'next/link'

const Menu = () => {
  const links = [
    {
      name: 'Home',
      link: '/',
    },

    {
      name: 'Sobre',
      link: '#sobre',
    },

    {
      name: 'Propostas',
      link: '#propostas',
    },

    {
      name: 'Seja um apoiador',
      link: '#seja-um-apoiador',
    },
    {
      name: 'Me siga',
      link: '#me-siga',
    },
  ]

  return (
    <>
      {links.map((link, i) => (
        <li key={i} className={'font-semibold hover:text-primary'}>
          <Link href={link.link}>
            <a>{link.name}</a>
          </Link>
        </li>
      ))}
    </>
  )
}

export { Menu }

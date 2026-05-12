import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: '[ 关于 ]', href: '#about' },
  { label: '[ 项目 ]', href: '#projects' },
  { label: '[ 论文 ]', href: '#papers' },
  { label: '[ 联系 ]', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="主导航">
      <div className="navbar__logo">
        <span className="navbar__prompt" aria-hidden="true">~&gt;</span>
        <span className="navbar__name">LeoiJR</span>
      </div>

      <ul className="navbar__links" role="list">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="navbar__link"
              onClick={(e) => handleNav(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
        <li aria-hidden="true">
          <span className="cursor" style={{ width: 10, height: 18 }} />
        </li>
      </ul>
    </nav>
  )
}

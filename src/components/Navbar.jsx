import { useEffect, useRef, useState } from 'react'
import sjmLogo from '../assets/sjm_logo.jpeg'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchInputRef = useRef(null)

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', updateNavbar, { passive: true })
    updateNavbar()
    return () => window.removeEventListener('scroll', updateNavbar)
  }, [])

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus()
  }, [isSearchOpen])

  return (
    <nav className={`navbar site-navbar ${isScrolled ? 'is-scrolled' : ''}`} aria-label="Main navigation">
      <div className="container-fluid">
        <a className="navbar-brand site-brand" href="#" aria-label="SJM Electricals home">
          <img src={sjmLogo} alt="SJM Electricals" />
        </a>
        <div className="site-nav-links">
          <form
            className={`search-control ${isSearchOpen ? 'is-open' : ''}`}
            role="search"
            onSubmit={(event) => event.preventDefault()}
          >
            <button
              className="search-button"
              type="button"
              aria-label={isSearchOpen ? 'Close search' : 'Open search'}
              aria-expanded={isSearchOpen}
              onClick={() => setIsSearchOpen((open) => !open)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="6.4" />
                <path d="m16 16 4.5 4.5" />
              </svg>
            </button>
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Search..."
              aria-label="Search the site"
              tabIndex={isSearchOpen ? 0 : -1}
            />
          </form>
          <a href="#industrial">Industrial</a>
          <a href="#commercial">Commercial</a>
          <a href="#residential">Residential</a>
          <a className="enquire-link" href="#enquire">Enquire</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

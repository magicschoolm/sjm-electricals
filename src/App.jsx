import { useEffect, useState } from 'react'
import './App.css'

const LOADING_DURATION = 3000

function LoadingScreen() {
  return (
    <main className="loading-screen" aria-label="Loading SJM Electricals">
      <div className="loading-mark" aria-hidden="true">
        <span className="mark-line mark-line-one" />
        <span className="mark-line mark-line-two" />
      </div>
      <div className="name-lockup">
        <span className="name-first">jerrin</span>
        <span className="name-second">mathew</span>
      </div>
      <span className="loading-caption">powering up</span>
    </main>
  )
}

function HomePage() {
  return (
    <main className="home-page">
      <nav className="navbar site-navbar" aria-label="Main navigation">
        <div className="container-fluid">
          <span className="navbar-brand brand-placeholder" aria-hidden="true" />
          <span className="nav-placeholder" aria-hidden="true" />
        </div>
      </nav>
      <section className="home-space" aria-label="Home" />
      <footer className="site-footer">
        <div className="container-fluid">
          <span className="footer-placeholder" aria-hidden="true" />
        </div>
      </footer>
    </main>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), LOADING_DURATION)
    return () => window.clearTimeout(timer)
  }, [])

  return isLoading ? <LoadingScreen /> : <HomePage />
}

export default App

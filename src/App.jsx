import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

const LOADING_DURATION = 3000

function HomePage() {
  return (
    <main className="home-page">
      <Navbar />
      <section className="home-space" aria-label="Home">
        <div className="container-fluid dummy-content">
          <span className="dummy-eyebrow">SJM Electricals</span>
          <h1>Powering better spaces.</h1>
          <p>Industrial, commercial and residential electrical solutions.</p>
        </div>
      </section>
      <Footer />
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

import { Link } from 'react-router-dom'

const baseUrl = import.meta.env.BASE_URL

function Home() {
  return (
    <div className="page">
      <nav className="nav">
        <Link to="/" className="nav-brand">
          <img src={`${baseUrl}app-icon.png`} alt="Phone Dashboard" />
          <span>Phone Dashboard</span>
        </Link>
        <Link to="/privacy" className="nav-link">
          Privacy
        </Link>
        <Link to="/delete-data" className="nav-link">
          Delete Data
        </Link>
      </nav>

      <main className="hero">
        <img
          src={`${baseUrl}app-icon.png`}
          alt="Phone Dashboard App Icon"
          className="hero-icon fade-in"
        />

        <div className="gauge-indicator">
          <div className="gauge-bar"></div>
          <div className="gauge-bar"></div>
          <div className="gauge-bar"></div>
          <div className="gauge-bar"></div>
          <div className="gauge-bar"></div>
          <div className="gauge-bar"></div>
        </div>

        <h1 className="fade-in-up delay-1">Phone Dashboard</h1>

        <p className="hero-subtitle fade-in-up delay-2">
          A research app that helps you understand your smartphone usage
          by tracking time spent in each app.
        </p>

        <Link to="/privacy" className="cta-link fade-in-up delay-3">
          <span>Learn about your data</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </main>

      <footer className="footer fade-in-up delay-4">
        <p>Built for academic research at Nova School of Business and Economics</p>
      </footer>
    </div>
  )
}

export default Home

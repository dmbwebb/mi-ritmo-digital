import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

const baseUrl = import.meta.env.BASE_URL

function Home() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <div className="page">
      <nav className="nav">
        <Link to="/" className="nav-brand">
          <img src={`${baseUrl}app-icon.png`} alt="Mi Ritmo Digital" />
          <span>Mi Ritmo Digital</span>
        </Link>
        <div className="nav-links">
          <Link to="/privacy" className="nav-link">
            {t('navPrivacy')}
          </Link>
          <Link to="/delete-data" className="nav-link">
            {t('navDeleteData')}
          </Link>
          <Link to="/register" className="nav-link">
            {t('navRegister')}
          </Link>
          <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </nav>

      <main className="hero">
        <img
          src={`${baseUrl}app-icon.png`}
          alt="Mi Ritmo Digital App Icon"
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

        <h1 className="fade-in-up delay-1">Mi Ritmo Digital</h1>

        <p className="hero-subtitle fade-in-up delay-2">
          {t('heroSubtitle')}
        </p>

        <Link to="/privacy" className="cta-link fade-in-up delay-3">
          <span>{t('ctaText')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </main>

      <footer className="footer fade-in-up delay-4">
        <p>{t('footer')}</p>
      </footer>
    </div>
  )
}

export default Home

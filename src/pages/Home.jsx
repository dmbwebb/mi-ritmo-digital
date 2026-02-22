import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

const baseUrl = import.meta.env.BASE_URL

function Home() {
  const { language, toggleLanguage, t } = useLanguage()
  const [activeTab, setActiveTab] = useState('app')

  return (
    <div className="page">
      <nav className="nav">
        <Link to="/" className="nav-brand">
          <img src={`${baseUrl}logo.svg`} alt="Mi Ritmo Digital" />
          <span>Mi Ritmo Digital</span>
        </Link>
        <div className="nav-links">
          <Link to="/register" className="nav-link">
            {t('navRegister')}
          </Link>
          <Link to="/privacy" className="nav-link">
            {t('navPrivacy')}
          </Link>
          <Link to="/delete-data" className="nav-link">
            {t('navDeleteData')}
          </Link>
          <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </nav>

      <main className="hero">
        <img
          src={`${baseUrl}logo.svg`}
          alt="Mi Ritmo Digital App Icon"
          className="hero-icon fade-in"
        />

        <h1 className="fade-in-up delay-1">Mi Ritmo Digital</h1>

        {/* Tab switcher */}
        <div className="home-tabs fade-in-up delay-2" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'app'}
            className={`home-tab${activeTab === 'app' ? ' active' : ''}`}
            onClick={() => setActiveTab('app')}
          >
            {t('tabApp')}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'program'}
            className={`home-tab${activeTab === 'program' ? ' active' : ''}`}
            onClick={() => setActiveTab('program')}
          >
            {t('tabProgram')}
          </button>
        </div>

        {/* Tab: The App */}
        {activeTab === 'app' && (
          <div className="tab-content fade-in-up" role="tabpanel">
            <p className="hero-subtitle">
              {t('heroSubtitle')}
            </p>
            <div className="tab-features">
              <div className="feature-chip">📊 {t('featureUsage')}</div>
              <div className="feature-chip">⏱ {t('featureBudgets')}</div>
              <div className="feature-chip">🔒 {t('featurePrivacy')}</div>
            </div>
            <Link to="/privacy" className="cta-link">
              <span>{t('ctaText')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        )}

        {/* Tab: The Parental Program */}
        {activeTab === 'program' && (
          <div className="tab-content fade-in-up" role="tabpanel">
            <p className="hero-subtitle">
              {t('programSubtitle')}
            </p>
            <div className="tab-features">
              <div className="feature-chip">👨‍👩‍👧 {t('featureParents')}</div>
              <div className="feature-chip">💙 {t('featureAdolescent')}</div>
              <div className="feature-chip">🎓 {t('featureResearch')}</div>
            </div>
            <Link to="/register" className="cta-link cta-link--program">
              <span>{t('programCta')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        )}
      </main>

      <footer className="footer fade-in-up delay-4">
        <p>{t('footer')}</p>
      </footer>
    </div>
  )
}

export default Home

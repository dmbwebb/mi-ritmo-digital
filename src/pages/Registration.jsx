import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

const baseUrl = import.meta.env.BASE_URL

function Registration() {
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

      <main className="content container">
        <header className="content-header fade-in-up">
          <h1>{t('registerTitle')}</h1>
          <p className="last-updated">{t('registerSubtitle')}</p>
        </header>

        <section className="section fade-in-up delay-1">
          <h2>{t('registerVideoTitle')}</h2>
          <div className="video-embed">
            <iframe
              src="https://www.youtube-nocookie.com/embed/Jvzp7VM_z7I?modestbranding=1&rel=0"
              width="100%"
              title={t('registerVideoTitle')}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="section fade-in-up" style={{ marginTop: 'var(--space-xl)' }}>
          <h2>{t('registerFormTitle')}</h2>
          <p>{t('registerFormHint')}</p>
        </section>

        <div className="form-embed fade-in-up">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe_1D4CRYNnnoM-hpaqk7t4h4m4CifkbKggf-Ha-2n6u4nIAg/viewform?embedded=true"
            width="100%"
            height="2451"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title={t('registerTitle')}
          >
            {t('registerLoading')}
          </iframe>
        </div>

        <Link to="/" className="back-link fade-in-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span>{t('backHome')}</span>
        </Link>
      </main>

      <footer className="footer fade-in-up">
        <p>{t('footer')}</p>
      </footer>
    </div>
  )
}

export default Registration

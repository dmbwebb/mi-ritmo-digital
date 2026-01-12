import { Link } from 'react-router-dom'

const baseUrl = import.meta.env.BASE_URL

function Privacy() {
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
      </nav>

      <main className="content container">
        <header className="content-header fade-in-up">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: January 2026</p>
        </header>

        <section className="section fade-in-up delay-1">
          <h2>Introduction</h2>
          <p>
            Phone Dashboard is developed for academic research purposes. This privacy
            policy explains how we collect, use, and protect your data when you use
            the app as part of our research study.
          </p>
        </section>

        <section className="section fade-in-up delay-2">
          <h2>Data We Collect</h2>
          <p>The app collects <strong>only</strong> the following information:</p>
          <ul>
            <li><strong>App usage statistics:</strong> Which apps you use and for how long</li>
            <li><strong>Device information:</strong> Device model, operating system version, and a unique device identifier</li>
            <li><strong>App interaction data:</strong> How you interact with Phone Dashboard features (e.g., setting budgets, responding to usage warnings)</li>
          </ul>
          <p>
            <strong>We do not collect any other data.</strong> The app does not access your
            location, contacts, messages, photos, browsing history, or any personal content
            on your device.
          </p>
        </section>

        <section className="section fade-in-up delay-3">
          <h2>How We Use Your Data</h2>
          <p>Your data is used for:</p>
          <ul>
            <li>Displaying your usage statistics within the app</li>
            <li>Enforcing usage budgets you have set</li>
            <li>Academic research on smartphone usage patterns</li>
          </ul>
        </section>

        <section className="section fade-in-up delay-4">
          <h2>Data Storage and Security</h2>
          <p>Your data is:</p>
          <ul>
            <li>Transmitted securely to our research server using encryption</li>
            <li>Stored on secure servers with restricted access</li>
            <li>Associated with a de-identified participant code, not your name or email</li>
            <li>Accessible only to authorized members of the research team</li>
          </ul>
        </section>

        <section className="section fade-in-up">
          <h2>Data Sharing</h2>
          <p>
            We do not sell or share your personal data with third parties.
            Anonymized, aggregated data may be used in academic publications.
          </p>
        </section>

        <section className="section fade-in-up">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Withdraw from the study at any time</li>
            <li>Request deletion of your data</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section className="section fade-in-up">
          <h2>Permissions</h2>
          <p>The app requires the following permissions:</p>
          <ul>
            <li><strong>Usage Access:</strong> To track which apps you use and for how long</li>
            <li><strong>Display over other apps:</strong> To show usage warnings when you reach your budget limits</li>
          </ul>
        </section>

        <section className="section fade-in-up">
          <h2>Young People's Privacy</h2>
          <p>
            This app may be used by participants aged 13 to 17 as part of our research study.
            For participants under 18, we require signed parental or guardian consent before
            any data is collected.
          </p>
          <p>Parents and guardians have the right to:</p>
          <ul>
            <li>Review the data collected from their child</li>
            <li>Request deletion of their child's data at any time</li>
            <li>Withdraw their child from the study</li>
          </ul>
          <p>
            We do not knowingly collect data from children under 13.
          </p>
        </section>

        <section className="section fade-in-up">
          <h2>Data Retention</h2>
          <p>
            Identifiable data is deleted when the study ends or when you withdraw from the study.
            Anonymized, aggregated data may be retained for up to 5 years for research purposes.
          </p>
        </section>

        <section className="section fade-in-up">
          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy or your data,
            please contact:
          </p>
          <div className="contact-card">
            <p>
              <strong>Duncan Webb</strong><br />
              Nova School of Business and Economics<br />
              <a href="mailto:duncan.webb@novasbe.pt">duncan.webb@novasbe.pt</a>
            </p>
          </div>
        </section>

        <Link to="/" className="back-link fade-in-up">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </main>

      <footer className="footer fade-in-up">
        <p>Built for academic research at Nova School of Business and Economics</p>
      </footer>
    </div>
  )
}

export default Privacy

import { Link } from 'react-router-dom'

const baseUrl = import.meta.env.BASE_URL

function DataDeletion() {
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

      <main className="content container">
        <header className="content-header fade-in-up">
          <h1>Data Deletion Request</h1>
          <p className="last-updated">How to request deletion of your data</p>
        </header>

        <section className="section fade-in-up delay-1">
          <h2>Your Right to Data Deletion</h2>
          <p>
            As a participant in our research study, you have the right to request
            deletion of your personal data at any time. This page explains what
            data we collect, what gets deleted, and how to submit a request.
          </p>
        </section>

        <section className="section fade-in-up delay-2">
          <h2>Data We Collect</h2>
          <p>Phone Dashboard collects the following types of data:</p>
          <ul>
            <li>
              <strong>Email address:</strong> Used only during enrollment to
              link you to your participant code
            </li>
            <li>
              <strong>De-identified participant ID:</strong> A unique code that
              identifies your data without revealing your identity
            </li>
            <li>
              <strong>App usage statistics:</strong> Which apps you use and for
              how long (e.g., 45 minutes on Instagram today)
            </li>
            <li>
              <strong>App interaction data:</strong> How you interact with Phone
              Dashboard features such as setting budgets and responding to usage
              warnings
            </li>
            <li>
              <strong>Crash logs:</strong> Technical information collected via
              Microsoft AppCenter when the app encounters errors
            </li>
          </ul>
        </section>

        <section className="section fade-in-up delay-3">
          <h2>What Gets Deleted</h2>
          <p>When you request data deletion, we will permanently remove:</p>
          <ul>
            <li>Your email address from our enrollment records</li>
            <li>All app usage data linked to your participant ID</li>
            <li>Your participant profile and settings</li>
            <li>Any crash logs associated with your device</li>
          </ul>
        </section>

        <section className="section fade-in-up">
          <h2>What May Be Retained</h2>
          <p>
            The following data may be retained after a deletion request, as
            permitted by research ethics guidelines:
          </p>
          <ul>
            <li>
              <strong>Anonymized aggregate data:</strong> Statistical summaries
              that cannot be linked back to you (e.g., average usage across all
              participants)
            </li>
            <li>
              <strong>Research records:</strong> Documentation required for
              research integrity and audit purposes, stored separately from
              identifiable data
            </li>
          </ul>
        </section>

        <section className="section fade-in-up">
          <h2>How to Request Deletion</h2>
          <p>To request deletion of your data, please:</p>
          <ol className="numbered-list">
            <li>
              Send an email to the address below with the subject line
              &quot;Data Deletion Request&quot;
            </li>
            <li>
              Include your participant ID or the email address you used to
              enroll (so we can locate your data)
            </li>
            <li>State that you wish to have your data deleted</li>
          </ol>
          <p>
            We will process your request within 30 days and send you
            confirmation once your data has been deleted.
          </p>
        </section>

        <section className="section fade-in-up">
          <h2>Contact</h2>
          <p>Send your data deletion request to:</p>
          <div className="contact-card">
            <p>
              <strong>Duncan Webb</strong>
              <br />
              Nova School of Business and Economics
              <br />
              <a href="mailto:duncan.webb@novasbe.pt">duncan.webb@novasbe.pt</a>
            </p>
          </div>
          <p style={{ marginTop: 'var(--space-sm)' }}>
            Please use the subject line: <strong>Data Deletion Request - Phone Dashboard</strong>
          </p>
        </section>

        <section className="section fade-in-up">
          <h2>After Deletion</h2>
          <p>
            Once your data is deleted, you will no longer be able to participate
            in the study. If you only wish to stop using the app but keep your
            data for the research, you can simply uninstall the app without
            submitting a deletion request.
          </p>
        </section>

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
          <span>Back to Home</span>
        </Link>
      </main>

      <footer className="footer fade-in-up">
        <p>Built for academic research at Nova School of Business and Economics</p>
      </footer>
    </div>
  )
}

export default DataDeletion

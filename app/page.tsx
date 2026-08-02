const programs = [
  {
    title: "Financial Modeling Bootcamp",
    text: "Build a connected model from historical statements through forecasting, scenarios, valuation, and final recommendation.",
    meta: "Core financial modeling",
  },
  {
    title: "Forecasting and FP&A",
    text: "Build driver-based forecasts, planning models, variance analysis, and decision-focused reporting.",
    meta: "Planning and performance",
  },
  {
    title: "Advanced Financial Modeling",
    text: "Improve model structure, flexibility, accuracy, scenario logic, and executive-level outputs.",
    meta: "Advanced capability",
  },
];

const services = [
  "Financial Model Development",
  "Feasibility and Investment Analysis",
  "Valuation and Transaction Modeling",
  "Budgeting and Forecasting",
  "Dashboards and Decision Tools",
  "Corporate Training",
];

const method = [
  ["Understand", "Define the decision, understand the business, and organize the financial information."],
  ["Build", "Convert historical data and business assumptions into a structured, flexible model."],
  ["Test", "Use checks, scenarios, sensitivities, and valuation to understand uncertainty."],
  ["Explain", "Turn the outputs into a clear conclusion, recommendation, and next action."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="ModEX home">
            <span className="brand-mark" aria-hidden="true">MX</span>
            <span>ModEX</span>
          </a>
          <nav className="nav-links" aria-label="Main menu">
            <a href="#programs">Programs</a>
            <a href="#organizations">For Organizations</a>
            <a href="#community">Community</a>
            <a href="#insights">Insights</a>
            <a href="#about">About</a>
          </nav>
          <div className="nav-actions">
            <a className="button button-ghost" href="/ar" lang="ar">العربية</a>
            <a className="button button-secondary" href="#contact">Contact</a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Financial Modeling &amp; Strategic Finance</div>
            <h1>Build Better Models. Make Better Decisions.</h1>
            <p className="hero-copy">
              ModEX helps finance professionals build practical, connected capability—and helps organizations turn complex financial information into clear, actionable decisions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#programs">Explore Programs</a>
              <a className="button button-ghost" href="#organizations">For Organizations</a>
            </div>
            <p className="hero-note">Serving professionals and organizations in Arabic and English.</p>
          </div>

          <div className="model-visual" aria-label="The ModEX financial decision journey">
            {method.map(([title, text], index) => (
              <div className="model-step" key={title}>
                <div className="step-number">0{index + 1}</div>
                <div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="path-title">
        <div className="container">
          <div className="eyebrow">Choose your path</div>
          <h2 className="section-title" id="path-title">What are you here to build?</h2>
          <div className="grid-2">
            <article className="card">
              <h3>Build Your Finance Career</h3>
              <p>Develop practical capability across financial statements, Excel, forecasting, financial modeling, scenarios, valuation, dashboards, and decision communication.</p>
              <ul className="card-list">
                <li>Build connected financial models.</li>
                <li>Forecast using business drivers.</li>
                <li>Explain results with professional clarity.</li>
              </ul>
              <a className="card-link" href="#programs">Find Your Program →</a>
            </article>
            <article className="card">
              <h3>Build a Solution for Your Organization</h3>
              <p>Build a financial model, evaluate an investment, improve planning, create clearer dashboards, or strengthen your finance team.</p>
              <ul className="card-list">
                <li>Structure the business question.</li>
                <li>Test assumptions and scenarios.</li>
                <li>Improve financial decision quality.</li>
              </ul>
              <a className="card-link" href="#organizations">Discuss Your Challenge →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="method-title">
        <div className="container">
          <div className="eyebrow">The ModEX method</div>
          <h2 className="section-title" id="method-title">From information to action—in four connected stages.</h2>
          <p className="section-copy">The same disciplined method supports practical learning and organizational decision work.</p>
          <div className="method-grid">
            {method.map(([title, text]) => (
              <article className="method-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="programs" aria-labelledby="programs-title">
        <div className="container">
          <div className="eyebrow">Professional learning</div>
          <h2 className="section-title" id="programs-title">Programs built around practical outputs</h2>
          <p className="section-copy">Choose a structured learning journey based on your current level, target role, and the capability you want to build.</p>
          <div className="grid-3" style={{ marginTop: 34 }}>
            {programs.map((program) => (
              <article className="card" key={program.title}>
                <div className="eyebrow">{program.meta}</div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <a className="card-link" href="#contact">View Program →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="organizations" aria-labelledby="organizations-title">
        <div className="container">
          <div className="eyebrow">For organizations</div>
          <h2 className="section-title" id="organizations-title">Start with the decision—not the spreadsheet.</h2>
          <p className="section-copy">ModEX helps organizations clarify the question, structure assumptions, build the model, test uncertainty, and communicate the result.</p>
          <div className="grid-3" style={{ marginTop: 34 }}>
            {services.map((service) => (
              <article className="card" key={service}>
                <h3>{service}</h3>
                <p>Structured financial work designed around the business question, required outputs, and decision context.</p>
                <a className="card-link" href="#contact">Explore Solution →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="about" aria-labelledby="about-title">
        <div className="container grid-2">
          <div>
            <div className="eyebrow">About ModEX</div>
            <h2 className="section-title" id="about-title">Built from practice. Designed to become a standard.</h2>
          </div>
          <div>
            <p className="section-copy">Ayman Ramzy founded ModEX after seeing the same problem across professional learning and finance work: understanding a concept did not always lead to reliable analysis, professional judgment, or confident decisions.</p>
            <p className="hero-note">Founded by Ayman Ramzy. Delivered through the ModEX Standard.</p>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="contact" aria-labelledby="contact-title">
        <div className="container">
          <div className="eyebrow">Next step</div>
          <h2 className="section-title" id="contact-title">What are you ready to build?</h2>
          <p className="section-copy">Choose a professional learning path or speak with ModEX about an organizational challenge.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:info@financialmodex.com">Find Your Program</a>
            <a className="button button-ghost" href="mailto:info@financialmodex.com">Request a Consultation</a>
          </div>
        </div>
      </section>

      <footer className="footer" id="community">
        <div className="container footer-grid">
          <div className="brand" style={{ color: "white" }}>
            <span className="brand-mark" aria-hidden="true">MX</span>
            <span>ModEX</span>
          </div>
          <small>Build Better Models. Make Better Decisions.</small>
        </div>
      </footer>
      <span id="insights" hidden />
    </main>
  );
}

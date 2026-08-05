import type { Metadata } from "next";
import styles from "./exam.module.css";

export const metadata: Metadata = {
  title: "FM Bootcamp Certificate Examination | ModEX",
  description:
    "Secure candidate portal for the ModEX Financial Modelling Bootcamp final certificate examination.",
};

const competencies = [
  "Model structure and professional discipline",
  "Historical financial statement analysis",
  "Driver-based forecasting and integrated statements",
  "Working capital, PPE, debt, interest, and cash",
  "Scenarios, sensitivity, and risk interpretation",
  "DCF, comparables, and value-per-share logic",
  "CFO recommendation and decision communication",
];

const rules = [
  "Restricted-resource open-book examination",
  "Individual work and closed collaboration",
  "AI tools, messaging, external answer sites, and another candidate’s file are prohibited",
  "Only approved ModEX materials, personal notes, desktop Excel, and a calculator are permitted",
  "Formulas, links, assumptions, and model checks must remain visible and auditable",
  "Submitting the examination confirms acceptance of the candidate declaration",
];

const journey = [
  ["01", "Verify", "Sign in with your approved candidate account and complete the readiness check."],
  ["02", "Accept", "Read the examination rules and sign the independent-work declaration."],
  ["03", "Part A", "Complete the timed knowledge, calculation, and judgement assessment."],
  ["04", "Part B", "Build and submit the Nour Foods integrated financial model and recommendation."],
  ["05", "Review", "The marking and moderation team evaluates method, controls, judgement, and evidence."],
  ["06", "Result", "Approved candidates receive their certificate decision through the secure portal."],
];

export default function ExamPortalLanding() {
  return (
    <main className={styles.portal}>
      <header className={styles.header}>
        <div className={styles.shell}>
          <a className={styles.brand} href="/" aria-label="Return to ModEX home">
            <img src="/modex-logo-dark.svg" alt="ModEX" />
          </a>
          <div className={styles.headerActions}>
            <span className={styles.secureLabel}>Secure Candidate Portal</span>
            <a className={styles.languageLink} href="/ar/exam" lang="ar">
              العربية
            </a>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div>
            <div className={styles.eyebrow}>ModEX Financial Modelling Bootcamp</div>
            <h1>Final Certificate Examination</h1>
            <p className={styles.heroText}>
              A controlled, practical assessment of the complete six-session journey—from historical statements and forecasting to scenarios, valuation, and a CFO recommendation.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="/exam/login">
                Candidate Sign In
              </a>
              <a className={styles.secondaryButton} href="#rules">
                Review Examination Rules
              </a>
            </div>
            <p className={styles.pilotNotice}>
              Controlled pilot environment. Access is limited to invited candidates and authorised ModEX reviewers.
            </p>
          </div>

          <aside className={styles.examCard} aria-label="Examination summary">
            <div className={styles.cardTopline}>Examination Structure</div>
            <div className={styles.metricGrid}>
              <div>
                <strong>100</strong>
                <span>Total marks</span>
              </div>
              <div>
                <strong>270</strong>
                <span>Active minutes</span>
              </div>
              <div>
                <strong>65%</strong>
                <span>Overall pass</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Assessment parts</span>
              </div>
            </div>
            <div className={styles.partRow}>
              <span>Part A</span>
              <strong>Knowledge &amp; Judgement · 50 marks · 90 min</strong>
            </div>
            <div className={styles.partRow}>
              <span>Part B</span>
              <strong>Nour Foods Practical · 50 marks · 180 min</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="standard-heading">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>Certificate standard</div>
            <h2 id="standard-heading">What successful completion must prove</h2>
            <p>
              The certificate is awarded for demonstrated capability, not attendance alone. Candidates must show transparent modelling logic, integrated financial statements, risk awareness, valuation discipline, and clear decision communication.
            </p>
          </div>
          <div className={styles.competencyGrid}>
            {competencies.map((item, index) => (
              <article className={styles.competencyCard} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.darkSection} id="rules" aria-labelledby="rules-heading">
        <div className={`${styles.shell} ${styles.rulesGrid}`}>
          <div>
            <div className={styles.eyebrowLight}>Examination integrity</div>
            <h2 id="rules-heading">Rules candidates must accept</h2>
            <p>
              The assessment is open-book only within the approved resource boundary. A correct output without a transparent and auditable method receives limited credit.
            </p>
          </div>
          <ul className={styles.ruleList}>
            {rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="journey-heading">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>Candidate journey</div>
            <h2 id="journey-heading">One controlled path from invitation to result</h2>
          </div>
          <div className={styles.journeyGrid}>
            {journey.map(([number, title, text]) => (
              <article className={styles.journeyCard} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.decisionSection}>
        <div className={`${styles.shell} ${styles.decisionGrid}`}>
          <div>
            <div className={styles.eyebrow}>Nour Foods practical case</div>
            <h2>Build the logic. Check the model. Explain the decision.</h2>
            <p>
              Candidates analyse a fictional FMCG company, forecast its three operating segments, integrate the financial statements, test downside and upside cases, complete valuation, and advise the CFO on the five-year growth and capacity plan.
            </p>
          </div>
          <div className={styles.decisionQuestion}>
            <span>Central decision question</span>
            <strong>
              Should Nour Foods proceed with its five-year growth and capacity plan, and what conditions should the CFO impose?
            </strong>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <div>
            <strong>ModEX Financial Modelling Bootcamp</strong>
            <p>Secure certificate examination portal</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="/privacy">Privacy</a>
            <a href="/exam/rules">Rules</a>
            <a href="/contact">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { Topbar } from "@/components/topbar";
import { adminSummary, programs } from "@/lib/demo-data";
import { requireUser } from "@/lib/current-user";

export default async function AdminPage() {
  const user = await requireUser("ADMIN");

  return (
    <div className="shell">
      <Topbar user={user} />
      <main className="page">
        <div className="page-heading">
          <div>
            <div className="eyebrow">Administration</div>
            <h1>Learning Hub control center</h1>
            <p className="lead">Stage 1 provides the secure structure for programs, cohorts, enrollment, modules, lessons, Drive videos, and materials.</p>
          </div>
          <span className="badge">Foundation build</span>
        </div>

        <section className="grid grid-3" aria-label="Platform summary">
          <article className="card"><div className="eyebrow">Programs</div><div className="stat">{adminSummary.activePrograms}</div><p className="muted">Active learning journeys</p></article>
          <article className="card"><div className="eyebrow">Cohorts</div><div className="stat">{adminSummary.activeCohorts}</div><p className="muted">Currently running rounds</p></article>
          <article className="card"><div className="eyebrow">Students</div><div className="stat">{adminSummary.enrolledStudents}</div><p className="muted">Active enrollments</p></article>
          <article className="card"><div className="eyebrow">Published lessons</div><div className="stat">{adminSummary.publishedLessons}</div><p className="muted">Available to students</p></article>
        </section>

        <section className="card" style={{ marginTop: 26 }} aria-labelledby="program-table-title">
          <div className="page-heading" style={{ marginBottom: 14 }}>
            <div>
              <div className="eyebrow">Program management</div>
              <h2 id="program-table-title" style={{ marginBottom: 0 }}>Current programs</h2>
            </div>
            <span className="badge badge-muted">Database connection next</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Program</th><th>Cohort</th><th>Modules</th><th>Lessons</th><th>Status</th></tr></thead>
              <tbody>
                {programs.map((program) => (
                  <tr key={program.slug}>
                    <td><strong>{program.title}</strong></td>
                    <td>{program.cohort}</td>
                    <td>{program.modules.length}</td>
                    <td>{program.modules.reduce((total, module) => total + module.lessons.length, 0)}</td>
                    <td><span className="badge">Active</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid grid-2" style={{ marginTop: 26 }}>
          <article className="card">
            <div className="eyebrow">Next implementation slice</div>
            <h2 style={{ marginTop: 8 }}>Persistent administration</h2>
            <p className="muted">Connect PostgreSQL, then enable create, edit, publish, reorder, enroll, suspend, and release-date actions from this dashboard.</p>
          </article>
          <article className="card">
            <div className="eyebrow">Content delivery</div>
            <h2 style={{ marginTop: 8 }}>Google Drive-ready lessons</h2>
            <p className="muted">Each lesson supports a Drive preview URL and multiple downloadable materials. File-level sharing rules remain controlled in Google Drive.</p>
          </article>
        </section>
      </main>
    </div>
  );
}

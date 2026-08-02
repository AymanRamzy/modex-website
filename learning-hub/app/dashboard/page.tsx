import Link from "next/link";
import { Topbar } from "@/components/topbar";
import { programs } from "@/lib/demo-data";
import { requireUser } from "@/lib/current-user";

export default async function DashboardPage() {
  const user = await requireUser("STUDENT");

  return (
    <div className="shell">
      <Topbar user={user} />
      <main className="page">
        <div className="page-heading">
          <div>
            <div className="eyebrow">Student dashboard</div>
            <h1>Welcome back, {user.name.split(" ")[0]}.</h1>
            <p className="lead">Continue your learning journey, review released lessons, and download the working materials for your program.</p>
          </div>
        </div>

        <section aria-labelledby="my-programs-title">
          <h2 id="my-programs-title">My programs</h2>
          <div className="grid grid-2">
            {programs.map((program) => (
              <article className="card" key={program.slug}>
                <span className="badge">Active enrollment</span>
                <h2 style={{ marginTop: 18, marginBottom: 8 }}>{program.title}</h2>
                <p className="muted">{program.subtitle}</p>
                <div className="program-meta">
                  <span>{program.cohort}</span>
                  <span>{program.schedule}</span>
                  <span>{program.instructor}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontWeight: 800 }}>
                  <span>Overall progress</span>
                  <span>{program.progress}%</span>
                </div>
                <div className="progress-track" aria-label={`${program.progress}% complete`}>
                  <div className="progress-fill" style={{ width: `${program.progress}%` }} />
                </div>
                <Link className="card-link" href={`/dashboard/programs/${program.slug}`}>
                  Continue program →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

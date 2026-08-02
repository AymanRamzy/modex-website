import Link from "next/link";
import { notFound } from "next/navigation";
import { Topbar } from "@/components/topbar";
import { findProgram } from "@/lib/demo-data";
import { requireUser } from "@/lib/current-user";

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ programSlug: string }>;
}) {
  const user = await requireUser("STUDENT");
  const { programSlug } = await params;
  const program = findProgram(programSlug);
  if (!program) notFound();

  return (
    <div className="shell">
      <Topbar user={user} />
      <main className="page">
        <div className="page-heading">
          <div>
            <Link className="eyebrow" href="/dashboard">← Back to dashboard</Link>
            <h1 style={{ marginTop: 10 }}>{program.title}</h1>
            <p className="lead">{program.subtitle}</p>
            <div className="program-meta">
              <span>{program.cohort}</span>
              <span>{program.schedule}</span>
              <span>{program.instructor}</span>
            </div>
          </div>
          <div className="card" style={{ minWidth: 220 }}>
            <div className="eyebrow">Your progress</div>
            <div className="stat">{program.progress}%</div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${program.progress}%` }} />
            </div>
          </div>
        </div>

        <section className="grid" aria-label="Program modules">
          {program.modules.map((module) => (
            <article className="card module" key={module.id}>
              <header className="module-header">
                <h2 style={{ marginBottom: 6 }}>{module.title}</h2>
                <p className="muted" style={{ marginBottom: 0 }}>{module.description}</p>
              </header>
              <ol className="lesson-list">
                {module.lessons.map((lesson, index) => (
                  <li className="lesson-row" key={lesson.id}>
                    <div>
                      <div className="lesson-title">{index + 1}. {lesson.title}</div>
                      <div className="lesson-meta">{lesson.duration} · {lesson.resources.length} resource{lesson.resources.length === 1 ? "" : "s"}</div>
                    </div>
                    {lesson.status === "AVAILABLE" ? (
                      <Link className="button button-light" href={`/dashboard/programs/${program.slug}/lessons/${lesson.id}`}>
                        Open lesson
                      </Link>
                    ) : (
                      <span className="badge badge-muted">Upcoming</span>
                    )}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

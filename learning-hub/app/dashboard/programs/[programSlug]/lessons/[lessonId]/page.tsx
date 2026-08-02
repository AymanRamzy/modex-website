import Link from "next/link";
import { notFound } from "next/navigation";
import { Topbar } from "@/components/topbar";
import { findLesson, findProgram } from "@/lib/demo-data";
import { requireUser } from "@/lib/current-user";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ programSlug: string; lessonId: string }>;
}) {
  const user = await requireUser("STUDENT");
  const { programSlug, lessonId } = await params;
  const program = findProgram(programSlug);
  if (!program) notFound();
  const result = findLesson(program, lessonId);
  if (!result || result.lesson.status !== "AVAILABLE") notFound();

  const { module, lesson } = result;

  return (
    <div className="shell">
      <Topbar user={user} />
      <main className="page">
        <div className="page-heading">
          <div>
            <Link className="eyebrow" href={`/dashboard/programs/${program.slug}`}>← Back to curriculum</Link>
            <h1 style={{ marginTop: 10 }}>{lesson.title}</h1>
            <p className="lead">{module.title} · {lesson.duration}</p>
          </div>
        </div>

        <div className="lesson-layout">
          <section>
            <div className="video-shell">
              {lesson.videoUrl ? (
                <iframe
                  src={lesson.videoUrl}
                  title={lesson.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <div className="video-placeholder">
                  <div className="eyebrow" style={{ color: "#e7b600" }}>Google Drive video slot</div>
                  <h2 style={{ color: "white", marginTop: 10 }}>Video ready to be connected</h2>
                  <p style={{ color: "#d8e3ee" }}>
                    The administrator will paste a Google Drive preview link into this lesson. Only enrolled students can access this protected page.
                  </p>
                </div>
              )}
            </div>

            <article className="card" style={{ marginTop: 24 }}>
              <h2>About this lesson</h2>
              <p className="muted">{lesson.description}</p>
            </article>
          </section>

          <aside className="card">
            <div className="eyebrow">Lesson resources</div>
            <h2 style={{ marginTop: 8 }}>Working files</h2>
            {lesson.resources.length ? (
              <ul className="resource-list">
                {lesson.resources.map((resource) => (
                  <li className="resource-item" key={resource.title}>
                    <div>
                      <strong>{resource.title}</strong>
                      <div className="muted" style={{ fontSize: ".82rem" }}>{resource.type}</div>
                    </div>
                    {resource.url ? (
                      <a className="card-link" style={{ marginTop: 0 }} href={resource.url} target="_blank" rel="noreferrer">Open</a>
                    ) : (
                      <span className="badge badge-muted">Pending</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="muted">No materials have been released for this lesson yet.</p>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}

import { redirect } from "next/navigation";
import { loginAction } from "@/app/actions";
import { getCurrentUser } from "@/lib/current-user";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const user = await getCurrentUser();
  if (user) redirect(user.role === "ADMIN" ? "/admin" : "/dashboard");

  const params = await searchParams;

  return (
    <main className="login-page">
      <section className="login-panel login-brand">
        <div className="brand" style={{ marginBottom: 54 }}>
          <span className="brand-mark">MX</span>
          <span>
            ModEX
            <span className="brand-subtitle">Learning Hub</span>
          </span>
        </div>
        <div className="eyebrow" style={{ color: "#e7b600" }}>Practical finance learning</div>
        <h1>Learn. Build. Submit. Improve.</h1>
        <p className="lead">
          Access your enrolled programs, structured modules, lesson videos, and downloadable working files in one secure place.
        </p>
      </section>

      <section className="login-panel">
        <form className="login-form" action={loginAction}>
          <div className="eyebrow">Secure access</div>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 8 }}>Sign in to your account</h2>
          <p className="muted" style={{ marginBottom: 28 }}>
            Use the email and password provided by the ModEX team.
          </p>

          {params.error ? (
            <div className="error-box" role="alert">
              The email or password is incorrect.
            </div>
          ) : null}

          <div className="field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required minLength={10} />
          </div>

          <button className="button button-secondary" style={{ width: "100%" }} type="submit">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}

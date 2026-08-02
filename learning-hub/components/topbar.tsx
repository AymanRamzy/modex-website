import Link from "next/link";
import { logoutAction } from "@/app/actions";
import type { SessionUser } from "@/lib/session";

export function Topbar({ user }: { user: SessionUser }) {
  const home = user.role === "ADMIN" ? "/admin" : "/dashboard";

  return (
    <header className="topbar">
      <Link className="brand" href={home} aria-label="ModEX Learning Hub home">
        <span className="brand-mark">MX</span>
        <span>
          ModEX
          <span className="brand-subtitle">Learning Hub</span>
        </span>
      </Link>
      <div className="topbar-actions">
        <span className="user-chip">{user.name} · {user.role === "ADMIN" ? "Administrator" : "Student"}</span>
        <form action={logoutAction}>
          <button className="button button-ghost" type="submit">Sign out</button>
        </form>
      </div>
    </header>
  );
}

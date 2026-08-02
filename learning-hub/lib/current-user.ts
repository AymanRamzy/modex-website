import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySessionToken, type UserRole } from "@/lib/session";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(SESSION_COOKIE)?.value);
}

export async function requireUser(role?: UserRole) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (role && user.role !== role) {
    redirect(user.role === "ADMIN" ? "/admin" : "/dashboard");
  }
  return user;
}

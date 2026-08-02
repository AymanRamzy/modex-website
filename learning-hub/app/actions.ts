"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyPassword } from "@/lib/password";
import {
  createSessionToken,
  SESSION_COOKIE,
  SESSION_DURATION_SECONDS,
  type UserRole,
} from "@/lib/session";

function readAccount(role: UserRole) {
  const prefix = role === "ADMIN" ? "ADMIN" : "STUDENT";
  return {
    id: role === "ADMIN" ? "admin-primary" : "student-demo",
    role,
    email: process.env[`${prefix}_EMAIL`]?.trim().toLowerCase() ?? "",
    name: process.env[`${prefix}_NAME`]?.trim() ?? role,
    passwordHash: process.env[`${prefix}_PASSWORD_HASH`],
  };
}

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  const accounts = [readAccount("ADMIN"), readAccount("STUDENT")];
  const account = accounts.find((candidate) => candidate.email === email);

  if (!account || !verifyPassword(password, account.passwordHash)) {
    redirect("/login?error=invalid");
  }

  const token = await createSessionToken({
    id: account.id,
    email: account.email,
    name: account.name,
    role: account.role,
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_DURATION_SECONDS,
    path: "/",
  });

  redirect(account.role === "ADMIN" ? "/admin" : "/dashboard");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
  redirect("/login");
}

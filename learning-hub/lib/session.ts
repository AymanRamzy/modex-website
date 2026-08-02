export type UserRole = "ADMIN" | "STUDENT";

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  exp: number;
};

export const SESSION_COOKIE = "modex_learning_session";
export const SESSION_DURATION_SECONDS = 60 * 60 * 8;

function getSecret(): string | null {
  const secret = process.env.SESSION_SECRET;
  return secret && secret.length >= 32 ? secret : null;
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function stringToBase64Url(value: string): string {
  return bytesToBase64Url(new TextEncoder().encode(value));
}

function base64UrlToBytes(value: string): Uint8Array {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function getSigningKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

export async function createSessionToken(
  user: Omit<SessionUser, "exp">,
): Promise<string> {
  const secret = getSecret();
  if (!secret) throw new Error("SESSION_SECRET must contain at least 32 characters.");

  const payload: SessionUser = {
    ...user,
    exp: Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS,
  };
  const encodedPayload = stringToBase64Url(JSON.stringify(payload));
  const signature = await crypto.subtle.sign(
    "HMAC",
    await getSigningKey(secret),
    new TextEncoder().encode(encodedPayload),
  );

  return `${encodedPayload}.${bytesToBase64Url(new Uint8Array(signature))}`;
}

export async function verifySessionToken(token?: string | null): Promise<SessionUser | null> {
  const secret = getSecret();
  if (!secret || !token) return null;

  const [encodedPayload, encodedSignature] = token.split(".");
  if (!encodedPayload || !encodedSignature) return null;

  try {
    const valid = await crypto.subtle.verify(
      "HMAC",
      await getSigningKey(secret),
      base64UrlToBytes(encodedSignature),
      new TextEncoder().encode(encodedPayload),
    );
    if (!valid) return null;

    const payloadBytes = base64UrlToBytes(encodedPayload);
    const payload = JSON.parse(new TextDecoder().decode(payloadBytes)) as SessionUser;
    if (!payload.exp || payload.exp <= Math.floor(Date.now() / 1000)) return null;
    if (!payload.id || !payload.email || !payload.name) return null;
    if (payload.role !== "ADMIN" && payload.role !== "STUDENT") return null;

    return payload;
  } catch {
    return null;
  }
}

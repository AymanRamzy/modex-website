import "server-only";
import { scryptSync, timingSafeEqual } from "node:crypto";

export function verifyPassword(password: string, storedValue?: string): boolean {
  if (!storedValue) return false;
  const [salt, expectedHex] = storedValue.split(":");
  if (!salt || !expectedHex) return false;

  try {
    const actual = scryptSync(password, salt, 64);
    const expected = Buffer.from(expectedHex, "hex");
    return actual.length === expected.length && timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}

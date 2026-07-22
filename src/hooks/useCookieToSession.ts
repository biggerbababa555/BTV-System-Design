"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * อ่าน auth.token จาก document.cookie (client-side)
 * เพราะ NextAuth v4 authorize() ไม่มี access ถึง browser cookies โดยตรง
 */
function getAuthTokenFromCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("auth.token="));
  if (!match) return null;
  try {
    return decodeURIComponent(match.slice("auth.token=".length));
  } catch {
    return null;
  }
}

/**
 * Hook สำหรับ auto-login ผ่าน cookie (auth.token) เมื่อ app ถูกโหลดใน iframe ของ portal กลาง
 *
 * Flow:
 *  - ถ้าอยู่ใน iframe ของ portal → อ่าน auth.token จาก document.cookie แล้ว signIn("cookie", { token })
 *  - login สำเร็จ → redirect /home
 *  - login ล้มเหลว (ไม่มี cookie หรือ token invalid) → redirect /login-form
 *  - ไม่ได้อยู่ใน iframe → redirect /login-form ให้กรอก username/password
 */
export const useCookieToSession = () => {
  console.log("run useCookieToSession");
  const router = useRouter();
  const redirectUrl = "/home";

  useEffect(() => {
    const loginCookies = async () => {
      const res = await signIn("cookie", { redirect: false });
      if (res?.error) {
        router.replace(`/login-form`);
      } else {
        router.replace(redirectUrl);
        // router.refresh();
        console.log("login successfully");
      }
    };

    try {
      if (typeof window !== "undefined") {
        if (window.location !== window.parent.location) {
          loginCookies();
        }
      } else {
        const setToken = getAuthTokenFromCookie();
        console.log("token: ", setToken);
        if (setToken) {
          loginCookies();
        }
      }
    } catch {
      router.replace(`/login-form`);
    }
  }, []);
};

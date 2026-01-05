import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (username !== "admin" || password !== "1234") {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  // 🔴 ЭНЭ Л ГОЛ ЗАСВАР
  const cookieStore = await cookies();

  cookieStore.set("admin-auth", "true", {
    httpOnly: true,
    path: "/",
  });

  return NextResponse.json({ success: true });
}

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

/* ================= GET ================= */
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("league");

    const schedule = await db
      .collection("schedule")
      .find({})
      .sort({ day: 1 })
      .toArray();

    return NextResponse.json(schedule);
  } catch (error) {
    console.error("GET /api/schedule error:", error);
    return NextResponse.json(
      { message: "Failed to fetch schedule" },
      { status: 500 }
    );
  }
}

/* ================= PUT ================= */
export async function PUT(req: Request) {
  try {
    const body = await req.json();

    if (
      typeof body !== "object" ||
      body === null ||
      typeof body.day !== "number"
    ) {
      return NextResponse.json(
        { message: "Invalid body" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("league");

    await db.collection("schedule").updateOne(
      { day: body.day },
      {
        $set: {
          day: body.day,
          label: body.label ?? String(body.day),
          week: body.week ?? "",
          matches: body.matches ?? [],
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PUT /api/schedule error:", error);
    return NextResponse.json(
      { message: "Failed to save schedule" },
      { status: 500 }
    );
  }
}

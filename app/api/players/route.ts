import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { Player, Gender, Category } from "@/models/Player";
import { ObjectId } from "mongodb";

// GET /api/players?gender=male&category=overall
export async function GET(req: NextRequest) {
  const client = await clientPromise;
  const db = client.db("league");

  const { searchParams } = new URL(req.url);
  const gender = searchParams.get("gender") as Gender | null;
  const category = searchParams.get("category") as Category | null;

  const filter: Partial<Player> = {};
  if (gender) filter.gender = gender;
  if (category) filter.category = category;

  const players = await db.collection<Player>("players").find(filter).toArray();

  // frontend-д string-р буцаах
  const safePlayers = players.map((p) => ({ ...p, _id: p._id?.toString() }));

  return NextResponse.json(safePlayers);
}

// PUT: Update player
export async function PUT(req: NextRequest) {
  const client = await clientPromise;
  const db = client.db("league");

  const body: Player & { _id: string } = await req.json();

  await db.collection<Player>("players").updateOne(
    { _id: new ObjectId(body._id) },
    {
      $set: {
        number: body.number,
        name: body.name,
        team: body.team,
        value: body.value,
        avatar: body.avatar,
        gender: body.gender,
        category: body.category,
      },
    }
  );

  return NextResponse.json({ success: true });
}

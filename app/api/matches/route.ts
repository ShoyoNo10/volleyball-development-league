// import { NextResponse } from "next/server";
// import { clientPromise } from "@/lib/mongodb";

// /* ===== SCORE CALCULATOR ===== */
// function calculateResult(sets: { a: number; b: number }[]) {
//   let a = 0;
//   let b = 0;

//   sets.forEach((s) => {
//     if (s.a > s.b) a++;
//     else if (s.b > s.a) b++;
//   });

//   return {
//     score: { a, b },
//     finished: a === 3 || b === 3,
//     winner: a === 3 ? "A" : b === 3 ? "B" : null,
//   };
// }

// /* ===== GET ===== */
// export async function GET() {
//   const client = await clientPromise;
//   const matches = await client.db().collection("matches").find().toArray();
//   return NextResponse.json(matches);
// }

// /* ===== PUT (ADMIN SAVE) ===== */
// export async function PUT(req: Request) {
//   const body = await req.json();
//   const { _id, sets } = body;

//   const result = calculateResult(sets);

//   const client = await clientPromise;
//   await client
//     .db()
//     .collection("matches")
//     .updateOne(
//       { _id },
//       { $set: { sets, ...result } }
//     );

//   return NextResponse.json({ success: true });
// }

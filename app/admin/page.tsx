"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ================= TYPES ================= */

type Gender = "male" | "female";
type Category = "overall" | "serve" | "attack" | "block";

interface Player {
  _id: string;
  number: string; // ✅ ТОГЛОГЧИЙН ДУГААР
  name: string;
  team: string;
  value: number;
  avatar: string;
  gender: Gender;
  category: Category;
}

/* ================= COMPONENT ================= */

export default function AdminPage() {
  const [gender, setGender] = useState<Gender>("male");
  const [category, setCategory] = useState<Category>("overall");
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH ================= */
  const fetchPlayers = async () => {
    setLoading(true);
    const res = await fetch(
      `/api/players?gender=${gender}&category=${category}`,
      { cache: "no-store" }
    );
    const data: Player[] = await res.json();
    setPlayers(data);
    setLoading(false);
  };

  useEffect(() => {
    // schedule fetch after the effect finishes to avoid calling setState synchronously inside the effect
    const id = setTimeout(() => {
      fetchPlayers();
    }, 0);
    return () => clearTimeout(id);
  }, [gender, category]);

  /* ================= SAVE ================= */
  const savePlayer = async (player: Player) => {
    const res = await fetch("/api/players", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    });

    if (res.ok) {
      alert("Saved ✅");
      fetchPlayers();
    } else {
      alert("Save failed ❌");
    }
  };

  /* ================= UI ================= */
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      {/* FILTERS */}
      <div className="flex gap-3 mb-6 ">
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value as Gender)}
          className="border px-4 py-2 rounded"
        >
          <option value="male">Эрэгтэй</option>
          <option value="female">Эмэгтэй</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
          className="border px-4 py-2 rounded"
        >
          <option value="overall">Нийт</option>
          <option value="serve">Давуулалт</option>
          <option value="attack">Довтолгоо</option>
          <option value="block">Хаалт</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr className="text-black">
              <th className="p-3">№</th>
              <th className="p-3 text-left">Тоглогч</th>
              <th className="p-3">Баг</th>
              <th className="p-3">Утга</th>
              <th className="p-3">Save</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-black">
                  Уншиж байна...
                </td>
              </tr>
            )}

            {!loading &&
              players.map((p) => (
                <tr key={p._id} className="border-t">
                  {/* NUMBER */}
                  <td className="p-3 text-center">
                    <input
                      value={p.number}
                      onChange={(e) =>
                        setPlayers((prev) =>
                          prev.map((x) =>
                            x._id === p._id
                              ? { ...x, number: e.target.value }
                              : x
                          )
                        )
                      }
                      className="border px-2 py-1 rounded w-16 text-center text-black"
                    />
                  </td>

                  {/* NAME + AVATAR */}
                  <td className="p-3 flex items-center gap-3">
                    <Image
                      src={p.avatar}
                      alt={p.name}
                      width={36}
                      height={36}
                      className="rounded-full"
                    />

                    <input
                      value={p.name}
                      onChange={(e) =>
                        setPlayers((prev) =>
                          prev.map((x) =>
                            x._id === p._id
                              ? { ...x, name: e.target.value }
                              : x
                          )
                        )
                      }
                      className="border px-2 py-1 rounded w-40 text-black"
                    />
                  </td>

                  {/* TEAM */}
                  <td className="p-3">
                    <input
                      value={p.team}
                      onChange={(e) =>
                        setPlayers((prev) =>
                          prev.map((x) =>
                            x._id === p._id
                              ? { ...x, team: e.target.value }
                              : x
                          )
                        )
                      }
                      className="border px-2 py-1 rounded w-40 text-black"
                    />
                  </td>

                  {/* VALUE */}
                  <td className="p-3 text-center">
                    <input
                      type="number"
                      value={p.value}
                      onChange={(e) =>
                        setPlayers((prev) =>
                          prev.map((x) =>
                            x._id === p._id
                              ? { ...x, value: Number(e.target.value) }
                              : x
                          )
                        )
                      }
                      className="border px-2 py-1 rounded w-20 text-center text-black"
                    />
                  </td>

                  {/* SAVE */}
                  <td className="p-3 text-center">
                    <button
                      onClick={() => savePlayer(p)}
                      className="bg-black text-white px-4 py-1 rounded"
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

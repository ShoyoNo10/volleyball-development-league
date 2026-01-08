"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ================= TYPES ================= */

type Match = {
  time: string;
  a: string;
  b: string;
  aLogo: string;
  bLogo: string;
  finished: boolean;
  score: {
    a: number;
    b: number;
  };
  sets: string[];
};

type DaySchedule = {
  day: number;
  label: string;
  week: string;
  matches: Match[];
};

/* ================= COMPONENT ================= */

export default function AdminMatchesPage() {
  const [schedule, setSchedule] = useState<DaySchedule[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH ================= */
  const fetchSchedule = async () => {
    try {
      const res = await fetch("/api/schedule", { cache: "no-store" });
      const data: DaySchedule[] = await res.json();
      setSchedule(data);
    } catch (err) {
      console.error("Failed to fetch schedule", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  /* ================= SAVE DAY ================= */
  const saveDay = async (dayData: DaySchedule) => {
    const res = await fetch("/api/schedule", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dayData),
    });

    if (res.ok) {
      alert(`Day ${dayData.day} saved ✅`);
      fetchSchedule();
    } else {
      alert("Save failed ❌");
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  /* ================= UI ================= */
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Admin – Matches</h1>

      {schedule.map((day, dayIndex) => (
        <div key={day.day} className="border rounded-xl p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">
              Day {day.label} ({day.week})
            </h2>

            <button
              onClick={() => saveDay(day)}
              className="bg-black text-white px-4 py-1 rounded"
            >
              Save Day
            </button>
          </div>

          {day.matches.map((m, matchIndex) => (
            <div
              key={matchIndex}
              className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center border-t pt-3"
            >
              {/* TIME */}
              <input
                value={m.time}
                onChange={(e) => {
                  const updated = [...schedule];
                  updated[dayIndex].matches[matchIndex].time =
                    e.target.value;
                  setSchedule(updated);
                }}
                className="border p-1 rounded"
              />

              {/* TEAM A */}
              <div className="flex items-center gap-2">
                <Image
                  src={m.aLogo}
                  alt={m.a}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <input
                  value={m.a}
                  onChange={(e) => {
                    const updated = [...schedule];
                    updated[dayIndex].matches[matchIndex].a =
                      e.target.value;
                    setSchedule(updated);
                  }}
                  className="border p-1 rounded w-full"
                />
              </div>

              {/* SCORE */}
              <div className="flex gap-2 justify-center">
                <input
                  type="number"
                  value={m.score.a}
                  onChange={(e) => {
                    const updated = [...schedule];
                    updated[dayIndex].matches[matchIndex].score.a =
                      Number(e.target.value);
                    setSchedule(updated);
                  }}
                  className="border p-1 w-12 text-center"
                />
                :
                <input
                  type="number"
                  value={m.score.b}
                  onChange={(e) => {
                    const updated = [...schedule];
                    updated[dayIndex].matches[matchIndex].score.b =
                      Number(e.target.value);
                    setSchedule(updated);
                  }}
                  className="border p-1 w-12 text-center"
                />
              </div>

              {/* TEAM B */}
              <div className="flex items-center gap-2 justify-end">
                <input
                  value={m.b}
                  onChange={(e) => {
                    const updated = [...schedule];
                    updated[dayIndex].matches[matchIndex].b =
                      e.target.value;
                    setSchedule(updated);
                  }}
                  className="border p-1 rounded w-full"
                />
                <Image
                  src={m.bLogo}
                  alt={m.b}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>

              {/* FINISHED */}
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={m.finished}
                  onChange={(e) => {
                    const updated = [...schedule];
                    updated[dayIndex].matches[matchIndex].finished =
                      e.target.checked;
                    setSchedule(updated);
                  }}
                />
                Finished
              </label>

              {/* SETS */}
              <input
                value={m.sets.join(",")}
                onChange={(e) => {
                  const updated = [...schedule];
                  updated[dayIndex].matches[matchIndex].sets =
                    e.target.value.split(",");
                  setSchedule(updated);
                }}
                className="border p-1 rounded col-span-2"
                placeholder="25-23,25-21,15-13"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

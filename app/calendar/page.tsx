"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LogoBanner from "@/components/myComponents/LogoBanner";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";

/* ===== TYPES ===== */
type Match = {
  time: string;
  a: string;
  b: string;
  aLogo: string;
  bLogo: string;
  finished?: boolean;
  isFinal?: boolean;
  medal?: "gold" | "bronze";
  score?: { a: number; b: number };
  sets?: string[];
};

type DaySchedule = {
  day: number;
  label: string;
  week: string;
  hasFinal?: boolean;
  matches: Match[];
};

/* ===== COMPONENT ===== */
export default function MobileSchedule() {
  const [schedule, setSchedule] = useState<DaySchedule[]>([]);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const router = useRouter();
  const dayRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  /* ===== FETCH DATA ===== */
  useEffect(() => {
    fetch("/api/schedule", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: DaySchedule[]) => {
        setSchedule(data);
        if (data.length > 0) setSelectedDay(data[10].day);
      });
  }, []);

  const currentDay = schedule.find((d) => d.day === selectedDay);

  /* ===== AUTO SCROLL ===== */
  useEffect(() => {
    if (!selectedDay) return;
    const el = dayRefs.current[selectedDay];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [selectedDay]);

  if (!currentDay) return null;

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="px-4 pt-4 pb-2 sticky top-0 bg-gray-50 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-black">Нэгдүгээр сар 2026</h1>
          <button
            onClick={() => router.back()}
            className="flex items-center text-[15px] font-medium text-black border rounded-md p-1"
          >
            <ArrowBigLeft /> Буцах
          </button>
        </div>

        {/* DATE SELECTOR */}
        {/* DATE SELECTOR */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar mt-3 pb-2">
          {schedule.map((d) => {
            const isSelected = d.day === selectedDay;
            const isFinalDay = d.hasFinal;

            return (
              <button
                key={d.day}
                ref={(el) => {
                  dayRefs.current[d.day] = el;
                }}
                onClick={() => setSelectedDay(d.day)}
                className={`
          relative min-w-16 rounded-xl px-3 py-2 text-center transition
          ${
            isSelected && isFinalDay
              ? "bg-red-500 text-white scale-105"
              : isSelected
              ? "bg-black text-white scale-105"
              : isFinalDay
              ? "bg-white text-red-500 border border-red-400"
              : "bg-white text-gray-600 border"
          }
        `}
              >
                {/* FINAL TEXT — ДОТОР НЬ */}
                {isFinalDay && (
                  <div className="text-[9px] font-bold text-red-500 mb-0.5">
                    FINAL
                  </div>
                )}

                <div className="text-sm font-bold">{d.label}</div>
                <div className="text-xs">{d.week}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* MATCH LIST */}
      <div className="px-4 mt-4 space-y-3 pb-20">
        {currentDay.matches.map((m, i) => (
          <div
            key={i}
            className={`
      relative bg-white rounded-xl p-3 transition
      ${
        m.isFinal
          ? "border-2 border-red-500 shadow-md shadow-red-200"
          : "shadow-sm"
      }
    `}
          >
            {m.isFinal && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                FINAL
              </div>
            )}
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-gray-500">
                {m.time}
              </div>

              {/* 🏅 MEDAL TEXT */}
              {m.medal && (
                <div className="text-[10px] font-semibold text-gray-600">
                  {m.medal === "gold" && "🥇 Алтан медалийн төлөөх тоглолт"}
                  {m.medal === "bronze" && "🥉 Хүрэл медалийн төлөөх тоглолт"}
                </div>
              )}
            </div>

            <div className="grid grid-cols-[2fr_auto_2fr] items-center gap-2">
              {/* TEAM A */}
              <div className="flex items-center gap-2 min-w-0">
                <Image
                  src={m.aLogo}
                  alt={m.a}
                  width={55}
                  height={55}
                  className="rounded-full"
                />
                <span className="text-sm font-medium line-clamp-2 text-black">
                  {m.a}
                </span>
              </div>

              {/* SCORE */}
              <div className="flex flex-col items-center">
                {m.finished ? (
                  <div className="flex items-center gap-1">
                    <div className="bg-black text-white px-2 py-1 rounded-md font-bold">
                      {m.score?.a}
                    </div>
                    <span className="font-bold">:</span>
                    <div className="bg-black text-white px-2 py-1 rounded-md font-bold">
                      {m.score?.b}
                    </div>
                  </div>
                ) : (
                  <span className="text-xs font-bold text-gray-400">VS</span>
                )}
              </div>

              {/* TEAM B */}
              <div className="flex items-center gap-2 justify-end min-w-0">
                <span className="text-sm font-medium line-clamp-2 text-black">
                  {m.b}
                </span>
                <Image
                  src={m.bLogo}
                  alt={m.b}
                  width={55}
                  height={55}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* SETS */}
            {m.finished && m.sets && (
              <div className="mt-2 flex justify-center gap-4 text-xs font-semibold text-gray-600">
                {m.sets.map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <LogoBanner />
    </div>
  );
}

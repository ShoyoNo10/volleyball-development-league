"use client";
import React, { useState } from "react";
import Eregteibaguud from "./_components/Eregteibaguud";
import Emegteibaguud from "./_components/Emegteibaguud";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function Leaderboard() {
  const router = useRouter();
  const [active, setActive] = useState<"male" | "female">("male");

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-800 to-indigo-900 p-4">
      {/* HEADER */}
      <div className="relative mb-6">
        <button
          onClick={() => router.back()}
          className="absolute top-0 left-0 border p-1 rounded-md text-white"
        >
          <ArrowBigLeft />
        </button>

        <h1 className="text-white text-2xl font-bold text-center">
          🏆 Амжилтын хүснэгт
        </h1>
      </div>

      {/* TOGGLE BUTTONS */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setActive("male")}
          className={`px-4 py-2 rounded-full font-semibold transition
            ${
              active === "male"
                ? "bg-white text-purple-700"
                : "bg-purple-600 text-white opacity-70"
            }`}
        >
          Эрэгтэй
        </button>

        <button
          onClick={() => setActive("female")}
          className={`px-4 py-2 rounded-full font-semibold transition
            ${
              active === "female"
                ? "bg-white text-purple-700"
                : "bg-purple-600 text-white opacity-70"
            }`}
        >
          Эмэгтэй
        </button>
      </div>

      {/* TABLE HEADER */}
      <div className="px-4 mb-2">
        <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr_1fr] items-center text-white text-sm">
          <div
            className="w-full text-center px-3 py-1 font-bold rounded-full
            bg-linear-to-r from-purple-600 to-purple-400 shadow-md"
          >
            {active === "male" ? "Эрэгтэй багууд" : "Эмэгтэй багууд"}
          </div>
          <div className="text-center">W</div>
          <div className="text-center">L</div>
          <div className="text-center">Set Ratio</div>
          <div className="text-center">PTS</div>
        </div>
      </div>

      {/* CONTENT */}
      {active === "male" ? <Eregteibaguud /> : <Emegteibaguud />}
    </div>
  );
}

export default Leaderboard;

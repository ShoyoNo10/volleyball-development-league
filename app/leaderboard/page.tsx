"use client"
import React from "react";
import Eregteibaguud from "./_components/Eregteibaguud";
import Emegteibaguud from "./_components/Emegteibaguud";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function Leaderboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-800 to-indigo-900 p-4">
      <div className="relative">
        <button onClick={() => router.back()} className="absolute top-0 left-0 border p-1 rounded-md"><ArrowBigLeft/></button>
        <h1 className="text-white text-2xl font-bold mb-4 text-center">
          🏆 Амжилтын хүснэгт
        </h1>
      </div>

      <div className="space-y-2">
        <div className=" px-4 ">
          <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr_1fr] items-center">
            <div
              className="w-full text-center
             px-3 py-1 text-[14px] font-bold text-white
             rounded-full bg-linear-to-r
             from-purple-600 to-purple-400 shadow-md"
            >
              Эрэгтэй багууд
            </div>
            <div className="text-center">W</div>
            <div className="text-center">L</div>
            <div className="text-center">Set Ratio</div>
            <div className="text-center">PTS</div>
          </div>
        </div>
        <Eregteibaguud />
      </div>

      {/* EMEGTEI BAGUUD WRHGOUWHGUWHOGHWOHGOWHGOWHGOWHOGHWOHGOWHGOHWGOHWOGHWOHGWOHG */}

      <div className="space-y-2">
        <div className=" px-4 mt-8">
          <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr_1fr] items-center">
            <div
              className="w-full text-center
             px-3 py-1 text-[14px] font-bold text-white
             rounded-full bg-linear-to-r
             from-purple-600 to-purple-400 shadow-md"
            >
              Эмэгтэй багууд
            </div>
            <div className="text-center">W</div>
            <div className="text-center">L</div>
            <div className="text-center">Set Ratio</div>
            <div className="text-center">PTS</div>
          </div>
        </div>
        <Emegteibaguud />
      </div>
    </div>
  );
}

export default Leaderboard;

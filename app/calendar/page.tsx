"use client";
import { useState } from "react";
import Image from "next/image";
import LogoBanner from "@/components/myComponents/LogoBanner";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Match = {
  time: string;
  a: string;
  b: string;
  aLogo: string;
  bLogo: string;
  finished?: boolean;
  score?: {
    a: number;
    b: number;
  };
  sets?: string[];
};

type DaySchedule = {
  day: number;
  label: string;
  week: string;
  matches: Match[];
};

const schedule: DaySchedule[] = [
  {
    day: 2,
    label: "2",
    week: "Fri",
    matches: [
      {
        time: "11:00",
        a: "Аранзал СНТ",
        b: "Дорноговь ВХ",
        aLogo: "/aranzalER.png",
        bLogo: "/dornogoviER.png",
        finished: true,
        score: { a: 3, b: 2 },
        sets: ["12-25", "25-21", "25-22", "23-25", "15-13"],
      },
      {
        time: "13:00",
        a: "Завхан Mig Wolves",
        b: "Энержи",
        aLogo: "/zavhanER.png",
        bLogo: "/energyER.png",
        finished: true,
        score: { a: 1, b: 3 },
        sets: ["18-25", "25-20", "14-25", "20-25"],
      },
      {
        time: "15:00",
        a: "Өмнөговь Ёлууд",
        b: "Дархан Могулс",
        aLogo: "/yluudER.png",
        bLogo: "/mogulsER.png",
        finished: true,
        score: { a: 3, b: 0 },
        sets: ["25-12", "25-20", "25-19"],
      },
      {
        time: "17:00",
        a: "Натур Бакс",
        b: "Алтайн барс",
        aLogo: "/naturebucksER.png",
        bLogo: "/altainbarsER.png",
        finished: true,
        score: { a: 3, b: 0 },
        sets: ["25-19", "25-20", "25-19"],
      },
    ],
  },
  {
    day: 3,
    label: "3",
    week: "Sat",
    matches: [
      {
        time: "11:00",
        a: "Prime Ilch Dynasty",
        b: "Хантайшир",
        aLogo: "/dynastyEM1.png",
        bLogo: "/hantaishirEM1.png",
        finished: true,
        score: { a: 3, b: 0 },
        sets: ["25-23", "25-22", "25-16"],
      },
      {
        time: "13:00",
        a: "Аранзал СНТ",
        b: "Doctors",
        aLogo: "/aranzalER.png",
        bLogo: "/doctorsEM1.png",
        finished: true,
        score: { a: 3, b: 2 },
        sets: ["25-21", "11-25", "25-23", "9-25", "15-12 "],
      },
      {
        time: "15:00",
        a: "Хилчин TG",
        b: "Golden ball Lynx",
        aLogo: "/hilchinEM1.png",
        bLogo: "/lynxEM1.png",
        finished: true,
        score: { a: 1, b: 3 },
        sets: ["22-25", "22-25", "25-23", "17-25"],
      },
      {
        time: "17:00",
        a: "Mubsi 3x3 academy",
        b: "Sbm",
        aLogo: "/mubsiEM1.png",
        bLogo: "/sbmEM1.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
    ],
  },
  {
    day: 4,
    label: "4",
    week: "Sat",
    matches: [
      {
        time: "11:00",
        a: "Алтайн барс",
        b: "Аранзал СНТ",
        aLogo: "/altainbarsER.png",
        bLogo: "/aranzalER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "13:00",
        a: "Мегастарс",
        b: "Натур Бакс",
        aLogo: "/megastarsER.png",
        bLogo: "/naturebucksER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "15:00",
        a: "Өмнөговь Ёлууд",
        b: "Төв Заамар Миг Wolves",
        aLogo: "/yluudER.png",
        bLogo: "/tuvzaamarER.png",
        finished: false,
        score: { a: 1, b: 3 },
        sets: ["23-25", "25-18", "23-25", "23-25"],
      },
      {
        time: "17:00",
        a: "Энержи",
        b: "Дархан Могулс",
        aLogo: "/energyER.png",
        bLogo: "/mogulsER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
    ],
  },
  {
    day: 5,
    label: "5",
    week: "Sun",
    matches: [
      {
        time: "11:00",
        a: "Golden ball Lynx",
        b: "MUBSI 3x3 academy",
        aLogo: "/lynxEM1.png",
        bLogo: "/mubsiEM1.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "13:00",
        a: "Doctors",
        b: "Хилчин TG",
        aLogo: "/doctorsEM1.png",
        bLogo: "/hilchinEM1.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "15:00",
        a: "Хантайшир",
        b: "Аранзал СНТ",
        aLogo: "/hantaishirEM1.png",
        bLogo: "/aranzalER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "17:00",
        a: "MMB sport academy",
        b: "Prime Ilch Dynasty",
        aLogo: "/mmbEM1.png",
        bLogo: "/dynastyEM1.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
    ],
  },
  {
    day: 6,
    label: "6",
    week: "Mon",
    matches: [
      {
        time: "11:00",
        a: "Дорноговь ВХ",
        b: "Zavkhan Mig Wolves",
        aLogo: "/dornogoviER.png",
        bLogo: "/zavhanER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "13:00",
        a: "Алтайн барс",
        b: "Мегастарс",
        aLogo: "/altainbarsER.png",
        bLogo: "/megastarsER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "15:00",
        a: "Натур Бакс",
        b: "Өмнөговь Ёлууд",
        aLogo: "/naturebucksER.png",
        bLogo: "/yluudER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "17:00",
        a: "Төв Заамар Mig Wolves",
        b: "Энержи",
        aLogo: "/tuvzaamarER.png",
        bLogo: "/energyER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
    ],
  },
  {
    day: 7,
    label: "7",
    week: "Tue",
    matches: [
      {
        time: "11:00",
        a: "Аранзал СНТ",
        b: "MMB sport academy",
        aLogo: "/aranzalER.png",
        bLogo: "/mmbEM1.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "13:00",
        a: "Хилчин TG",
        b: "Хантайшир",
        aLogo: "/hilchinEM1.png",
        bLogo: "/hantaishirEM1.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "15:00",
        a: "MUBSI 3x3 academy",
        b: "Doctors",
        aLogo: "/mubsiEM1.png",
        bLogo: "/doctorsEM1.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "17:00",
        a: "SBM",
        b: "Golden ball Lynx",
        aLogo: "/sbmEM1.png",
        bLogo: "/lynxEM1.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
    ],
  },
  {
    day: 8,
    label: "8",
    week: "Wed",
    matches: [
      {
        time: "11:00",
        a: "Аранзал СНТ",
        b: "Zavkhan Mig Wolves",
        aLogo: "/aranzalER.png",
        bLogo: "/zavhanER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "13:00",
        a: "Дархан Могулс",
        b: "ДОРНОГОВЬ ВХ",
        aLogo: "/mogulsER.png",
        bLogo: "/dornogoviER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "15:00",
        a: "Энержи",
        b: "Натур Бакс",
        aLogo: "/energyER.png",
        bLogo: "/naturebucksER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
    ],
  },
  {
    day: 9,
    label: "9",
    week: "Thu",
    matches: [
      {
        time: "11:00",
        a: "Doctors",
        b: "SBM",
        aLogo: "/doctorsEM1.png",
        bLogo: "/sbmEM1.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "13:00",
        a: "Хантайшир",
        b: "MUBSI 3x3 academy",
        aLogo: "/hantaishirEM1.png",
        bLogo: "/mubsiEM1.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "15:00",
        a: "MMB sport academy",
        b: "Хилчин TG",
        aLogo: "/mmbEM1.png",
        bLogo: "/hilchinEM1.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "17:00",
        a: "Prime Ilch Dynasty",
        b: "Аранзал СНТ",
        aLogo: "/dynastyEM1.png",
        bLogo: "/aranzalER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
    ],
  },
  {
    day: 10,
    label: "10",
    week: "Fri",
    matches: [
      {
        time: "11:00",
        a: "Мегастарс",
        b: "Аранзал СНТ",
        aLogo: "/megastarsER.png",
        bLogo: "/aranzalER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "13:00",
        a: "Өмнөговь Ёлууд",
        b: "Алтайн барс",
        aLogo: "/yluudER.png",
        bLogo: "/altainbarsER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "15:00",
        a: "Zavkhan Mig Wolves",
        b: "Дархан Могулс",
        aLogo: "/zavhanER.png",
        bLogo: "/mogulsER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "17:00",
        a: "Натур Бакс",
        b: "Дорноговь ВХ",
        aLogo: "/naturebucksER.png",
        bLogo: "/dornogoviER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
    ],
  },
  {
    day: 11,
    label: "11",
    week: "Sat",
    matches: [
      {
        time: "11:00",
        a: "Өмнөговь Ёлууд",
        b: "Аранзал СНТ",
        aLogo: "/yluudER.png",
        bLogo: "/aranzalER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "13:00",
        a: "Энержи",
        b: "Мегастарс",
        aLogo: "/energyER.png",
        bLogo: "/megastarsER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "15:00",
        a: "Дорноговь ВХ",
        b: "Төв Заамар Mig Wolves",
        aLogo: "/dornogoviER.png",
        bLogo: "/tuvzaamarER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
    ],
  },
  {
    day: 12,
    label: "12",
    week: "Sun",
    matches: [
      {
        time: "11:00",
        a: "Zavkhan Mig Wolves",
        b: "Натур Бакс",
        aLogo: "/zavhanER.png",
        bLogo: "/naturebucksER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "13:00",
        a: "Дархан Могулс",
        b: "Төв Заамар Mig Wolves",
        aLogo: "/mogulsER.png",
        bLogo: "/tuvzaamarER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
      {
        time: "15:00",
        a: "Дорноговь ВХ",
        b: "Алтайн барс",
        aLogo: "/dornogoviER.png",
        bLogo: "/altainbarsER.png",
        finished: false,
        score: { a: 0, b: 0 },
        sets: ["23-25", "25-18", "23-25", "23-25", "15-13"],
      },
    ],
  },
];

export default function MobileSchedule() {
  const [selectedDay, setSelectedDay] = useState(3);
  const currentDay = schedule.find((d) => d.day === selectedDay)!;
  const router = useRouter();

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
            <ArrowBigLeft className="" /> Буцах
          </button>
        </div>

        {/* DATE SELECTOR */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar mt-3 pb-2">
          {schedule.map((d) => (
            <button
              key={d.day}
              onClick={() => setSelectedDay(d.day)}
              className={`min-w-14 rounded-xl px-3 py-2 text-center transition
                ${
                  d.day === selectedDay
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 border"
                }`}
            >
              <div className="text-sm font-bold">{d.label}</div>
              <div className="text-xs">{d.week}</div>
            </button>
          ))}
        </div>
      </div>

      {/* MATCH LIST */}
      <div className="px-4 mt-4 space-y-3 pb-20">
        {currentDay.matches.map((m, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-3">
            {/* TIME */}

            <div className="text-xs font-semibold text-gray-500 mb-2">
              {m.time}
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

              {/* SCORE / VS */}
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

            {/* SET SCORES */}
            {m.finished && m.sets && (
              <div className="mt-2 flex justify-center gap-4 text-xs font-semibold text-gray-600">
                {m.sets.map((set, i) => (
                  <span key={i}>{set}</span>
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

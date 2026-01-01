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
};

type DaySchedule = {
  day: number;
  label: string;
  week: string;
  matches: Match[];
};

const schedule: DaySchedule[] = [
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
      },
      {
        time: "13:00",
        a: "Мегастарс",
        b: "Натур Бакс",
        aLogo: "/megastarsER.png",
        bLogo: "/naturebucksER.png",
      },
      {
        time: "15:00",
        a: "Өмнөговь Ёлууд",
        b: "Төв Заамар Миг Wolves",
        aLogo: "/yluudER.png",
        bLogo: "/tuvzaamarER.png",
      },
      {
        time: "17:00",
        a: "Енержи",
        b: "Дархан Могулс",
        aLogo: "/energyER.png",
        bLogo: "/mogulsER.png",
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
      },
      {
        time: "13:00",
        a: "Doctors",
        b: "Хилчин TG",
        aLogo: "/doctorsEM1.png",
        bLogo: "/hilchinEM1.png",
      },
      {
        time: "15:00",
        a: "Хантайшир",
        b: "Аранзал СНТ",
        aLogo: "/hantaishirEM1.png",
        bLogo: "/aranzalER.png",
      },
      {
        time: "17:00",
        a: "MMB sport academy",
        b: "Prime Ilch Dynasty",
        aLogo: "/mmbEM1.png",
        bLogo: "/dynastyEM1.png",
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
      },
      {
        time: "13:00",
        a: "Алтайн барс",
        b: "Мегастарс",
        aLogo: "/altainbarsER.png",
        bLogo: "/megastarsER.png",
      },
      {
        time: "15:00",
        a: "Натур Бакс",
        b: "Өмнөговь Ёлууд",
        aLogo: "/naturebucksER.png",
        bLogo: "/yluudER.png",
      },
      {
        time: "17:00",
        a: "Төв Заамар Mig Wolves",
        b: "Энержи",
        aLogo: "/tuvzaamarER.png",
        bLogo: "/energyER.png",
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
      },
      {
        time: "13:00",
        a: "Хилчин TG",
        b: "Хантайшир",
        aLogo: "/hilchinEM1.png",
        bLogo: "/hantaishirEM1.png",
      },
      {
        time: "15:00",
        a: "MUBSI 3x3 academy",
        b: "Doctors",
        aLogo: "/mubsiEM1.png",
        bLogo: "/doctorsEM1.png",
      },
      {
        time: "17:00",
        a: "SBM",
        b: "Golden ball Lynx",
        aLogo: "/sbmEM1.png",
        bLogo: "/lynxEM1.png",
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
      },
      {
        time: "13:00",
        a: "Дархан Могулс",
        b: "ДОРНОГОВЬ ВХ",
        aLogo: "/mogulsER.png",
        bLogo: "/dornogoviER.png",
      },
      {
        time: "15:00",
        a: "Энержи",
        b: "Натур Бакс",
        aLogo: "/energyER.png",
        bLogo: "/naturebucksER.png",
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
      },
      {
        time: "13:00",
        a: "Хантайшир",
        b: "MUBSI 3x3 academy",
        aLogo: "/hantaishirEM1.png",
        bLogo: "/mubsiEM1.png",
      },
      {
        time: "15:00",
        a: "MMB sport academy",
        b: "Хилчин TG",
        aLogo: "/mmbEM1.png",
        bLogo: "/hilchinEM1.png",
      },
      {
        time: "17:00",
        a: "Prime Ilch Dynasty",
        b: "Аранзал СНТ",
        aLogo: "/dynastyEM1.png",
        bLogo: "/aranzalER.png",
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
      },
      {
        time: "13:00",
        a: "Өмнөговь Ёлууд",
        b: "Алтайн барс",
        aLogo: "/yluudER.png",
        bLogo: "/altainbarsER.png",
      },
      {
        time: "15:00",
        a: "Zavkhan Mig Wolves",
        b: "Дархан Могулс",
        aLogo: "/zavhanER.png",
        bLogo: "/mogulsER.png",
      },
      {
        time: "17:00",
        a: "Натур Бакс",
        b: "Дорноговь ВХ",
        aLogo: "/naturebucksER.png",
        bLogo: "/dornogoviER.png",
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
      },
      {
        time: "13:00",
        a: "Энержи",
        b: "Мегастарс",
        aLogo: "/energyER.png",
        bLogo: "/megastarsER.png",
      },
      {
        time: "15:00",
        a: "Дорноговь ВХ",
        b: "Төв Заамар Mig Wolves",
        aLogo: "/dornogoviER.png",
        bLogo: "/tuvzaamarER.png",
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
      },
      {
        time: "13:00",
        a: "Дархан Могулс",
        b: "Төв Заамар Mig Wolves",
        aLogo: "/mogulsER.png",
        bLogo: "/tuvzaamarER.png",
      },
      {
        time: "15:00",
        a: "Дорноговь ВХ",
        b: "Алтайн барс",
        aLogo: "/dornogoviER.png",
        bLogo: "/altainbarsER.png",
      },
    ],
  },
  // 👉 6–12-ны өдрүүдийг яг энэ маягаар үргэлжлүүлнэ
];

export default function MobileSchedule() {
  const [selectedDay, setSelectedDay] = useState(4);
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
          className="flex items-center text-[15px] font-medium text-black border rounded-md p-1">
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
      {/* MATCH LIST */}
      <div className="px-4 mt-4 space-y-3 pb-20">
        {currentDay.matches.map((m, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-3">
            {/* TIME */}
            <div className="text-xs font-semibold text-gray-500 mb-2">
              {m.time}
            </div>

            {/* GRID */}
            <div className="grid grid-cols-[1fr_32px_1fr] items-center gap-2">
              {/* TEAM A */}
              <div className="flex items-center gap-2 min-w-0">
                <Image
                  src={m.aLogo}
                  alt={m.a}
                  width={62}
                  height={62}
                  className="rounded-full shrink-0"
                />
                <span className="text-black text-sm font-medium wrap-break-word leading-tight line-clamp-2">
                  {m.a}
                </span>
              </div>

              {/* VS */}
              <div className="text-xs font-bold text-gray-400 text-center">
                VS
              </div>

              {/* TEAM B */}
              <div className=" text-black flex items-center gap-2 justify-end min-w-0">
                <span className="text-sm font-medium wrap-break-word leading-tight line-clamp-2">
                  {m.b}
                </span>
                <Image
                  src={m.bLogo}
                  alt={m.b}
                  width={62}
                  height={62}
                  className="rounded-full shrink-0"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <LogoBanner />
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";

/* ================= TYPES ================= */

type Gender = "male" | "female";
type Category = "overall" | "serve" | "attack" | "block";

type Player = {
  id: string; // ✅ UNIQUE KEY
  name: string;
  team: string;
  value: number;
  avatar: string;
};

type StatisticData = Record<Gender, Record<Category, Player[]>>;

/* ================= DATA ================= */

const data: StatisticData = {
  male: {
    overall: [
      {
        id: "#19",
        name: "Б.Ганбат",
        team: "Завхан Mig Wolves",
        value: 91,
        avatar: "/user.png",
      },
      {
        id: "#24",
        name: "Н.Дөлбаяр",
        team: "Дархан Могулс",
        value: 80,
        avatar: "/user.png",
      },
      {
        id: "#11",
        name: "Д.Билгүүн",
        team: "Мегастарс",
        value: 78,
        avatar: "/user.png",
      },
      {
        id: "m-o-4",
        name: "Aziret",
        team: "Өмнөговь Ёлууд",
        value: 77,
        avatar: "/user.png",
      },
      {
        id: "#8",
        name: "Б.Тэлмэн",
        team: "Мегастарс",
        value: 75,
        avatar: "/user.png",
      },
    ],
    serve: [
      {
        id: "#24",
        name: "Б.Тамир",
        team: "Баянгол Алтайн Барс Хилчин",
        value: 7,
        avatar: "/user.png",
      },
      {
        id: "#11",
        name: "Д.Билгүүн",
        team: "Мегастарс",
        value: 6,
        avatar: "/user.png",
      },
      {
        id: "#18",
        name: "L.Arrechea",
        team: "Өмнөговь Ёлууд",
        value: 6,
        avatar: "/user.png",
      },
      {
        id: "#24.",
        name: "Н.Дөлбаяр",
        team: "Дархан Могулс",
        value: 5,
        avatar: "/user.png",
      },
      {
        id: "#19",
        name: "Б.Ганбат",
        team: "Завхан Mig Wolves",
        value: 4,
        avatar: "/user.png",
      },
    ],
    attack: [
      {
        id: "#19",
        name: "Б.Ганбат",
        team: "Завхан Mig Wolves",
        value: 82,
        avatar: "/user.png",
      },
      {
        id: "#24",
        name: "Н.Дөлбаяр",
        team: "Дархан Могулс",
        value: 72,
        avatar: "/user.png",
      },
      {
        id: "#88",
        name: "Aziret",
        team: "Өмнөговь Ёлууд",
        value: 71,
        avatar: "/user.png",
      },
      {
        id: "#8",
        name: "Б.Тэлмэн",
        team: "Мегастарс",
        value: 67,
        avatar: "/user.png",
      },
      {
        id: "#11",
        name: "Д.Билгүүн",
        team: "Мегастарс",
        value: 65,
        avatar: "/user.png",
      },
    ],
    block: [
      {
        id: "#23",
        name: "D.Stalone",
        team: "Енержи",
        value: 18,
        avatar: "/user.png",
      },
      {
        id: "#24",
        name: "Н.Мөнхцогт",
        team: "Дорноговь ВХ",
        value: 11,
        avatar: "/user.png",
      },
      {
        id: "#20",
        name: "Г.Өнөрбаяр",
        team: "Аранзал СНТ",
        value: 11,
        avatar: "/user.png",
      },
      {
        id: "#3",
        name: "М.Эрхэмбаяр",
        team: "Завхан Mig Wolves",
        value: 11,
        avatar: "/user.png",
      },
      {
        id: "#16",
        name: "Н.Өлзийхишиг",
        team: "Енержи",
        value: 8,
        avatar: "/user.png",
      },
    ],
  },
  female: {
    overall: [
      {
        id: "#11",
        name: "Э.Хонгорзул",
        team: "Сэлэнгэ SBM",
        value: 86,
        avatar: "/user.png",
      },
      {
        id: "#12",
        name: "Г.Ганцэцэг",
        team: "MMB Sport academy",
        value: 66,
        avatar: "/user.png",
      },
      {
        id: "#19",
        name: "Э.Аззаяа",
        team: "MMB Sport academy",
        value: 65,
        avatar: "/user.png",
      },
      {
        id: "#18",
        name: "М.Буян-Арвижих",
        team: "Mubsi 3x3 academy",
        value: 58,
        avatar: "/user.png",
      },
      {
        id: "#8",
        name: "Г.Энхсайхан",
        team: "Mubsi 3x3 academy",
        value: 54,
        avatar: "/user.png",
      },
    ],
    serve: [
      {
        id: "#18",
        name: "М.Буян-Арвижих",
        team: "Mubsi 3x3 academy",
        value: 11,
        avatar: "/user.png",
      },
      {
        id: "#14",
        name: "О.Солонго",
        team: "MMB Sport academy",
        value: 8,
        avatar: "/user.png",
      },
      {
        id: "#11",
        name: "Э.Хонгорзул",
        team: "Сэлэнгэ SBM",
        value: 6,
        avatar: "/user.png",
      },
      {
        id: "#1",
        name: "Гантуяа",
        team: "Сэлэнгэ SBM",
        value: 5,
        avatar: "/user.png",
      },
      {
        id: "#29",
        name: "S.Mesalina",
        team: "Doctors",
        value: 4,
        avatar: "/user.png",
      },
    ],
    attack: [
      {
        id: "#11",
        name: "Э.Хонгорзул",
        team: "Сэлэнгэ SBM",
        value: 79,
        avatar: "/user.png",
      },
      {
        id: "#12",
        name: "Г.Ганцэцэг",
        team: "MMB sport academy",
        value: 59,
        avatar: "/user.png",
      },
      {
        id: "#19",
        name: "Э.Аззаяа",
        team: "MMB sport academy",
        value: 57,
        avatar: "/user.png",
      },
      {
        id: "#8",
        name: "Г.Энхсайхан",
        team: "Mubsi 3x3 academy",
        value: 52,
        avatar: "/user.png",
      },
      {
        id: "#7",
        name: "Б.Маралмаа",
        team: "MMB sport academy",
        value: 48,
        avatar: "/user.png",
      },
    ],
    block: [
      {
        id: "#29",
        name: "S.Mesalina",
        team: "Doctors",
        value: 22,
        avatar: "/user.png",
      },
      {
        id: "#22",
        name: "К.Еркежан",
        team: "Сэлэнгэ SBM",
        value: 13,
        avatar: "/user.png",
      },
      {
        id: "#16",
        name: "А.Баярсайхан",
        team: "Аранзал СНТ",
        value: 14,
        avatar: "/user.png",
      },
      {
        id: "#14",
        name: "Г.Мягмархан",
        team: "Хантайшир",
        value: 8,
        avatar: "/user.png",
      },
      {
        id: "#5",
        name: "А.Наранчимэг",
        team: "Golden ball Lynx",
        value: 7,
        avatar: "/user.png",
      },
    ],
  },
};

/* ================= COMPONENT ================= */

export default function StatisticsSection() {
  const [gender, setGender] = useState<Gender>("male");
  const [category, setCategory] = useState<Category>("overall");
  const players = data[gender][category];
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white  h-screen">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold mb-6 m-0 text-black">Статистик</div>
        <button
          onClick={() => router.back()}
          className="flex items-center text-[15px] font-medium text-black border rounded-md p-1 mb-6"
        >
          <ArrowBigLeft className="text-black" /> Буцах
        </button>
      </div>
      {/* Gender buttons */}
      <div className="flex gap-2 mb-4">
        <GenderButton
          text="Эрэгтэй"
          active={gender === "male"}
          onClick={() => setGender("male")}
        />
        <GenderButton
          text="Эмэгтэй"
          active={gender === "female"}
          onClick={() => setGender("female")}
        />
      </div>

      {/* Category buttons */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <StatButton
          text="Оноо"
          active={category === "overall"}
          onClick={() => setCategory("overall")}
        />
        <StatButton
          text="Давуулалт"
          active={category === "serve"}
          onClick={() => setCategory("serve")}
        />
        <StatButton
          text="Довтолгоо"
          active={category === "attack"}
          onClick={() => setCategory("attack")}
        />
        <StatButton
          text="Хаалт"
          active={category === "block"}
          onClick={() => setCategory("block")}
        />
      </div>

      {/* Player list */}
      <div className="bg-white rounded-xl shadow divide-y">
        {players.map((p, i) => (
          <div
            key={p.id}
            className="flex justify-between items-center px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-5 font-bold text-gray-500">{i + 1}</span>
              <div>{p.id}</div>

              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={p.avatar}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-medium text-black">{p.name}</p>
                <p className="text-xs text-gray-500">{p.team}</p>
              </div>
            </div>

            <span className="font-bold text-black">{p.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= BUTTONS ================= */

function StatButton({
  text,
  active,
  onClick,
}: {
  text: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`py-3 rounded-lg font-medium transition
        ${
          active
            ? "bg-black text-white"
            : "bg-white text-black border border-black hover:bg-gray-100"
        }`}
    >
      {text}
    </button>
  );
}

function GenderButton({
  text,
  active,
  onClick,
}: {
  text: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium border border-black transition
        ${
          active
            ? "bg-black text-white"
            : "bg-white text-black hover:bg-gray-100"
        }`}
    >
      {text}
    </button>
  );
}

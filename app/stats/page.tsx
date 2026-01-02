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
        id: "m-o-1",
        name: "Тоглогч A",
        team: "Energy",
        value: 98,
        avatar: "/user.png",
      },
      {
        id: "m-o-2",
        name: "Тоглогч B",
        team: "Bucks",
        value: 95,
        avatar: "/user.png",
      },
      {
        id: "m-o-3",
        name: "Тоглогч C",
        team: "Lions",
        value: 93,
        avatar: "/user.png",
      },
      {
        id: "m-o-4",
        name: "Тоглогч D",
        team: "Eagles",
        value: 91,
        avatar: "/user.png",
      },
      {
        id: "m-o-5",
        name: "Тоглогч E",
        team: "Tigers",
        value: 90,
        avatar: "/user.png",
      },
    ],
    serve: [
      {
        id: "m-o-1",
        name: "Тоглогч A",
        team: "Energy",
        value: 98,
        avatar: "/user.png",
      },
      {
        id: "m-o-2",
        name: "Тоглогч B",
        team: "Bucks",
        value: 95,
        avatar: "/user.png",
      },
      {
        id: "m-o-3",
        name: "Тоглогч C",
        team: "Lions",
        value: 93,
        avatar: "/user.png",
      },
      {
        id: "m-o-4",
        name: "Тоглогч D",
        team: "Eagles",
        value: 91,
        avatar: "/user.png",
      },
      {
        id: "m-o-5",
        name: "Тоглогч E",
        team: "Tigers",
        value: 90,
        avatar: "/user.png",
      },
    ],
    attack: [
      {
        id: "m-o-1",
        name: "Тоглогч A",
        team: "Energy",
        value: 98,
        avatar: "/user.png",
      },
      {
        id: "m-o-2",
        name: "Тоглогч B",
        team: "Bucks",
        value: 95,
        avatar: "/user.png",
      },
      {
        id: "m-o-3",
        name: "Тоглогч C",
        team: "Lions",
        value: 93,
        avatar: "/user.png",
      },
      {
        id: "m-o-4",
        name: "Тоглогч D",
        team: "Eagles",
        value: 91,
        avatar: "/user.png",
      },
      {
        id: "m-o-5",
        name: "Тоглогч E",
        team: "Tigers",
        value: 90,
        avatar: "/user.png",
      },
    ],
    block: [
      {
        id: "m-o-1",
        name: "Тоглогч A",
        team: "Energy",
        value: 98,
        avatar: "/user.png",
      },
      {
        id: "m-o-2",
        name: "Тоглогч B",
        team: "Bucks",
        value: 95,
        avatar: "/user.png",
      },
      {
        id: "m-o-3",
        name: "Тоглогч C",
        team: "Lions",
        value: 93,
        avatar: "/user.png",
      },
      {
        id: "m-o-4",
        name: "Тоглогч D",
        team: "Eagles",
        value: 91,
        avatar: "/user.png",
      },
      {
        id: "m-o-5",
        name: "Тоглогч E",
        team: "Tigers",
        value: 90,
        avatar: "/user.png",
      },
    ],
  },
  female: {
    overall: [
      {
        id: "f-o-1",
        name: "Тоглогч A1",
        team: "Energy",
        value: 96,
        avatar: "/user.png",
      },
      {
        id: "f-o-2",
        name: "Тоглогч B1",
        team: "Bucks",
        value: 94,
        avatar: "/user.png",
      },
      {
        id: "f-o-3",
        name: "Тоглогч C1",
        team: "Lions",
        value: 92,
        avatar: "/user.png",
      },
      {
        id: "f-o-4",
        name: "Тоглогч D1",
        team: "Eagles",
        value: 90,
        avatar: "/user.png",
      },
      {
        id: "f-o-5",
        name: "Тоглогч E1",
        team: "Tigers",
        value: 89,
        avatar: "/user.png",
      },
    ],
    serve: [
      {
        id: "f-o-1",
        name: "Тоглогч A1",
        team: "Energy",
        value: 96,
        avatar: "/user.png",
      },
      {
        id: "f-o-2",
        name: "Тоглогч B1",
        team: "Bucks",
        value: 94,
        avatar: "/user.png",
      },
      {
        id: "f-o-3",
        name: "Тоглогч C1",
        team: "Lions",
        value: 92,
        avatar: "/user.png",
      },
      {
        id: "f-o-4",
        name: "Тоглогч D1",
        team: "Eagles",
        value: 90,
        avatar: "/user.png",
      },
      {
        id: "f-o-5",
        name: "Тоглогч E1",
        team: "Tigers",
        value: 89,
        avatar: "/user.png",
      },
    ],
    attack: [
      {
        id: "f-o-1",
        name: "Тоглогч A1",
        team: "Energy",
        value: 96,
        avatar: "/user.png",
      },
      {
        id: "f-o-2",
        name: "Тоглогч B1",
        team: "Bucks",
        value: 94,
        avatar: "/user.png",
      },
      {
        id: "f-o-3",
        name: "Тоглогч C1",
        team: "Lions",
        value: 92,
        avatar: "/user.png",
      },
      {
        id: "f-o-4",
        name: "Тоглогч D1",
        team: "Eagles",
        value: 90,
        avatar: "/user.png",
      },
      {
        id: "f-o-5",
        name: "Тоглогч E1",
        team: "Tigers",
        value: 89,
        avatar: "/user.png",
      },
    ],
    block: [
      {
        id: "f-o-1",
        name: "Тоглогч A1",
        team: "Energy",
        value: 96,
        avatar: "/user.png",
      },
      {
        id: "f-o-2",
        name: "Тоглогч B1",
        team: "Bucks",
        value: 94,
        avatar: "/user.png",
      },
      {
        id: "f-o-3",
        name: "Тоглогч C1",
        team: "Lions",
        value: 92,
        avatar: "/user.png",
      },
      {
        id: "f-o-4",
        name: "Тоглогч D1",
        team: "Eagles",
        value: 90,
        avatar: "/user.png",
      },
      {
        id: "f-o-5",
        name: "Тоглогч E1",
        team: "Tigers",
        value: 89,
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
          text="Шилдэг тоглогчид"
          active={category === "overall"}
          onClick={() => setCategory("overall")}
        />
        <StatButton
          text="Шилдэг давуулалт"
          active={category === "serve"}
          onClick={() => setCategory("serve")}
        />
        <StatButton
          text="Шилдэг довтолгоо"
          active={category === "attack"}
          onClick={() => setCategory("attack")}
        />
        <StatButton
          text="Шилдэг хаалт"
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

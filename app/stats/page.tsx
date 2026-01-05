"use client";

import LogoBanner from "@/components/myComponents/LogoBanner";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";
import { Gender, Category } from "@/models/Player";

/* ================= TYPES ================= */

type Player = {
  _id: string;
  number: string; // 👈 ТОГЛОГЧИЙН ХУВИЙН ДУГААР
  name: string;
  team: string;
  value: number;
  avatar: string;
};

/* ================= COMPONENT ================= */

export default function StatisticsSection() {
  const [gender, setGender] = useState<Gender>("male");
  const [category, setCategory] = useState<Category>("overall");
  const [players, setPlayers] = useState<Player[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/players?gender=${gender}&category=${category}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data: Player[]) => setPlayers(data));
  }, [gender, category]);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white h-screen">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold mb-6 text-black">Статистик</div>
        <button
          onClick={() => router.back()}
          className="flex items-center text-[15px] font-medium text-black border rounded-md p-1 mb-6"
        >
          <ArrowBigLeft /> Буцах
        </button>
      </div>

      {/* Gender */}
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

      {/* Category */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <StatButton text="Оноо" active={category === "overall"} onClick={() => setCategory("overall")} />
        <StatButton text="Давуулалт" active={category === "serve"} onClick={() => setCategory("serve")} />
        <StatButton text="Довтолгоо" active={category === "attack"} onClick={() => setCategory("attack")} />
        <StatButton text="Хаалт" active={category === "block"} onClick={() => setCategory("block")} />
      </div>

      {/* Player list */}
      <div className="bg-white rounded-xl shadow divide-y">
        {players.map((p, i) => (
          <div
            key={p._id}
            className="flex justify-between items-center px-4 py-3"
          >
            <div className="flex items-center gap-3">
              {/* Rank */}
              <span className="w-5 font-bold text-gray-500">{i + 1}</span>

              {/* Jersey Number */}
              <span className="w-8 text-center font-semibold text-black">
                {p.number}
              </span>

              {/* Avatar */}
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={p.avatar}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name & Team */}
              <div>
                <p className="font-medium text-black">{p.name}</p>
                <p className="text-xs text-gray-500">{p.team}</p>
              </div>
            </div>

            {/* Value */}
            <span className="font-bold text-black">{p.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <LogoBanner />
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
            : "bg-white text-black border border-black"
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
      className={`px-4 py-2 rounded font-medium transition
        ${
          active
            ? "bg-black text-white"
            : "bg-white text-black border border-black"
        }`}
    >
      {text}
    </button>
  );
}

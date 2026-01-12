"use client";

import LogoBanner from "@/components/myComponents/LogoBanner";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";
import { Gender } from "@/models/Player";

/* ================= TYPES ================= */

type Round = "round2" | "final";

type Category =
  | "overall"
  | "serve"
  | "attack"
  | "block"
  | "attack_accuracy" // FINAL only
  | "serve_accuracy"; // FINAL only

type Player = {
  _id: string;
  number: string;
  name: string;
  team: string;
  value: number;
  avatar: string;
  gender: Gender;
  category: Category;
  round: Round;
};

type ButtonProps = {
  text: string;
  active: boolean;
  onClick: () => void;
};

/* ================= COMPONENT ================= */

export default function StatisticsSection() {
  const [gender, setGender] = useState<Gender>("male");
  const [round, setRound] = useState<Round>("round2");
  const [category, setCategory] = useState<Category>("overall");
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);

  const router = useRouter();

  /* ================= FETCH ================= */

  useEffect(() => {
    fetch(`/api/players?gender=${gender}&category=${category}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data: Player[]) => setAllPlayers(data));
  }, [gender, category]);

  /* ================= FILTER ================= */

  const players = useMemo(() => {
    return allPlayers.filter(
      (p) =>
        p.round === round &&
        p.gender === gender &&
        p.category === category
    );
  }, [allPlayers, round, gender, category]);

  /* ================= UI ================= */

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold mb-6 text-black">Статистик</div>
        <button
          onClick={() => router.back()}
          className="flex items-center text-[15px] font-medium text-black border rounded-md p-1 mb-6"
        >
          <ArrowBigLeft /> Буцах
        </button>
      </div>

      {/* ROUND */}
      <div className="flex gap-2 mb-4">
        <RoundButton
          text="2-р тойрог"
          active={round === "round2"}
          onClick={() => {
            setRound("round2");
            if (category === "attack_accuracy" || category === "serve_accuracy") {
              setCategory("overall");
            }
          }}
        />
        <RoundButton
          text="Final"
          active={round === "final"}
          onClick={() => setRound("final")}
        />
      </div>

      {/* GENDER */}
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

      {/* CATEGORY (FINAL дээр 2 шинэ category нэмэгдэнэ) */}
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

        {round === "final" && (
          <>
            <StatButton
              text="Оновчтой довтолгоо"
              active={category === "attack_accuracy"}
              onClick={() => setCategory("attack_accuracy")}
            />
            <StatButton
              text="Оновчтой давуулалт"
              active={category === "serve_accuracy"}
              onClick={() => setCategory("serve_accuracy")}
            />
          </>
        )}
      </div>

      {/* PLAYER LIST */}
      <div className="bg-white rounded-xl shadow divide-y">
        {players.map((p, i) => (
          <div
            key={p._id}
            className="flex justify-between items-center px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-5 font-bold text-gray-500">{i + 1}</span>

              <span className="w-8 text-center font-semibold text-black">
                {p.number}
              </span>

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

      <div className="mt-5">
        <LogoBanner />
      </div>
    </div>
  );
}

/* ================= BUTTONS ================= */

function StatButton({ text, active, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`py-3 rounded-lg font-medium transition ${
        active
          ? "bg-black text-white"
          : "bg-white text-black border border-black"
      }`}
    >
      {text}
    </button>
  );
}

function GenderButton({ text, active, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium transition ${
        active
          ? "bg-black text-white"
          : "bg-white text-black border border-black"
      }`}
    >
      {text}
    </button>
  );
}

function RoundButton({ text, active, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium transition ${
        active
          ? "bg-black text-white"
          : "bg-white text-black border border-black"
      }`}
    >
      {text}
    </button>
  );
}

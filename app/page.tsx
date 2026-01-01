"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-orange-500 via-red-500 to-pink-600 flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center text-white space-y-6 flex flex-col items-center">
        {/* Logo / Icon */}
        <div className="rounded-md">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          Volleyball <br /> Хөгжлийн Лиг
        </h1>

        {/* Subtitle */}
        <p className="text-sm opacity-90 leading-relaxed">
          Бэлтгэл. Өрсөлдөөн. Хөгжил. <br />
          Гар бөмбөгийн ирээдүй эндээс эхэлнэ.
        </p>

        {/* Divider */}
        <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>

        {/* CTA Button */}
        <button
          onClick={() => router.push("/leaderboard")}
          className="w-full py-3 rounded-full bg-white text-red-600 font-semibold text-lg shadow-lg active:scale-95 transition"
        >
          Амжилтын хүснэгт
        </button>
        <button onClick={() => router.push('/calendar')} className="w-full py-3 rounded-full bg-white text-red-600 font-semibold text-lg shadow-lg active:scale-95 transition">
          Тоглолууд
        </button>
        <button className="w-full py-3 rounded-full bg-white text-red-600 font-semibold text-lg shadow-lg active:scale-95 transition">
          Багууд
        </button>

        {/* Footer text */}
        <p className="text-xs opacity-80">© 2025 Development League</p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // ⭐ чухал
        body: JSON.stringify({ username, password }),
      });

      const data: { message?: string } = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // ⭐ push биш replace (middleware-тэй зөрчилдөхөөс сэргийлнэ)
      router.replace("/admin");
    } catch (e) {
      setError("Server error");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg w-80 shadow">
        <h2 className="text-center text-xl font-semibold mb-4">
          Admin Login
        </h2>

        <input
          placeholder="Username"
          className="w-full border p-2 mb-3 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLogin(); // ⭐ Enter дархад
          }}
        />

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <button
          type="button" // ⭐ form submit-ээс хамгаална
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}

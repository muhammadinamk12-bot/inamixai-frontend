"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      console.log("LOGIN RESPONSE:", data); // DEBUG

      if (!res.ok) {
        setError(data.detail || "Login failed");
        return;
      }

      // 🔥 SAVE TOKEN HERE (MOST IMPORTANT)
      localStorage.setItem("inamix_token", data.access_token);

      // redirect
      router.push("/dashboard");
    } catch (err) {
      setError("Something went wrong");
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-3 w-80"
      >
        <h1 className="text-xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-black text-white p-2">
          Login
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
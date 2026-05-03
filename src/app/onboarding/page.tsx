"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiRequest } from "@/lib/api";

export default function OnboardingPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleContinue() {
    setLoading(true);

    try {
      await apiRequest("/api/v1/auth/onboarding", {
        method: "POST",
        body: JSON.stringify({
          name,
          phone,
        }),
      });

      localStorage.setItem(
        "inamix_identity",
        JSON.stringify({ name, phone, email })
      );

      router.push("/dashboard");
    } catch (e) {
      alert("Failed to save");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-slate-950">
          Set up your identity protection
        </h1>

        <div className="mt-10 space-y-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full border p-3 rounded-xl"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border p-3 rounded-xl"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <button
          onClick={handleContinue}
          className="mt-6 bg-black text-white px-6 py-3 rounded-xl"
        >
          {loading ? "Saving..." : "Continue"}
        </button>
      </div>
    </main>
  );
}
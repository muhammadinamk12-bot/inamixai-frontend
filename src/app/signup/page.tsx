"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { setToken } from "@/lib/auth";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const data = await apiRequest("/api/v1/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          full_name: fullName,
          email,
          password,
          phone,
        }),
      });

      if (data?.access_token) {
        setToken(data.access_token);
        router.push("/dashboard");
        return;
      }

      setErrorMessage("Signup failed");
    } catch (error: any) {
      try {
        const parsed = JSON.parse(error.message);
        setErrorMessage(parsed.detail || "Signup failed");
      } catch {
        setErrorMessage("Signup failed. Try a different email.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">

        <h1 className="text-2xl font-semibold text-slate-900 mb-2">
          Create your account
        </h1>

        <p className="text-sm text-slate-600 mb-6">
          Start protecting yourself from phishing links instantly
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-sm text-slate-700">Full Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-slate-700">Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-slate-700">Phone</label>
            <input
              type="text"
              required
              placeholder="03000000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-slate-700">Password</label>
            <input
              type="password"
              required
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="text-black font-medium">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
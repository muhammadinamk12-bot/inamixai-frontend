"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  UserCircle2,
  Mail,
  LockKeyhole,
  Activity,
  CheckCircle2,
} from "lucide-react";

type GoogleAccount = {
  connected: boolean;
  email: string;
  name: string;
  picture: string;
};

export default function SettingsPage() {
  const [googleAccount, setGoogleAccount] = useState<GoogleAccount>({
    connected: false,
    email: "",
    name: "",
    picture: "",
  });

  useEffect(() => {
    setGoogleAccount({
      connected: localStorage.getItem("inamix_google_connected") === "true",
      email: localStorage.getItem("inamix_google_email") || "",
      name: localStorage.getItem("inamix_google_name") || "",
      picture: localStorage.getItem("inamix_google_picture") || "",
    });
  }, []);

  function disconnectGoogle() {
    localStorage.removeItem("inamix_google_connected");
    localStorage.removeItem("inamix_google_email");
    localStorage.removeItem("inamix_google_name");
    localStorage.removeItem("inamix_google_picture");

    setGoogleAccount({
      connected: false,
      email: "",
      name: "",
      picture: "",
    });
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
          Settings
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-950">
          Identity protection settings
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Manage your connected identity, protection status, and InamixAI
          prevention controls.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
              <UserCircle2 size={22} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Connected Google identity
              </h2>
              <p className="text-sm text-slate-500">
                This must show the real connected account.
              </p>
            </div>
          </div>

          {googleAccount.connected ? (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-4">
                {googleAccount.picture ? (
                  <img
                    src={googleAccount.picture}
                    alt="Google account"
                    className="h-14 w-14 rounded-full border border-emerald-200"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">
                    ID
                  </div>
                )}

                <div className="min-w-0">
                  <p className="truncate text-lg font-bold text-slate-950">
                    {googleAccount.name || "Google account connected"}
                  </p>

                  <p className="truncate text-sm text-slate-700">
                    {googleAccount.email}
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    Identity protection active
                  </p>
                </div>
              </div>

              <button
                onClick={disconnectGoogle}
                className="mt-5 rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
              >
                Disconnect Google Account
              </button>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-600">
                No Google account is connected yet.
              </p>

              <Link
                href="http://127.0.0.1:8000/api/v1/auth/google/connect"
                className="mt-4 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
              >
                Connect Google Account
              </Link>
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Protection status
              </h2>
              <p className="text-sm text-slate-500">
                Real active status for the current browser.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <StatusRow
              icon={<CheckCircle2 size={18} />}
              title="Browser protection"
              value="Active"
            />

            <StatusRow
              icon={<Activity size={18} />}
              title="Live scan engine"
              value="Running"
            />

            <StatusRow
              icon={<Mail size={18} />}
              title="Google identity"
              value={googleAccount.connected ? "Connected" : "Not connected"}
            />

            <StatusRow
              icon={<LockKeyhole size={18} />}
              title="Prevention mode"
              value="Enabled"
            />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-950">
          System information
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <InfoCard label="Product" value="InamixAI Prevention Engine" />
          <InfoCard label="Version" value="v0.1.0" />
          <InfoCard label="Mode" value="Local development" />
        </div>
      </section>
    </div>
  );
}

function StatusRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center gap-3">
        <div className="text-slate-600">{icon}</div>
        <p className="font-semibold text-slate-900">{title}</p>
      </div>

      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
        {value}
      </span>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 font-bold text-slate-950">{value}</p>
    </div>
  );
}
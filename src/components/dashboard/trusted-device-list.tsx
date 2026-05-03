"use client";

import { useEffect, useState } from "react";

type Device = {
  id: string;
  name: string;
  device_type: string;
  location: string;
  ip_address: string;
  last_seen: string;
  trusted: boolean;
  risk_score: number;
  risk_status: string;
  alert_status: string;
  reason: string;
  ai_explanation: string;
};

type DeviceResponse = {
  total_devices: number;
  trusted_devices: number;
  active_alerts: number;
  highest_risk_score: number;
  devices: Device[];
};

type TrustResponse = {
  device_id: string;
  device_trusted: boolean;
  before_risk_score: number;
  after_risk_score: number;
  risk_status: string;
  alert_status: string;
  message: string;
  ai_explanation: string;
  timeline_event: string;
  case_update: string;
  updated_at: string;
};

type TrustedDeviceListProps = {
  onTimelineEvent?: (event: string) => void;
  onCaseUpdate?: (event: string) => void;
};

const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export function TrustedDeviceList({
  onTimelineEvent,
  onCaseUpdate,
}: TrustedDeviceListProps) {
  const [data, setData] = useState<DeviceResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<string>("");

  async function loadDevices() {
    try {
      const res = await fetch(`${API}/api/v1/prevention/trusted-devices`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to load devices");
      }

      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function trustDevice(id: string) {
    setActionLoading(id);
    setLastAction("");

    try {
      const res = await fetch(
        `${API}/api/v1/prevention/trusted-devices/${id}/trust`,
        { method: "POST" }
      );

      const json: TrustResponse | { detail?: string } = await res.json();

      if (!res.ok) {
        setLastAction("detail" in json ? json.detail || "Action blocked." : "Action blocked.");
        return;
      }

      const result = json as TrustResponse;

      setLastAction(
        `${result.timeline_event} ${result.case_update} ${result.ai_explanation}`
      );

      onTimelineEvent?.(result.timeline_event);
      onCaseUpdate?.(result.case_update);

      await loadDevices();
    } catch (error) {
      console.error(error);
      setLastAction("Could not apply trusted-device action.");
    } finally {
      setActionLoading(null);
    }
  }

  useEffect(() => {
    loadDevices();
  }, []);

  if (loading) {
    return (
      <div className="rounded-[30px] border border-white/10 bg-[#0a1124] p-6 text-white/60">
        Loading device risk monitoring...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-[30px] border border-red-500/20 bg-red-500/10 p-6 text-red-200">
        Device Risk Monitoring could not load. Make sure backend is running.
      </div>
    );
  }

  return (
    <div className="rounded-[30px] border border-white/10 bg-[#0a1124] p-6 shadow-[0_0_60px_rgba(34,211,238,0.07)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-white/45">
            Prevention action layer
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Device Risk Monitoring
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-white/60">
            Trust known devices, block suspicious sessions, and reduce identity
            takeover risk through direct prevention actions.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs text-white/40">Devices</p>
            <p className="mt-1 text-xl font-semibold text-white">
              {data.total_devices}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
            <p className="text-xs text-emerald-200/60">Trusted</p>
            <p className="mt-1 text-xl font-semibold text-emerald-300">
              {data.trusted_devices}
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3">
            <p className="text-xs text-red-200/60">Alerts</p>
            <p className="mt-1 text-xl font-semibold text-red-300">
              {data.active_alerts}
            </p>
          </div>
        </div>
      </div>

      {lastAction ? (
        <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/60">
            AI prevention explanation
          </p>
          <p className="mt-2 text-sm leading-7 text-cyan-100">{lastAction}</p>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4">
        {data.devices.map((device) => {
          const critical = device.risk_status === "critical";
          const trusted = device.trusted;

          return (
            <div
              key={device.id}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {device.name}
                    </h3>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                        trusted
                          ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-300"
                          : critical
                            ? "border-red-500/25 bg-red-500/10 text-red-300"
                            : "border-amber-500/25 bg-amber-500/10 text-amber-300"
                      }`}
                    >
                      {trusted ? "Trusted" : critical ? "Blocked" : "Untrusted"}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                      {device.alert_status}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-white/50">
                    {device.device_type} • {device.location} •{" "}
                    {device.ip_address}
                  </p>

                  <p className="mt-3 max-w-4xl text-sm leading-7 text-white/65">
                    {device.reason}
                  </p>

                  <div className="mt-4 rounded-2xl border border-violet-500/15 bg-violet-500/10 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-violet-200/60">
                      AI reasoning
                    </p>
                    <p className="mt-2 text-sm leading-7 text-violet-100/90">
                      {device.ai_explanation}
                    </p>
                  </div>
                </div>

                <div className="flex min-w-[190px] flex-col items-start gap-3 lg:items-end">
                  <div className="text-left lg:text-right">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/35">
                      Risk score
                    </p>
                    <p
                      className={`mt-1 text-4xl font-semibold ${
                        device.risk_score >= 80
                          ? "text-red-300"
                          : device.risk_score >= 40
                            ? "text-amber-300"
                            : "text-emerald-300"
                      }`}
                    >
                      {device.risk_score}
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={trusted || critical || actionLoading === device.id}
                    onClick={() => trustDevice(device.id)}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      trusted
                        ? "cursor-not-allowed border border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                        : critical
                          ? "cursor-not-allowed border border-red-500/20 bg-red-500/10 text-red-300"
                          : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    }`}
                  >
                    {trusted
                      ? "Trusted"
                      : critical
                        ? "Manual review required"
                        : actionLoading === device.id
                          ? "Applying..."
                          : "Trust Device"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
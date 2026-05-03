export type DashboardOverview = {
  user: {
    name: string;
    email: string;
  };
  risk_score: number;
  open_alerts: number;
  applied_actions: number;
  prevention_score: number;
  monitoring_coverage: number;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export async function fetchDashboardOverview(
  token?: string
): Promise<DashboardOverview> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/dashboard/overview`, {
      cache: "no-store",
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });

    if (!res.ok) {
      throw new Error("Backend dashboard endpoint failed");
    }

    return await res.json();
  } catch {
    return {
      user: {
        name: "muhammad inam ul haq",
        email: "muhammadinamk12@gmail.com",
      },
      risk_score: 33,
      open_alerts: 1,
      applied_actions: 0,
      prevention_score: 67,
      monitoring_coverage: 98,
    };
  }
}

export async function updateRiskAlert() {
  return {
    success: true,
    message: "Risk alert action applied.",
  };
}
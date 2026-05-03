export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export async function apiRequest(
  endpoint: string,
  options: RequestInit = {}
): Promise<any> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });
  return response.json();
}

export async function createAction(data: any): Promise<any> {
  return apiRequest("/api/v1/actions", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function scanLink(payload: { url: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://inamixai-wave1.vercel.app";

  const res = await fetch(`${baseUrl}/api/v1/url-scan/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to scan link");
  }

  return res.json();
}

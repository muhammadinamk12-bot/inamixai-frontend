"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { getToken } from "@/lib/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  return <DashboardShell>{children}</DashboardShell>;
}
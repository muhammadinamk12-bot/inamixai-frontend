"use client";

import { useMemo, useState } from "react";
import { DashboardOverview } from "@/lib/types";
import { DashboardOverviewScreen } from "./dashboard-overview-screen";

type Props = {
  data: DashboardOverview;
  token: string;
};

export function DashboardOverviewClient({ data, token }: Props) {
  const [localData, setData] = useState(data);

  return (
    <DashboardOverviewScreen
      data={localData}
    />
  );
}

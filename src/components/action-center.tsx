"use client";

import { useState } from "react";
import { createAction } from "@/lib/api";
import { PreventionActionItem } from "@/lib/types";

export default function ActionCenter() {
  const [loading, setLoading] = useState(false);
  const [actions, setActions] = useState<PreventionActionItem[]>([]);

  async function handleAction(actionType: string) {
    setLoading(true);

    const newAction = await createAction({
      action_type: actionType,
      notes: "Triggered from UI",
    });

    setActions((prev) => [newAction, ...prev]);
    setLoading(false);
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-zinc-900">Action Center</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Take immediate preventive actions on your identity.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => handleAction("lock_account")}
          disabled={loading}
          className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 disabled:opacity-60"
        >
          Lock Account
        </button>

        <button
          onClick={() => handleAction("challenge_session")}
          disabled={loading}
          className="rounded-xl bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-400 disabled:opacity-60"
        >
          Challenge Session
        </button>

        <button
          onClick={() => handleAction("block_session")}
          disabled={loading}
          className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
        >
          Block Session
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {actions.map((action) => (
          <div
            key={action.id}
            className="rounded-xl border border-zinc-200 p-3 text-sm"
          >
            <div className="font-medium text-zinc-900">
              {action.action_type}
            </div>
            <div className="text-zinc-500">
              Status: {action.action_status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
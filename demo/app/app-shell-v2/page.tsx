"use client";

import { useState } from "react";
import {
  CanaryAppShellV2,
  SidebarVariant,
  standardMainSidebarSectionsV2,
  addBadge,
} from "@canary-ui/components";

/** Insight link shown beside the page title, per product. */
const INSIGHTS: Record<string, string> = {
  messages: "Insights",
  calls: "12 calls answered by AI today",
  upsells: "$1,240 in upsells this week",
  "food-and-beverage": "16 orders submitted today",
  "check-in": "35 guests are arriving today",
  checkout: "8 guests checked out this morning",
  "digital-tips": "$825.25 tips received this week",
};

/** The sidebar label is short; the page title sometimes isn't. */
const TITLE_OVERRIDES: Record<string, string> = {
  "food-and-beverage": "Food & Beverage",
};

const mainSections = addBadge(standardMainSidebarSectionsV2, "messages", 4);

export default function AppShellV2Demo() {
  const [variant, setVariant] = useState<SidebarVariant>(SidebarVariant.MAIN);
  const [selectedId, setSelectedId] = useState("messages");
  const [selectedSettingsId, setSelectedSettingsId] = useState("property-info");

  const isSettings = variant === SidebarVariant.SETTINGS;
  const activeId = isSettings ? selectedSettingsId : selectedId;
  const insightLabel = isSettings ? undefined : INSIGHTS[selectedId];

  return (
    <CanaryAppShellV2
      sidebarVariant={variant}
      sidebarSections={isSettings ? undefined : mainSections}
      selectedSidebarItemId={activeId}
      onSidebarItemClick={isSettings ? setSelectedSettingsId : setSelectedId}
      pageTitle={isSettings ? undefined : TITLE_OVERRIDES[selectedId]}
      property={{ name: "Days Inn & Suites by Wyndham Wausau", code: "38653" }}
      onPropertyClick={() => {}}
      onSidebarBack={isSettings ? () => setVariant(SidebarVariant.MAIN) : undefined}
      teamChat={{ badge: 2, onClick: () => {} }}
      user={{ name: "Theresa" }}
      onUserClick={() => {}}
      onSettingsClick={() => setVariant(SidebarVariant.SETTINGS)}
      onSupportClick={() => {}}
      insight={insightLabel ? { label: insightLabel, onClick: () => {} } : undefined}
      reservationStatus={{ isConnected: true, onClick: () => {} }}
      copilot={{ message: "2 items need attention", onClick: () => {} }}
      contentPadding="none"
    >
      <ProductChrome />
    </CanaryAppShellV2>
  );
}

/**
 * Stand-in for whatever a product renders under the shell — a full-bleed tab
 * strip followed by content. Here only to give the shell realistic context.
 */
function ProductChrome() {
  const [tab, setTab] = useState("conversations");
  const tabs = [
    { id: "conversations", label: "Conversations" },
    { id: "broadcast", label: "Broadcast" },
    { id: "ai-answers", label: "AI answers" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div
        className="flex items-center shrink-0 bg-white"
        style={{ padding: "0 24px", gap: 24, borderBottom: "1px solid #E5E5E5" }}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="relative"
            style={{
              padding: "14px 0",
              fontSize: 14,
              lineHeight: "22px",
              fontWeight: tab === t.id ? 500 : 400,
              color: tab === t.id ? "#2858C4" : "#666666",
            }}
          >
            {t.label}
            {tab === t.id && (
              <span
                className="absolute left-0 right-0 bottom-0"
                style={{ height: 2, backgroundColor: "#2858C4" }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 flex gap-4 p-6 min-h-0">
        <Card className="w-[420px] shrink-0">
          <div className="p-4 text-sm text-[#666666]">Conversation list</div>
        </Card>
        <Card className="flex-1">
          <div className="p-4 text-sm text-[#666666]">Thread</div>
        </Card>
      </div>
    </div>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E5E5",
        borderRadius: 8,
      }}
    >
      {children}
    </div>
  );
}

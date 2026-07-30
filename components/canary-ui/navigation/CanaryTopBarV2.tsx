import { CSSProperties, ReactNode } from "react";
import Icon from "@mdi/react";
import { mdiTrendingUp, mdiChevronRight, mdiCheck } from "@mdi/js";
import { colors } from "../design-tokens";
import { shellV2 } from "./shell-v2-tokens";

export interface TopBarV2Insight {
  /** e.g. "35 guests are arriving today" */
  label: string;
  /** Defaults to a trending-up arrow */
  icon?: ReactNode;
  onClick?: () => void;
}

export interface TopBarV2ReservationStatus {
  label?: string;
  isConnected?: boolean;
  onClick?: () => void;
}

export interface TopBarV2Copilot {
  /** Wordmark — defaults to "Copilot" */
  label?: string;
  /** e.g. "2 items need attention" */
  message?: string;
  onClick?: () => void;
}

export interface CanaryTopBarV2Props {
  /** Page title — usually the selected sidebar item */
  title: string;
  /** Optional live stat beside the title */
  insight?: TopBarV2Insight;
  /** PMS connection pill */
  reservationStatus?: TopBarV2ReservationStatus;
  /** Copilot entry point */
  copilot?: TopBarV2Copilot;
  /** Extra controls rendered to the left of the pills */
  actions?: ReactNode;
  className?: string;
}

const truncateStyle: CSSProperties = {
  minWidth: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

function BarIcon({ size, children }: { size: number; children: ReactNode }) {
  return (
    <span className="canary-shell-v2-icon" style={{ width: size, height: size }}>
      {children}
    </span>
  );
}

/** The small orb that fronts the Copilot pill. */
function CopilotOrb() {
  return (
    <span
      style={{
        flex: "none",
        width: 16,
        height: 16,
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 32% 28%, #C3CBFF 0%, #7C9BF5 42%, #5B6FE8 70%, #8A5BE0 100%)",
      }}
    />
  );
}

export default function CanaryTopBarV2({
  title,
  insight,
  reservationStatus,
  copilot,
  actions,
  className,
}: CanaryTopBarV2Props) {
  const isConnected = reservationStatus?.isConnected ?? true;

  return (
    <header
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flex: "none",
        height: shellV2.topBarHeight,
        padding: `0 ${shellV2.topBarPaddingX}px`,
        backgroundColor: "#FFFFFF",
        borderBottom: `1px solid ${colors.colorBlack6}`,
      }}
    >
      {/* ===== Left: title + insight ===== */}
      <div style={{ display: "flex", alignItems: "center", minWidth: 0, gap: 12 }}>
        <h1
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: "22px",
            whiteSpace: "nowrap",
            color: colors.colorBlack1,
          }}
        >
          {title}
        </h1>

        {insight && (
          <>
            <span
              style={{
                flex: "none",
                width: 1,
                height: 12,
                backgroundColor: colors.colorBlack6,
              }}
            />
            <button
              type="button"
              onClick={insight.onClick}
              style={{
                display: "flex",
                alignItems: "center",
                minWidth: 0,
                gap: 8,
                color: colors.colorBlueDark1,
                cursor: insight.onClick ? "pointer" : "default",
              }}
            >
              <BarIcon size={16}>
                {insight.icon ?? <Icon path={mdiTrendingUp} size={1} />}
              </BarIcon>
              <span
                style={{
                  ...truncateStyle,
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: "22px",
                }}
              >
                {insight.label}
              </span>
              <BarIcon size={16}>
                <Icon path={mdiChevronRight} size={1} />
              </BarIcon>
            </button>
          </>
        )}
      </div>

      {/* ===== Right: actions + pills ===== */}
      <div style={{ display: "flex", alignItems: "center", flex: "none", gap: 12 }}>
        {actions}

        {reservationStatus && (
          <button
            type="button"
            onClick={reservationStatus.onClick}
            style={{
              display: "flex",
              alignItems: "center",
              height: shellV2.pillHeight,
              borderRadius: shellV2.pillRadius,
              padding: "0 12px",
              gap: 8,
              backgroundColor: isConnected
                ? shellV2.reservationsBg
                : shellV2.reservationsBgOffline,
              color: isConnected
                ? shellV2.reservationsText
                : shellV2.reservationsTextOffline,
              cursor: reservationStatus.onClick ? "pointer" : "default",
            }}
          >
            {isConnected && (
              <BarIcon size={16}>
                <Icon path={mdiCheck} size={1} />
              </BarIcon>
            )}
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                lineHeight: "22px",
                whiteSpace: "nowrap",
              }}
            >
              {reservationStatus.label ?? "Reservations"}
            </span>
          </button>
        )}

        {copilot && (
          <button
            type="button"
            onClick={copilot.onClick}
            style={{
              display: "flex",
              alignItems: "center",
              height: shellV2.pillHeight,
              borderRadius: shellV2.pillRadius,
              padding: "0 8px",
              gap: 8,
              background: `linear-gradient(90deg, ${shellV2.copilotBgFrom} 0%, ${shellV2.copilotBgTo} 100%)`,
              border: `1px solid ${shellV2.copilotBorder}`,
              cursor: copilot.onClick ? "pointer" : "default",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <CopilotOrb />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  lineHeight: "18px",
                  whiteSpace: "nowrap",
                  backgroundImage: `linear-gradient(90deg, ${shellV2.copilotWordmarkFrom} 0%, ${shellV2.copilotWordmarkTo} 100%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {copilot.label ?? "Copilot"}
              </span>
            </span>

            {copilot.message && (
              <>
                <span
                  style={{
                    flex: "none",
                    width: 1,
                    height: 10,
                    backgroundColor: "#DDDADF",
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    lineHeight: "18px",
                    whiteSpace: "nowrap",
                    color: colors.colorBlack3,
                  }}
                >
                  {copilot.message}
                </span>
              </>
            )}
          </button>
        )}
      </div>
    </header>
  );
}

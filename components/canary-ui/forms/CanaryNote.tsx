import { ReactNode } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";
import { NoteColor } from "./types";

export interface CanaryNoteProps {
  color?: NoteColor;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function CanaryNote({
  color = NoteColor.OK,
  icon,
  children,
  className = "",
}: CanaryNoteProps) {
  const colorStyles = {
    [NoteColor.OK]: {
      borderColor: colors.colorLightGreen1,
      backgroundColor: colors.colorLightGreen5,
    },
    [NoteColor.WARNING]: {
      borderColor: colors.colorWheat1,
      backgroundColor: colors.colorWheat5,
    },
    [NoteColor.DANGER]: {
      borderColor: colors.danger,
      backgroundColor: colors.colorPink5,
    },
  };

  const scheme = colorStyles[color];

  return (
    <div
      className={clsx("flex items-start gap-2 text-sm", className)}
      style={{
        borderLeft: `4px solid ${scheme.borderColor}`,
        backgroundColor: scheme.backgroundColor,
        padding: "12px",
        borderRadius: "4px",
      }}
    >
      {icon && <div className="shrink-0 mt-0.5">{icon}</div>}
      <div className="flex-1">{children}</div>
    </div>
  );
}

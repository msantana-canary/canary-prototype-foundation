import { colors } from "../design-tokens";
import clsx from "clsx";
import { ProfileImageSize } from "./types";

export interface CanaryProfileImageProps {
  src?: string;
  alt?: string;
  size?: ProfileImageSize;
  initials?: string;
  className?: string;
}

export default function CanaryProfileImage({
  src,
  alt = "",
  size = ProfileImageSize.NORMAL,
  initials,
  className = "",
}: CanaryProfileImageProps) {
  const sizeMap = {
    [ProfileImageSize.TINY]: 24,
    [ProfileImageSize.SMALL]: 32,
    [ProfileImageSize.MEDIUM]: 40,
    [ProfileImageSize.NORMAL]: 48,
    [ProfileImageSize.LARGE]: 64,
  };

  const dimension = sizeMap[size];
  const fontSize = Math.round(dimension * 0.4);

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={clsx("rounded-full object-cover", className)}
        style={{
          width: `${dimension}px`,
          height: `${dimension}px`,
        }}
      />
    );
  }

  return (
    <div
      className={clsx(
        "rounded-full inline-flex items-center justify-center font-medium",
        className
      )}
      style={{
        width: `${dimension}px`,
        height: `${dimension}px`,
        backgroundColor: colors.colorBlueDark1,
        color: colors.colorWhite,
        fontSize: `${fontSize}px`,
      }}
    >
      {initials || "?"}
    </div>
  );
}

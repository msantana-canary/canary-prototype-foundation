import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import clsx from 'clsx';
import { forwardRef, useEffect, useState } from 'react';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// components/canary-ui/design-tokens.ts
var colors = {
  // Status colors
  ok: "#008040",
  success: "#008040",
  warning: "#FAB541",
  danger: "#e40046",
  error: "#e40046",
  // Base colors
  white: "#ffffff",
  // Black scale (grayscale)
  black1: "#2d2d2d",
  black2: "#414141",
  black3: "#707070",
  black4: "#9f9f9f",
  black5: "#cecece",
  black6: "#eaeaea",
  black7: "#f2f2f2",
  black8: "#fafafa",
  // Canary Blue (Light) - Brand color
  blueCanary1: "#1c91fa",
  blueCanary2: "#55acfb",
  blueCanary3: "#8dc8fc",
  blueCanary4: "#c6e3f3",
  blueCanary5: "#e8f4ff",
  // Blue Dark - Primary action color
  blueDark1: "#2858c4",
  // Primary button color
  blueDark2: "#5e82d3",
  blueDark3: "#93abe1",
  blueDark4: "#c9d5f0",
  blueDark5: "#eaeef9",
  // Pink
  pink1: "#f16682",
  pink2: "#f48ca1",
  pink3: "#f8b2c0",
  pink4: "#fbd9e0",
  pink5: "#fef0f3",
  // Light Green
  lightGreen1: "#22d39a",
  lightGreen2: "#59deb3",
  lightGreen3: "#90e9cc",
  lightGreen4: "#c8f4e6",
  lightGreen5: "#e9fbf5",
  // Dark Green
  darkGreen1: "#008040",
  darkGreen2: "#59deb3",
  darkGreen3: "#90e9cc",
  darkGreen4: "#c8f4e6",
  darkGreen5: "#e9fbf5",
  // Wheat (Orange/Yellow)
  wheat1: "#fab541",
  wheat2: "#fbc770",
  wheat3: "#fcdaa0",
  wheat4: "#feeccf",
  wheat5: "#fff8ec",
  // Purple
  purple1: "#9b51e0",
  purple2: "#bb6bd9",
  purple3: "#cda8ef",
  purple4: "#e6d3f7",
  purple5: "#f5eefc",
  // Red
  red1: "#e40046",
  red2: "#eb4074",
  red3: "#f59fba",
  red4: "#f8bfd1",
  red5: "#fce6ed"
};
var typography = {
  fontFamily: {
    primary: '"Roboto", sans-serif',
    fallback: "system-ui, -apple-system, sans-serif"
  },
  fontSize: {
    // Display titles (largest)
    displayTitleLg: "3.5rem",
    // 56px
    displayTitle: "3rem",
    // 48px
    displayTitleSm: "2rem",
    // 32px
    // Titles
    titleLg: "1.75rem",
    // 28px
    title: "1.5rem",
    // 24px
    // Subtitles
    subtitleLg: "1.25rem",
    // 20px
    subtitle: "1.125rem",
    // 18px
    // Body text
    body: "1rem",
    // 16px
    bodySm: "0.875rem",
    // 14px
    // Captions (smallest)
    caption: "0.75rem",
    // 12px
    captionSm: "0.625rem"
    // 10px
  },
  lineHeight: {
    displayTitleLg: "5.25rem",
    // 84px
    displayTitle: "4.5rem",
    // 72px
    displayTitleSm: "3rem",
    // 48px
    titleLg: "2.625rem",
    // 42px
    title: "2.25rem",
    // 36px
    subtitleLg: "1.875rem",
    // 30px
    subtitle: "1.6875rem",
    // 27px
    body: "1.5rem",
    // 24px
    bodySm: "1.3125rem",
    // 21px
    caption: "1.125rem",
    // 18px
    captionSm: "0.9375rem"
    // 15px
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
};
var spacing = {
  0: "0",
  1: "0.25rem",
  // 4px
  2: "0.5rem",
  // 8px
  3: "0.75rem",
  // 12px
  4: "1rem",
  // 16px
  5: "1.25rem",
  // 20px
  6: "1.5rem",
  // 24px
  8: "2rem",
  // 32px
  10: "2.5rem",
  // 40px
  12: "3rem",
  // 48px
  16: "4rem",
  // 64px
  20: "5rem",
  // 80px
  24: "6rem"
  // 96px
};
var borderRadius = {
  none: "0",
  sm: "2px",
  default: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "9999px"
  // Perfect circle
};
var shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
};
var zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 40,
  modal: 50,
  popover: 51,
  toast: 100
};
var dimensions = {
  headerHeight: "56px",
  sectionContainerHeight: "24px"
};
var breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};
var transitions = {
  fast: "150ms",
  default: "200ms",
  slow: "300ms",
  slower: "500ms"
};
var easings = {
  default: "cubic-bezier(0.4, 0, 0.2, 1)",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)"
};

// components/canary-ui/buttons/types.ts
var ButtonType = /* @__PURE__ */ ((ButtonType2) => {
  ButtonType2["PRIMARY"] = "primary";
  ButtonType2["OUTLINED"] = "outlined";
  ButtonType2["SHADED"] = "shaded";
  ButtonType2["TEXT"] = "text";
  ButtonType2["ICON_PRIMARY"] = "icon_primary";
  ButtonType2["ICON_SECONDARY"] = "icon_secondary";
  return ButtonType2;
})(ButtonType || {});
var ButtonSize = /* @__PURE__ */ ((ButtonSize2) => {
  ButtonSize2["TABLET"] = "tablet";
  ButtonSize2["LARGE"] = "large";
  ButtonSize2["NORMAL"] = "normal";
  ButtonSize2["COMPACT"] = "compact";
  ButtonSize2["TINY"] = "tiny";
  return ButtonSize2;
})(ButtonSize || {});
var ButtonColor = /* @__PURE__ */ ((ButtonColor2) => {
  ButtonColor2["NORMAL"] = "normal";
  ButtonColor2["HEADING_TEXT"] = "heading_text";
  ButtonColor2["DANGER"] = "danger";
  ButtonColor2["WARNING"] = "warning";
  ButtonColor2["SUCCESS"] = "success";
  ButtonColor2["FONT"] = "font";
  ButtonColor2["FONT_SECONDARY"] = "font_secondary";
  ButtonColor2["WHITE"] = "white";
  return ButtonColor2;
})(ButtonColor || {});
var IconPosition = /* @__PURE__ */ ((IconPosition2) => {
  IconPosition2["LEFT"] = "left";
  IconPosition2["RIGHT"] = "right";
  IconPosition2["TOP"] = "top";
  return IconPosition2;
})(IconPosition || {});
function CanaryLoading({
  color = "#2858c4",
  size = 20,
  className = ""
}) {
  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    border: `2px solid transparent`,
    borderTopColor: color,
    borderRadius: "50%",
    animation: "spin 0.6s linear infinite"
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      ` }),
    /* @__PURE__ */ jsx("div", { className: `inline-block ${className}`, style: spinnerStyle })
  ] });
}
function CanaryButton({
  children,
  onClick,
  type = "primary" /* PRIMARY */,
  size = "normal" /* NORMAL */,
  color: colorProp = "normal" /* NORMAL */,
  icon,
  iconPosition = "right" /* RIGHT */,
  isDisabled = false,
  isLoading = false,
  isExpanded = false,
  isRounded = false,
  href,
  target = "_self",
  nativeType = "button",
  className = "",
  dataAnalytics
}) {
  const getBackgroundColor = () => {
    switch (colorProp) {
      case "white" /* WHITE */:
        return colors.white;
      case "success" /* SUCCESS */:
        return colors.ok;
      case "warning" /* WARNING */:
        return colors.warning;
      case "danger" /* DANGER */:
        return colors.danger;
      case "normal" /* NORMAL */:
      default:
        return colors.blueDark1;
    }
  };
  const getContentColor = () => {
    switch (colorProp) {
      case "white" /* WHITE */:
        return colors.black1;
      case "warning" /* WARNING */:
      case "danger" /* DANGER */:
      case "success" /* SUCCESS */:
        return colors.white;
      case "normal" /* NORMAL */:
      default:
        return colors.white;
    }
  };
  const backgroundColor = getBackgroundColor();
  const contentColor = getContentColor();
  const isIconType = type === "icon_primary" /* ICON_PRIMARY */ || type === "icon_secondary" /* ICON_SECONDARY */;
  const hasIcon = Boolean(icon);
  const handleClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    if (!isLoading && onClick) {
      onClick(event);
    }
  };
  const getBorder = () => {
    if (type === "outlined" /* OUTLINED */) {
      return `1px solid ${backgroundColor}`;
    }
    return "none";
  };
  const sizeClasses = {
    ["tablet" /* TABLET */]: "h-16 text-[18px] font-medium min-w-[104px]",
    ["large" /* LARGE */]: "h-12 text-[18px]",
    ["normal" /* NORMAL */]: "h-10 text-[16px]",
    ["compact" /* COMPACT */]: "h-8 text-[14px]",
    ["tiny" /* TINY */]: "h-7 text-[14px]"
  };
  const getPaddingClasses = () => {
    if (isIconType) return "p-0";
    const basePadding = size === "tiny" /* TINY */ ? "px-2" : "px-4";
    if (hasIcon && !isIconType) {
      if (isExpanded) {
        return size === "tiny" /* TINY */ ? "px-10" : "px-10";
      }
      if (iconPosition === "left" /* LEFT */) {
        return size === "tiny" /* TINY */ ? "pl-2 pr-2" : "pl-2 pr-4";
      }
      if (iconPosition === "right" /* RIGHT */) {
        return size === "tiny" /* TINY */ ? "pl-2 pr-2" : "pl-4 pr-2";
      }
      if (iconPosition === "top" /* TOP */) {
        return size === "tiny" /* TINY */ ? "p-2" : "p-4";
      }
    }
    if (type === "outlined" /* OUTLINED */) {
      return size === "tiny" /* TINY */ ? "px-[7px]" : "px-[15px]";
    }
    if (isExpanded) {
      return size === "tiny" /* TINY */ ? "px-1" : "px-2";
    }
    return basePadding;
  };
  const getIconButtonWidth = () => {
    if (!isIconType) return "";
    return {
      ["tablet" /* TABLET */]: "w-16",
      ["large" /* LARGE */]: "w-12",
      ["normal" /* NORMAL */]: "w-10",
      ["compact" /* COMPACT */]: "w-8",
      ["tiny" /* TINY */]: "w-7"
    }[size];
  };
  const getBackgroundOpacity = () => {
    switch (type) {
      case "primary" /* PRIMARY */:
      case "icon_primary" /* ICON_PRIMARY */:
        return "opacity-100";
      case "shaded" /* SHADED */:
        return "opacity-10";
      case "outlined" /* OUTLINED */:
      case "text" /* TEXT */:
      case "icon_secondary" /* ICON_SECONDARY */:
        return "opacity-0";
      default:
        return "opacity-100";
    }
  };
  const getHoverClasses = () => {
    if (isDisabled || isLoading) return "";
    switch (type) {
      case "shaded" /* SHADED */:
        return "hover:[&_.button-bg]:opacity-25 active:[&_.button-bg]:opacity-50";
      case "outlined" /* OUTLINED */:
      case "text" /* TEXT */:
      case "icon_secondary" /* ICON_SECONDARY */:
        return "hover:[&_.button-bg]:opacity-[0.08] active:[&_.button-bg]:opacity-[0.16]";
      case "primary" /* PRIMARY */:
      case "icon_primary" /* ICON_PRIMARY */:
        return "hover:[&_.button-content]:opacity-80 active:[&_.button-content]:opacity-60";
      default:
        return "";
    }
  };
  const buttonClasses = clsx(
    // Base styles
    "relative inline-flex items-center justify-center",
    "font-['Roboto',sans-serif] font-medium",
    "cursor-pointer outline-none",
    "transition-all duration-200",
    "shrink-0",
    // Size
    sizeClasses[size],
    // Padding
    getPaddingClasses(),
    // Icon button width
    getIconButtonWidth(),
    // Border radius
    isRounded ? "rounded-full [&_.button-bg]:rounded-full" : isIconType ? "rounded-full [&_.button-bg]:rounded-full" : "rounded-[4px] [&_.button-bg]:rounded-[4px]",
    // Expanded
    isExpanded && "flex-1",
    // Shadow for primary
    type === "primary" /* PRIMARY */ && "shadow-[0_2px_4px_rgba(0,0,0,0.1)]",
    // Hover and active states
    getHoverClasses(),
    // Disabled
    isDisabled && "cursor-default opacity-50",
    // Icon positioning
    hasIcon && !isIconType && iconPosition === "right" /* RIGHT */ && "flex-row-reverse",
    hasIcon && !isIconType && iconPosition === "top" /* TOP */ && "flex-col",
    // Custom classes
    className
  );
  const backgroundStyle = {
    background: backgroundColor,
    opacity: type === "primary" /* PRIMARY */ || type === "icon_primary" /* ICON_PRIMARY */ ? 1 : void 0
  };
  const contentStyle = {
    color: type === "outlined" /* OUTLINED */ || type === "text" /* TEXT */ || type === "icon_secondary" /* ICON_SECONDARY */ || type === "shaded" /* SHADED */ ? backgroundColor : contentColor
  };
  const buttonStyle = {
    border: getBorder()
  };
  const iconClasses = clsx(
    "shrink-0",
    // Icon size
    isIconType ? size === "tablet" /* TABLET */ ? "w-10 h-10" : size === "large" /* LARGE */ ? "w-6 h-6" : "w-5 h-5" : "w-6 h-6",
    // Icon margin
    !isIconType && hasIcon && iconPosition === "left" /* LEFT */ && (size === "tiny" /* TINY */ ? "mr-2" : "mr-2"),
    !isIconType && hasIcon && iconPosition === "right" /* RIGHT */ && (size === "tiny" /* TINY */ ? "ml-2" : "ml-2"),
    !isIconType && hasIcon && iconPosition === "top" /* TOP */ && (size === "tiny" /* TINY */ ? "mb-1" : "mb-2"),
    // Expanded positioning
    isExpanded && hasIcon && iconPosition === "left" /* LEFT */ && "absolute left-0",
    isExpanded && hasIcon && iconPosition === "right" /* RIGHT */ && "absolute right-0",
    isExpanded && hasIcon && iconPosition === "top" /* TOP */ && "absolute top-0"
  );
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx(
          "button-bg absolute inset-0 transition-opacity duration-200",
          getBackgroundOpacity()
        ),
        style: backgroundStyle
      }
    ),
    isLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(CanaryLoading, { color: contentColor, size: 16 }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: clsx(
          "button-content relative flex items-center justify-center",
          "transition-opacity duration-200",
          iconPosition === "top" /* TOP */ && "flex-col",
          iconPosition === "right" /* RIGHT */ && "flex-row-reverse",
          isLoading && "opacity-0"
        ),
        style: contentStyle,
        children: [
          icon && /* @__PURE__ */ jsx("div", { className: iconClasses, children: icon }),
          !isIconType && /* @__PURE__ */ jsx("span", { children })
        ]
      }
    )
  ] });
  if (href) {
    return /* @__PURE__ */ jsx(
      "a",
      {
        href,
        target,
        className: buttonClasses,
        style: buttonStyle,
        onClick: handleClick,
        "data-dd-action-name": dataAnalytics,
        "aria-disabled": isDisabled,
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: nativeType,
      className: buttonClasses,
      style: buttonStyle,
      disabled: isDisabled,
      onClick: handleClick,
      "data-dd-action-name": dataAnalytics,
      children: content
    }
  );
}

// components/canary-ui/forms/types.ts
var InputSize = /* @__PURE__ */ ((InputSize2) => {
  InputSize2["TABLET"] = "tablet";
  InputSize2["LARGE"] = "large";
  InputSize2["NORMAL"] = "normal";
  InputSize2["COMPACT"] = "compact";
  InputSize2["TINY"] = "tiny";
  return InputSize2;
})(InputSize || {});
var InputType = /* @__PURE__ */ ((InputType2) => {
  InputType2["TEXT"] = "text";
  InputType2["EMAIL"] = "email";
  InputType2["PASSWORD"] = "password";
  InputType2["NUMBER"] = "number";
  InputType2["TEL"] = "tel";
  InputType2["URL"] = "url";
  InputType2["SEARCH"] = "search";
  InputType2["DATE"] = "date";
  InputType2["TIME"] = "time";
  InputType2["DATETIME_LOCAL"] = "datetime-local";
  return InputType2;
})(InputType || {});
var CanaryInput = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      type = "text" /* TEXT */,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = "large" /* LARGE */,
      leftAddon,
      rightAddon,
      className = ""
    } = _b, inputProps = __objRest(_b, [
      "label",
      "type",
      "isDisabled",
      "isReadonly",
      "isRequired",
      "error",
      "helperText",
      "size",
      "leftAddon",
      "rightAddon",
      "className"
    ]);
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-14 text-[20px] px-5",
      ["large" /* LARGE */]: "h-12 text-[18px] px-4",
      ["normal" /* NORMAL */]: "h-10 text-[16px] px-4",
      ["compact" /* COMPACT */]: "h-8 text-[14px] px-3",
      ["tiny" /* TINY */]: "h-6 text-[12px] px-2"
    };
    const inputClasses = clsx(
      // Base styles
      "w-full rounded transition-all duration-200",
      "font-['Roboto',sans-serif]",
      "outline-none",
      "text-[#2d2d2d]",
      // black1 color
      // Size
      sizeClasses[size],
      // States
      isDisabled && "bg-[#f5f5f5] cursor-not-allowed opacity-60",
      isReadonly && "bg-[#fafafa] cursor-default",
      // Left addon padding
      leftAddon && "pl-10",
      // Right addon padding
      rightAddon && "pr-10",
      className
    );
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxs("label", { className: "block text-[14px] font-medium text-[#2d2d2d] mb-2", children: [
        label,
        isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#e40046] ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        leftAddon && /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none", children: leftAddon }),
        /* @__PURE__ */ jsx(
          "input",
          __spreadValues({
            ref,
            type,
            disabled: isDisabled,
            readOnly: isReadonly,
            required: isRequired,
            className: inputClasses,
            style: {
              boxShadow: `inset 0 0 0 1px ${error ? colors.danger : colors.black3}`
            },
            onFocus: (e) => {
              var _a2;
              e.target.style.boxShadow = `inset 0 0 0 2px ${error ? colors.danger : colors.blueDark1}`;
              (_a2 = inputProps.onFocus) == null ? void 0 : _a2.call(inputProps, e);
            },
            onBlur: (e) => {
              var _a2;
              e.target.style.boxShadow = `inset 0 0 0 1px ${error ? colors.danger : colors.black3}`;
              (_a2 = inputProps.onBlur) == null ? void 0 : _a2.call(inputProps, e);
            }
          }, inputProps)
        ),
        rightAddon && /* @__PURE__ */ jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none", children: rightAddon })
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1", style: { color: colors.danger }, children: error }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#707070] mt-1", children: helperText })
    ] });
  }
);
CanaryInput.displayName = "CanaryInput";
var CanaryInput_default = CanaryInput;
var CanaryTextArea = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = "large" /* LARGE */,
      resize = "vertical",
      className = "",
      rows = 4
    } = _b, textareaProps = __objRest(_b, [
      "label",
      "isDisabled",
      "isReadonly",
      "isRequired",
      "error",
      "helperText",
      "size",
      "resize",
      "className",
      "rows"
    ]);
    const sizeClasses = {
      ["tablet" /* TABLET */]: "text-[20px] p-5",
      ["large" /* LARGE */]: "text-[18px] p-4",
      ["normal" /* NORMAL */]: "text-[16px] p-4",
      ["compact" /* COMPACT */]: "text-[14px] p-3",
      ["tiny" /* TINY */]: "text-[12px] p-2"
    };
    const resizeClasses = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize"
    };
    const textareaClasses = clsx(
      // Base styles
      "w-full rounded transition-all duration-200",
      "font-['Roboto',sans-serif]",
      "outline-none",
      "text-[#2d2d2d]",
      // black1 color
      // Size
      sizeClasses[size],
      // Resize
      resizeClasses[resize],
      // States
      isDisabled && "bg-[#f5f5f5] cursor-not-allowed opacity-60",
      isReadonly && "bg-[#fafafa] cursor-default",
      className
    );
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxs("label", { className: "block text-[14px] font-medium text-[#2d2d2d] mb-2", children: [
        label,
        isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#e40046] ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        __spreadValues({
          ref,
          disabled: isDisabled,
          readOnly: isReadonly,
          required: isRequired,
          rows,
          className: textareaClasses,
          style: {
            boxShadow: `inset 0 0 0 1px ${error ? colors.danger : colors.black3}`
          },
          onFocus: (e) => {
            var _a2;
            e.target.style.boxShadow = `inset 0 0 0 2px ${error ? colors.danger : colors.blueDark1}`;
            (_a2 = textareaProps.onFocus) == null ? void 0 : _a2.call(textareaProps, e);
          },
          onBlur: (e) => {
            var _a2;
            e.target.style.boxShadow = `inset 0 0 0 1px ${error ? colors.danger : colors.black3}`;
            (_a2 = textareaProps.onBlur) == null ? void 0 : _a2.call(textareaProps, e);
          }
        }, textareaProps)
      ),
      error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1", style: { color: colors.danger }, children: error }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#707070] mt-1", children: helperText })
    ] });
  }
);
CanaryTextArea.displayName = "CanaryTextArea";
var CanaryTextArea_default = CanaryTextArea;
var CanarySelect = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      options,
      placeholder,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = "large" /* LARGE */,
      className = ""
    } = _b, selectProps = __objRest(_b, [
      "label",
      "options",
      "placeholder",
      "isDisabled",
      "isReadonly",
      "isRequired",
      "error",
      "helperText",
      "size",
      "className"
    ]);
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-14 text-[20px] px-5",
      ["large" /* LARGE */]: "h-12 text-[18px] px-4",
      ["normal" /* NORMAL */]: "h-10 text-[16px] px-4",
      ["compact" /* COMPACT */]: "h-8 text-[14px] px-3",
      ["tiny" /* TINY */]: "h-6 text-[12px] px-2"
    };
    const selectClasses = clsx(
      // Base styles
      "w-full rounded transition-all duration-200",
      "font-['Roboto',sans-serif]",
      "outline-none appearance-none",
      "bg-white",
      "text-[#2d2d2d]",
      // black1 color
      "pr-10",
      // Space for dropdown arrow
      // Size
      sizeClasses[size],
      // States
      isDisabled && "bg-[#f5f5f5] cursor-not-allowed opacity-60",
      isReadonly && "bg-[#fafafa] cursor-default",
      className
    );
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxs("label", { className: "block text-[14px] font-medium text-[#2d2d2d] mb-2", children: [
        label,
        isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#e40046] ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs(
          "select",
          __spreadProps(__spreadValues({
            ref,
            disabled: isDisabled || isReadonly,
            required: isRequired,
            className: selectClasses,
            style: {
              boxShadow: `inset 0 0 0 1px ${error ? colors.danger : colors.black3}`
            },
            onFocus: (e) => {
              var _a2;
              e.target.style.boxShadow = `inset 0 0 0 2px ${error ? colors.danger : colors.blueDark1}`;
              (_a2 = selectProps.onFocus) == null ? void 0 : _a2.call(selectProps, e);
            },
            onBlur: (e) => {
              var _a2;
              e.target.style.boxShadow = `inset 0 0 0 1px ${error ? colors.danger : colors.black3}`;
              (_a2 = selectProps.onBlur) == null ? void 0 : _a2.call(selectProps, e);
            }
          }, selectProps), {
            children: [
              placeholder && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder }),
              options.map((option) => /* @__PURE__ */ jsx(
                "option",
                {
                  value: option.value,
                  disabled: option.disabled,
                  children: option.label
                },
                option.value
              ))
            ]
          })
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "12",
            height: "8",
            viewBox: "0 0 12 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M1 1.5L6 6.5L11 1.5",
                stroke: colors.black3,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        ) })
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1", style: { color: colors.danger }, children: error }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#707070] mt-1", children: helperText })
    ] });
  }
);
CanarySelect.displayName = "CanarySelect";
var CanarySelect_default = CanarySelect;
var CanaryCheckbox = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      isDisabled = false,
      error,
      helperText,
      className = ""
    } = _b, inputProps = __objRest(_b, [
      "label",
      "isDisabled",
      "error",
      "helperText",
      "className"
    ]);
    const checkboxClasses = clsx(
      "w-5 h-5 rounded border-2 transition-all duration-200",
      "cursor-pointer appearance-none",
      "checked:bg-[#2858c4] checked:border-[#2858c4]",
      "focus:outline-none focus:ring-2 focus:ring-[#2858c4] focus:ring-offset-2",
      error && "border-[#e40046]",
      !error && "border-[#cecece]",
      isDisabled && "opacity-50 cursor-not-allowed",
      className
    );
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx(
            "flex items-start gap-3",
            isDisabled ? "cursor-not-allowed" : "cursor-pointer"
          ),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center pt-0.5", children: [
              /* @__PURE__ */ jsx(
                "input",
                __spreadValues({
                  ref,
                  type: "checkbox",
                  disabled: isDisabled,
                  className: checkboxClasses,
                  style: {
                    borderColor: error ? colors.danger : void 0
                  }
                }, inputProps)
              ),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "absolute w-3 h-3 text-white pointer-events-none hidden peer-checked:block",
                  style: {
                    display: inputProps.checked ? "block" : "none"
                  },
                  viewBox: "0 0 12 10",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M1 5L4.5 8.5L11 1.5",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                }
              )
            ] }),
            label && /* @__PURE__ */ jsx("span", { className: "text-[14px] text-[#2d2d2d] select-none flex-1", children: label })
          ]
        }
      ),
      error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1 ml-8", style: { color: colors.danger }, children: error }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#707070] mt-1 ml-8", children: helperText })
    ] });
  }
);
CanaryCheckbox.displayName = "CanaryCheckbox";
var CanaryCheckbox_default = CanaryCheckbox;
var CanaryRadio = forwardRef(
  (_a, ref) => {
    var _b = _a, { label, isDisabled = false, error, className = "" } = _b, inputProps = __objRest(_b, ["label", "isDisabled", "error", "className"]);
    const radioClasses = clsx(
      "w-5 h-5 rounded-full border-2 transition-all duration-200",
      "cursor-pointer appearance-none",
      "checked:border-[6px] checked:border-[#2858c4]",
      "focus:outline-none focus:ring-2 focus:ring-[#2858c4] focus:ring-offset-2",
      error && "border-[#e40046]",
      !error && "border-[#cecece]",
      isDisabled && "opacity-50 cursor-not-allowed",
      className
    );
    return /* @__PURE__ */ jsxs(
      "label",
      {
        className: clsx(
          "flex items-start gap-3",
          isDisabled ? "cursor-not-allowed" : "cursor-pointer"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "pt-0.5", children: /* @__PURE__ */ jsx(
            "input",
            __spreadValues({
              ref,
              type: "radio",
              disabled: isDisabled,
              className: radioClasses,
              style: {
                borderColor: error ? colors.danger : inputProps.checked ? colors.blueDark1 : void 0
              }
            }, inputProps)
          ) }),
          label && /* @__PURE__ */ jsx("span", { className: "text-[14px] text-[#2d2d2d] select-none flex-1", children: label })
        ]
      }
    );
  }
);
CanaryRadio.displayName = "CanaryRadio";
var CanaryRadio_default = CanaryRadio;
function CanaryRadioGroup({
  label,
  children,
  error,
  helperText,
  isRequired = false,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className: `w-full ${className}`, children: [
    label && /* @__PURE__ */ jsxs("label", { className: "block text-[14px] font-medium text-[#2d2d2d] mb-3", children: [
      label,
      isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#e40046] ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children }),
    error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-2", style: { color: colors.danger }, children: error }),
    helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#707070] mt-2", children: helperText })
  ] });
}
function CanarySegmentedControl({
  options,
  value,
  onChange,
  className = ""
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: clsx(
        "inline-flex rounded-full p-1",
        "font-['Roboto',sans-serif]",
        className
      ),
      style: {
        backgroundColor: colors.black7
      },
      children: options.map((option) => {
        const isSelected = value === option.value;
        return /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => onChange(option.value),
            className: clsx(
              "px-4 py-2 text-[14px] font-medium rounded-full transition-all duration-200",
              isSelected ? "" : "hover:opacity-70"
            ),
            style: {
              backgroundColor: isSelected ? colors.blueDark1 : "transparent",
              color: isSelected ? colors.white : colors.black3
            },
            children: option.label
          },
          option.value
        );
      })
    }
  );
}

// components/canary-ui/data-display/types.ts
var TagColor = /* @__PURE__ */ ((TagColor2) => {
  TagColor2["OK"] = "ok";
  TagColor2["WARNING"] = "warning";
  TagColor2["ERROR"] = "error";
  TagColor2["DARK"] = "dark";
  TagColor2["INFO"] = "canary_blue";
  TagColor2["THEME"] = "theme";
  TagColor2["WHITE"] = "white";
  return TagColor2;
})(TagColor || {});
function CanaryTag({
  label,
  color = "ok" /* OK */,
  customColor,
  icon,
  hasDropShadow = false,
  className = ""
}) {
  var _a;
  const getBackgroundColor = () => {
    if (customColor == null ? void 0 : customColor.backgroundColor) return customColor.backgroundColor;
    switch (color) {
      case "ok" /* OK */:
        return colors.lightGreen5;
      case "warning" /* WARNING */:
        return colors.wheat5;
      case "error" /* ERROR */:
        return colors.pink4;
      case "dark" /* DARK */:
        return colors.black6;
      case "canary_blue" /* INFO */:
        return colors.blueDark5;
      case "theme" /* THEME */:
        return colors.blueDark1;
      case "white" /* WHITE */:
        return colors.white;
      default:
        return colors.lightGreen5;
    }
  };
  const getBorderColor = () => {
    if (customColor == null ? void 0 : customColor.borderColor) return customColor.borderColor;
    switch (color) {
      case "ok" /* OK */:
        return colors.lightGreen1;
      case "warning" /* WARNING */:
        return colors.wheat3;
      case "error" /* ERROR */:
        return colors.pink3;
      case "dark" /* DARK */:
        return colors.black4;
      case "canary_blue" /* INFO */:
        return colors.blueDark3;
      case "theme" /* THEME */:
        return colors.blueDark1;
      case "white" /* WHITE */:
        return colors.black1;
      default:
        return colors.lightGreen1;
    }
  };
  const getFontColor = () => {
    if (customColor == null ? void 0 : customColor.fontColor) return customColor.fontColor;
    switch (color) {
      case "ok" /* OK */:
        return colors.darkGreen1;
      case "warning" /* WARNING */:
        return colors.wheat1;
      case "error" /* ERROR */:
        return colors.pink1;
      case "dark" /* DARK */:
        return colors.black1;
      case "canary_blue" /* INFO */:
        return colors.blueDark1;
      case "theme" /* THEME */:
        return colors.white;
      case "white" /* WHITE */:
        return colors.black1;
      default:
        return colors.darkGreen1;
    }
  };
  const backgroundColor = getBackgroundColor();
  const borderColor = getBorderColor();
  const fontColor = getFontColor();
  const iconColor = (_a = customColor == null ? void 0 : customColor.iconColor) != null ? _a : fontColor;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx(
        "inline-flex items-center gap-1.5",
        "px-2 py-1",
        "rounded-[2px]",
        "text-[12px] font-medium",
        "border",
        hasDropShadow && "shadow-sm",
        className
      ),
      style: {
        backgroundColor,
        borderColor,
        color: fontColor
      },
      children: [
        icon && /* @__PURE__ */ jsx("div", { style: { color: iconColor }, children: icon }),
        /* @__PURE__ */ jsx("span", { children: label })
      ]
    }
  );
}
function CanaryTable({
  columns,
  data,
  isLoading = false,
  emptyMessage = "No data available",
  onRowClick,
  className = ""
}) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxs("div", { className: `w-full p-8 text-center ${className}`, children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block w-8 h-8 border-4 border-[#2858c4] border-t-transparent rounded-full animate-spin" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-[14px] text-[#707070]", children: "Loading..." })
    ] });
  }
  if (data.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: `w-full p-8 text-center ${className}`, children: /* @__PURE__ */ jsx("p", { className: "text-[14px] text-[#707070]", children: emptyMessage }) });
  }
  return /* @__PURE__ */ jsx("div", { className: `w-full overflow-x-auto ${className}`, children: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-separate", style: { borderSpacing: 0 }, children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: columns.map((column) => /* @__PURE__ */ jsx(
      "th",
      {
        className: clsx(
          "px-4 py-2 text-[14px] font-semibold",
          alignClasses[column.align || "left"]
        ),
        style: {
          color: colors.black2,
          width: column.width
        },
        children: column.label
      },
      column.key
    )) }) }),
    /* @__PURE__ */ jsxs("tbody", { children: [
      /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: columns.length, className: "h-2" }) }),
      data.map((row, rowIndex) => /* @__PURE__ */ jsx(
        "tr",
        {
          className: clsx(
            "transition-colors",
            onRowClick && "cursor-pointer hover:bg-[#fafafa]"
          ),
          onClick: () => onRowClick == null ? void 0 : onRowClick(row, rowIndex),
          children: columns.map((column, colIndex) => /* @__PURE__ */ jsx(
            "td",
            {
              className: clsx(
                "px-4 py-1 text-[14px]",
                alignClasses[column.align || "left"]
              ),
              style: {
                color: colors.black2,
                width: column.width,
                borderTop: rowIndex === 0 ? `1px solid ${colors.black6}` : void 0,
                borderBottom: `1px solid ${colors.black6}`,
                borderLeft: colIndex === 0 ? `1px solid ${colors.black6}` : void 0,
                borderRight: colIndex === columns.length - 1 ? `1px solid ${colors.black6}` : void 0,
                borderTopLeftRadius: rowIndex === 0 && colIndex === 0 ? "8px" : void 0,
                borderTopRightRadius: rowIndex === 0 && colIndex === columns.length - 1 ? "8px" : void 0,
                borderBottomLeftRadius: rowIndex === data.length - 1 && colIndex === 0 ? "8px" : void 0,
                borderBottomRightRadius: rowIndex === data.length - 1 && colIndex === columns.length - 1 ? "8px" : void 0
              },
              children: column.render ? column.render(row[column.key], row, rowIndex) : row[column.key]
            },
            column.key
          ))
        },
        rowIndex
      ))
    ] })
  ] }) }) });
}
function CanaryCard({
  children,
  title,
  subtitle,
  footer,
  padding = "medium",
  hasShadow = false,
  hasBorder = true,
  className = "",
  onClick
}) {
  const paddingClasses = {
    none: "",
    small: "p-3",
    medium: "p-6",
    large: "p-8"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx(
        "rounded-lg bg-white",
        hasBorder && "border",
        onClick && "cursor-pointer hover:shadow-lg transition-shadow",
        className
      ),
      style: {
        borderColor: hasBorder ? colors.black6 : void 0,
        boxShadow: hasShadow ? shadows.xl : void 0
      },
      onClick,
      children: [
        (title || subtitle) && /* @__PURE__ */ jsxs("div", { className: clsx("border-b", paddingClasses[padding]), style: { borderColor: colors.black6 }, children: [
          title && /* @__PURE__ */ jsx("h3", { className: "text-[18px] font-semibold", style: { color: colors.black1 }, children: title }),
          subtitle && /* @__PURE__ */ jsx("p", { className: "text-[14px] mt-1", style: { color: colors.black3 }, children: subtitle })
        ] }),
        /* @__PURE__ */ jsx("div", { className: paddingClasses[padding], children }),
        footer && /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx("border-t", paddingClasses[padding]),
            style: { borderColor: colors.black6 },
            children: footer
          }
        )
      ]
    }
  );
}
function CanaryContainer({
  children,
  maxWidth = "xl",
  padding = "medium",
  className = ""
}) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    // 640px
    md: "max-w-screen-md",
    // 768px
    lg: "max-w-screen-lg",
    // 1024px
    xl: "max-w-screen-xl",
    // 1280px
    "2xl": "max-w-screen-2xl",
    // 1536px
    full: "max-w-full"
  };
  const paddingClasses = {
    none: "",
    small: "px-4 py-3",
    medium: "px-6 py-4",
    large: "px-8 py-6"
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: clsx(
        "mx-auto w-full",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className
      ),
      children
    }
  );
}
function CanaryGrid({
  children,
  columns = 1,
  gap = "medium",
  className = ""
}) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    12: "grid-cols-4 md:grid-cols-6 lg:grid-cols-12"
  };
  const gapClasses = {
    none: "gap-0",
    small: "gap-2",
    medium: "gap-4",
    large: "gap-6"
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: clsx(
        "grid",
        columnClasses[columns],
        gapClasses[gap],
        className
      ),
      children
    }
  );
}
function CanaryModal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "medium",
  closeOnOverlayClick = true,
  showCloseButton = true,
  className = ""
}) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
    full: "max-w-[95vw]"
  };
  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center p-4",
      style: {
        zIndex: zIndex.modal,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      },
      onClick: handleOverlayClick,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: clsx(
            "bg-white rounded-lg w-full",
            "max-h-[90vh] flex flex-col",
            sizeClasses[size],
            className
          ),
          style: { boxShadow: shadows.xl },
          onClick: (e) => e.stopPropagation(),
          children: [
            (title || showCloseButton) && /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center justify-between px-6 py-4 border-b shrink-0",
                style: { borderColor: colors.black6 },
                children: [
                  title && /* @__PURE__ */ jsx("h2", { className: "text-[20px] font-semibold", style: { color: colors.black1 }, children: title }),
                  showCloseButton && /* @__PURE__ */ jsx(
                    CanaryButton,
                    {
                      type: "icon_secondary" /* ICON_SECONDARY */,
                      onClick: onClose,
                      icon: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M15 5L5 15M5 5L15 15", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-4 overflow-y-auto flex-1", children }),
            footer && /* @__PURE__ */ jsx(
              "div",
              {
                className: "px-6 py-4 border-t shrink-0",
                style: { borderColor: colors.black6 },
                children: footer
              }
            )
          ]
        }
      )
    }
  );
}
function CanaryTabs({
  tabs,
  defaultTab,
  onChange,
  className = ""
}) {
  var _a, _b;
  const [activeTab, setActiveTab] = useState(defaultTab || ((_a = tabs[0]) == null ? void 0 : _a.id));
  const handleTabClick = (tabId, isDisabled) => {
    if (isDisabled) return;
    setActiveTab(tabId);
    onChange == null ? void 0 : onChange(tabId);
  };
  const activeTabContent = (_b = tabs.find((tab) => tab.id === activeTab)) == null ? void 0 : _b.content;
  return /* @__PURE__ */ jsxs("div", { className: `w-full ${className}`, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "inline-flex rounded-full p-1 mb-4",
        style: {
          backgroundColor: colors.black7
        },
        children: tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => handleTabClick(tab.id, tab.disabled),
              disabled: tab.disabled,
              className: clsx(
                "flex items-center gap-2 px-4 py-2",
                "text-[14px] font-medium font-['Roboto',sans-serif]",
                "rounded-full transition-all duration-200",
                "focus:outline-none",
                tab.disabled ? "cursor-not-allowed opacity-50" : isActive ? "cursor-pointer" : "cursor-pointer hover:opacity-70"
              ),
              style: {
                backgroundColor: isActive ? colors.blueDark1 : "transparent",
                color: isActive ? colors.white : colors.black3
              },
              children: [
                tab.icon && /* @__PURE__ */ jsx("span", { children: tab.icon }),
                /* @__PURE__ */ jsx("span", { children: tab.label })
              ]
            },
            tab.id
          );
        })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "py-4", children: activeTabContent })
  ] });
}
function CanarySidebar({
  items,
  header,
  footer,
  width = "256px",
  className = ""
}) {
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      className: clsx(
        "h-full flex flex-col bg-white border-r",
        className
      ),
      style: {
        width,
        borderColor: colors.black6
      },
      children: [
        header && /* @__PURE__ */ jsx("div", { className: "p-4 border-b shrink-0", style: { borderColor: colors.black6 }, children: header }),
        /* @__PURE__ */ jsx("nav", { className: "flex-1 overflow-y-auto p-2", children: items.map((item) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: item.onClick,
            className: clsx(
              "w-full flex items-center gap-3 px-3 py-2 rounded",
              "text-[14px] font-medium transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-[#2858c4] focus:ring-offset-2",
              item.isActive ? "bg-[#eaeef9]" : "hover:bg-[#fafafa]"
            ),
            style: {
              color: item.isActive ? colors.blueDark1 : colors.black2
            },
            children: [
              item.icon && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: item.icon }),
              /* @__PURE__ */ jsx("span", { className: "flex-1 text-left truncate", children: item.label }),
              item.badge && /* @__PURE__ */ jsx(
                "span",
                {
                  className: "px-2 py-0.5 text-[12px] rounded-full",
                  style: {
                    backgroundColor: colors.blueDark5,
                    color: colors.blueDark1
                  },
                  children: item.badge
                }
              )
            ]
          },
          item.id
        )) }),
        footer && /* @__PURE__ */ jsx("div", { className: "p-4 border-t shrink-0", style: { borderColor: colors.black6 }, children: footer })
      ]
    }
  );
}
function CanaryHeader({
  logo,
  title,
  actions,
  navigation,
  className = ""
}) {
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: clsx(
        "w-full bg-white border-b flex items-center px-6 shrink-0",
        className
      ),
      style: {
        height: dimensions.headerHeight,
        borderColor: colors.black6
      },
      children: [
        (logo || title) && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          logo && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: logo }),
          title && /* @__PURE__ */ jsx("h1", { className: "text-[20px] font-semibold", style: { color: colors.black1 }, children: title })
        ] }),
        navigation && /* @__PURE__ */ jsx("nav", { className: "flex-1 flex items-center justify-center px-6", children: navigation }),
        actions && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 ml-auto", children: actions })
      ]
    }
  );
}
function CanaryToast({
  message,
  type = "info",
  duration = 5e3,
  isOpen = true,
  onClose,
  icon,
  position = "top-right",
  className = ""
}) {
  const [visible, setVisible] = useState(isOpen);
  useEffect(() => {
    setVisible(isOpen);
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose == null ? void 0 : onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);
  if (!visible) return null;
  const typeColors = {
    success: {
      bg: colors.lightGreen5,
      border: colors.lightGreen1,
      text: colors.darkGreen1
    },
    error: {
      bg: colors.pink4,
      border: colors.pink3,
      text: colors.pink1
    },
    warning: {
      bg: colors.wheat5,
      border: colors.wheat3,
      text: colors.wheat1
    },
    info: {
      bg: colors.blueDark5,
      border: colors.blueDark3,
      text: colors.blueDark1
    }
  };
  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
  };
  const colorScheme = typeColors[type];
  const handleClose = () => {
    setVisible(false);
    onClose == null ? void 0 : onClose();
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx(
        "fixed flex items-center gap-3",
        "px-4 py-3 rounded shadow-lg",
        "border animate-slide-in",
        "max-w-md",
        positionClasses[position],
        className
      ),
      style: {
        backgroundColor: colorScheme.bg,
        borderColor: colorScheme.border,
        color: colorScheme.text,
        zIndex: zIndex.toast
      },
      children: [
        icon && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: icon }),
        /* @__PURE__ */ jsx("p", { className: "text-[14px] font-medium flex-1", children: message }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleClose,
            className: "shrink-0 hover:opacity-70 transition-opacity",
            children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 4L4 12M4 4L12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
          }
        )
      ]
    }
  );
}
function CanaryAlert({
  message,
  type = "info",
  title,
  icon,
  onClose,
  className = ""
}) {
  const typeColors = {
    success: {
      bg: colors.lightGreen5,
      border: colors.lightGreen1,
      text: colors.darkGreen1
    },
    error: {
      bg: colors.pink4,
      border: colors.pink3,
      text: colors.pink1
    },
    warning: {
      bg: colors.wheat5,
      border: colors.wheat3,
      text: colors.wheat1
    },
    info: {
      bg: colors.blueDark5,
      border: colors.blueDark3,
      text: colors.blueDark1
    }
  };
  const colorScheme = typeColors[type];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx(
        "flex items-start gap-3 p-4 rounded border",
        className
      ),
      style: {
        backgroundColor: colorScheme.bg,
        borderColor: colorScheme.border,
        color: colorScheme.text
      },
      children: [
        icon && /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-0.5", children: icon }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          title && /* @__PURE__ */ jsx("h4", { className: "text-[14px] font-semibold mb-1", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-[14px]", children: message })
        ] }),
        onClose && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onClose,
            className: "shrink-0 hover:opacity-70 transition-opacity",
            children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 4L4 12M4 4L12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
          }
        )
      ]
    }
  );
}

export { ButtonColor, ButtonSize, ButtonType, CanaryAlert, CanaryButton, CanaryCard, CanaryCheckbox_default as CanaryCheckbox, CanaryContainer, CanaryGrid, CanaryHeader, CanaryInput_default as CanaryInput, CanaryLoading, CanaryModal, CanaryRadio_default as CanaryRadio, CanaryRadioGroup, CanarySegmentedControl, CanarySelect_default as CanarySelect, CanarySidebar, CanaryTable, CanaryTabs, CanaryTag, CanaryTextArea_default as CanaryTextArea, CanaryToast, IconPosition, InputSize, InputType, TagColor, borderRadius, breakpoints, colors, dimensions, easings, shadows, spacing, transitions, typography, zIndex };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map
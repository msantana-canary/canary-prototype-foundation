import Icon from '@mdi/react';
export { default as Icon } from '@mdi/react';
import { mdiRadioboxMarked, mdiRadioboxBlank, mdiAlertCircleOutline, mdiCreditCard, mdiCreditCardOutline, mdiMinusBox, mdiCheckboxMarked, mdiCheckboxBlankOutline, mdiMonitor, mdiLaptop, mdiCellphone, mdiTabletCellphone, mdiMapMarker, mdiSilverwareForkKnife, mdiShieldCheckOutline, mdiShieldAccountOutline, mdiShieldOutline, mdiChartLine, mdiTrendingDown, mdiTrendingUp, mdiHelpCircleOutline, mdiInformationOutline, mdiCheckCircleOutline, mdiCheck, mdiRefresh, mdiUpload, mdiDownload, mdiContentCopy, mdiDeleteOutline, mdiPencilOutline, mdiMinus, mdiPlus, mdiPhoneOutline, mdiChatOutline, mdiMessageProcessingOutline, mdiMessageOutline, mdiEmailOutline, mdiCashMultiple, mdiCurrencyUsd, mdiBookOpenPageVariantOutline, mdiNewspaperVariantOutline, mdiFolderOutline, mdiFileDocumentOutline, mdiFileOutline, mdiPuzzleOutline, mdiPaletteOutline, mdiCogOutline, mdiLogout, mdiLogin, mdiAccountMultipleOutline, mdiAccountCheckOutline, mdiAccountGroupOutline, mdiAccountCircleOutline, mdiAccountOutline, mdiArrowRight, mdiArrowLeft, mdiChevronRight, mdiChevronLeft, mdiChevronUp, mdiChevronDown, mdiClose, mdiMenu, mdiHomeOutline, mdiFileSign, mdiAccountBoxOutline, mdiStoreOutline } from '@mdi/js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import clsx13 from 'clsx';
import { forwardRef, useState, useCallback, useRef, useImperativeHandle, useEffect } from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

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
  // Status colors (aliases for convenience)
  ok: "#008040",
  success: "#008040",
  warning: "#FAB541",
  danger: "#E40046",
  error: "#E40046",
  // Base colors - Figma token: $color-white
  colorWhite: "#FFFFFF",
  white: "#FFFFFF",
  // Alias for convenience
  // Black scale (grayscale) - Figma tokens: $color-black-1 through $color-black-8
  colorBlack1: "#000000",
  // $color-black-1
  colorBlack2: "#333333",
  // $color-black-2
  colorBlack3: "#666666",
  // $color-black-3
  colorBlack4: "#999999",
  // $color-black-4
  colorBlack5: "#CCCCCC",
  // $color-black-5
  colorBlack6: "#E5E5E5",
  // $color-black-6
  colorBlack7: "#F0F0F0",
  // $color-black-7
  colorBlack8: "#FAFAFA",
  // $color-black-8
  // Canary Blue (Light) - Brand color - Figma tokens: $color-blue-canary-1 through $color-blue-canary-5
  colorBlueCanary1: "#1C91FA",
  // $color-blue-canary-1
  colorBlueCanary2: "#55ACFB",
  // $color-blue-canary-2
  colorBlueCanary3: "#8DC8FC",
  // $color-blue-canary-3
  colorBlueCanary4: "#C6E3FE",
  // $color-blue-canary-4
  colorBlueCanary5: "#E8F4FF",
  // $color-blue-canary-5
  // Blue Dark - Primary action color - Figma tokens: $color-blue-dark-1 through $color-blue-dark-5
  colorBlueDark1: "#2858C4",
  // $color-blue-dark-1 - Primary button color
  colorBlueDark2: "#5E82D3",
  // $color-blue-dark-2
  colorBlueDark3: "#93ABE1",
  // $color-blue-dark-3
  colorBlueDark4: "#C9D5F0",
  // $color-blue-dark-4
  colorBlueDark5: "#EAEEF9",
  // $color-blue-dark-5
  // Pink - Figma tokens: $color-pink-1 through $color-pink-5
  colorPink1: "#F16682",
  // $color-pink-1
  colorPink2: "#F48CA1",
  // $color-pink-2
  colorPink3: "#F8B2C0",
  // $color-pink-3
  colorPink4: "#FBD9E0",
  // $color-pink-4
  colorPink5: "#FEF0F3",
  // $color-pink-5
  // Light Green - Figma tokens: $color-light-green-1 through $color-light-green-5
  colorLightGreen1: "#008040",
  // $color-light-green-1
  colorLightGreen2: "#339966",
  // $color-light-green-2
  colorLightGreen3: "#66B38C",
  // $color-light-green-3
  colorLightGreen4: "#99CCB3",
  // $color-light-green-4
  colorLightGreen5: "#CCE6D9",
  // $color-light-green-5
  // Wheat (Orange/Yellow) - Figma tokens: $color-wheat-1 through $color-wheat-5
  colorWheat1: "#FAB541",
  // $color-wheat-1
  colorWheat2: "#FBC770",
  // $color-wheat-2
  colorWheat3: "#FCDAA0",
  // $color-wheat-3
  colorWheat4: "#FEECCF",
  // $color-wheat-4
  colorWheat5: "#FFF8EC",
  // $color-wheat-5
  // Purple - Figma tokens: $color-purple-1 through $color-purple-5
  colorPurple1: "#3304AD",
  // $color-purple-1
  colorPurple2: "#723DFC",
  // $color-purple-2
  colorPurple3: "#9D7AFA",
  // $color-purple-3
  colorPurple4: "#CAB8F8",
  // $color-purple-4
  colorPurple5: "#E3DCF6",
  // $color-purple-5
  // Red - Figma tokens: $color-red-1 through $color-red-5
  colorRed1: "#E40046",
  // $color-red-1
  colorRed2: "#EB4074",
  // $color-red-2
  colorRed3: "#F59FBA",
  // $color-red-3
  colorRed4: "#F8BFD1",
  // $color-red-4
  colorRed5: "#FCE6ED"
  // $color-red-5
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
var CanaryIcon = {
  // Navigation & UI
  Home: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiHomeOutline, size: props.size || 1, color: props.color, className: props.className }),
  Menu: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiMenu, size: props.size || 1, color: props.color, className: props.className }),
  Close: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiClose, size: props.size || 1, color: props.color, className: props.className }),
  ChevronDown: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiChevronDown, size: props.size || 1, color: props.color, className: props.className }),
  ChevronUp: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiChevronUp, size: props.size || 1, color: props.color, className: props.className }),
  ChevronLeft: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiChevronLeft, size: props.size || 1, color: props.color, className: props.className }),
  ChevronRight: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiChevronRight, size: props.size || 1, color: props.color, className: props.className }),
  ArrowLeft: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiArrowLeft, size: props.size || 1, color: props.color, className: props.className }),
  ArrowRight: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiArrowRight, size: props.size || 1, color: props.color, className: props.className }),
  // User & Account
  Account: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiAccountOutline, size: props.size || 1, color: props.color, className: props.className }),
  AccountCircle: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiAccountCircleOutline, size: props.size || 1, color: props.color, className: props.className }),
  AccountGroup: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiAccountGroupOutline, size: props.size || 1, color: props.color, className: props.className }),
  AccountCheck: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiAccountCheckOutline, size: props.size || 1, color: props.color, className: props.className }),
  AccountMultiple: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiAccountMultipleOutline, size: props.size || 1, color: props.color, className: props.className }),
  Login: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiLogin, size: props.size || 1, color: props.color, className: props.className }),
  Logout: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiLogout, size: props.size || 1, color: props.color, className: props.className }),
  // Settings & Configuration
  Settings: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiCogOutline, size: props.size || 1, color: props.color, className: props.className }),
  Palette: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiPaletteOutline, size: props.size || 1, color: props.color, className: props.className }),
  Puzzle: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiPuzzleOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Documents & Files
  File: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiFileOutline, size: props.size || 1, color: props.color, className: props.className }),
  FileDocument: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiFileDocumentOutline, size: props.size || 1, color: props.color, className: props.className }),
  Folder: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiFolderOutline, size: props.size || 1, color: props.color, className: props.className }),
  Newspaper: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiNewspaperVariantOutline, size: props.size || 1, color: props.color, className: props.className }),
  Compendium: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiNewspaperVariantOutline, size: props.size || 1, color: props.color, className: props.className }),
  BookOpen: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiBookOpenPageVariantOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Financial
  Currency: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiCurrencyUsd, size: props.size || 1, color: props.color, className: props.className }),
  Cash: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiCashMultiple, size: props.size || 1, color: props.color, className: props.className }),
  CreditCard: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiCreditCardOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Communication
  Email: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiEmailOutline, size: props.size || 1, color: props.color, className: props.className }),
  Message: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiMessageOutline, size: props.size || 1, color: props.color, className: props.className }),
  MessageProcessing: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiMessageProcessingOutline, size: props.size || 1, color: props.color, className: props.className }),
  Chat: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiChatOutline, size: props.size || 1, color: props.color, className: props.className }),
  Phone: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiPhoneOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Actions
  Plus: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiPlus, size: props.size || 1, color: props.color, className: props.className }),
  Minus: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiMinus, size: props.size || 1, color: props.color, className: props.className }),
  Pencil: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiPencilOutline, size: props.size || 1, color: props.color, className: props.className }),
  Delete: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiDeleteOutline, size: props.size || 1, color: props.color, className: props.className }),
  Copy: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiContentCopy, size: props.size || 1, color: props.color, className: props.className }),
  Download: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiDownload, size: props.size || 1, color: props.color, className: props.className }),
  Upload: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiUpload, size: props.size || 1, color: props.color, className: props.className }),
  Refresh: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiRefresh, size: props.size || 1, color: props.color, className: props.className }),
  Check: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiCheck, size: props.size || 1, color: props.color, className: props.className }),
  CheckCircle: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiCheckCircleOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Status & Alerts
  Alert: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiAlertCircleOutline, size: props.size || 1, color: props.color, className: props.className }),
  Information: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiInformationOutline, size: props.size || 1, color: props.color, className: props.className }),
  Help: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiHelpCircleOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Business
  TrendingUp: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiTrendingUp, size: props.size || 1, color: props.color, className: props.className }),
  TrendingDown: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiTrendingDown, size: props.size || 1, color: props.color, className: props.className }),
  Chart: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiChartLine, size: props.size || 1, color: props.color, className: props.className }),
  Shield: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiShieldOutline, size: props.size || 1, color: props.color, className: props.className }),
  ShieldAccount: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiShieldAccountOutline, size: props.size || 1, color: props.color, className: props.className }),
  ShieldCheck: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiShieldCheckOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Hospitality
  Restaurant: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiSilverwareForkKnife, size: props.size || 1, color: props.color, className: props.className }),
  Location: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiMapMarker, size: props.size || 1, color: props.color, className: props.className }),
  // Devices
  Tablet: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiTabletCellphone, size: props.size || 1, color: props.color, className: props.className }),
  Cellphone: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiCellphone, size: props.size || 1, color: props.color, className: props.className }),
  Laptop: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiLaptop, size: props.size || 1, color: props.color, className: props.className }),
  Monitor: (props) => /* @__PURE__ */ jsx(Icon, { path: mdiMonitor, size: props.size || 1, color: props.color, className: props.className })
};
var iconPaths = {
  home: mdiHomeOutline,
  menu: mdiMenu,
  close: mdiClose,
  chevronDown: mdiChevronDown,
  chevronUp: mdiChevronUp,
  chevronLeft: mdiChevronLeft,
  chevronRight: mdiChevronRight,
  arrowLeft: mdiArrowLeft,
  arrowRight: mdiArrowRight,
  account: mdiAccountOutline,
  accountCircle: mdiAccountCircleOutline,
  accountGroup: mdiAccountGroupOutline,
  accountCheck: mdiAccountCheckOutline,
  accountMultiple: mdiAccountMultipleOutline,
  login: mdiLogin,
  logout: mdiLogout,
  settings: mdiCogOutline,
  palette: mdiPaletteOutline,
  puzzle: mdiPuzzleOutline,
  file: mdiFileOutline,
  fileDocument: mdiFileDocumentOutline,
  folder: mdiFolderOutline,
  newspaper: mdiNewspaperVariantOutline,
  compendium: mdiNewspaperVariantOutline,
  bookOpen: mdiBookOpenPageVariantOutline,
  currency: mdiCurrencyUsd,
  cash: mdiCashMultiple,
  creditCard: mdiCreditCardOutline,
  email: mdiEmailOutline,
  message: mdiMessageOutline,
  messageProcessing: mdiMessageProcessingOutline,
  chat: mdiChatOutline,
  phone: mdiPhoneOutline,
  plus: mdiPlus,
  minus: mdiMinus,
  pencil: mdiPencilOutline,
  delete: mdiDeleteOutline,
  copy: mdiContentCopy,
  download: mdiDownload,
  upload: mdiUpload,
  refresh: mdiRefresh,
  check: mdiCheck,
  checkCircle: mdiCheckCircleOutline,
  alert: mdiAlertCircleOutline,
  information: mdiInformationOutline,
  help: mdiHelpCircleOutline,
  trendingUp: mdiTrendingUp,
  trendingDown: mdiTrendingDown,
  chart: mdiChartLine,
  shield: mdiShieldOutline,
  shieldAccount: mdiShieldAccountOutline,
  shieldCheck: mdiShieldCheckOutline,
  restaurant: mdiSilverwareForkKnife,
  location: mdiMapMarker,
  tablet: mdiTabletCellphone,
  cellphone: mdiCellphone,
  laptop: mdiLaptop,
  monitor: mdiMonitor
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
        return colors.colorBlueDark1;
    }
  };
  const getContentColor = () => {
    switch (colorProp) {
      case "white" /* WHITE */:
        return colors.colorBlack1;
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
    ["tablet" /* TABLET */]: "h-14 text-[24px] font-medium",
    ["large" /* LARGE */]: "h-12 text-[18px]",
    ["normal" /* NORMAL */]: "h-10 text-[14px]",
    ["compact" /* COMPACT */]: "h-8 text-[12px]"
  };
  const getPaddingClasses = () => {
    if (isIconType) return "p-0";
    const basePadding = size === "tablet" /* TABLET */ ? "px-6" : "px-4";
    if (hasIcon && !isIconType) {
      if (isExpanded) {
        return "px-10";
      }
      if (iconPosition === "left" /* LEFT */) {
        return "pl-2 pr-4";
      }
      if (iconPosition === "right" /* RIGHT */) {
        return "pl-4 pr-2";
      }
      if (iconPosition === "top" /* TOP */) {
        return "p-4";
      }
    }
    if (type === "outlined" /* OUTLINED */) {
      return size === "tablet" /* TABLET */ ? "canary-button-px-23" : "canary-button-px-15";
    }
    if (isExpanded) {
      return "px-2";
    }
    return basePadding;
  };
  const getIconButtonWidth = () => {
    if (!isIconType) return "";
    return {
      ["tablet" /* TABLET */]: "w-14",
      ["large" /* LARGE */]: "w-12",
      ["normal" /* NORMAL */]: "w-10",
      ["compact" /* COMPACT */]: "w-8"
    }[size];
  };
  const getBackgroundOpacity = () => {
    switch (type) {
      case "primary" /* PRIMARY */:
      case "icon_primary" /* ICON_PRIMARY */:
        return "canary-opacity-100";
      case "shaded" /* SHADED */:
        return "canary-opacity-10";
      case "outlined" /* OUTLINED */:
      case "text" /* TEXT */:
      case "icon_secondary" /* ICON_SECONDARY */:
        return "canary-opacity-0";
      default:
        return "canary-opacity-100";
    }
  };
  const getHoverClasses = () => {
    if (isDisabled || isLoading) return "";
    switch (type) {
      case "shaded" /* SHADED */:
        return "canary-hover-shaded-bg canary-active-shaded-bg";
      case "outlined" /* OUTLINED */:
      case "text" /* TEXT */:
      case "icon_secondary" /* ICON_SECONDARY */:
        return "canary-hover-outlined-bg canary-active-outlined-bg";
      case "primary" /* PRIMARY */:
      case "icon_primary" /* ICON_PRIMARY */:
        return "canary-hover-primary-content canary-active-primary-content";
      default:
        return "";
    }
  };
  const buttonClasses = clsx13(
    // Base styles
    "relative inline-flex items-center justify-center",
    "font-['Roboto',sans-serif] font-medium",
    "cursor-pointer outline-none",
    "transition-all duration-200",
    "shrink-0",
    // Size
    sizeClasses[size],
    // Remove fixed height for top icon buttons (they should hug content)
    hasIcon && !isIconType && iconPosition === "top" /* TOP */ && "h-auto",
    // Min width for TABLET text buttons
    !isIconType && size === "tablet" /* TABLET */ && "min-w-[104px]",
    // Padding
    getPaddingClasses(),
    // Icon button width
    getIconButtonWidth(),
    // Border radius
    isRounded ? "rounded-full [&_.button-bg]:rounded-full" : "rounded-[4px] [&_.button-bg]:rounded-[4px]",
    // Expanded
    isExpanded && "flex-1",
    // Shadow for primary
    type === "primary" /* PRIMARY */ && "shadow-[0_2px_4px_rgba(0,0,0,0.1)]",
    // Hover and active states
    getHoverClasses(),
    // Disabled
    isDisabled && "cursor-default opacity-50",
    // Icon positioning (not for expanded buttons - they use absolute positioning)
    hasIcon && !isIconType && !isExpanded && iconPosition === "right" /* RIGHT */ && "flex-row-reverse",
    // Top icon: flex-col is applied to content wrapper, not button
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
  const iconClasses = clsx13(
    "shrink-0 flex items-center justify-center",
    // Icon size
    isIconType ? size === "tablet" /* TABLET */ ? "w-6 h-6" : size === "large" /* LARGE */ ? "w-6 h-6" : "w-5 h-5" : size === "tablet" /* TABLET */ ? "w-8 h-8" : size === "large" /* LARGE */ ? "w-6 h-6" : "w-5 h-5",
    // Icon margin (not for expanded buttons)
    !isIconType && hasIcon && !isExpanded && iconPosition === "left" /* LEFT */ && "mr-2",
    !isIconType && hasIcon && !isExpanded && iconPosition === "right" /* RIGHT */ && "ml-2",
    // Top icon: no margin, gap is handled by flex container
    // Expanded positioning - icon pinned to edges inside button padding
    isExpanded && hasIcon && iconPosition === "left" /* LEFT */ && "absolute left-4",
    isExpanded && hasIcon && iconPosition === "right" /* RIGHT */ && "absolute right-4",
    isExpanded && hasIcon && iconPosition === "top" /* TOP */ && "absolute top-4"
  );
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx13(
          "button-bg absolute inset-0 transition-opacity duration-200",
          getBackgroundOpacity()
        ),
        style: backgroundStyle
      }
    ),
    isLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(CanaryLoading, { color: contentColor, size: 16 }) }),
    isExpanded && icon && /* @__PURE__ */ jsx("div", { className: iconClasses, style: contentStyle, children: icon }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: clsx13(
          "button-content relative flex items-center justify-center",
          "transition-opacity duration-200",
          iconPosition === "top" /* TOP */ && (size === "tablet" /* TABLET */ ? "flex-col gap-2" : "flex-col gap-1"),
          !isExpanded && iconPosition === "right" /* RIGHT */ && "flex-row-reverse",
          isLoading && "opacity-0"
        ),
        style: contentStyle,
        children: [
          !isExpanded && icon && /* @__PURE__ */ jsx("div", { className: iconClasses, children: icon }),
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
      ["tablet" /* TABLET */]: "h-[64px] text-[24px] leading-[1.5] px-4 py-3",
      ["large" /* LARGE */]: "h-[48px] text-[18px] leading-[1.5] px-2 py-3",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px] leading-[1.5] px-2",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px] leading-[1.5] px-2"
    };
    const inputClasses = clsx13(
      // Base styles
      "w-full rounded border font-['Roboto',sans-serif]",
      // Position and z-index to ensure placeholder is visible
      "relative z-10",
      // Transitions - matches original Canary (border-color 200ms, background-color 200ms)
      "transition-[border-color,background-color] duration-200",
      // Placeholder styling
      "placeholder:text-gray-500 placeholder:opacity-100",
      // Size
      sizeClasses[size],
      // Border and focus states
      "focus:outline focus:outline-2 focus:outline-offset-[-1px]",
      isDisabled && "cursor-not-allowed",
      isReadonly && "cursor-default",
      // Left addon padding
      leftAddon && "pl-10",
      // Right addon padding
      rightAddon && "pr-10",
      className
    );
    const inputStyles = __spreadValues(__spreadValues({
      borderColor: error ? colors.error : isDisabled ? colors.colorBlack1 : colors.colorBlack3,
      backgroundColor: isDisabled ? colors.colorBlack6 : isReadonly ? colors.colorBlack8 : "white",
      color: colors.colorBlack1
    }, !error && {
      "--tw-ring-color": colors.colorBlueDark1
    }), error && {
      "--tw-ring-color": colors.error
    });
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        leftAddon && /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-20", children: leftAddon }),
        /* @__PURE__ */ jsx(
          "input",
          __spreadValues({
            ref,
            type,
            disabled: isDisabled,
            readOnly: isReadonly,
            required: isRequired,
            className: inputClasses,
            style: inputStyles
          }, inputProps)
        ),
        error && /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-20", children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",
                fill: colors.error
              }
            )
          }
        ) }),
        rightAddon && !error && /* @__PURE__ */ jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-20", children: rightAddon })
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ jsx("p", { className: "text-[12px] leading-[1.5]", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1 leading-[1.5]", style: { color: colors.colorBlack3 }, children: helperText })
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
      size = "normal" /* NORMAL */,
      resize = "both",
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
      ["tablet" /* TABLET */]: "text-[24px] leading-[1.5] px-4 py-3",
      ["large" /* LARGE */]: "text-[18px] leading-[1.5] px-2 py-3",
      ["normal" /* NORMAL */]: "text-[14px] leading-[1.5] px-2 py-[9px]",
      ["compact" /* COMPACT */]: "text-[14px] leading-[1.5] px-2 py-[9px]"
    };
    const resizeClasses = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize"
    };
    const textareaClasses = clsx13(
      // Base styles
      "w-full rounded border font-['Roboto',sans-serif]",
      // Transitions - matches original Canary
      "transition-[border-color,background-color] duration-200",
      "outline-none min-h-[80px]",
      // Size
      sizeClasses[size],
      // Resize
      resizeClasses[resize],
      // Border and focus states
      error ? "border-[#E40046] focus:outline focus:outline-2 focus:outline-[#E40046] focus:outline-offset-[-1px]" : "border-[#666666] focus:outline focus:outline-2 focus:outline-[#2858c4] focus:outline-offset-[-1px]",
      isDisabled && "bg-[#E5E5E5] cursor-not-allowed",
      isReadonly && "bg-[#FAFAFA] cursor-default",
      className
    );
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#e40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "textarea",
        __spreadValues({
          ref,
          disabled: isDisabled,
          readOnly: isReadonly,
          required: isRequired,
          rows,
          className: textareaClasses
        }, textareaProps)
      ),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText })
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
      ["tablet" /* TABLET */]: "h-[64px] text-[24px] leading-[1.5] px-4 py-3",
      ["large" /* LARGE */]: "h-[48px] text-[18px] leading-[1.5] px-2 py-3",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px] leading-[1.5] px-2",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px] leading-[1.5] px-2"
    };
    const selectClasses = clsx13(
      // Base styles
      "w-full rounded border font-['Roboto',sans-serif]",
      // Transitions - matches original Canary (border-color 200ms, background-color 200ms)
      "transition-[border-color,background-color] duration-200",
      "outline-none appearance-none bg-white",
      "pr-10",
      // Space for dropdown arrow
      // Size
      sizeClasses[size],
      // Border and focus states
      error ? "border-[#E40046] focus:outline focus:outline-2 focus:outline-[#E40046] focus:outline-offset-[-1px]" : "border-[#666666] focus:outline focus:outline-2 focus:outline-[#2858c4] focus:outline-offset-[-1px]",
      isDisabled && "bg-[#E5E5E5] cursor-not-allowed",
      isReadonly && "bg-[#FAFAFA] cursor-default",
      className
    );
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#e40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs(
          "select",
          __spreadProps(__spreadValues({
            ref,
            disabled: isDisabled || isReadonly,
            required: isRequired,
            className: selectClasses
          }, selectProps), {
            children: [
              (placeholder || label) && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder || label }),
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
        /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M12 5.83L15.17 9L16.58 7.59L12 3L7.41 7.59L8.83 9L12 5.83ZM12 18.17L8.83 15L7.42 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z",
                fill: "#000000"
              }
            )
          }
        ) })
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText })
    ] });
  }
);
CanarySelect.displayName = "CanarySelect";
var CanarySelect_default = CanarySelect;
var CanaryCheckbox = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      size = "large",
      isDisabled = false,
      indeterminate = false,
      error,
      helperText,
      className = ""
    } = _b, inputProps = __objRest(_b, [
      "label",
      "size",
      "isDisabled",
      "indeterminate",
      "error",
      "helperText",
      "className"
    ]);
    const sizeConfig = {
      normal: { iconSize: 1, fontSize: "14px", gap: "8px" },
      // Desktop - 24px icon
      large: { iconSize: 1, fontSize: "18px", gap: "8px" },
      // Mobile - 24px icon
      xlarge: { iconSize: 1.33, fontSize: "28px", gap: "8px" }
      // Tablet - 32px icon
    };
    const config = sizeConfig[size];
    const getIcon = () => {
      if (indeterminate) {
        return mdiMinusBox;
      }
      if (inputProps.checked) {
        return mdiCheckboxMarked;
      }
      return mdiCheckboxBlankOutline;
    };
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "flex items-center pl-1 pr-2 py-2",
            isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
            className
          ),
          style: { gap: config.gap },
          children: [
            /* @__PURE__ */ jsx(
              "input",
              __spreadValues({
                ref,
                type: "checkbox",
                disabled: isDisabled,
                className: "sr-only"
              }, inputProps)
            ),
            /* @__PURE__ */ jsx(
              Icon,
              {
                path: getIcon(),
                size: config.iconSize,
                color: colors.colorBlueDark1,
                className: "shrink-0"
              }
            ),
            label && /* @__PURE__ */ jsx(
              "span",
              {
                className: "font-normal font-['Roboto',sans-serif] select-none flex-1",
                style: {
                  fontSize: config.fontSize,
                  lineHeight: "1.5",
                  color: colors.colorBlack1
                },
                children: label
              }
            )
          ]
        }
      ),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 ml-8 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ jsx("p", { className: "text-[12px] leading-[1.5]", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1 ml-8 leading-[1.5]", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
  }
);
CanaryCheckbox.displayName = "CanaryCheckbox";
var CanaryCheckbox_default = CanaryCheckbox;
var CanaryRadio = forwardRef(
  (_a, ref) => {
    var _b = _a, { label, size = "large", isDisabled = false, error, helperText, className = "" } = _b, inputProps = __objRest(_b, ["label", "size", "isDisabled", "error", "helperText", "className"]);
    const sizeConfig = {
      normal: { iconSize: 1, fontSize: "14px", gap: "8px" },
      // Desktop - 24px icon
      large: { iconSize: 1, fontSize: "18px", gap: "8px" },
      // Mobile - 24px icon
      xlarge: { iconSize: 1.33, fontSize: "28px", gap: "8px" }
      // Tablet - 32px icon
    };
    const config = sizeConfig[size];
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "flex items-center pl-1 pr-2 py-2",
            isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
            className
          ),
          style: { gap: config.gap },
          children: [
            /* @__PURE__ */ jsx(
              "input",
              __spreadValues({
                ref,
                type: "radio",
                disabled: isDisabled,
                className: "sr-only"
              }, inputProps)
            ),
            /* @__PURE__ */ jsx(
              Icon,
              {
                path: inputProps.checked ? mdiRadioboxMarked : mdiRadioboxBlank,
                size: config.iconSize,
                color: colors.colorBlueDark1,
                className: "shrink-0"
              }
            ),
            label && /* @__PURE__ */ jsx(
              "span",
              {
                className: "font-normal font-['Roboto',sans-serif] select-none flex-1",
                style: {
                  fontSize: config.fontSize,
                  lineHeight: "1.5",
                  color: colors.colorBlack1
                },
                children: label
              }
            )
          ]
        }
      ),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 ml-8 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ jsx("p", { className: "text-[12px] leading-[1.5]", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1 ml-8 leading-[1.5]", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
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
var CanarySwitch = forwardRef(
  (_a, ref) => {
    var _b = _a, { label, size = "normal", isDisabled = false, checked = false, onChange, className = "" } = _b, inputProps = __objRest(_b, ["label", "size", "isDisabled", "checked", "onChange", "className"]);
    const sizeConfig = {
      normal: {
        // Normal (Desktop) - 28px × 16px
        width: "28px",
        height: "16px",
        knobSize: "12px",
        knobOffsetLeft: "2px",
        knobOffsetRight: "14px",
        fontSize: "14px",
        gap: "8px"
      },
      large: {
        // Large (Mobile) - 44px × 24px
        width: "44px",
        height: "24px",
        knobSize: "20px",
        knobOffsetLeft: "2px",
        knobOffsetRight: "22px",
        fontSize: "18px",
        gap: "8px"
      },
      xlarge: {
        // XLarge (Tablet) - 56px × 30px
        width: "56px",
        height: "30px",
        knobSize: "26px",
        knobOffsetLeft: "2px",
        knobOffsetRight: "28px",
        fontSize: "28px",
        gap: "8px"
      }
    };
    const config = sizeConfig[size];
    const handleChange = () => {
      if (isDisabled) return;
      if (onChange) {
        onChange(!checked);
      }
    };
    return /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(
      "label",
      {
        className: clsx13(
          "flex items-center",
          isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
          className
        ),
        style: { gap: config.gap },
        children: [
          /* @__PURE__ */ jsx(
            "input",
            __spreadValues({
              ref,
              type: "checkbox",
              checked,
              disabled: isDisabled,
              onChange: handleChange,
              className: "sr-only"
            }, inputProps)
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "relative shrink-0 transition-colors duration-200",
              style: {
                width: config.width,
                height: config.height,
                borderRadius: config.height,
                backgroundColor: checked ? colors.colorBlueDark1 : "#666666"
              },
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute top-[2px] transition-all duration-200",
                  style: {
                    width: config.knobSize,
                    height: config.knobSize,
                    borderRadius: "50%",
                    backgroundColor: colors.colorWhite,
                    left: checked ? config.knobOffsetRight : config.knobOffsetLeft
                  }
                }
              )
            }
          ),
          label && /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-normal font-['Roboto',sans-serif] select-none flex-1",
              style: {
                fontSize: config.fontSize,
                lineHeight: "1.5",
                color: colors.colorBlack1
              },
              children: label
            }
          )
        ]
      }
    ) });
  }
);
CanarySwitch.displayName = "CanarySwitch";
var CanarySwitch_default = CanarySwitch;
var CanaryInputPassword = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = "normal" /* NORMAL */,
      className = ""
    } = _b, inputProps = __objRest(_b, [
      "label",
      "isDisabled",
      "isReadonly",
      "isRequired",
      "error",
      "helperText",
      "size",
      "className"
    ]);
    const [showPassword, setShowPassword] = useState(false);
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px] leading-[1.5] px-4 py-3",
      ["large" /* LARGE */]: "h-[48px] text-[18px] leading-[1.5] px-2 py-3",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px] leading-[1.5] px-2",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px] leading-[1.5] px-2"
    };
    const inputClasses = clsx13(
      // Base styles
      "w-full rounded border font-['Roboto',sans-serif] pr-10",
      // Transitions - matches original Canary
      "transition-[border-color,background-color] duration-200",
      // Size
      sizeClasses[size],
      // Border and focus states
      error ? "border-[#E40046] focus:outline focus:outline-2 focus:outline-[#E40046] focus:outline-offset-[-1px]" : "border-[#666666] focus:outline focus:outline-2 focus:outline-[#2858c4] focus:outline-offset-[-1px]",
      isDisabled && "bg-[#E5E5E5] cursor-not-allowed",
      isReadonly && "bg-[#FAFAFA] cursor-default",
      className
    );
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#e40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "input",
          __spreadValues({
            ref,
            type: showPassword ? "text" : "password",
            disabled: isDisabled,
            readOnly: isReadonly,
            required: isRequired,
            className: inputClasses
          }, inputProps)
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowPassword(!showPassword),
            className: "absolute right-2 top-1/2 -translate-y-1/2 flex items-center cursor-pointer",
            disabled: isDisabled || isReadonly,
            tabIndex: -1,
            children: showPassword ? (
              // Password is visible, show eye-off outline icon (visibility_off)
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M2 5.27 3.28 4 20 20.72 18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58-5 0-9.27-3.11-11-7.5.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3 3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12 9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                }
              ) })
            ) : (
              // Password is hidden, show eye outline icon (visibility)
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M12 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.82 9.82 0 0 0 17.64 0 9.82 9.82 0 0 0-17.64 0"
                }
              ) })
            )
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText })
    ] });
  }
);
CanaryInputPassword.displayName = "CanaryInputPassword";
var CanaryInputPassword_default = CanaryInputPassword;
var CanaryInputSearch = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = "normal" /* NORMAL */,
      className = ""
    } = _b, inputProps = __objRest(_b, [
      "label",
      "isDisabled",
      "isReadonly",
      "isRequired",
      "error",
      "helperText",
      "size",
      "className"
    ]);
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px] leading-[1.5] pl-[48px] pr-4 py-3",
      ["large" /* LARGE */]: "h-[48px] text-[18px] leading-[1.5] pl-[40px] pr-2 py-3",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px] leading-[1.5] pl-[40px] pr-2",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px] leading-[1.5] pl-[36px] pr-2"
    };
    const inputClasses = clsx13(
      // Base styles
      "w-full rounded border font-['Roboto',sans-serif]",
      // Transitions - matches original Canary
      "transition-[border-color,background-color] duration-200",
      // Size
      sizeClasses[size],
      // Border and focus states
      error ? "border-[#E40046] canary-focus-outline-error" : "border-[#666666] canary-focus-outline-blue",
      isDisabled && "bg-[#E5E5E5] cursor-not-allowed",
      isReadonly && "bg-[#FAFAFA] cursor-default",
      className
    );
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#e40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z",
            fill: "#000000"
          }
        ) }) }),
        /* @__PURE__ */ jsx(
          "input",
          __spreadValues({
            ref,
            type: "search",
            disabled: isDisabled,
            readOnly: isReadonly,
            required: isRequired,
            className: inputClasses
          }, inputProps)
        )
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText })
    ] });
  }
);
CanaryInputSearch.displayName = "CanaryInputSearch";
var CanaryInputSearch_default = CanaryInputSearch;
var CanaryInputCreditCard = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = "normal" /* NORMAL */,
      className = "",
      onCardChange
    } = _b, inputProps = __objRest(_b, [
      "label",
      "isDisabled",
      "isReadonly",
      "isRequired",
      "error",
      "helperText",
      "size",
      "className",
      "onCardChange"
    ]);
    const [cardNumber, setCardNumber] = useState("");
    const { meta, getCardNumberProps } = usePaymentInputs();
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px] leading-[1.5] pl-[56px] pr-4 py-3",
      ["large" /* LARGE */]: "h-[48px] text-[18px] leading-[1.5] pl-[48px] pr-2 py-3",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px] leading-[1.5] pl-[40px] pr-2",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px] leading-[1.5] pl-[36px] pr-2"
    };
    const inputClasses = clsx13(
      // Base styles
      "w-full rounded border font-['Roboto',sans-serif]",
      // Transitions - matches original Canary
      "transition-[border-color,background-color] duration-200",
      // Size
      sizeClasses[size],
      // Border and focus states
      error ? "border-[#E40046] canary-focus-outline-error" : "border-[#666666] canary-focus-outline-blue",
      isDisabled && "bg-[#E5E5E5] cursor-not-allowed",
      isReadonly && "bg-[#FAFAFA] cursor-default",
      className
    );
    const handleCardNumberChange = useCallback((e) => {
      var _a2;
      const value = e.target.value;
      setCardNumber(value);
      if (onCardChange) {
        onCardChange(value, ((_a2 = meta.cardType) == null ? void 0 : _a2.displayName) || "unknown");
      }
    }, [meta.cardType, onCardChange]);
    const getCardIcon = () => {
      var _a2;
      (_a2 = meta.cardType) == null ? void 0 : _a2.type;
      return /* @__PURE__ */ jsx(
        Icon,
        {
          path: cardNumber ? mdiCreditCard : mdiCreditCardOutline,
          size: 1,
          color: "#000000"
        }
      );
    };
    const cardNumberProps = getCardNumberProps({
      onChange: handleCardNumberChange
    });
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#e40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none", children: getCardIcon() }),
        /* @__PURE__ */ jsx(
          "input",
          __spreadValues(__spreadProps(__spreadValues({
            ref
          }, cardNumberProps), {
            disabled: isDisabled,
            readOnly: isReadonly,
            required: isRequired,
            className: inputClasses
          }), inputProps)
        )
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText }),
      meta.cardType && /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-[#999999] mt-1", children: [
        "Detected: ",
        meta.cardType.displayName
      ] })
    ] });
  }
);
CanaryInputCreditCard.displayName = "CanaryInputCreditCard";
var CanaryInputCreditCard_default = CanaryInputCreditCard;
var CanaryInputPhone = forwardRef(
  ({
    label,
    isDisabled = false,
    isRequired = false,
    error,
    helperText,
    size = "normal" /* NORMAL */,
    value,
    onChange,
    defaultCountry = "us",
    placeholder = "",
    className = ""
  }, ref) => {
    const inputRef = useRef(null);
    const itiRef = useRef(null);
    useImperativeHandle(ref, () => inputRef.current);
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    useEffect(() => {
      if (!inputRef.current || itiRef.current) return;
      itiRef.current = intlTelInput(inputRef.current, {
        initialCountry: defaultCountry,
        separateDialCode: false,
        autoPlaceholder: "polite",
        formatOnDisplay: true,
        nationalMode: false,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@25.12.5/build/js/utils.js"
      });
      const handleChange = () => {
        if (onChange && inputRef.current) {
          onChange(inputRef.current.value);
        }
      };
      inputRef.current.addEventListener("blur", handleChange);
      inputRef.current.addEventListener("change", handleChange);
      inputRef.current.addEventListener("keyup", handleChange);
      return () => {
        if (inputRef.current) {
          inputRef.current.removeEventListener("blur", handleChange);
          inputRef.current.removeEventListener("change", handleChange);
          inputRef.current.removeEventListener("keyup", handleChange);
        }
        if (itiRef.current) {
          itiRef.current.destroy();
          itiRef.current = null;
        }
      };
    }, [defaultCountry, onChange]);
    useEffect(() => {
      if (inputRef.current && value !== void 0 && inputRef.current.value !== value) {
        inputRef.current.value = value;
      }
    }, [value]);
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: clsx13("canary-phone-input-wrapper", className), children: /* @__PURE__ */ jsx(
        "input",
        {
          ref: inputRef,
          type: "tel",
          disabled: isDisabled,
          required: isRequired,
          placeholder,
          className: clsx13(
            "w-full rounded border font-['Roboto',sans-serif]",
            "transition-[border-color,background-color] duration-200",
            sizeClasses[size],
            error ? "border-[#E40046] focus:outline focus:outline-2 focus:outline-[#E40046] focus:outline-offset-[-1px]" : "border-[#666666] focus:outline focus:outline-2 focus:outline-[#2858c4] focus:outline-offset-[-1px]",
            isDisabled && "bg-[#E5E5E5] cursor-not-allowed"
          )
        }
      ) }),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
          .canary-phone-input-wrapper .iti {
            width: 100%;
          }

          .canary-phone-input-wrapper .iti__tel-input {
            width: 100%;
          }

          .canary-phone-input-wrapper .iti__selected-country {
            padding: 0;
          }

          .canary-phone-input-wrapper .iti__country-container {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            padding-left: 8px;
            padding-right: 8px;
          }

          .canary-phone-input-wrapper .iti__tel-input {
            padding-left: 52px !important;
          }

          .canary-phone-input-wrapper .iti__selected-country-primary {
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .canary-phone-input-wrapper .iti__flag {
            margin: 0;
          }

          .canary-phone-input-wrapper .iti__arrow {
            margin-left: 4px;
          }
        ` } })
    ] });
  }
);
CanaryInputPhone.displayName = "CanaryInputPhone";
var CanaryInputPhone_default = CanaryInputPhone;
var CanaryInputDate = forwardRef(
  ({
    label,
    isDisabled = false,
    isRequired = false,
    error,
    helperText,
    size = "normal" /* NORMAL */,
    className = "",
    value,
    onChange
  }, ref) => {
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const monthRef = useRef(null);
    const dayRef = useRef(null);
    const yearRef = useRef(null);
    useEffect(() => {
      if (value) {
        const parts = value.split("/");
        if (parts.length === 3) {
          setMonth(parts[0]);
          setDay(parts[1]);
          setYear(parts[2]);
        }
      }
    }, [value]);
    const notifyChange = (m, d, y) => {
      if (m && d && y) {
        onChange == null ? void 0 : onChange(`${m}/${d}/${y}`);
      }
    };
    const handleMonthChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 1) {
        setMonth("0" + val);
        notifyChange("0" + val, day, year);
        (_a = dayRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 12) {
        return;
      }
      setMonth(val);
      notifyChange(val, day, year);
      if (val.length === 2) {
        (_b = dayRef.current) == null ? void 0 : _b.focus();
      }
    };
    const handleDayChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 3) {
        setDay("0" + val);
        notifyChange(month, "0" + val, year);
        (_a = yearRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 31) {
        return;
      }
      setDay(val);
      notifyChange(month, val, year);
      if (val.length === 2) {
        (_b = yearRef.current) == null ? void 0 : _b.focus();
      }
    };
    const handleYearChange = (e) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 4);
      setYear(val);
      notifyChange(month, day, val);
    };
    const handleKeyDown = (e, field) => {
      var _a, _b;
      if (e.key === "Backspace") {
        const target = e.target;
        if (target.value === "") {
          if (field === "day") {
            (_a = monthRef.current) == null ? void 0 : _a.focus();
          } else if (field === "year") {
            (_b = dayRef.current) == null ? void 0 : _b.focus();
          }
        }
      }
    };
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    const iconSizes = {
      ["tablet" /* TABLET */]: "w-8 h-8",
      ["large" /* LARGE */]: "w-6 h-6",
      ["normal" /* NORMAL */]: "w-6 h-6",
      ["compact" /* COMPACT */]: "w-5 h-5"
    };
    return /* @__PURE__ */ jsxs("div", { className: clsx13("w-full", className), children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black font-['Roboto',sans-serif] font-normal",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref,
          className: clsx13(
            "relative flex items-center gap-0.5 rounded border font-['Roboto',sans-serif] font-normal leading-[1.5]",
            "transition-[border-color,background-color] duration-200",
            sizeClasses[size],
            size === "tablet" /* TABLET */ && "px-4 py-3",
            size === "large" /* LARGE */ && "px-2 py-3",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "px-2",
            error ? "border-[#E40046] focus-within:outline focus-within:outline-2 focus-within:outline-[#E40046] focus-within:outline-offset-[-1px]" : "border-[#666666] focus-within:outline focus-within:outline-2 focus-within:outline-[#2858c4] focus-within:outline-offset-[-1px]",
            isDisabled && "bg-[#E5E5E5] cursor-not-allowed",
            !isDisabled && "bg-white"
          ),
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: monthRef,
                type: "text",
                inputMode: "numeric",
                value: month,
                onChange: handleMonthChange,
                onKeyDown: (e) => handleKeyDown(e, "month"),
                placeholder: "MM",
                disabled: isDisabled,
                className: clsx13(
                  "w-8 bg-transparent outline-none border-none text-center",
                  "placeholder:text-gray-400",
                  isDisabled && "cursor-not-allowed"
                ),
                "aria-label": "Month"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 select-none", children: "/" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: dayRef,
                type: "text",
                inputMode: "numeric",
                value: day,
                onChange: handleDayChange,
                onKeyDown: (e) => handleKeyDown(e, "day"),
                placeholder: "DD",
                disabled: isDisabled,
                className: clsx13(
                  "w-8 bg-transparent outline-none border-none text-center",
                  "placeholder:text-gray-400",
                  isDisabled && "cursor-not-allowed"
                ),
                "aria-label": "Day"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 select-none", children: "/" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: yearRef,
                type: "text",
                inputMode: "numeric",
                value: year,
                onChange: handleYearChange,
                onKeyDown: (e) => handleKeyDown(e, "year"),
                placeholder: "YYYY",
                disabled: isDisabled,
                className: clsx13(
                  "w-12 bg-transparent outline-none border-none text-center",
                  "placeholder:text-gray-400",
                  isDisabled && "cursor-not-allowed"
                ),
                "aria-label": "Year"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "ml-auto flex items-center", children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                className: iconSizes[size],
                fill: isDisabled ? colors.colorBlack3 : colors.colorBlack1,
                children: /* @__PURE__ */ jsx("path", { d: "M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" })
              }
            ) }),
            error && /* @__PURE__ */ jsx("div", { className: "flex items-center ml-2", children: /* @__PURE__ */ jsx(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",
                    fill: colors.error
                  }
                )
              }
            ) })
          ]
        }
      ),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ jsx("p", { className: "text-[12px] leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
  }
);
CanaryInputDate.displayName = "CanaryInputDate";
var CanaryInputDate_default = CanaryInputDate;
var CanaryInputDateRange = forwardRef(
  ({
    label,
    isDisabled = false,
    isRequired = false,
    error,
    helperText,
    size = "normal" /* NORMAL */,
    className = "",
    startDate: initialStartDate,
    endDate: initialEndDate,
    onChange
  }, ref) => {
    const [startMonth, setStartMonth] = useState("");
    const [startDay, setStartDay] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const [endDay, setEndDay] = useState("");
    const [endYear, setEndYear] = useState("");
    const startMonthRef = useRef(null);
    const startDayRef = useRef(null);
    const startYearRef = useRef(null);
    const endMonthRef = useRef(null);
    const endDayRef = useRef(null);
    const endYearRef = useRef(null);
    useEffect(() => {
      if (initialStartDate) {
        const parts = initialStartDate.split("/");
        if (parts.length === 3) {
          setStartMonth(parts[0]);
          setStartDay(parts[1]);
          setStartYear(parts[2]);
        }
      }
      if (initialEndDate) {
        const parts = initialEndDate.split("/");
        if (parts.length === 3) {
          setEndMonth(parts[0]);
          setEndDay(parts[1]);
          setEndYear(parts[2]);
        }
      }
    }, [initialStartDate, initialEndDate]);
    const notifyChange = (sm, sd, sy, em, ed, ey) => {
      const start = sm && sd && sy ? `${sm}/${sd}/${sy}` : "";
      const end = em && ed && ey ? `${em}/${ed}/${ey}` : "";
      onChange == null ? void 0 : onChange(start, end);
    };
    const handleStartMonthChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 1) {
        setStartMonth("0" + val);
        notifyChange("0" + val, startDay, startYear, endMonth, endDay, endYear);
        (_a = startDayRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 12) return;
      setStartMonth(val);
      notifyChange(val, startDay, startYear, endMonth, endDay, endYear);
      if (val.length === 2) (_b = startDayRef.current) == null ? void 0 : _b.focus();
    };
    const handleStartDayChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 3) {
        setStartDay("0" + val);
        notifyChange(startMonth, "0" + val, startYear, endMonth, endDay, endYear);
        (_a = startYearRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 31) return;
      setStartDay(val);
      notifyChange(startMonth, val, startYear, endMonth, endDay, endYear);
      if (val.length === 2) (_b = startYearRef.current) == null ? void 0 : _b.focus();
    };
    const handleStartYearChange = (e) => {
      var _a;
      const val = e.target.value.replace(/\D/g, "").slice(0, 4);
      setStartYear(val);
      notifyChange(startMonth, startDay, val, endMonth, endDay, endYear);
      if (val.length === 4) (_a = endMonthRef.current) == null ? void 0 : _a.focus();
    };
    const handleEndMonthChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 1) {
        setEndMonth("0" + val);
        notifyChange(startMonth, startDay, startYear, "0" + val, endDay, endYear);
        (_a = endDayRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 12) return;
      setEndMonth(val);
      notifyChange(startMonth, startDay, startYear, val, endDay, endYear);
      if (val.length === 2) (_b = endDayRef.current) == null ? void 0 : _b.focus();
    };
    const handleEndDayChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 3) {
        setEndDay("0" + val);
        notifyChange(startMonth, startDay, startYear, endMonth, "0" + val, endYear);
        (_a = endYearRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 31) return;
      setEndDay(val);
      notifyChange(startMonth, startDay, startYear, endMonth, val, endYear);
      if (val.length === 2) (_b = endYearRef.current) == null ? void 0 : _b.focus();
    };
    const handleEndYearChange = (e) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 4);
      setEndYear(val);
      notifyChange(startMonth, startDay, startYear, endMonth, endDay, val);
    };
    const handleKeyDown = (e, field) => {
      var _a, _b, _c, _d, _e;
      if (e.key === "Backspace") {
        const target = e.target;
        if (target.value === "") {
          if (field === "startDay") (_a = startMonthRef.current) == null ? void 0 : _a.focus();
          else if (field === "startYear") (_b = startDayRef.current) == null ? void 0 : _b.focus();
          else if (field === "endMonth") (_c = startYearRef.current) == null ? void 0 : _c.focus();
          else if (field === "endDay") (_d = endMonthRef.current) == null ? void 0 : _d.focus();
          else if (field === "endYear") (_e = endDayRef.current) == null ? void 0 : _e.focus();
        }
      }
    };
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    const iconSizes = {
      ["tablet" /* TABLET */]: "w-8 h-8",
      ["large" /* LARGE */]: "w-6 h-6",
      ["normal" /* NORMAL */]: "w-6 h-6",
      ["compact" /* COMPACT */]: "w-5 h-5"
    };
    return /* @__PURE__ */ jsxs("div", { className: clsx13("w-full", className), children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black font-['Roboto',sans-serif] font-normal",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref,
          className: clsx13(
            "relative flex items-center gap-2 rounded border font-['Roboto',sans-serif] font-normal leading-[1.5]",
            "transition-[border-color,background-color] duration-200",
            sizeClasses[size],
            size === "tablet" /* TABLET */ && "px-4 py-3",
            size === "large" /* LARGE */ && "px-2 py-3",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "px-2",
            error ? "border-[#E40046] focus-within:outline focus-within:outline-2 focus-within:outline-[#E40046] focus-within:outline-offset-[-1px]" : "border-[#666666] focus-within:outline focus-within:outline-2 focus-within:outline-[#2858c4] focus-within:outline-offset-[-1px]",
            isDisabled && "bg-[#E5E5E5] cursor-not-allowed",
            !isDisabled && "bg-white"
          ),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: startMonthRef,
                  type: "text",
                  inputMode: "numeric",
                  value: startMonth,
                  onChange: handleStartMonthChange,
                  onKeyDown: (e) => handleKeyDown(e, "startMonth"),
                  placeholder: "MM",
                  disabled: isDisabled,
                  className: clsx13(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Start Month"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500 select-none", children: "/" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: startDayRef,
                  type: "text",
                  inputMode: "numeric",
                  value: startDay,
                  onChange: handleStartDayChange,
                  onKeyDown: (e) => handleKeyDown(e, "startDay"),
                  placeholder: "DD",
                  disabled: isDisabled,
                  className: clsx13(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Start Day"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500 select-none", children: "/" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: startYearRef,
                  type: "text",
                  inputMode: "numeric",
                  value: startYear,
                  onChange: handleStartYearChange,
                  onKeyDown: (e) => handleKeyDown(e, "startYear"),
                  placeholder: "YYYY",
                  disabled: isDisabled,
                  className: clsx13(
                    "w-12 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Start Year"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 select-none shrink-0 mx-1", children: "\u2014" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: endMonthRef,
                  type: "text",
                  inputMode: "numeric",
                  value: endMonth,
                  onChange: handleEndMonthChange,
                  onKeyDown: (e) => handleKeyDown(e, "endMonth"),
                  placeholder: "MM",
                  disabled: isDisabled,
                  className: clsx13(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "End Month"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500 select-none", children: "/" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: endDayRef,
                  type: "text",
                  inputMode: "numeric",
                  value: endDay,
                  onChange: handleEndDayChange,
                  onKeyDown: (e) => handleKeyDown(e, "endDay"),
                  placeholder: "DD",
                  disabled: isDisabled,
                  className: clsx13(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "End Day"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500 select-none", children: "/" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: endYearRef,
                  type: "text",
                  inputMode: "numeric",
                  value: endYear,
                  onChange: handleEndYearChange,
                  onKeyDown: (e) => handleKeyDown(e, "endYear"),
                  placeholder: "YYYY",
                  disabled: isDisabled,
                  className: clsx13(
                    "w-12 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "End Year"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-auto flex items-center shrink-0", children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                className: iconSizes[size],
                fill: isDisabled ? colors.colorBlack3 : colors.colorBlack1,
                children: /* @__PURE__ */ jsx("path", { d: "M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" })
              }
            ) }),
            error && /* @__PURE__ */ jsx("div", { className: "flex items-center ml-2 shrink-0", children: /* @__PURE__ */ jsx(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",
                    fill: colors.error
                  }
                )
              }
            ) })
          ]
        }
      ),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ jsx("p", { className: "text-[12px] leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
  }
);
CanaryInputDateRange.displayName = "CanaryInputDateRange";
var CanaryInputDateRange_default = CanaryInputDateRange;
var CanaryInputUnderline = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      isDisabled = false,
      isRequired = false,
      error,
      helperText,
      size = "normal" /* NORMAL */,
      className = "",
      value,
      defaultValue,
      onFocus,
      onBlur
    } = _b, inputProps = __objRest(_b, [
      "label",
      "isDisabled",
      "isRequired",
      "error",
      "helperText",
      "size",
      "className",
      "value",
      "defaultValue",
      "onFocus",
      "onBlur"
    ]);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(
      !!(value || defaultValue)
    );
    const handleFocus = (e) => {
      setIsFocused(true);
      onFocus == null ? void 0 : onFocus(e);
    };
    const handleBlur = (e) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur == null ? void 0 : onBlur(e);
    };
    const handleChange = (e) => {
      var _a2;
      setHasValue(!!e.target.value);
      (_a2 = inputProps.onChange) == null ? void 0 : _a2.call(inputProps, e);
    };
    const showLabelAbove = isFocused || hasValue;
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    return /* @__PURE__ */ jsxs("div", { className: clsx13("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx(
          "input",
          __spreadProps(__spreadValues({
            ref,
            disabled: isDisabled,
            required: isRequired,
            value,
            defaultValue,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange
          }, inputProps), {
            placeholder: !showLabelAbove ? label : "",
            className: clsx13(
              "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
              "border-0 border-b border-solid",
              "transition-[border-color,background-color,padding] duration-200",
              "outline-none",
              sizeClasses[size],
              // Padding - 8px horizontal when focused
              isFocused ? "px-2 py-2" : "px-0 py-0",
              // Border styles
              isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)] px-2" : "border-b border-black bg-white",
              isDisabled && "opacity-50",
              // Add padding-right for error icon
              error && "pr-10"
            )
          })
        ),
        error && /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { path: mdiAlertCircleOutline, size: "24px", color: "#E40046" }) })
      ] }) }),
      error && /* @__PURE__ */ jsx("div", { className: "bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanaryInputUnderline.displayName = "CanaryInputUnderline";
var CanaryInputUnderline_default = CanaryInputUnderline;
var CanaryTextAreaUnderline = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      isDisabled = false,
      isRequired = false,
      error,
      helperText,
      size = "normal" /* NORMAL */,
      rows = 4,
      className = "",
      value,
      defaultValue,
      onFocus,
      onBlur
    } = _b, textareaProps = __objRest(_b, [
      "label",
      "isDisabled",
      "isRequired",
      "error",
      "helperText",
      "size",
      "rows",
      "className",
      "value",
      "defaultValue",
      "onFocus",
      "onBlur"
    ]);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!(value || defaultValue));
    const handleFocus = (e) => {
      setIsFocused(true);
      onFocus == null ? void 0 : onFocus(e);
    };
    const handleBlur = (e) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur == null ? void 0 : onBlur(e);
    };
    const handleChange = (e) => {
      var _a2;
      setHasValue(!!e.target.value);
      (_a2 = textareaProps.onChange) == null ? void 0 : _a2.call(textareaProps, e);
    };
    const showLabelAbove = isFocused || hasValue;
    const sizeClasses = {
      ["tablet" /* TABLET */]: "text-[24px]",
      ["large" /* LARGE */]: "text-[18px]",
      ["normal" /* NORMAL */]: "text-[14px]",
      ["compact" /* COMPACT */]: "text-[14px]"
    };
    return /* @__PURE__ */ jsxs("div", { className: clsx13("w-full flex flex-col gap-1", className), children: [
      label && showLabelAbove && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black font-['Roboto',sans-serif] font-normal",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-start", children: [
        /* @__PURE__ */ jsx(
          "textarea",
          __spreadProps(__spreadValues({
            ref,
            disabled: isDisabled,
            required: isRequired,
            value,
            defaultValue,
            rows,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange
          }, textareaProps), {
            placeholder: showLabelAbove ? textareaProps.placeholder : label || textareaProps.placeholder,
            className: clsx13(
              "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
              "border-0 border-b border-solid",
              "transition-[border-color,background-color,padding] duration-200",
              "outline-none resize-vertical",
              sizeClasses[size],
              // Padding - 8px horizontal when focused or error
              isFocused || error ? "px-2 py-2" : "px-0 py-2",
              // Border and background styles
              isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)] px-2" : "border-b border-black bg-white",
              // Text opacity
              !showLabelAbove && "opacity-50",
              isDisabled && "opacity-50",
              // Add padding-right for error icon
              error && "pr-10"
            )
          })
        ),
        error && /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-2 w-6 h-6 flex items-center justify-center", children: /* @__PURE__ */ jsx(
          Icon,
          {
            path: mdiAlertCircleOutline,
            size: "24px",
            color: "#E40046"
          }
        ) })
      ] }) }),
      error && /* @__PURE__ */ jsx("div", { className: "bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanaryTextAreaUnderline.displayName = "CanaryTextAreaUnderline";
var CanaryTextAreaUnderline_default = CanaryTextAreaUnderline;
var CanarySelectUnderline = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      options,
      placeholder,
      isDisabled = false,
      isRequired = false,
      error,
      helperText,
      size = "normal" /* NORMAL */,
      className = "",
      value,
      defaultValue,
      onFocus,
      onBlur
    } = _b, selectProps = __objRest(_b, [
      "label",
      "options",
      "placeholder",
      "isDisabled",
      "isRequired",
      "error",
      "helperText",
      "size",
      "className",
      "value",
      "defaultValue",
      "onFocus",
      "onBlur"
    ]);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!(value || defaultValue));
    const handleFocus = (e) => {
      setIsFocused(true);
      onFocus == null ? void 0 : onFocus(e);
    };
    const handleBlur = (e) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur == null ? void 0 : onBlur(e);
    };
    const handleChange = (e) => {
      var _a2;
      setHasValue(!!e.target.value);
      (_a2 = selectProps.onChange) == null ? void 0 : _a2.call(selectProps, e);
    };
    const showLabelAbove = isFocused || hasValue;
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    return /* @__PURE__ */ jsxs("div", { className: clsx13("w-full flex flex-col gap-1", className), children: [
      label && showLabelAbove && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black font-['Roboto',sans-serif] font-normal",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsxs(
          "select",
          __spreadProps(__spreadValues({
            ref,
            disabled: isDisabled,
            required: isRequired,
            value,
            defaultValue,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange
          }, selectProps), {
            className: clsx13(
              "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
              "border-0 border-b border-solid",
              "transition-[border-color,background-color,padding] duration-200",
              "outline-none appearance-none",
              "pr-10",
              // Space for dropdown arrow (and error icon if error)
              sizeClasses[size],
              // Padding - 8px horizontal when focused or error
              isFocused || error ? "px-2 py-2" : "px-0 py-0",
              // Border and background styles
              isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)] px-2" : "border-b border-black bg-white",
              // Text opacity
              !showLabelAbove && "opacity-50",
              isDisabled && "opacity-50",
              // Add extra padding-right for error icon
              error && "pr-16"
            ),
            children: [
              (placeholder || label) && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder || label }),
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
        /* @__PURE__ */ jsx("div", { className: clsx13(
          "absolute top-1/2 -translate-y-1/2 pointer-events-none",
          error ? "right-8" : "right-2"
        ), children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M12 5.83L15.17 9L16.58 7.59L12 3L7.41 7.59L8.83 9L12 5.83ZM12 18.17L8.83 15L7.42 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z",
                fill: "#000000"
              }
            )
          }
        ) }),
        error && /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center", children: /* @__PURE__ */ jsx(
          Icon,
          {
            path: mdiAlertCircleOutline,
            size: "24px",
            color: "#E40046"
          }
        ) })
      ] }) }),
      error && /* @__PURE__ */ jsx("div", { className: "bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanarySelectUnderline.displayName = "CanarySelectUnderline";
var CanarySelectUnderline_default = CanarySelectUnderline;
var CanaryInputPhoneUnderline = forwardRef(
  ({
    label,
    isDisabled = false,
    isRequired = false,
    error,
    helperText,
    size = "normal" /* NORMAL */,
    value,
    onChange,
    defaultCountry = "us",
    placeholder = "",
    className = ""
  }, ref) => {
    const inputRef = useRef(null);
    const itiRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!value);
    useImperativeHandle(ref, () => inputRef.current);
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    const showLabelAbove = isFocused || hasValue;
    useEffect(() => {
      if (!inputRef.current || itiRef.current) return;
      itiRef.current = intlTelInput(inputRef.current, {
        initialCountry: defaultCountry,
        separateDialCode: false,
        autoPlaceholder: "polite",
        formatOnDisplay: true,
        nationalMode: false,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@25.12.5/build/js/utils.js"
      });
      const handleChange = () => {
        if (onChange && inputRef.current) {
          const val = inputRef.current.value;
          setHasValue(!!val);
          onChange(val);
        }
      };
      const handleFocus = () => {
        setIsFocused(true);
      };
      const handleBlur = () => {
        setIsFocused(false);
        if (inputRef.current) {
          setHasValue(!!inputRef.current.value);
        }
      };
      inputRef.current.addEventListener("focus", handleFocus);
      inputRef.current.addEventListener("blur", handleBlur);
      inputRef.current.addEventListener("change", handleChange);
      inputRef.current.addEventListener("keyup", handleChange);
      return () => {
        if (inputRef.current) {
          inputRef.current.removeEventListener("focus", handleFocus);
          inputRef.current.removeEventListener("blur", handleBlur);
          inputRef.current.removeEventListener("change", handleChange);
          inputRef.current.removeEventListener("keyup", handleChange);
        }
        if (itiRef.current) {
          itiRef.current.destroy();
          itiRef.current = null;
        }
      };
    }, [defaultCountry, onChange]);
    useEffect(() => {
      if (inputRef.current && value !== void 0 && inputRef.current.value !== value) {
        inputRef.current.value = value;
        setHasValue(!!value);
      }
    }, [value]);
    return /* @__PURE__ */ jsxs("div", { className: clsx13("w-full flex flex-col gap-1", className), children: [
      label && showLabelAbove && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black font-['Roboto',sans-serif] font-normal",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: clsx13("canary-phone-input-underline-wrapper relative"), children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: inputRef,
            type: "tel",
            disabled: isDisabled,
            required: isRequired,
            placeholder: showLabelAbove ? placeholder : label || placeholder,
            className: clsx13(
              "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
              "border-0 border-b border-solid",
              "transition-[border-color,background-color,padding] duration-200",
              "outline-none",
              sizeClasses[size],
              // Border and background styles
              isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)]" : "border-b border-black bg-white",
              // Text opacity
              !showLabelAbove && "opacity-50",
              isDisabled && "opacity-50",
              // Padding for error icon
              error && "pr-10"
            )
          }
        ),
        error && /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center z-10", children: /* @__PURE__ */ jsx(Icon, { path: mdiAlertCircleOutline, size: "24px", color: "#E40046" }) })
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
          .canary-phone-input-underline-wrapper .iti {
            width: 100%;
          }

          .canary-phone-input-underline-wrapper .iti__tel-input {
            width: 100%;
          }

          .canary-phone-input-underline-wrapper .iti__selected-country {
            padding: 0;
          }

          .canary-phone-input-underline-wrapper .iti__country-container {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            padding-left: 0;
            padding-right: 8px;
          }

          .canary-phone-input-underline-wrapper .iti__tel-input {
            padding-left: 52px !important;
          }

          .canary-phone-input-underline-wrapper .iti__selected-country-primary {
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .canary-phone-input-underline-wrapper .iti__flag {
            margin: 0;
          }

          .canary-phone-input-underline-wrapper .iti__arrow {
            margin-left: 4px;
          }
        ` } })
    ] });
  }
);
CanaryInputPhoneUnderline.displayName = "CanaryInputPhoneUnderline";
var CanaryInputPhoneUnderline_default = CanaryInputPhoneUnderline;
var CanaryInputPasswordUnderline = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      isDisabled = false,
      isRequired = false,
      error,
      helperText,
      size = "normal" /* NORMAL */,
      className = "",
      value,
      defaultValue,
      onFocus,
      onBlur
    } = _b, inputProps = __objRest(_b, [
      "label",
      "isDisabled",
      "isRequired",
      "error",
      "helperText",
      "size",
      "className",
      "value",
      "defaultValue",
      "onFocus",
      "onBlur"
    ]);
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!(value || defaultValue));
    const handleFocus = (e) => {
      setIsFocused(true);
      onFocus == null ? void 0 : onFocus(e);
    };
    const handleBlur = (e) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur == null ? void 0 : onBlur(e);
    };
    const handleChange = (e) => {
      var _a2;
      setHasValue(!!e.target.value);
      (_a2 = inputProps.onChange) == null ? void 0 : _a2.call(inputProps, e);
    };
    const showLabelAbove = isFocused || hasValue;
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    return /* @__PURE__ */ jsxs("div", { className: clsx13("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx(
          "input",
          __spreadProps(__spreadValues({
            ref,
            type: showPassword ? "text" : "password",
            disabled: isDisabled,
            required: isRequired,
            value,
            defaultValue,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange
          }, inputProps), {
            placeholder: !showLabelAbove ? label : "",
            className: clsx13(
              "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
              "border-0 border-b border-solid",
              "transition-[border-color,background-color,padding] duration-200",
              "outline-none",
              "pr-10",
              // Space for show/hide button
              sizeClasses[size],
              // Padding - 8px horizontal when focused
              isFocused ? "px-2 py-2" : "px-0 py-0",
              // Border styles
              isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)] px-2" : "border-b border-black bg-white",
              isDisabled && "opacity-50"
            )
          })
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowPassword(!showPassword),
            className: "absolute right-2 top-1/2 -translate-y-1/2 flex items-center cursor-pointer",
            disabled: isDisabled,
            tabIndex: -1,
            children: showPassword ? (
              // Password is visible, show eye-off outline icon (visibility_off)
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M2 5.27 3.28 4 20 20.72 18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58-5 0-9.27-3.11-11-7.5.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3 3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12 9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                }
              ) })
            ) : (
              // Password is hidden, show eye outline icon (visibility)
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M12 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.82 9.82 0 0 0 17.64 0 9.82 9.82 0 0 0-17.64 0"
                }
              ) })
            )
          }
        )
      ] }) }),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanaryInputPasswordUnderline.displayName = "CanaryInputPasswordUnderline";
var CanaryInputPasswordUnderline_default = CanaryInputPasswordUnderline;
var CanaryInputSearchUnderline = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      isDisabled = false,
      isRequired = false,
      error,
      helperText,
      size = "normal" /* NORMAL */,
      className = "",
      value,
      defaultValue,
      onFocus,
      onBlur
    } = _b, inputProps = __objRest(_b, [
      "label",
      "isDisabled",
      "isRequired",
      "error",
      "helperText",
      "size",
      "className",
      "value",
      "defaultValue",
      "onFocus",
      "onBlur"
    ]);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!(value || defaultValue));
    const handleFocus = (e) => {
      setIsFocused(true);
      onFocus == null ? void 0 : onFocus(e);
    };
    const handleBlur = (e) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur == null ? void 0 : onBlur(e);
    };
    const handleChange = (e) => {
      var _a2;
      setHasValue(!!e.target.value);
      (_a2 = inputProps.onChange) == null ? void 0 : _a2.call(inputProps, e);
    };
    const showLabelAbove = isFocused || hasValue;
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    return /* @__PURE__ */ jsxs("div", { className: clsx13("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 flex items-center w-6 h-6", children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z",
            fill: colors.colorBlack1
          }
        ) }) }),
        /* @__PURE__ */ jsx(
          "input",
          __spreadProps(__spreadValues({
            ref,
            type: "search",
            disabled: isDisabled,
            required: isRequired,
            value,
            defaultValue,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange
          }, inputProps), {
            placeholder: !showLabelAbove ? label : "",
            className: clsx13(
              "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
              "border-0 border-b border-solid",
              "transition-[border-color,background-color,padding] duration-200",
              "outline-none",
              "pl-8",
              // Space for search icon
              sizeClasses[size],
              // Padding - 8px horizontal when focused (plus icon space)
              isFocused ? "pr-2 py-2" : "pr-0 py-0",
              // Border styles
              isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)]" : "border-b border-black bg-white",
              isDisabled && "opacity-50"
            )
          })
        )
      ] }) }),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanaryInputSearchUnderline.displayName = "CanaryInputSearchUnderline";
var CanaryInputSearchUnderline_default = CanaryInputSearchUnderline;
var CanaryInputCreditCardUnderline = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      isDisabled = false,
      isRequired = false,
      error,
      helperText,
      size = "normal" /* NORMAL */,
      className = "",
      onCardChange,
      value,
      defaultValue,
      onFocus,
      onBlur
    } = _b, inputProps = __objRest(_b, [
      "label",
      "isDisabled",
      "isRequired",
      "error",
      "helperText",
      "size",
      "className",
      "onCardChange",
      "value",
      "defaultValue",
      "onFocus",
      "onBlur"
    ]);
    var _a2;
    const [cardNumber, setCardNumber] = useState("");
    const { meta, getCardNumberProps } = usePaymentInputs();
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!(value || defaultValue || cardNumber));
    const handleFocus = (e) => {
      setIsFocused(true);
      onFocus == null ? void 0 : onFocus(e);
    };
    const handleBlur = (e) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur == null ? void 0 : onBlur(e);
    };
    const handleCardNumberChange = useCallback((e) => {
      var _a3;
      const value2 = e.target.value;
      setCardNumber(value2);
      setHasValue(!!value2);
      if (onCardChange) {
        onCardChange(value2, ((_a3 = meta.cardType) == null ? void 0 : _a3.type) || "");
      }
    }, [onCardChange, meta.cardType]);
    const showLabelAbove = isFocused || hasValue;
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    const cardNumberProps = getCardNumberProps(__spreadProps(__spreadValues({}, inputProps), {
      onChange: handleCardNumberChange,
      onFocus: handleFocus,
      onBlur: handleBlur
    }));
    return /* @__PURE__ */ jsxs("div", { className: clsx13("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 flex items-center w-6 h-6", children: /* @__PURE__ */ jsx(
          Icon,
          {
            path: ((_a2 = meta.cardType) == null ? void 0 : _a2.type) ? mdiCreditCard : mdiCreditCardOutline,
            size: "24px",
            color: colors.colorBlack1
          }
        ) }),
        /* @__PURE__ */ jsx(
          "input",
          __spreadProps(__spreadValues({
            ref,
            type: "text",
            disabled: isDisabled,
            required: isRequired
          }, cardNumberProps), {
            placeholder: !showLabelAbove ? label : "",
            className: clsx13(
              "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
              "border-0 border-b border-solid",
              "transition-[border-color,background-color,padding] duration-200",
              "outline-none",
              "pl-8",
              // Space for card icon
              sizeClasses[size],
              // Padding - 8px horizontal when focused (plus icon space)
              isFocused ? "pr-2 py-2" : "pr-0 py-0",
              // Border styles
              isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)]" : "border-b border-black bg-white",
              isDisabled && "opacity-50"
            )
          })
        )
      ] }) }),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanaryInputCreditCardUnderline.displayName = "CanaryInputCreditCardUnderline";
var CanaryInputCreditCardUnderline_default = CanaryInputCreditCardUnderline;
var CanaryInputDateUnderline = forwardRef(
  ({
    label = "Date",
    isDisabled = false,
    isRequired = false,
    error,
    helperText,
    size = "normal" /* NORMAL */,
    className = "",
    value,
    onChange
  }, ref) => {
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const monthRef = useRef(null);
    const dayRef = useRef(null);
    const yearRef = useRef(null);
    useEffect(() => {
      if (value) {
        const parts = value.split("/");
        if (parts.length === 3) {
          setMonth(parts[0]);
          setDay(parts[1]);
          setYear(parts[2]);
        }
      }
    }, [value]);
    const hasValue = !!(month || day || year);
    const showLabelAbove = isFocused || hasValue;
    const notifyChange = (m, d, y) => {
      if (m && d && y) {
        onChange == null ? void 0 : onChange(`${m}/${d}/${y}`);
      }
    };
    const handleMonthChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 1) {
        setMonth("0" + val);
        notifyChange("0" + val, day, year);
        (_a = dayRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 12) return;
      setMonth(val);
      notifyChange(val, day, year);
      if (val.length === 2) (_b = dayRef.current) == null ? void 0 : _b.focus();
    };
    const handleDayChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 3) {
        setDay("0" + val);
        notifyChange(month, "0" + val, year);
        (_a = yearRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 31) return;
      setDay(val);
      notifyChange(month, val, year);
      if (val.length === 2) (_b = yearRef.current) == null ? void 0 : _b.focus();
    };
    const handleYearChange = (e) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 4);
      setYear(val);
      notifyChange(month, day, val);
    };
    const handleKeyDown = (e, field) => {
      var _a, _b;
      if (e.key === "Backspace") {
        const target = e.target;
        if (target.value === "") {
          if (field === "day") (_a = monthRef.current) == null ? void 0 : _a.focus();
          else if (field === "year") (_b = dayRef.current) == null ? void 0 : _b.focus();
        }
      }
    };
    const handleFocus = () => {
      var _a, _b, _c, _d;
      setIsFocused(true);
      if (!month) (_a = monthRef.current) == null ? void 0 : _a.focus();
      else if (!day) (_b = dayRef.current) == null ? void 0 : _b.focus();
      else if (!year) (_c = yearRef.current) == null ? void 0 : _c.focus();
      else (_d = monthRef.current) == null ? void 0 : _d.focus();
    };
    const handleBlur = (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setIsFocused(false);
      }
    };
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    const iconSizes = {
      ["tablet" /* TABLET */]: "w-8 h-8",
      ["large" /* LARGE */]: "w-6 h-6",
      ["normal" /* NORMAL */]: "w-6 h-6",
      ["compact" /* COMPACT */]: "w-5 h-5"
    };
    return /* @__PURE__ */ jsxs("div", { className: clsx13("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref,
          className: clsx13(
            "relative flex items-center gap-0.5",
            "border-0 border-b border-solid",
            "transition-[border-color,background-color,padding] duration-200",
            "font-['Roboto',sans-serif] font-normal leading-[1.5]",
            sizeClasses[size],
            // Padding
            isFocused ? "px-2 py-2" : "px-0 py-0",
            // Border and background styles
            isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)]" : "border-b border-black bg-white",
            isDisabled && "opacity-50"
          ),
          onFocus: handleFocus,
          onBlur: handleBlur,
          tabIndex: 0,
          children: [
            !showLabelAbove && /* @__PURE__ */ jsx("div", { className: "absolute left-0 text-gray-500 pointer-events-none", children: label }),
            showLabelAbove && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: monthRef,
                  type: "text",
                  inputMode: "numeric",
                  value: month,
                  onChange: handleMonthChange,
                  onKeyDown: (e) => handleKeyDown(e, "month"),
                  placeholder: "MM",
                  disabled: isDisabled,
                  className: clsx13(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Month",
                  tabIndex: -1
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: dayRef,
                  type: "text",
                  inputMode: "numeric",
                  value: day,
                  onChange: handleDayChange,
                  onKeyDown: (e) => handleKeyDown(e, "day"),
                  placeholder: "DD",
                  disabled: isDisabled,
                  className: clsx13(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Day",
                  tabIndex: -1
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: yearRef,
                  type: "text",
                  inputMode: "numeric",
                  value: year,
                  onChange: handleYearChange,
                  onKeyDown: (e) => handleKeyDown(e, "year"),
                  placeholder: "YYYY",
                  disabled: isDisabled,
                  className: clsx13(
                    "w-12 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Year",
                  tabIndex: -1
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-auto flex items-center", children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                className: iconSizes[size],
                fill: isDisabled ? colors.colorBlack3 : colors.colorBlack1,
                children: /* @__PURE__ */ jsx("path", { d: "M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" })
              }
            ) })
          ]
        }
      ),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ jsx("p", { className: "text-[12px] leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
  }
);
CanaryInputDateUnderline.displayName = "CanaryInputDateUnderline";
var CanaryInputDateUnderline_default = CanaryInputDateUnderline;
var CanaryInputDateRangeUnderline = forwardRef(
  ({
    label = "Date Range",
    isDisabled = false,
    isRequired = false,
    error,
    helperText,
    size = "normal" /* NORMAL */,
    className = "",
    startDate: initialStartDate,
    endDate: initialEndDate,
    onChange
  }, ref) => {
    const [startMonth, setStartMonth] = useState("");
    const [startDay, setStartDay] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const [endDay, setEndDay] = useState("");
    const [endYear, setEndYear] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const startMonthRef = useRef(null);
    const startDayRef = useRef(null);
    const startYearRef = useRef(null);
    const endMonthRef = useRef(null);
    const endDayRef = useRef(null);
    const endYearRef = useRef(null);
    useEffect(() => {
      if (initialStartDate) {
        const parts = initialStartDate.split("/");
        if (parts.length === 3) {
          setStartMonth(parts[0]);
          setStartDay(parts[1]);
          setStartYear(parts[2]);
        }
      }
      if (initialEndDate) {
        const parts = initialEndDate.split("/");
        if (parts.length === 3) {
          setEndMonth(parts[0]);
          setEndDay(parts[1]);
          setEndYear(parts[2]);
        }
      }
    }, [initialStartDate, initialEndDate]);
    const hasValue = !!(startMonth || startDay || startYear || endMonth || endDay || endYear);
    const showLabelAbove = isFocused || hasValue;
    const notifyChange = (sm, sd, sy, em, ed, ey) => {
      const start = sm && sd && sy ? `${sm}/${sd}/${sy}` : "";
      const end = em && ed && ey ? `${em}/${ed}/${ey}` : "";
      onChange == null ? void 0 : onChange(start, end);
    };
    const handleStartMonthChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 1) {
        setStartMonth("0" + val);
        notifyChange("0" + val, startDay, startYear, endMonth, endDay, endYear);
        (_a = startDayRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 12) return;
      setStartMonth(val);
      notifyChange(val, startDay, startYear, endMonth, endDay, endYear);
      if (val.length === 2) (_b = startDayRef.current) == null ? void 0 : _b.focus();
    };
    const handleStartDayChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 3) {
        setStartDay("0" + val);
        notifyChange(startMonth, "0" + val, startYear, endMonth, endDay, endYear);
        (_a = startYearRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 31) return;
      setStartDay(val);
      notifyChange(startMonth, val, startYear, endMonth, endDay, endYear);
      if (val.length === 2) (_b = startYearRef.current) == null ? void 0 : _b.focus();
    };
    const handleStartYearChange = (e) => {
      var _a;
      const val = e.target.value.replace(/\D/g, "").slice(0, 4);
      setStartYear(val);
      notifyChange(startMonth, startDay, val, endMonth, endDay, endYear);
      if (val.length === 4) (_a = endMonthRef.current) == null ? void 0 : _a.focus();
    };
    const handleEndMonthChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 1) {
        setEndMonth("0" + val);
        notifyChange(startMonth, startDay, startYear, "0" + val, endDay, endYear);
        (_a = endDayRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 12) return;
      setEndMonth(val);
      notifyChange(startMonth, startDay, startYear, val, endDay, endYear);
      if (val.length === 2) (_b = endDayRef.current) == null ? void 0 : _b.focus();
    };
    const handleEndDayChange = (e) => {
      var _a, _b;
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 3) {
        setEndDay("0" + val);
        notifyChange(startMonth, startDay, startYear, endMonth, "0" + val, endYear);
        (_a = endYearRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 31) return;
      setEndDay(val);
      notifyChange(startMonth, startDay, startYear, endMonth, val, endYear);
      if (val.length === 2) (_b = endYearRef.current) == null ? void 0 : _b.focus();
    };
    const handleEndYearChange = (e) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 4);
      setEndYear(val);
      notifyChange(startMonth, startDay, startYear, endMonth, endDay, val);
    };
    const handleKeyDown = (e, field) => {
      var _a, _b, _c, _d, _e;
      if (e.key === "Backspace") {
        const target = e.target;
        if (target.value === "") {
          if (field === "startDay") (_a = startMonthRef.current) == null ? void 0 : _a.focus();
          else if (field === "startYear") (_b = startDayRef.current) == null ? void 0 : _b.focus();
          else if (field === "endMonth") (_c = startYearRef.current) == null ? void 0 : _c.focus();
          else if (field === "endDay") (_d = endMonthRef.current) == null ? void 0 : _d.focus();
          else if (field === "endYear") (_e = endDayRef.current) == null ? void 0 : _e.focus();
        }
      }
    };
    const handleFocus = () => {
      var _a, _b, _c, _d, _e, _f, _g;
      setIsFocused(true);
      if (!startMonth) (_a = startMonthRef.current) == null ? void 0 : _a.focus();
      else if (!startDay) (_b = startDayRef.current) == null ? void 0 : _b.focus();
      else if (!startYear) (_c = startYearRef.current) == null ? void 0 : _c.focus();
      else if (!endMonth) (_d = endMonthRef.current) == null ? void 0 : _d.focus();
      else if (!endDay) (_e = endDayRef.current) == null ? void 0 : _e.focus();
      else if (!endYear) (_f = endYearRef.current) == null ? void 0 : _f.focus();
      else (_g = startMonthRef.current) == null ? void 0 : _g.focus();
    };
    const handleBlur = (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setIsFocused(false);
      }
    };
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    const iconSizes = {
      ["tablet" /* TABLET */]: "w-8 h-8",
      ["large" /* LARGE */]: "w-6 h-6",
      ["normal" /* NORMAL */]: "w-6 h-6",
      ["compact" /* COMPACT */]: "w-5 h-5"
    };
    return /* @__PURE__ */ jsxs("div", { className: clsx13("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ jsxs(
        "label",
        {
          className: clsx13(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ jsx("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref,
          className: clsx13(
            "relative flex items-center gap-1",
            "border-0 border-b border-solid",
            "transition-[border-color,background-color,padding] duration-200",
            "font-['Roboto',sans-serif] font-normal leading-[1.5]",
            sizeClasses[size],
            // Padding
            isFocused ? "px-2 py-2" : "px-0 py-0",
            // Border and background styles
            isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)]" : "border-b border-black bg-white",
            isDisabled && "opacity-50"
          ),
          onFocus: handleFocus,
          onBlur: handleBlur,
          tabIndex: 0,
          children: [
            !showLabelAbove && /* @__PURE__ */ jsx("div", { className: "absolute left-0 text-gray-500 pointer-events-none", children: label }),
            showLabelAbove && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    ref: startMonthRef,
                    type: "text",
                    inputMode: "numeric",
                    value: startMonth,
                    onChange: handleStartMonthChange,
                    onKeyDown: (e) => handleKeyDown(e, "startMonth"),
                    placeholder: "MM",
                    disabled: isDisabled,
                    className: clsx13(
                      "w-8 bg-transparent outline-none border-none text-center",
                      "placeholder:text-gray-400",
                      isDisabled && "cursor-not-allowed"
                    ),
                    "aria-label": "Start Month",
                    tabIndex: -1
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    ref: startDayRef,
                    type: "text",
                    inputMode: "numeric",
                    value: startDay,
                    onChange: handleStartDayChange,
                    onKeyDown: (e) => handleKeyDown(e, "startDay"),
                    placeholder: "DD",
                    disabled: isDisabled,
                    className: clsx13(
                      "w-8 bg-transparent outline-none border-none text-center",
                      "placeholder:text-gray-400",
                      isDisabled && "cursor-not-allowed"
                    ),
                    "aria-label": "Start Day",
                    tabIndex: -1
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    ref: startYearRef,
                    type: "text",
                    inputMode: "numeric",
                    value: startYear,
                    onChange: handleStartYearChange,
                    onKeyDown: (e) => handleKeyDown(e, "startYear"),
                    placeholder: "YYYY",
                    disabled: isDisabled,
                    className: clsx13(
                      "w-12 bg-transparent outline-none border-none text-center",
                      "placeholder:text-gray-400",
                      isDisabled && "cursor-not-allowed"
                    ),
                    "aria-label": "Start Year",
                    tabIndex: -1
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-400 select-none shrink-0", children: "\u2014" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    ref: endMonthRef,
                    type: "text",
                    inputMode: "numeric",
                    value: endMonth,
                    onChange: handleEndMonthChange,
                    onKeyDown: (e) => handleKeyDown(e, "endMonth"),
                    placeholder: "MM",
                    disabled: isDisabled,
                    className: clsx13(
                      "w-8 bg-transparent outline-none border-none text-center",
                      "placeholder:text-gray-400",
                      isDisabled && "cursor-not-allowed"
                    ),
                    "aria-label": "End Month",
                    tabIndex: -1
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    ref: endDayRef,
                    type: "text",
                    inputMode: "numeric",
                    value: endDay,
                    onChange: handleEndDayChange,
                    onKeyDown: (e) => handleKeyDown(e, "endDay"),
                    placeholder: "DD",
                    disabled: isDisabled,
                    className: clsx13(
                      "w-8 bg-transparent outline-none border-none text-center",
                      "placeholder:text-gray-400",
                      isDisabled && "cursor-not-allowed"
                    ),
                    "aria-label": "End Day",
                    tabIndex: -1
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    ref: endYearRef,
                    type: "text",
                    inputMode: "numeric",
                    value: endYear,
                    onChange: handleEndYearChange,
                    onKeyDown: (e) => handleKeyDown(e, "endYear"),
                    placeholder: "YYYY",
                    disabled: isDisabled,
                    className: clsx13(
                      "w-12 bg-transparent outline-none border-none text-center",
                      "placeholder:text-gray-400",
                      isDisabled && "cursor-not-allowed"
                    ),
                    "aria-label": "End Year",
                    tabIndex: -1
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-auto flex items-center shrink-0", children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                className: iconSizes[size],
                fill: isDisabled ? colors.colorBlack3 : colors.colorBlack1,
                children: /* @__PURE__ */ jsx("path", { d: "M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" })
              }
            ) })
          ]
        }
      ),
      error && /* @__PURE__ */ jsx("div", { className: "mt-1 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ jsx("p", { className: "text-[12px] leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
  }
);
CanaryInputDateRangeUnderline.displayName = "CanaryInputDateRangeUnderline";
var CanaryInputDateRangeUnderline_default = CanaryInputDateRangeUnderline;

// components/canary-ui/data-display/types.ts
var TagColor = /* @__PURE__ */ ((TagColor2) => {
  TagColor2["SUCCESS"] = "success";
  TagColor2["WARNING"] = "warning";
  TagColor2["INFO"] = "info";
  TagColor2["DEFAULT"] = "default";
  TagColor2["ERROR"] = "error";
  return TagColor2;
})(TagColor || {});
var TagVariant = /* @__PURE__ */ ((TagVariant2) => {
  TagVariant2["OUTLINE"] = "outline";
  TagVariant2["FILLED"] = "filled";
  return TagVariant2;
})(TagVariant || {});
var TagSize = /* @__PURE__ */ ((TagSize2) => {
  TagSize2["COMPACT"] = "compact";
  TagSize2["MEDIUM"] = "medium";
  return TagSize2;
})(TagSize || {});
function CanaryTag({
  label,
  color = "success" /* SUCCESS */,
  variant = "outline" /* OUTLINE */,
  size = "medium" /* MEDIUM */,
  customColor,
  leadingIcon,
  trailingIcon,
  uppercase = true,
  className = ""
}) {
  var _a;
  const getColors = () => {
    if (customColor == null ? void 0 : customColor.backgroundColor) {
      return {
        backgroundColor: customColor.backgroundColor,
        borderColor: customColor.borderColor,
        textColor: customColor.fontColor || colors.colorBlack1
      };
    }
    if (variant === "filled" /* FILLED */) {
      switch (color) {
        case "success" /* SUCCESS */:
          return {
            backgroundColor: colors.success,
            // #008040
            textColor: colors.white
          };
        case "warning" /* WARNING */:
          return {
            backgroundColor: colors.warning,
            // #FAB541
            textColor: colors.white
          };
        case "info" /* INFO */:
          return {
            backgroundColor: colors.colorBlueDark1,
            // #2858C4
            textColor: colors.white
          };
        case "default" /* DEFAULT */:
          return {
            backgroundColor: colors.colorBlack6,
            // #E5E5E5
            textColor: colors.colorBlack1
            // #000000
          };
        case "error" /* ERROR */:
          return {
            backgroundColor: colors.error,
            // #E40046
            textColor: colors.white
          };
        default:
          return {
            backgroundColor: colors.success,
            textColor: colors.white
          };
      }
    } else {
      switch (color) {
        case "success" /* SUCCESS */:
          return {
            backgroundColor: colors.colorLightGreen5,
            // #CCE6D9
            borderColor: colors.success,
            // #008040
            textColor: colors.success
            // #008040
          };
        case "warning" /* WARNING */:
          return {
            backgroundColor: colors.colorWheat5,
            // #FFF8EC
            borderColor: colors.colorWheat3,
            // #FCDAA0
            textColor: colors.warning
            // #FAB541
          };
        case "info" /* INFO */:
          return {
            backgroundColor: colors.colorBlueDark5,
            // #EAEEF9
            borderColor: colors.colorBlueDark3,
            // #93ABE1
            textColor: colors.colorBlueDark1
            // #2858C4
          };
        case "default" /* DEFAULT */:
          return {
            backgroundColor: colors.colorBlack6,
            // #E5E5E5
            borderColor: colors.colorBlack4,
            // #999999
            textColor: colors.colorBlack1
            // #000000
          };
        case "error" /* ERROR */:
          return {
            backgroundColor: colors.colorRed5,
            // #FCE6ED
            borderColor: colors.colorRed3,
            // #F59FBA
            textColor: colors.error
            // #E40046
          };
        default:
          return {
            backgroundColor: colors.colorLightGreen5,
            borderColor: colors.success,
            textColor: colors.success
          };
      }
    }
  };
  const { backgroundColor, borderColor, textColor } = getColors();
  const iconColor = (_a = customColor == null ? void 0 : customColor.iconColor) != null ? _a : textColor;
  const sizeClasses = size === "compact" /* COMPACT */ ? "text-[10px] leading-[16px] px-[4px] py-[2px]" : "text-[12px] leading-[18px] px-[4px] py-[2px]";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx13(
        "inline-flex items-center justify-center gap-1",
        "rounded-[2px]",
        "font-medium",
        "w-max",
        uppercase && "uppercase",
        variant === "outline" /* OUTLINE */ && "border border-solid",
        sizeClasses,
        className
      ),
      style: {
        backgroundColor,
        borderColor: variant === "outline" /* OUTLINE */ ? borderColor : void 0,
        color: textColor
      },
      children: [
        leadingIcon && /* @__PURE__ */ jsx("div", { className: "w-3 h-3 flex items-center justify-center", style: { color: iconColor }, children: leadingIcon }),
        /* @__PURE__ */ jsx("span", { children: label }),
        trailingIcon && /* @__PURE__ */ jsx("div", { className: "w-3 h-3 flex items-center justify-center", style: { color: iconColor }, children: trailingIcon })
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
        className: clsx13(
          "px-4 py-2 text-[14px] font-semibold",
          alignClasses[column.align || "left"]
        ),
        style: {
          color: colors.colorBlack2,
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
          className: clsx13(
            "transition-colors",
            onRowClick && "cursor-pointer hover:bg-[#fafafa]"
          ),
          onClick: () => onRowClick == null ? void 0 : onRowClick(row, rowIndex),
          children: columns.map((column, colIndex) => /* @__PURE__ */ jsx(
            "td",
            {
              className: clsx13(
                "px-4 py-1 text-[14px]",
                alignClasses[column.align || "left"]
              ),
              style: {
                color: colors.colorBlack2,
                width: column.width,
                borderTop: rowIndex === 0 ? `1px solid ${colors.colorBlack6}` : void 0,
                borderBottom: `1px solid ${colors.colorBlack6}`,
                borderLeft: colIndex === 0 ? `1px solid ${colors.colorBlack6}` : void 0,
                borderRight: colIndex === columns.length - 1 ? `1px solid ${colors.colorBlack6}` : void 0,
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
      className: clsx13(
        "rounded-lg bg-white",
        hasBorder && "border",
        onClick && "cursor-pointer hover:shadow-lg transition-shadow",
        className
      ),
      style: {
        borderColor: hasBorder ? colors.colorBlack6 : void 0,
        boxShadow: hasShadow ? shadows.xl : void 0
      },
      onClick,
      children: [
        (title || subtitle) && /* @__PURE__ */ jsxs("div", { className: clsx13("border-b", paddingClasses[padding]), style: { borderColor: colors.colorBlack6 }, children: [
          title && /* @__PURE__ */ jsx("h3", { className: "text-[18px] font-semibold", style: { color: colors.colorBlack1 }, children: title }),
          subtitle && /* @__PURE__ */ jsx("p", { className: "text-[14px] mt-1", style: { color: colors.colorBlack3 }, children: subtitle })
        ] }),
        /* @__PURE__ */ jsx("div", { className: paddingClasses[padding], children }),
        footer && /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx13("border-t", paddingClasses[padding]),
            style: { borderColor: colors.colorBlack6 },
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
      className: clsx13(
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
      className: clsx13(
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
          className: clsx13(
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
                style: { borderColor: colors.colorBlack6 },
                children: [
                  title && /* @__PURE__ */ jsx("h2", { className: "text-[20px] font-semibold", style: { color: colors.colorBlack1 }, children: title }),
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
                style: { borderColor: colors.colorBlack6 },
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
  variant = "rounded",
  size = "normal",
  defaultTab,
  onChange,
  className = ""
}) {
  var _a, _b;
  const [activeTab, setActiveTab] = useState(defaultTab || ((_a = tabs[0]) == null ? void 0 : _a.id));
  const [pressedTab, setPressedTab] = useState(null);
  const handleTabClick = (tabId, isDisabled) => {
    if (isDisabled) return;
    setActiveTab(tabId);
    onChange == null ? void 0 : onChange(tabId);
  };
  const activeTabContent = (_b = tabs.find((tab) => tab.id === activeTab)) == null ? void 0 : _b.content;
  if (variant === "rounded") {
    return /* @__PURE__ */ jsxs("div", { className: `w-full ${className}`, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "inline-flex rounded-full p-1 gap-1",
          style: {
            backgroundColor: colors.colorBlack6
          },
          children: tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleTabClick(tab.id, tab.disabled),
                disabled: tab.disabled,
                className: clsx13(
                  "flex items-center gap-2 px-6 py-2",
                  "text-[14px] font-medium font-['Roboto',sans-serif]",
                  "rounded-full transition-all duration-200",
                  "focus:outline-none",
                  tab.disabled ? "cursor-not-allowed opacity-50" : isActive ? "cursor-pointer" : "cursor-pointer hover:shadow-[0px_4px_0px_0px_#CCCCCC]"
                ),
                style: {
                  backgroundColor: isActive ? colors.colorBlueDark1 : colors.colorBlack6,
                  color: isActive ? colors.colorWhite : colors.colorBlack1
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
      /* @__PURE__ */ jsx("div", { children: activeTabContent })
    ] });
  }
  if (variant === "segmented") {
    const isCompactSegmented = size === "compact";
    const segmentedFontSize = isCompactSegmented ? "14px" : "16px";
    return /* @__PURE__ */ jsxs("div", { className: `w-full ${className}`, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "inline-flex items-start gap-px rounded-lg",
          style: {
            border: `1px solid ${colors.colorBlack6}`,
            overflow: "visible"
          },
          children: tabs.map((tab, index) => {
            const isActive = tab.id === activeTab;
            const isFirst = index === 0;
            const isLast = index === tabs.length - 1;
            return /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleTabClick(tab.id, tab.disabled),
                disabled: tab.disabled,
                className: clsx13(
                  "flex items-center justify-center px-6 py-4",
                  "font-medium font-['Roboto',sans-serif]",
                  "transition-all duration-200",
                  "focus:outline-none",
                  isFirst && "rounded-l-lg",
                  isLast && "rounded-r-lg",
                  tab.disabled && "cursor-not-allowed opacity-50",
                  !tab.disabled && !isActive && "hover:shadow-[0px_4px_0px_0px_#CCCCCC]"
                ),
                style: {
                  fontSize: segmentedFontSize,
                  backgroundColor: isActive ? colors.colorBlueDark1 : colors.colorWhite,
                  color: isActive ? colors.colorWhite : colors.colorBlack1,
                  lineHeight: "1.5"
                },
                children: tab.label
              },
              tab.id
            );
          })
        }
      ),
      /* @__PURE__ */ jsx("div", { children: activeTabContent })
    ] });
  }
  const isCompact = size === "compact";
  const fontSize = isCompact ? "14px" : "16px";
  const lineHeight = isCompact ? "1.5" : "24px";
  const verticalPadding = isCompact ? "py-1" : "py-2";
  return /* @__PURE__ */ jsxs("div", { className: `w-full ${className}`, children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-start", children: tabs.map((tab) => {
      const isActive = tab.id === activeTab;
      const isPressed = pressedTab === tab.id;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => handleTabClick(tab.id, tab.disabled),
          onMouseDown: () => !tab.disabled && setPressedTab(tab.id),
          onMouseUp: () => setPressedTab(null),
          onMouseLeave: () => setPressedTab(null),
          disabled: tab.disabled,
          className: clsx13(
            "flex flex-col items-start overflow-clip relative shrink-0",
            "focus:outline-none transition-all duration-200",
            tab.disabled && "cursor-not-allowed opacity-50"
          ),
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: clsx13(
                  "flex gap-2 items-center justify-center px-4",
                  verticalPadding,
                  !tab.disabled && "cursor-pointer transition-colors duration-200",
                  !tab.disabled && !isActive && !isPressed && "hover:bg-black/5 focus-within:bg-black/5",
                  !tab.disabled && !isActive && isPressed && "bg-black/10"
                ),
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "font-medium font-['Roboto',sans-serif] text-center whitespace-nowrap",
                      style: {
                        fontSize,
                        color: isActive ? colors.colorBlueDark1 : colors.colorBlack2,
                        lineHeight
                      },
                      children: tab.label
                    }
                  ),
                  tab.badge && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "flex items-center justify-center px-1 rounded-full",
                      style: {
                        backgroundColor: colors.colorPink1,
                        minWidth: "16px",
                        height: "16px"
                      },
                      children: /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "text-[11px] font-medium text-center",
                          style: {
                            color: colors.colorWhite,
                            lineHeight: "16px",
                            letterSpacing: "0.5px"
                          },
                          children: tab.badge
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-full h-1",
                style: {
                  backgroundColor: isActive ? colors.colorBlueDark1 : "transparent"
                }
              }
            )
          ]
        },
        tab.id
      );
    }) }),
    /* @__PURE__ */ jsx("div", { children: activeTabContent })
  ] });
}

// components/canary-ui/navigation/types.ts
var SidebarVariant = /* @__PURE__ */ ((SidebarVariant2) => {
  SidebarVariant2["MAIN"] = "main";
  SidebarVariant2["SETTINGS"] = "settings";
  return SidebarVariant2;
})(SidebarVariant || {});
var NavigationItemState = /* @__PURE__ */ ((NavigationItemState2) => {
  NavigationItemState2["DEFAULT"] = "default";
  NavigationItemState2["SELECTED"] = "selected";
  NavigationItemState2["FOCUS"] = "focus";
  NavigationItemState2["ON_PRESS"] = "onPress";
  NavigationItemState2["DISABLED"] = "disabled";
  return NavigationItemState2;
})(NavigationItemState || {});
function CanaryLogo({
  width = "140px",
  height = "24px",
  className = ""
}) {
  const logoDataUrl = "data:image/png;base64,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";
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: logoDataUrl,
      alt: "Canary",
      width,
      height,
      className,
      style: {
        objectFit: "contain"
      }
    }
  );
}
function CanarySidebar({
  variant = "main" /* MAIN */,
  sections,
  logo,
  title,
  backButton,
  selectedItemId,
  onItemClick,
  width,
  // Remove default, let it auto-size
  className = ""
}) {
  const [focusedItemId, setFocusedItemId] = useState(null);
  const [pressedItemId, setPressedItemId] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const getBackgroundColor = () => {
    switch (variant) {
      case "main" /* MAIN */:
        return "#375492";
      // Custom blue for sidebar (not in design tokens)
      case "settings" /* SETTINGS */:
        return colors.colorBlack2;
      // $color-black-2 (#333333)
      default:
        return "#375492";
    }
  };
  const backgroundColor = getBackgroundColor();
  const handleItemClick = (item) => {
    if (item.isDisabled) return;
    setPressedItemId(null);
    if (item.onClick) {
      item.onClick();
    }
    if (onItemClick) {
      onItemClick(item.id);
    }
  };
  const getItemState = (item) => {
    if (item.isDisabled) return "disabled" /* DISABLED */;
    if (selectedItemId === item.id) return "selected" /* SELECTED */;
    if (pressedItemId === item.id) return "onPress" /* ON_PRESS */;
    if (focusedItemId === item.id) return "focus" /* FOCUS */;
    if (hoveredItemId === item.id) return "focus" /* FOCUS */;
    return "default" /* DEFAULT */;
  };
  const getIconOpacity = (state) => {
    switch (state) {
      case "selected" /* SELECTED */:
        return 1;
      // 100%
      case "disabled" /* DISABLED */:
        return 0.15;
      // 15%
      case "default" /* DEFAULT */:
      case "focus" /* FOCUS */:
      case "onPress" /* ON_PRESS */:
      default:
        return 0.5;
    }
  };
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      className: clsx13(
        "flex flex-col shrink-0 w-[180px] h-full",
        className
      ),
      style: {
        backgroundColor
      },
      children: [
        backButton && variant === "settings" /* SETTINGS */ ? /* @__PURE__ */ jsx("div", { className: "flex items-center pt-4 pb-4 px-4 shrink-0", children: backButton }) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center pt-6 pb-6 shrink-0", children: /* @__PURE__ */ jsx("div", { style: { opacity: 0.35, width: "140px", height: "24px" }, children: logo !== void 0 ? logo : /* @__PURE__ */ jsx(CanaryLogo, {}) }) }),
        title && /* @__PURE__ */ jsx("div", { className: "px-4 pb-4 shrink-0", children: /* @__PURE__ */ jsx("h2", { className: "text-[16px] font-medium text-white", style: { fontFamily: "Roboto, sans-serif" }, children: title }) }),
        /* @__PURE__ */ jsx("nav", { className: "flex-1 overflow-y-auto flex flex-col gap-4 w-[180px] mx-auto pb-8", children: sections.map((section, sectionIndex) => /* @__PURE__ */ jsxs("div", { children: [
          sectionIndex > 0 && /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-[1px] mb-4",
              style: { backgroundColor: "rgba(255, 255, 255, 0.1)" }
            }
          ),
          section.title && /* @__PURE__ */ jsx(
            "div",
            {
              className: "pl-4 pb-2 text-[14px] font-medium",
              style: {
                color: "white",
                fontFamily: "Roboto, sans-serif",
                lineHeight: "22px"
              },
              children: section.title
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: section.items.map((item) => {
            const state = getItemState(item);
            const iconOpacity = getIconOpacity(state);
            const isSelected = state === "selected" /* SELECTED */;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleItemClick(item),
                onFocus: () => setFocusedItemId(item.id),
                onBlur: () => setFocusedItemId(null),
                onMouseEnter: () => setHoveredItemId(item.id),
                onMouseLeave: () => {
                  setPressedItemId(null);
                  setHoveredItemId(null);
                },
                onMouseDown: () => setPressedItemId(item.id),
                onMouseUp: () => setPressedItemId(null),
                disabled: item.isDisabled,
                className: "relative h-10 w-full flex items-center focus:outline-none",
                style: {
                  color: isSelected ? variant === "main" /* MAIN */ ? "#375492" : "#333333" : state === "disabled" /* DISABLED */ ? "rgba(255, 255, 255, 0.3)" : colors.white,
                  cursor: item.isDisabled ? "not-allowed" : "pointer"
                },
                children: [
                  state === "selected" /* SELECTED */ && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute rounded-[4px] pointer-events-none",
                      style: {
                        backgroundColor: colors.white,
                        top: "4px",
                        bottom: "4px",
                        left: "8px",
                        right: "8px"
                      }
                    }
                  ),
                  state === "focus" /* FOCUS */ && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute rounded-[4px] pointer-events-none",
                      style: {
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        top: "4px",
                        bottom: "4px",
                        left: "8px",
                        right: "8px"
                      }
                    }
                  ),
                  state === "onPress" /* ON_PRESS */ && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute rounded-[4px] pointer-events-none",
                      style: {
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        top: "4px",
                        bottom: "4px",
                        left: "8px",
                        right: "8px"
                      }
                    }
                  ),
                  item.icon && /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "absolute left-4 flex items-center justify-center shrink-0 pointer-events-none",
                      style: {
                        width: "24px",
                        height: "24px",
                        opacity: isSelected ? 1 : iconOpacity,
                        zIndex: 1,
                        color: isSelected ? variant === "main" /* MAIN */ ? "#375492" : "#333333" : "white",
                        filter: isSelected ? variant === "main" /* MAIN */ ? "brightness(0) saturate(100%) invert(34%) sepia(50%) saturate(1000%) hue-rotate(196deg) brightness(88%) contrast(92%)" : "brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)" : "none"
                      },
                      children: item.icon
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none",
                      style: {
                        fontFamily: "Roboto, sans-serif",
                        lineHeight: "22px",
                        zIndex: 1
                      },
                      children: item.label
                    }
                  ),
                  item.badge && /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "absolute left-[148px] flex items-center justify-center pointer-events-none",
                      style: {
                        width: "16px",
                        height: "16px",
                        backgroundColor: "#f16682",
                        borderRadius: "8px",
                        zIndex: 1
                      },
                      children: /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "text-[12px] font-bold text-center",
                          style: {
                            color: colors.white,
                            lineHeight: "18px",
                            letterSpacing: "0.24px"
                          },
                          children: item.badge
                        }
                      )
                    }
                  )
                ]
              },
              item.id
            );
          }) })
        ] }, section.id)) })
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
      className: clsx13(
        "w-full bg-white border-b flex items-center px-6 shrink-0 sticky top-0 z-50",
        className
      ),
      style: {
        height: dimensions.headerHeight,
        borderColor: colors.colorBlack6
      },
      children: [
        (logo || title) && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          logo && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: logo }),
          title && /* @__PURE__ */ jsx("h1", { className: "text-[20px] font-semibold", style: { color: colors.colorBlack1 }, children: title })
        ] }),
        navigation && /* @__PURE__ */ jsx("nav", { className: "flex-1 flex items-center justify-center px-6", children: navigation }),
        actions && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 ml-auto", children: actions })
      ]
    }
  );
}
var standardMainSidebarSections = [
  {
    id: "main-section",
    items: [
      {
        id: "upsells",
        label: "Upsells",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiCashMultiple, size: 1 })
      },
      {
        id: "check-in",
        label: "Check-in",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiLogin, size: 1 })
      },
      {
        id: "checkout",
        label: "Checkout",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiLogout, size: 1 })
      },
      {
        id: "messages",
        label: "Messages",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiMessageProcessingOutline, size: 1 })
      },
      {
        id: "calls",
        label: "Calls",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiPhoneOutline, size: 1 })
      },
      {
        id: "digital-tips",
        label: "Digital Tips",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiCurrencyUsd, size: 1 })
      }
    ]
  },
  {
    id: "secondary-section",
    items: [
      {
        id: "authorizations",
        label: "Authorizations",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiShieldCheckOutline, size: 1 })
      },
      {
        id: "contracts",
        label: "Contracts",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiFileSign, size: 1 })
      },
      {
        id: "id-verification",
        label: "ID Verification",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiAccountCheckOutline, size: 1 })
      },
      {
        id: "clients-on-file",
        label: "Clients on File",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiAccountBoxOutline, size: 1 })
      },
      {
        id: "amenities",
        label: "Amenities",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiStoreOutline, size: 1 })
      },
      {
        id: "payment-links",
        label: "Payment Links",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiCreditCardOutline, size: 1 })
      }
    ]
  },
  {
    id: "bottom-section",
    items: [
      {
        id: "settings",
        label: "Settings",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiCogOutline, size: 1 })
      }
    ]
  }
];
var standardSettingsSidebarSections = [
  {
    id: "settings-section",
    title: "General",
    items: [
      {
        id: "property-info",
        label: "Property Info",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiHomeOutline, size: 1 })
      },
      {
        id: "branding",
        label: "Branding",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiPaletteOutline, size: 1 })
      },
      {
        id: "billing-payment",
        label: "Billing & Payment",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiCreditCardOutline, size: 1 })
      },
      {
        id: "staff-members",
        label: "Staff Members",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiAccountGroupOutline, size: 1 })
      },
      {
        id: "security",
        label: "Security",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiShieldAccountOutline, size: 1 })
      }
    ]
  },
  {
    id: "integrations-section",
    title: "Integrations",
    items: [
      {
        id: "pms",
        label: "PMS",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiPuzzleOutline, size: 1 })
      },
      {
        id: "devices",
        label: "Devices",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiTabletCellphone, size: 1 })
      },
      {
        id: "compendium",
        label: "Compendium",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiNewspaperVariantOutline, size: 1 })
      }
    ]
  },
  {
    id: "location-section",
    title: "Location",
    items: [
      {
        id: "area-info",
        label: "Area Info",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiMapMarker, size: 1 })
      },
      {
        id: "chat",
        label: "Chat",
        icon: /* @__PURE__ */ jsx(Icon, { path: mdiChatOutline, size: 1 })
      }
    ]
  }
];
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
      bg: colors.colorLightGreen5,
      border: colors.colorLightGreen1,
      text: colors.success
    },
    error: {
      bg: colors.colorPink4,
      border: colors.colorPink3,
      text: colors.colorPink1
    },
    warning: {
      bg: colors.colorWheat5,
      border: colors.colorWheat3,
      text: colors.colorWheat1
    },
    info: {
      bg: colors.colorBlueDark5,
      border: colors.colorBlueDark3,
      text: colors.colorBlueDark1
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
      className: clsx13(
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
      bg: colors.colorLightGreen5,
      border: colors.colorLightGreen1,
      text: colors.success
    },
    error: {
      bg: colors.colorPink4,
      border: colors.colorPink3,
      text: colors.colorPink1
    },
    warning: {
      bg: colors.colorWheat5,
      border: colors.colorWheat3,
      text: colors.colorWheat1
    },
    info: {
      bg: colors.colorBlueDark5,
      border: colors.colorBlueDark3,
      text: colors.colorBlueDark1
    }
  };
  const colorScheme = typeColors[type];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx13(
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

export { ButtonColor, ButtonSize, ButtonType, CanaryAlert, CanaryButton, CanaryCard, CanaryCheckbox_default as CanaryCheckbox, CanaryContainer, CanaryGrid, CanaryHeader, CanaryIcon, CanaryInput_default as CanaryInput, CanaryInputCreditCard_default as CanaryInputCreditCard, CanaryInputCreditCardUnderline_default as CanaryInputCreditCardUnderline, CanaryInputDate_default as CanaryInputDate, CanaryInputDateRange_default as CanaryInputDateRange, CanaryInputDateRangeUnderline_default as CanaryInputDateRangeUnderline, CanaryInputDateUnderline_default as CanaryInputDateUnderline, CanaryInputPassword_default as CanaryInputPassword, CanaryInputPasswordUnderline_default as CanaryInputPasswordUnderline, CanaryInputPhone_default as CanaryInputPhone, CanaryInputPhoneUnderline_default as CanaryInputPhoneUnderline, CanaryInputSearch_default as CanaryInputSearch, CanaryInputSearchUnderline_default as CanaryInputSearchUnderline, CanaryInputUnderline_default as CanaryInputUnderline, CanaryLoading, CanaryLogo, CanaryModal, CanaryRadio_default as CanaryRadio, CanaryRadioGroup, CanarySelect_default as CanarySelect, CanarySelectUnderline_default as CanarySelectUnderline, CanarySidebar, CanarySwitch_default as CanarySwitch, CanaryTable, CanaryTabs, CanaryTag, CanaryTextArea_default as CanaryTextArea, CanaryTextAreaUnderline_default as CanaryTextAreaUnderline, CanaryToast, IconPosition, InputSize, InputType, NavigationItemState, SidebarVariant, TagColor, TagSize, TagVariant, borderRadius, breakpoints, colors, dimensions, easings, iconPaths, shadows, spacing, standardMainSidebarSections, standardSettingsSidebarSections, transitions, typography, zIndex };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map
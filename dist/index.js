"use client";
"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// components/canary-ui/index.ts
var canary_ui_exports = {};
__export(canary_ui_exports, {
  ButtonColor: () => ButtonColor,
  ButtonSize: () => ButtonSize,
  ButtonType: () => ButtonType,
  CanaryAlert: () => CanaryAlert,
  CanaryAppShell: () => CanaryAppShell,
  CanaryButton: () => CanaryButton,
  CanaryCard: () => CanaryCard,
  CanaryCheckbox: () => CanaryCheckbox_default,
  CanaryContainer: () => CanaryContainer,
  CanaryGrid: () => CanaryGrid,
  CanaryHeader: () => CanaryHeader,
  CanaryIcon: () => CanaryIcon,
  CanaryInput: () => CanaryInput_default,
  CanaryInputCreditCard: () => CanaryInputCreditCard_default,
  CanaryInputCreditCardUnderline: () => CanaryInputCreditCardUnderline_default,
  CanaryInputDate: () => CanaryInputDate_default,
  CanaryInputDateRange: () => CanaryInputDateRange_default,
  CanaryInputDateRangeUnderline: () => CanaryInputDateRangeUnderline_default,
  CanaryInputDateUnderline: () => CanaryInputDateUnderline_default,
  CanaryInputPassword: () => CanaryInputPassword_default,
  CanaryInputPasswordUnderline: () => CanaryInputPasswordUnderline_default,
  CanaryInputPhone: () => CanaryInputPhone_default,
  CanaryInputPhoneUnderline: () => CanaryInputPhoneUnderline_default,
  CanaryInputSearch: () => CanaryInputSearch_default,
  CanaryInputSearchUnderline: () => CanaryInputSearchUnderline_default,
  CanaryInputUnderline: () => CanaryInputUnderline_default,
  CanaryList: () => CanaryList_default,
  CanaryListItem: () => CanaryListItem_default,
  CanaryLoading: () => CanaryLoading,
  CanaryLogo: () => CanaryLogo,
  CanaryModal: () => CanaryModal,
  CanaryPageHeader: () => CanaryPageHeader,
  CanaryRadio: () => CanaryRadio_default,
  CanaryRadioGroup: () => CanaryRadioGroup,
  CanarySelect: () => CanarySelect_default,
  CanarySelectUnderline: () => CanarySelectUnderline_default,
  CanarySidebar: () => CanarySidebar,
  CanarySwitch: () => CanarySwitch_default,
  CanaryTable: () => CanaryTable,
  CanaryTabs: () => CanaryTabs,
  CanaryTag: () => CanaryTag,
  CanaryTextArea: () => CanaryTextArea_default,
  CanaryTextAreaUnderline: () => CanaryTextAreaUnderline_default,
  CanaryToast: () => CanaryToast,
  Icon: () => import_react.default,
  IconPosition: () => IconPosition,
  InputSize: () => InputSize,
  InputType: () => InputType,
  NavigationItemState: () => NavigationItemState,
  SidebarVariant: () => SidebarVariant,
  TagColor: () => TagColor,
  TagSize: () => TagSize,
  TagVariant: () => TagVariant,
  addBadge: () => addBadge,
  addProduct: () => addProduct,
  borderRadius: () => borderRadius,
  breakpoints: () => breakpoints,
  colors: () => colors,
  createCustomSection: () => createCustomSection,
  createSidebarTab: () => createSidebarTab,
  dimensions: () => dimensions,
  disableProduct: () => disableProduct,
  easings: () => easings,
  enableProduct: () => enableProduct,
  hideProducts: () => hideProducts,
  iconPaths: () => iconPaths,
  mergeWithStandard: () => mergeWithStandard,
  removeBadge: () => removeBadge,
  reorderProducts: () => reorderProducts,
  shadows: () => shadows,
  sidebarTabs: () => sidebarTabs,
  spacing: () => spacing,
  standardMainSidebarSections: () => standardMainSidebarSections,
  standardSettingsSidebarSections: () => standardSettingsSidebarSections,
  transitions: () => transitions,
  typography: () => typography,
  updateProduct: () => updateProduct,
  zIndex: () => zIndex
});
module.exports = __toCommonJS(canary_ui_exports);

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

// components/canary-ui/icons.tsx
var import_react = __toESM(require("@mdi/react"));
var import_js = require("@mdi/js");
var import_jsx_runtime = require("react/jsx-runtime");
var CanaryIcon = {
  // Navigation & UI
  Home: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiHomeOutline, size: props.size || 1, color: props.color, className: props.className }),
  Menu: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiMenu, size: props.size || 1, color: props.color, className: props.className }),
  Close: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiClose, size: props.size || 1, color: props.color, className: props.className }),
  ChevronDown: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiChevronDown, size: props.size || 1, color: props.color, className: props.className }),
  ChevronUp: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiChevronUp, size: props.size || 1, color: props.color, className: props.className }),
  ChevronLeft: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiChevronLeft, size: props.size || 1, color: props.color, className: props.className }),
  ChevronRight: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiChevronRight, size: props.size || 1, color: props.color, className: props.className }),
  ArrowLeft: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiArrowLeft, size: props.size || 1, color: props.color, className: props.className }),
  ArrowRight: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiArrowRight, size: props.size || 1, color: props.color, className: props.className }),
  // User & Account
  Account: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiAccountOutline, size: props.size || 1, color: props.color, className: props.className }),
  AccountCircle: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiAccountCircleOutline, size: props.size || 1, color: props.color, className: props.className }),
  AccountGroup: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiAccountGroupOutline, size: props.size || 1, color: props.color, className: props.className }),
  AccountCheck: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiAccountCheckOutline, size: props.size || 1, color: props.color, className: props.className }),
  AccountMultiple: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiAccountMultipleOutline, size: props.size || 1, color: props.color, className: props.className }),
  Login: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiLogin, size: props.size || 1, color: props.color, className: props.className }),
  Logout: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiLogout, size: props.size || 1, color: props.color, className: props.className }),
  // Settings & Configuration
  Settings: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiCogOutline, size: props.size || 1, color: props.color, className: props.className }),
  Palette: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiPaletteOutline, size: props.size || 1, color: props.color, className: props.className }),
  Puzzle: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiPuzzleOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Documents & Files
  File: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiFileOutline, size: props.size || 1, color: props.color, className: props.className }),
  FileDocument: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiFileDocumentOutline, size: props.size || 1, color: props.color, className: props.className }),
  Folder: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiFolderOutline, size: props.size || 1, color: props.color, className: props.className }),
  Newspaper: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiNewspaperVariantOutline, size: props.size || 1, color: props.color, className: props.className }),
  Compendium: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiNewspaperVariantOutline, size: props.size || 1, color: props.color, className: props.className }),
  BookOpen: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiBookOpenPageVariantOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Financial
  Currency: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiCurrencyUsd, size: props.size || 1, color: props.color, className: props.className }),
  Cash: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiCashMultiple, size: props.size || 1, color: props.color, className: props.className }),
  CreditCard: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiCreditCardOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Communication
  Email: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiEmailOutline, size: props.size || 1, color: props.color, className: props.className }),
  Message: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiMessageOutline, size: props.size || 1, color: props.color, className: props.className }),
  MessageProcessing: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiMessageProcessingOutline, size: props.size || 1, color: props.color, className: props.className }),
  Chat: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiChatOutline, size: props.size || 1, color: props.color, className: props.className }),
  Phone: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiPhoneOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Actions
  Plus: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiPlus, size: props.size || 1, color: props.color, className: props.className }),
  Minus: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiMinus, size: props.size || 1, color: props.color, className: props.className }),
  Pencil: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiPencilOutline, size: props.size || 1, color: props.color, className: props.className }),
  Delete: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiDeleteOutline, size: props.size || 1, color: props.color, className: props.className }),
  Copy: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiContentCopy, size: props.size || 1, color: props.color, className: props.className }),
  Download: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiDownload, size: props.size || 1, color: props.color, className: props.className }),
  Upload: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiUpload, size: props.size || 1, color: props.color, className: props.className }),
  Refresh: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiRefresh, size: props.size || 1, color: props.color, className: props.className }),
  Check: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiCheck, size: props.size || 1, color: props.color, className: props.className }),
  CheckCircle: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiCheckCircleOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Status & Alerts
  Alert: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiAlertCircleOutline, size: props.size || 1, color: props.color, className: props.className }),
  Information: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiInformationOutline, size: props.size || 1, color: props.color, className: props.className }),
  Help: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiHelpCircleOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Business
  TrendingUp: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiTrendingUp, size: props.size || 1, color: props.color, className: props.className }),
  TrendingDown: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiTrendingDown, size: props.size || 1, color: props.color, className: props.className }),
  Chart: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiChartLine, size: props.size || 1, color: props.color, className: props.className }),
  Shield: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiShieldOutline, size: props.size || 1, color: props.color, className: props.className }),
  ShieldAccount: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiShieldAccountOutline, size: props.size || 1, color: props.color, className: props.className }),
  ShieldCheck: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiShieldCheckOutline, size: props.size || 1, color: props.color, className: props.className }),
  // Hospitality
  Restaurant: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiSilverwareForkKnife, size: props.size || 1, color: props.color, className: props.className }),
  Location: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiMapMarker, size: props.size || 1, color: props.color, className: props.className }),
  // Devices
  Tablet: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiTabletCellphone, size: props.size || 1, color: props.color, className: props.className }),
  Cellphone: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiCellphone, size: props.size || 1, color: props.color, className: props.className }),
  Laptop: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiLaptop, size: props.size || 1, color: props.color, className: props.className }),
  Monitor: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default, { path: import_js.mdiMonitor, size: props.size || 1, color: props.color, className: props.className })
};
var iconPaths = {
  home: import_js.mdiHomeOutline,
  menu: import_js.mdiMenu,
  close: import_js.mdiClose,
  chevronDown: import_js.mdiChevronDown,
  chevronUp: import_js.mdiChevronUp,
  chevronLeft: import_js.mdiChevronLeft,
  chevronRight: import_js.mdiChevronRight,
  arrowLeft: import_js.mdiArrowLeft,
  arrowRight: import_js.mdiArrowRight,
  account: import_js.mdiAccountOutline,
  accountCircle: import_js.mdiAccountCircleOutline,
  accountGroup: import_js.mdiAccountGroupOutline,
  accountCheck: import_js.mdiAccountCheckOutline,
  accountMultiple: import_js.mdiAccountMultipleOutline,
  login: import_js.mdiLogin,
  logout: import_js.mdiLogout,
  settings: import_js.mdiCogOutline,
  palette: import_js.mdiPaletteOutline,
  puzzle: import_js.mdiPuzzleOutline,
  file: import_js.mdiFileOutline,
  fileDocument: import_js.mdiFileDocumentOutline,
  folder: import_js.mdiFolderOutline,
  newspaper: import_js.mdiNewspaperVariantOutline,
  compendium: import_js.mdiNewspaperVariantOutline,
  bookOpen: import_js.mdiBookOpenPageVariantOutline,
  currency: import_js.mdiCurrencyUsd,
  cash: import_js.mdiCashMultiple,
  creditCard: import_js.mdiCreditCardOutline,
  email: import_js.mdiEmailOutline,
  message: import_js.mdiMessageOutline,
  messageProcessing: import_js.mdiMessageProcessingOutline,
  chat: import_js.mdiChatOutline,
  phone: import_js.mdiPhoneOutline,
  plus: import_js.mdiPlus,
  minus: import_js.mdiMinus,
  pencil: import_js.mdiPencilOutline,
  delete: import_js.mdiDeleteOutline,
  copy: import_js.mdiContentCopy,
  download: import_js.mdiDownload,
  upload: import_js.mdiUpload,
  refresh: import_js.mdiRefresh,
  check: import_js.mdiCheck,
  checkCircle: import_js.mdiCheckCircleOutline,
  alert: import_js.mdiAlertCircleOutline,
  information: import_js.mdiInformationOutline,
  help: import_js.mdiHelpCircleOutline,
  trendingUp: import_js.mdiTrendingUp,
  trendingDown: import_js.mdiTrendingDown,
  chart: import_js.mdiChartLine,
  shield: import_js.mdiShieldOutline,
  shieldAccount: import_js.mdiShieldAccountOutline,
  shieldCheck: import_js.mdiShieldCheckOutline,
  restaurant: import_js.mdiSilverwareForkKnife,
  location: import_js.mdiMapMarker,
  tablet: import_js.mdiTabletCellphone,
  cellphone: import_js.mdiCellphone,
  laptop: import_js.mdiLaptop,
  monitor: import_js.mdiMonitor
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

// components/canary-ui/loading/CanaryLoading.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("style", { children: `
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      ` }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `inline-block ${className}`, style: spinnerStyle })
  ] });
}

// components/canary-ui/buttons/CanaryButton.tsx
var import_clsx = __toESM(require("clsx"));
var import_jsx_runtime3 = require("react/jsx-runtime");
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
      return size === "tablet" /* TABLET */ ? "px-6" : "px-4";
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
  const buttonClasses = (0, import_clsx.default)(
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
    isDisabled && "cursor-default canary-opacity-50",
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
  const iconClasses = (0, import_clsx.default)(
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
  const content = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        className: (0, import_clsx.default)(
          "button-bg absolute inset-0 transition-opacity duration-200",
          getBackgroundOpacity()
        ),
        style: backgroundStyle
      }
    ),
    isLoading && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CanaryLoading, { color: contentColor, size: 16 }) }),
    isExpanded && icon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: iconClasses, style: contentStyle, children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        className: (0, import_clsx.default)(
          "button-content relative flex items-center justify-center",
          "transition-opacity duration-200",
          iconPosition === "top" /* TOP */ && (size === "tablet" /* TABLET */ ? "flex-col gap-2" : "flex-col gap-1"),
          !isExpanded && iconPosition === "right" /* RIGHT */ && "flex-row-reverse",
          isLoading && "canary-opacity-0"
        ),
        style: contentStyle,
        children: [
          !isExpanded && icon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: iconClasses, children: icon }),
          !isIconType && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children })
        ]
      }
    )
  ] });
  if (href) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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

// components/canary-ui/forms/CanaryInput.tsx
var import_react2 = require("react");

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

// components/canary-ui/forms/CanaryInput.tsx
var import_clsx2 = __toESM(require("clsx"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var CanaryInput = (0, import_react2.forwardRef)(
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
    const inputClasses = (0, import_clsx2.default)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "label",
        {
          className: (0, import_clsx2.default)(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative", children: [
        leftAddon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-20", children: leftAddon }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
        error && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-20", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: "M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",
                fill: colors.error
              }
            )
          }
        ) }),
        rightAddon && !error && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-20", children: rightAddon })
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mt-1 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-[12px] leading-[1.5]", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-[12px] mt-1 leading-[1.5]", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
  }
);
CanaryInput.displayName = "CanaryInput";
var CanaryInput_default = CanaryInput;

// components/canary-ui/forms/CanaryTextArea.tsx
var import_react3 = require("react");
var import_clsx3 = __toESM(require("clsx"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var CanaryTextArea = (0, import_react3.forwardRef)(
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
      ["large" /* LARGE */]: "text-[18px] leading-[1.5] px-3 py-3",
      ["normal" /* NORMAL */]: "text-[14px] leading-[1.5] px-3 py-3",
      ["compact" /* COMPACT */]: "text-[14px] leading-[1.5] px-2 py-2"
    };
    const resizeClasses = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize"
    };
    const textareaClasses = (0, import_clsx3.default)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "label",
        {
          className: (0, import_clsx3.default)(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-[#e40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
      error && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText })
    ] });
  }
);
CanaryTextArea.displayName = "CanaryTextArea";
var CanaryTextArea_default = CanaryTextArea;

// components/canary-ui/forms/CanarySelect.tsx
var import_react4 = require("react");
var import_clsx4 = __toESM(require("clsx"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var CanarySelect = (0, import_react4.forwardRef)(
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
    const selectClasses = (0, import_clsx4.default)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        "label",
        {
          className: (0, import_clsx4.default)(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-[#e40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "select",
          __spreadProps(__spreadValues({
            ref,
            disabled: isDisabled || isReadonly,
            required: isRequired,
            className: selectClasses,
            style: { WebkitAppearance: "none" }
          }, selectProps), {
            children: [
              (placeholder || label) && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "", disabled: true, children: placeholder || label }),
              options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "path",
              {
                d: "M12 5.83L15.17 9L16.58 7.59L12 3L7.41 7.59L8.83 9L12 5.83ZM12 18.17L8.83 15L7.42 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z",
                fill: "#000000"
              }
            )
          }
        ) })
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText })
    ] });
  }
);
CanarySelect.displayName = "CanarySelect";
var CanarySelect_default = CanarySelect;

// components/canary-ui/forms/CanaryCheckbox.tsx
var import_react5 = require("react");
var import_clsx5 = __toESM(require("clsx"));
var import_react6 = __toESM(require("@mdi/react"));
var import_js2 = require("@mdi/js");
var import_jsx_runtime7 = require("react/jsx-runtime");
var CanaryCheckbox = (0, import_react5.forwardRef)(
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
        return import_js2.mdiMinusBox;
      }
      if (inputProps.checked) {
        return import_js2.mdiCheckboxMarked;
      }
      return import_js2.mdiCheckboxBlankOutline;
    };
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "label",
        {
          className: (0, import_clsx5.default)(
            "flex items-center pl-1 pr-2 py-2",
            isDisabled ? "cursor-not-allowed canary-opacity-50" : "cursor-pointer",
            className
          ),
          style: { gap: config.gap },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "input",
              __spreadValues({
                ref,
                type: "checkbox",
                disabled: isDisabled,
                className: "sr-only"
              }, inputProps)
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_react6.default,
              {
                path: getIcon(),
                size: config.iconSize,
                color: colors.colorBlueDark1,
                className: "shrink-0"
              }
            ),
            label && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
      error && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mt-1 ml-8 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-[12px] leading-[1.5]", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-[12px] mt-1 ml-8 leading-[1.5]", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
  }
);
CanaryCheckbox.displayName = "CanaryCheckbox";
var CanaryCheckbox_default = CanaryCheckbox;

// components/canary-ui/forms/CanaryRadio.tsx
var import_react7 = require("react");
var import_clsx6 = __toESM(require("clsx"));
var import_react8 = __toESM(require("@mdi/react"));
var import_js3 = require("@mdi/js");
var import_jsx_runtime8 = require("react/jsx-runtime");
var CanaryRadio = (0, import_react7.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        "label",
        {
          className: (0, import_clsx6.default)(
            "flex items-center pl-1 pr-2 py-2",
            isDisabled ? "cursor-not-allowed canary-opacity-50" : "cursor-pointer",
            className
          ),
          style: { gap: config.gap },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              "input",
              __spreadValues({
                ref,
                type: "radio",
                disabled: isDisabled,
                className: "sr-only"
              }, inputProps)
            ),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              import_react8.default,
              {
                path: inputProps.checked ? import_js3.mdiRadioboxMarked : import_js3.mdiRadioboxBlank,
                size: config.iconSize,
                color: colors.colorBlueDark1,
                className: "shrink-0"
              }
            ),
            label && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
      error && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-1 ml-8 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-[12px] leading-[1.5]", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-[12px] mt-1 ml-8 leading-[1.5]", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
  }
);
CanaryRadio.displayName = "CanaryRadio";
var CanaryRadio_default = CanaryRadio;

// components/canary-ui/forms/CanaryRadioGroup.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function CanaryRadioGroup({
  label,
  children,
  error,
  helperText,
  isRequired = false,
  className = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: `w-full ${className}`, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "block text-[14px] font-medium text-[#2d2d2d] mb-3", children: [
      label,
      isRequired && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-[#e40046] ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "space-y-3", children }),
    error && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-[12px] mt-2", style: { color: colors.danger }, children: error }),
    helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-[12px] text-[#707070] mt-2", children: helperText })
  ] });
}

// components/canary-ui/forms/CanarySwitch.tsx
var import_react9 = require("react");
var import_clsx7 = __toESM(require("clsx"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var CanarySwitch = (0, import_react9.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "label",
      {
        className: (0, import_clsx7.default)(
          "flex items-center",
          isDisabled ? "cursor-not-allowed canary-opacity-50" : "cursor-pointer",
          className
        ),
        style: { gap: config.gap },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "div",
            {
              className: "relative shrink-0 transition-colors duration-200",
              style: {
                width: config.width,
                height: config.height,
                borderRadius: config.height,
                backgroundColor: checked ? colors.colorBlueDark1 : "#666666"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
          label && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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

// components/canary-ui/forms/CanaryInputPassword.tsx
var import_react10 = require("react");
var import_clsx8 = __toESM(require("clsx"));
var import_jsx_runtime11 = require("react/jsx-runtime");
var CanaryInputPassword = (0, import_react10.forwardRef)(
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
    const [showPassword, setShowPassword] = (0, import_react10.useState)(false);
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px] leading-[1.5] px-4 py-3",
      ["large" /* LARGE */]: "h-[48px] text-[18px] leading-[1.5] px-2 py-3",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px] leading-[1.5] px-2",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px] leading-[1.5] px-2"
    };
    const inputClasses = (0, import_clsx8.default)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "label",
        {
          className: (0, import_clsx8.default)(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-[#e40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setShowPassword(!showPassword),
            className: "absolute right-2 top-1/2 -translate-y-1/2 flex items-center cursor-pointer",
            disabled: isDisabled || isReadonly,
            tabIndex: -1,
            children: showPassword ? (
              // Password is visible, show eye-off outline icon (visibility_off)
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "path",
                {
                  d: "M2 5.27 3.28 4 20 20.72 18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58-5 0-9.27-3.11-11-7.5.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3 3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12 9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                }
              ) })
            ) : (
              // Password is hidden, show eye outline icon (visibility)
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "path",
                {
                  d: "M12 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.82 9.82 0 0 0 17.64 0 9.82 9.82 0 0 0-17.64 0"
                }
              ) })
            )
          }
        )
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText })
    ] });
  }
);
CanaryInputPassword.displayName = "CanaryInputPassword";
var CanaryInputPassword_default = CanaryInputPassword;

// components/canary-ui/forms/CanaryInputSearch.tsx
var import_react11 = require("react");
var import_clsx9 = __toESM(require("clsx"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var CanaryInputSearch = (0, import_react11.forwardRef)(
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
    const inputClasses = (0, import_clsx9.default)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        "label",
        {
          className: (0, import_clsx9.default)(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-[#e40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "path",
          {
            d: "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z",
            fill: "#000000"
          }
        ) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
      error && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText })
    ] });
  }
);
CanaryInputSearch.displayName = "CanaryInputSearch";
var CanaryInputSearch_default = CanaryInputSearch;

// components/canary-ui/forms/CanaryInputCreditCard.tsx
var import_react12 = require("react");
var import_clsx10 = __toESM(require("clsx"));
var import_react_payment_inputs = require("react-payment-inputs");
var import_react13 = __toESM(require("@mdi/react"));
var import_js4 = require("@mdi/js");
var import_jsx_runtime13 = require("react/jsx-runtime");
var CanaryInputCreditCard = (0, import_react12.forwardRef)(
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
    const [cardNumber, setCardNumber] = (0, import_react12.useState)("");
    const { meta, getCardNumberProps } = (0, import_react_payment_inputs.usePaymentInputs)();
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px] leading-[1.5] pl-[56px] pr-4 py-3",
      ["large" /* LARGE */]: "h-[48px] text-[18px] leading-[1.5] pl-[48px] pr-2 py-3",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px] leading-[1.5] pl-[40px] pr-2",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px] leading-[1.5] pl-[36px] pr-2"
    };
    const inputClasses = (0, import_clsx10.default)(
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
    const handleCardNumberChange = (0, import_react12.useCallback)((e) => {
      var _a2;
      const value = e.target.value;
      setCardNumber(value);
      if (onCardChange) {
        onCardChange(value, ((_a2 = meta.cardType) == null ? void 0 : _a2.displayName) || "unknown");
      }
    }, [meta.cardType, onCardChange]);
    const getCardIcon = () => {
      var _a2;
      const cardType = (_a2 = meta.cardType) == null ? void 0 : _a2.type;
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_react13.default,
        {
          path: cardNumber ? import_js4.mdiCreditCard : import_js4.mdiCreditCardOutline,
          size: 1,
          color: "#000000"
        }
      );
    };
    const cardNumberProps = getCardNumberProps({
      onChange: handleCardNumberChange
    });
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        "label",
        {
          className: (0, import_clsx10.default)(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-[#e40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none", children: getCardIcon() }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      error && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText }),
      meta.cardType && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("p", { className: "text-[10px] text-[#999999] mt-1", children: [
        "Detected: ",
        meta.cardType.displayName
      ] })
    ] });
  }
);
CanaryInputCreditCard.displayName = "CanaryInputCreditCard";
var CanaryInputCreditCard_default = CanaryInputCreditCard;

// components/canary-ui/forms/CanaryInputPhone.tsx
var import_react14 = require("react");
var import_clsx11 = __toESM(require("clsx"));
var import_intl_tel_input = __toESM(require("intl-tel-input"));
var import_intlTelInput = require("intl-tel-input/build/css/intlTelInput.css");
var import_jsx_runtime14 = require("react/jsx-runtime");
var CanaryInputPhone = (0, import_react14.forwardRef)(
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
    const inputRef = (0, import_react14.useRef)(null);
    const itiRef = (0, import_react14.useRef)(null);
    (0, import_react14.useImperativeHandle)(ref, () => inputRef.current);
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    (0, import_react14.useEffect)(() => {
      if (!inputRef.current || itiRef.current) return;
      itiRef.current = (0, import_intl_tel_input.default)(inputRef.current, {
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
        const currentInput = inputRef.current;
        if (currentInput) {
          currentInput.removeEventListener("blur", handleChange);
          currentInput.removeEventListener("change", handleChange);
          currentInput.removeEventListener("keyup", handleChange);
        }
        if (itiRef.current) {
          itiRef.current.destroy();
          itiRef.current = null;
        }
      };
    }, [defaultCountry, onChange]);
    (0, import_react14.useEffect)(() => {
      if (inputRef.current && value !== void 0 && inputRef.current.value !== value) {
        inputRef.current.value = value;
      }
    }, [value]);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "label",
        {
          className: (0, import_clsx11.default)(
            "block text-black",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: (0, import_clsx11.default)("canary-phone-input-wrapper", className), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "input",
        {
          ref: inputRef,
          type: "tel",
          disabled: isDisabled,
          required: isRequired,
          placeholder,
          className: (0, import_clsx11.default)(
            "w-full rounded border font-['Roboto',sans-serif]",
            "transition-[border-color,background-color] duration-200",
            sizeClasses[size],
            error ? "border-[#E40046] focus:outline focus:outline-2 focus:outline-[#E40046] focus:outline-offset-[-1px]" : "border-[#666666] focus:outline focus:outline-2 focus:outline-[#2858c4] focus:outline-offset-[-1px]",
            isDisabled && "bg-[#E5E5E5] cursor-not-allowed"
          )
        }
      ) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5]", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5]", children: helperText }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("style", { dangerouslySetInnerHTML: { __html: `
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

// components/canary-ui/forms/CanaryInputDate.tsx
var import_react15 = require("react");
var import_clsx12 = __toESM(require("clsx"));
var import_jsx_runtime15 = require("react/jsx-runtime");
var CanaryInputDate = (0, import_react15.forwardRef)(
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
    const [month, setMonth] = (0, import_react15.useState)("");
    const [day, setDay] = (0, import_react15.useState)("");
    const [year, setYear] = (0, import_react15.useState)("");
    const monthRef = (0, import_react15.useRef)(null);
    const dayRef = (0, import_react15.useRef)(null);
    const yearRef = (0, import_react15.useRef)(null);
    (0, import_react15.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: (0, import_clsx12.default)("w-full", className), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
        "label",
        {
          className: (0, import_clsx12.default)(
            "block text-black font-['Roboto',sans-serif] font-normal",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
        "div",
        {
          ref,
          className: (0, import_clsx12.default)(
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
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
                className: (0, import_clsx12.default)(
                  "w-8 bg-transparent outline-none border-none text-center",
                  "placeholder:text-gray-400",
                  isDisabled && "cursor-not-allowed"
                ),
                "aria-label": "Month"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "text-gray-500 select-none", children: "/" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
                className: (0, import_clsx12.default)(
                  "w-8 bg-transparent outline-none border-none text-center",
                  "placeholder:text-gray-400",
                  isDisabled && "cursor-not-allowed"
                ),
                "aria-label": "Day"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "text-gray-500 select-none", children: "/" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
                className: (0, import_clsx12.default)(
                  "w-12 bg-transparent outline-none border-none text-center",
                  "placeholder:text-gray-400",
                  isDisabled && "cursor-not-allowed"
                ),
                "aria-label": "Year"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "ml-auto flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                className: iconSizes[size],
                fill: isDisabled ? colors.colorBlack3 : colors.colorBlack1,
                children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { d: "M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" })
              }
            ) }),
            error && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex items-center ml-2", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
      error && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mt-1 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[12px] leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[12px] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
  }
);
CanaryInputDate.displayName = "CanaryInputDate";
var CanaryInputDate_default = CanaryInputDate;

// components/canary-ui/forms/CanaryInputDateRange.tsx
var import_react16 = require("react");
var import_clsx13 = __toESM(require("clsx"));
var import_jsx_runtime16 = require("react/jsx-runtime");
var CanaryInputDateRange = (0, import_react16.forwardRef)(
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
    const [startMonth, setStartMonth] = (0, import_react16.useState)("");
    const [startDay, setStartDay] = (0, import_react16.useState)("");
    const [startYear, setStartYear] = (0, import_react16.useState)("");
    const [endMonth, setEndMonth] = (0, import_react16.useState)("");
    const [endDay, setEndDay] = (0, import_react16.useState)("");
    const [endYear, setEndYear] = (0, import_react16.useState)("");
    const startMonthRef = (0, import_react16.useRef)(null);
    const startDayRef = (0, import_react16.useRef)(null);
    const startYearRef = (0, import_react16.useRef)(null);
    const endMonthRef = (0, import_react16.useRef)(null);
    const endDayRef = (0, import_react16.useRef)(null);
    const endYearRef = (0, import_react16.useRef)(null);
    (0, import_react16.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: (0, import_clsx13.default)("w-full", className), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
        "label",
        {
          className: (0, import_clsx13.default)(
            "block text-black font-['Roboto',sans-serif] font-normal",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%] mb-2",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px] mb-1",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[18px] mb-1"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
        "div",
        {
          ref,
          className: (0, import_clsx13.default)(
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
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center gap-0.5 shrink-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
                  className: (0, import_clsx13.default)(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Start Month"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-gray-500 select-none", children: "/" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
                  className: (0, import_clsx13.default)(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Start Day"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-gray-500 select-none", children: "/" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
                  className: (0, import_clsx13.default)(
                    "w-12 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Start Year"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-gray-500 select-none shrink-0 mx-1", children: "\u2014" }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center gap-0.5 shrink-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
                  className: (0, import_clsx13.default)(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "End Month"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-gray-500 select-none", children: "/" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
                  className: (0, import_clsx13.default)(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "End Day"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-gray-500 select-none", children: "/" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
                  className: (0, import_clsx13.default)(
                    "w-12 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "End Year"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "ml-auto flex items-center shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                className: iconSizes[size],
                fill: isDisabled ? colors.colorBlack3 : colors.colorBlack1,
                children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" })
              }
            ) }),
            error && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex items-center ml-2 shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
      error && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "mt-1 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-[12px] leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-[12px] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
  }
);
CanaryInputDateRange.displayName = "CanaryInputDateRange";
var CanaryInputDateRange_default = CanaryInputDateRange;

// components/canary-ui/forms/CanaryInputUnderline.tsx
var import_react17 = require("react");
var import_clsx14 = __toESM(require("clsx"));
var import_react18 = __toESM(require("@mdi/react"));
var import_js5 = require("@mdi/js");
var import_jsx_runtime17 = require("react/jsx-runtime");
var CanaryInputUnderline = (0, import_react17.forwardRef)(
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
    const [isFocused, setIsFocused] = (0, import_react17.useState)(false);
    const [hasValue, setHasValue] = (0, import_react17.useState)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: (0, import_clsx14.default)("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
        "label",
        {
          className: (0, import_clsx14.default)(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
            className: (0, import_clsx14.default)(
              "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
              "border-0 border-b border-solid",
              "transition-[border-color,background-color,padding] duration-200",
              "outline-none",
              sizeClasses[size],
              // Padding - 8px horizontal when focused
              isFocused ? "px-2 py-2" : "px-0 py-0",
              // Border styles
              isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)] px-2" : "border-b border-black bg-white",
              isDisabled && "canary-opacity-50",
              // Add padding-right for error icon
              error && "pr-10"
            )
          })
        ),
        error && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react18.default, { path: import_js5.mdiAlertCircleOutline, size: "24px", color: "#E40046" }) })
      ] }) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-[12px] text-[#666666] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanaryInputUnderline.displayName = "CanaryInputUnderline";
var CanaryInputUnderline_default = CanaryInputUnderline;

// components/canary-ui/forms/CanaryTextAreaUnderline.tsx
var import_react19 = require("react");
var import_clsx15 = __toESM(require("clsx"));
var import_react20 = __toESM(require("@mdi/react"));
var import_js6 = require("@mdi/js");
var import_jsx_runtime18 = require("react/jsx-runtime");
var CanaryTextAreaUnderline = (0, import_react19.forwardRef)(
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
    const [isFocused, setIsFocused] = (0, import_react19.useState)(false);
    const [hasValue, setHasValue] = (0, import_react19.useState)(!!(value || defaultValue));
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: (0, import_clsx15.default)("w-full flex flex-col gap-1", className), children: [
      label && showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
        "label",
        {
          className: (0, import_clsx15.default)(
            "block text-black font-['Roboto',sans-serif] font-normal",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "relative flex items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
            className: (0, import_clsx15.default)(
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
              !showLabelAbove && "canary-opacity-50",
              isDisabled && "canary-opacity-50",
              // Add padding-right for error icon
              error && "pr-10"
            )
          })
        ),
        error && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "absolute right-2 top-2 w-6 h-6 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          import_react20.default,
          {
            path: import_js6.mdiAlertCircleOutline,
            size: "24px",
            color: "#E40046"
          }
        ) })
      ] }) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-[12px] text-[#666666] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanaryTextAreaUnderline.displayName = "CanaryTextAreaUnderline";
var CanaryTextAreaUnderline_default = CanaryTextAreaUnderline;

// components/canary-ui/forms/CanarySelectUnderline.tsx
var import_react21 = require("react");
var import_clsx16 = __toESM(require("clsx"));
var import_react22 = __toESM(require("@mdi/react"));
var import_js7 = require("@mdi/js");
var import_jsx_runtime19 = require("react/jsx-runtime");
var CanarySelectUnderline = (0, import_react21.forwardRef)(
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
    const [isFocused, setIsFocused] = (0, import_react21.useState)(false);
    const [hasValue, setHasValue] = (0, import_react21.useState)(!!(value || defaultValue));
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: (0, import_clsx16.default)("w-full flex flex-col gap-1", className), children: [
      label && showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
        "label",
        {
          className: (0, import_clsx16.default)(
            "block text-black font-['Roboto',sans-serif] font-normal",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
          "select",
          __spreadProps(__spreadValues({
            ref,
            disabled: isDisabled,
            required: isRequired,
            value,
            defaultValue,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            style: { WebkitAppearance: "none" }
          }, selectProps), {
            className: (0, import_clsx16.default)(
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
              !showLabelAbove && "canary-opacity-50",
              isDisabled && "canary-opacity-50",
              // Add extra padding-right for error icon
              error && "pr-16"
            ),
            children: [
              (placeholder || label) && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "", disabled: true, children: placeholder || label }),
              options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: (0, import_clsx16.default)(
          "absolute top-1/2 -translate-y-1/2 pointer-events-none",
          error ? "right-8" : "right-2"
        ), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              "path",
              {
                d: "M12 5.83L15.17 9L16.58 7.59L12 3L7.41 7.59L8.83 9L12 5.83ZM12 18.17L8.83 15L7.42 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z",
                fill: "#000000"
              }
            )
          }
        ) }),
        error && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_react22.default,
          {
            path: import_js7.mdiAlertCircleOutline,
            size: "24px",
            color: "#E40046"
          }
        ) })
      ] }) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-[12px] text-[#666666] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanarySelectUnderline.displayName = "CanarySelectUnderline";
var CanarySelectUnderline_default = CanarySelectUnderline;

// components/canary-ui/forms/CanaryInputPhoneUnderline.tsx
var import_react23 = require("react");
var import_clsx17 = __toESM(require("clsx"));
var import_intl_tel_input2 = __toESM(require("intl-tel-input"));
var import_intlTelInput2 = require("intl-tel-input/build/css/intlTelInput.css");
var import_react24 = __toESM(require("@mdi/react"));
var import_js8 = require("@mdi/js");
var import_jsx_runtime20 = require("react/jsx-runtime");
var CanaryInputPhoneUnderline = (0, import_react23.forwardRef)(
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
    const inputRef = (0, import_react23.useRef)(null);
    const itiRef = (0, import_react23.useRef)(null);
    const [isFocused, setIsFocused] = (0, import_react23.useState)(false);
    const [hasValue, setHasValue] = (0, import_react23.useState)(!!value);
    (0, import_react23.useImperativeHandle)(ref, () => inputRef.current);
    const sizeClasses = {
      ["tablet" /* TABLET */]: "h-[64px] text-[24px]",
      ["large" /* LARGE */]: "h-[48px] text-[18px]",
      ["normal" /* NORMAL */]: "h-[40px] text-[14px]",
      ["compact" /* COMPACT */]: "h-[32px] text-[14px]"
    };
    const showLabelAbove = isFocused || hasValue;
    (0, import_react23.useEffect)(() => {
      if (!inputRef.current || itiRef.current) return;
      itiRef.current = (0, import_intl_tel_input2.default)(inputRef.current, {
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
        const currentInput = inputRef.current;
        if (currentInput) {
          currentInput.removeEventListener("focus", handleFocus);
          currentInput.removeEventListener("blur", handleBlur);
          currentInput.removeEventListener("change", handleChange);
          currentInput.removeEventListener("keyup", handleChange);
        }
        if (itiRef.current) {
          itiRef.current.destroy();
          itiRef.current = null;
        }
      };
    }, [defaultCountry, onChange]);
    (0, import_react23.useEffect)(() => {
      if (inputRef.current && value !== void 0 && inputRef.current.value !== value) {
        inputRef.current.value = value;
        setHasValue(!!value);
      }
    }, [value]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: (0, import_clsx17.default)("w-full flex flex-col gap-1", className), children: [
      label && showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
        "label",
        {
          className: (0, import_clsx17.default)(
            "block text-black font-['Roboto',sans-serif] font-normal",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: (0, import_clsx17.default)("canary-phone-input-underline-wrapper relative"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "input",
          {
            ref: inputRef,
            type: "tel",
            disabled: isDisabled,
            required: isRequired,
            placeholder: showLabelAbove ? placeholder : label || placeholder,
            className: (0, import_clsx17.default)(
              "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
              "border-0 border-b border-solid",
              "transition-[border-color,background-color,padding] duration-200",
              "outline-none",
              sizeClasses[size],
              // Border and background styles
              isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)]" : "border-b border-black bg-white",
              // Text opacity
              !showLabelAbove && "canary-opacity-50",
              isDisabled && "canary-opacity-50",
              // Padding for error icon
              error && "pr-10"
            )
          }
        ),
        error && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center z-10", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react24.default, { path: import_js8.mdiAlertCircleOutline, size: "24px", color: "#E40046" }) })
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-[12px] text-[#666666] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("style", { dangerouslySetInnerHTML: { __html: `
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
            padding-left: 8px;
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

// components/canary-ui/forms/CanaryInputPasswordUnderline.tsx
var import_react25 = require("react");
var import_clsx18 = __toESM(require("clsx"));
var import_jsx_runtime21 = require("react/jsx-runtime");
var CanaryInputPasswordUnderline = (0, import_react25.forwardRef)(
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
    const [showPassword, setShowPassword] = (0, import_react25.useState)(false);
    const [isFocused, setIsFocused] = (0, import_react25.useState)(false);
    const [hasValue, setHasValue] = (0, import_react25.useState)(!!(value || defaultValue));
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
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: (0, import_clsx18.default)("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
        "label",
        {
          className: (0, import_clsx18.default)(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "text-[#E40046] ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
            className: (0, import_clsx18.default)(
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
              isDisabled && "canary-opacity-50"
            )
          })
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setShowPassword(!showPassword),
            className: "absolute right-2 top-1/2 -translate-y-1/2 flex items-center cursor-pointer",
            disabled: isDisabled,
            tabIndex: -1,
            children: showPassword ? (
              // Password is visible, show eye-off outline icon (visibility_off)
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                "path",
                {
                  d: "M2 5.27 3.28 4 20 20.72 18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58-5 0-9.27-3.11-11-7.5.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3 3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12 9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                }
              ) })
            ) : (
              // Password is hidden, show eye outline icon (visibility)
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                "path",
                {
                  d: "M12 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.82 9.82 0 0 0 17.64 0 9.82 9.82 0 0 0-17.64 0"
                }
              ) })
            )
          }
        )
      ] }) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mt-1 bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanaryInputPasswordUnderline.displayName = "CanaryInputPasswordUnderline";
var CanaryInputPasswordUnderline_default = CanaryInputPasswordUnderline;

// components/canary-ui/forms/CanaryInputSearchUnderline.tsx
var import_react26 = require("react");
var import_clsx19 = __toESM(require("clsx"));
var import_jsx_runtime22 = require("react/jsx-runtime");
var CanaryInputSearchUnderline = (0, import_react26.forwardRef)(
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
    const [isFocused, setIsFocused] = (0, import_react26.useState)(false);
    const [hasValue, setHasValue] = (0, import_react26.useState)(!!(value || defaultValue));
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
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: (0, import_clsx19.default)("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
        "label",
        {
          className: (0, import_clsx19.default)(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 flex items-center w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "path",
          {
            d: "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z",
            fill: colors.colorBlack1
          }
        ) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
            className: (0, import_clsx19.default)(
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
              isDisabled && "canary-opacity-50"
            )
          })
        )
      ] }) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mt-1 bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanaryInputSearchUnderline.displayName = "CanaryInputSearchUnderline";
var CanaryInputSearchUnderline_default = CanaryInputSearchUnderline;

// components/canary-ui/forms/CanaryInputCreditCardUnderline.tsx
var import_react27 = require("react");
var import_clsx20 = __toESM(require("clsx"));
var import_react_payment_inputs2 = require("react-payment-inputs");
var import_react28 = __toESM(require("@mdi/react"));
var import_js9 = require("@mdi/js");
var import_jsx_runtime23 = require("react/jsx-runtime");
var CanaryInputCreditCardUnderline = (0, import_react27.forwardRef)(
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
    const [cardNumber, setCardNumber] = (0, import_react27.useState)("");
    const { meta, getCardNumberProps } = (0, import_react_payment_inputs2.usePaymentInputs)();
    const [isFocused, setIsFocused] = (0, import_react27.useState)(false);
    const [hasValue, setHasValue] = (0, import_react27.useState)(!!(value || defaultValue || cardNumber));
    const handleFocus = (e) => {
      setIsFocused(true);
      onFocus == null ? void 0 : onFocus(e);
    };
    const handleBlur = (e) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur == null ? void 0 : onBlur(e);
    };
    const handleCardNumberChange = (0, import_react27.useCallback)((e) => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: (0, import_clsx20.default)("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
        "label",
        {
          className: (0, import_clsx20.default)(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 flex items-center w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          import_react28.default,
          {
            path: ((_a2 = meta.cardType) == null ? void 0 : _a2.type) ? import_js9.mdiCreditCard : import_js9.mdiCreditCardOutline,
            size: "24px",
            color: colors.colorBlack1
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "input",
          __spreadProps(__spreadValues({
            ref,
            type: "text",
            disabled: isDisabled,
            required: isRequired
          }, cardNumberProps), {
            placeholder: !showLabelAbove ? label : "",
            className: (0, import_clsx20.default)(
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
              isDisabled && "canary-opacity-50"
            )
          })
        )
      ] }) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mt-1 bg-[#fce6ed] px-2 py-[2px] rounded inline-block", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal", children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-[12px] text-[#666666] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", children: helperText })
    ] });
  }
);
CanaryInputCreditCardUnderline.displayName = "CanaryInputCreditCardUnderline";
var CanaryInputCreditCardUnderline_default = CanaryInputCreditCardUnderline;

// components/canary-ui/forms/CanaryInputDateUnderline.tsx
var import_react29 = require("react");
var import_clsx21 = __toESM(require("clsx"));
var import_jsx_runtime24 = require("react/jsx-runtime");
var CanaryInputDateUnderline = (0, import_react29.forwardRef)(
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
    const [month, setMonth] = (0, import_react29.useState)("");
    const [day, setDay] = (0, import_react29.useState)("");
    const [year, setYear] = (0, import_react29.useState)("");
    const [isFocused, setIsFocused] = (0, import_react29.useState)(false);
    const monthRef = (0, import_react29.useRef)(null);
    const dayRef = (0, import_react29.useRef)(null);
    const yearRef = (0, import_react29.useRef)(null);
    (0, import_react29.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: (0, import_clsx21.default)("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
        "label",
        {
          className: (0, import_clsx21.default)(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
        "div",
        {
          ref,
          className: (0, import_clsx21.default)(
            "relative flex items-center gap-0.5",
            "border-0 border-b border-solid",
            "transition-[border-color,background-color,padding] duration-200",
            "font-['Roboto',sans-serif] font-normal leading-[1.5]",
            sizeClasses[size],
            // Padding
            isFocused ? "px-2 py-2" : "px-0 py-0",
            // Border and background styles
            isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)]" : "border-b border-black bg-white",
            isDisabled && "canary-opacity-50"
          ),
          onFocus: handleFocus,
          onBlur: handleBlur,
          tabIndex: 0,
          children: [
            !showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "absolute left-0 text-gray-500 pointer-events-none", children: label }),
            showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
                  className: (0, import_clsx21.default)(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Month",
                  tabIndex: -1
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
                  className: (0, import_clsx21.default)(
                    "w-8 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Day",
                  tabIndex: -1
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
                  className: (0, import_clsx21.default)(
                    "w-12 bg-transparent outline-none border-none text-center",
                    "placeholder:text-gray-400",
                    isDisabled && "cursor-not-allowed"
                  ),
                  "aria-label": "Year",
                  tabIndex: -1
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "ml-auto flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                className: iconSizes[size],
                fill: isDisabled ? colors.colorBlack3 : colors.colorBlack1,
                children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" })
              }
            ) })
          ]
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mt-1 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-[12px] leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-[12px] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.colorBlack3 }, children: helperText })
    ] });
  }
);
CanaryInputDateUnderline.displayName = "CanaryInputDateUnderline";
var CanaryInputDateUnderline_default = CanaryInputDateUnderline;

// components/canary-ui/forms/CanaryInputDateRangeUnderline.tsx
var import_react30 = require("react");
var import_clsx22 = __toESM(require("clsx"));
var import_jsx_runtime25 = require("react/jsx-runtime");
var CanaryInputDateRangeUnderline = (0, import_react30.forwardRef)(
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
    const [startMonth, setStartMonth] = (0, import_react30.useState)("");
    const [startDay, setStartDay] = (0, import_react30.useState)("");
    const [startYear, setStartYear] = (0, import_react30.useState)("");
    const [endMonth, setEndMonth] = (0, import_react30.useState)("");
    const [endDay, setEndDay] = (0, import_react30.useState)("");
    const [endYear, setEndYear] = (0, import_react30.useState)("");
    const [isFocused, setIsFocused] = (0, import_react30.useState)(false);
    const startMonthRef = (0, import_react30.useRef)(null);
    const startDayRef = (0, import_react30.useRef)(null);
    const startYearRef = (0, import_react30.useRef)(null);
    const endMonthRef = (0, import_react30.useRef)(null);
    const endDayRef = (0, import_react30.useRef)(null);
    const endYearRef = (0, import_react30.useRef)(null);
    (0, import_react30.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: (0, import_clsx22.default)("w-full", className), children: [
      label && showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
        "label",
        {
          className: (0, import_clsx22.default)(
            "block text-black font-['Roboto',sans-serif] font-normal mb-1",
            "transition-all duration-200 ease-out",
            size === "tablet" /* TABLET */ && "text-[20px] leading-[150%]",
            size === "large" /* LARGE */ && "text-[14px] leading-[21px]",
            (size === "normal" /* NORMAL */ || size === "compact" /* COMPACT */) && "text-[12px] leading-[1.5]"
          ),
          children: [
            label,
            isRequired && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "ml-1", style: { color: colors.error }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
        "div",
        {
          ref,
          className: (0, import_clsx22.default)(
            "relative flex items-center gap-1",
            "border-0 border-b border-solid",
            "transition-[border-color,background-color,padding] duration-200",
            "font-['Roboto',sans-serif] font-normal leading-[1.5]",
            sizeClasses[size],
            // Padding
            isFocused ? "px-2 py-2" : "px-0 py-0",
            // Border and background styles
            isDisabled ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed" : error ? isFocused ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]" : "border-b-2 border-[#E40046] bg-white" : isFocused ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)]" : "border-b border-black bg-white",
            isDisabled && "canary-opacity-50"
          ),
          onFocus: handleFocus,
          onBlur: handleBlur,
          tabIndex: 0,
          children: [
            !showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "absolute left-0 text-gray-500 pointer-events-none", children: label }),
            showLabelAbove && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center gap-0.5 shrink-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
                    className: (0, import_clsx22.default)(
                      "w-8 bg-transparent outline-none border-none text-center",
                      "placeholder:text-gray-400",
                      isDisabled && "cursor-not-allowed"
                    ),
                    "aria-label": "Start Month",
                    tabIndex: -1
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
                    className: (0, import_clsx22.default)(
                      "w-8 bg-transparent outline-none border-none text-center",
                      "placeholder:text-gray-400",
                      isDisabled && "cursor-not-allowed"
                    ),
                    "aria-label": "Start Day",
                    tabIndex: -1
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
                    className: (0, import_clsx22.default)(
                      "w-12 bg-transparent outline-none border-none text-center",
                      "placeholder:text-gray-400",
                      isDisabled && "cursor-not-allowed"
                    ),
                    "aria-label": "Start Year",
                    tabIndex: -1
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-gray-400 select-none shrink-0", children: "\u2014" }),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center gap-0.5 shrink-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
                    className: (0, import_clsx22.default)(
                      "w-8 bg-transparent outline-none border-none text-center",
                      "placeholder:text-gray-400",
                      isDisabled && "cursor-not-allowed"
                    ),
                    "aria-label": "End Month",
                    tabIndex: -1
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
                    className: (0, import_clsx22.default)(
                      "w-8 bg-transparent outline-none border-none text-center",
                      "placeholder:text-gray-400",
                      isDisabled && "cursor-not-allowed"
                    ),
                    "aria-label": "End Day",
                    tabIndex: -1
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-gray-400 select-none text-sm", children: "/" }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
                    className: (0, import_clsx22.default)(
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
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "ml-auto flex items-center shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                className: iconSizes[size],
                fill: isDisabled ? colors.colorBlack3 : colors.colorBlack1,
                children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" })
              }
            ) })
          ]
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "mt-1 inline-block px-2 py-[2px] rounded", style: { backgroundColor: colors.colorRed5 }, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-[12px] leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.error }, children: error }) }),
      helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-[12px] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal", style: { color: colors.colorBlack3 }, children: helperText })
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

// components/canary-ui/data-display/CanaryTag.tsx
var import_clsx23 = __toESM(require("clsx"));
var import_jsx_runtime26 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "div",
    {
      className: (0, import_clsx23.default)(
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
        leadingIcon && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "w-3 h-3 flex items-center justify-center", style: { color: iconColor }, children: leadingIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: label }),
        trailingIcon && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "w-3 h-3 flex items-center justify-center", style: { color: iconColor }, children: trailingIcon })
      ]
    }
  );
}

// components/canary-ui/data-display/CanaryTable.tsx
var import_clsx24 = __toESM(require("clsx"));
var import_jsx_runtime27 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: `w-full p-8 text-center ${className}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "inline-block w-8 h-8 border-4 border-[#2858c4] border-t-transparent rounded-full animate-spin" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "mt-4 text-[14px] text-[#707070]", children: "Loading..." })
    ] });
  }
  if (data.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: `w-full p-8 text-center ${className}`, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "text-[14px] text-[#707070]", children: emptyMessage }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: `w-full overflow-x-auto ${className}`, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("table", { className: "w-full border-separate", style: { borderSpacing: 0 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("tr", { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "th",
      {
        className: (0, import_clsx24.default)(
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
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("td", { colSpan: columns.length, className: "h-2" }) }),
      data.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "tr",
        {
          className: (0, import_clsx24.default)(
            "transition-colors",
            onRowClick && "cursor-pointer hover:bg-[#fafafa]"
          ),
          onClick: () => onRowClick == null ? void 0 : onRowClick(row, rowIndex),
          children: columns.map((column, colIndex) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
            "td",
            {
              className: (0, import_clsx24.default)(
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

// components/canary-ui/data-display/CanaryCard.tsx
var import_clsx25 = __toESM(require("clsx"));
var import_jsx_runtime28 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    "div",
    {
      className: (0, import_clsx25.default)(
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
        (title || subtitle) && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: (0, import_clsx25.default)("border-b", paddingClasses[padding]), style: { borderColor: colors.colorBlack6 }, children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("h3", { className: "text-[18px] font-semibold", style: { color: colors.colorBlack1 }, children: title }),
          subtitle && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-[14px] mt-1", style: { color: colors.colorBlack3 }, children: subtitle })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: paddingClasses[padding], children }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          "div",
          {
            className: (0, import_clsx25.default)("border-t", paddingClasses[padding]),
            style: { borderColor: colors.colorBlack6 },
            children: footer
          }
        )
      ]
    }
  );
}

// components/canary-ui/data-display/CanaryListItem.tsx
var import_react31 = require("react");
var import_clsx26 = __toESM(require("clsx"));
var import_react32 = __toESM(require("@mdi/react"));
var import_js10 = require("@mdi/js");
var import_jsx_runtime29 = require("react/jsx-runtime");
var CanaryListItem = (0, import_react31.forwardRef)(
  ({
    children,
    title,
    subtitle,
    description,
    icon,
    leftContent,
    rightContent,
    onClick,
    href,
    target = "_self",
    isClickable = true,
    isDraggable = false,
    className = "",
    padding = "normal",
    alignment = "center",
    isSelected = false,
    backgroundColor,
    hoverColor,
    selectedBackgroundColor,
    selectedTitleColor,
    selectedSubtitleColor,
    selectedDescriptionColor,
    allowTextWrap = false
  }, ref) => {
    const paddingClasses = {
      normal: "px-4 py-4",
      compact: "px-4 py-2"
    };
    const alignmentClasses = {
      center: "items-center",
      start: "items-start"
    };
    const bgColor = isSelected ? selectedBackgroundColor || colors.colorBlueDark1 : backgroundColor || "transparent";
    const titleColor = isSelected ? selectedTitleColor || colors.colorWhite : colors.colorBlack1;
    const subtitleColor = isSelected ? selectedSubtitleColor || colors.colorWhite : colors.colorBlack3;
    const descriptionColor = isSelected ? selectedDescriptionColor || "#93ABE1" : "#707070";
    const content = children || /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
      isDraggable && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex items-center cursor-grab dragHandle", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react32.default, { path: import_js10.mdiDrag, size: 0.8, color: colors.colorBlack1 }) }),
      icon && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex items-center", children: icon }),
      leftContent && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex items-center flex-shrink-0", children: leftContent }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex flex-col flex-1 min-w-0 gap-0.5", children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          "div",
          {
            className: (0, import_clsx26.default)(
              "text-sm font-medium",
              !allowTextWrap && "truncate"
            ),
            style: { color: titleColor },
            children: title
          }
        ),
        subtitle && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          "div",
          {
            className: (0, import_clsx26.default)("text-xs", !allowTextWrap && "truncate"),
            style: { color: subtitleColor },
            children: subtitle
          }
        ),
        description && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          "div",
          {
            className: (0, import_clsx26.default)("text-xs", !allowTextWrap && "truncate"),
            style: { color: descriptionColor },
            children: description
          }
        )
      ] }),
      rightContent && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex items-center flex-shrink-0", children: rightContent })
    ] });
    const WrapperComponent = href && isClickable ? "a" : "div";
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      "li",
      {
        ref,
        role: isClickable ? "button" : void 0,
        tabIndex: isClickable ? 0 : void 0,
        className: (0, import_clsx26.default)("list-none canary-list-item", className),
        children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          WrapperComponent,
          __spreadProps(__spreadValues({
            href,
            target: href ? target : void 0,
            className: (0, import_clsx26.default)(
              "flex flex-row w-full gap-4",
              paddingClasses[padding],
              alignmentClasses[alignment],
              isClickable && "cursor-pointer",
              isSelected && "hover:opacity-90"
            ),
            style: {
              backgroundColor: bgColor,
              transition: "background-color 0.3s ease"
            },
            onMouseEnter: (e) => {
              if (isClickable && !isSelected) {
                e.currentTarget.style.backgroundColor = hoverColor || colors.colorBlack8;
              }
            },
            onMouseLeave: (e) => {
              if (isClickable && !isSelected) {
                e.currentTarget.style.backgroundColor = bgColor;
              }
            },
            onClick
          }, WrapperComponent === "a" ? {} : { role: isClickable ? "button" : void 0 }), {
            children: content
          })
        )
      }
    );
  }
);
CanaryListItem.displayName = "CanaryListItem";
var CanaryListItem_default = CanaryListItem;

// components/canary-ui/data-display/CanaryList.tsx
var import_react33 = require("react");
var import_clsx27 = __toESM(require("clsx"));
var import_core = require("@dnd-kit/core");
var import_sortable = require("@dnd-kit/sortable");
var import_utilities = require("@dnd-kit/utilities");
var import_framer_motion = require("framer-motion");
var import_jsx_runtime30 = require("react/jsx-runtime");
function SortableItem({ id, children, isDraggable, isLast }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = (0, import_sortable.useSortable)({ id, disabled: !isDraggable });
  const style = {
    transform: import_utilities.CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    borderBottom: isLast ? "none" : `1px solid ${colors.colorBlack6}`
  };
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    import_framer_motion.motion.div,
    __spreadProps(__spreadValues(__spreadValues({
      ref: setNodeRef,
      style,
      initial: { opacity: 0, y: -8 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -8 },
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
    }, attributes), isDraggable ? listeners : {}), {
      children
    })
  );
}
var CanaryList = ({
  children,
  items,
  isDraggable = false,
  onReorder,
  className = "",
  hasOuterBorder = false,
  isLoading = false,
  loadingContent,
  isEmpty = false,
  emptyContent,
  hasError = false,
  errorContent
}) => {
  const [activeId, setActiveId] = (0, import_react33.useState)(null);
  const [internalItems, setInternalItems] = (0, import_react33.useState)(items || []);
  const sensors = (0, import_core.useSensors)(
    (0, import_core.useSensor)(import_core.PointerSensor),
    (0, import_core.useSensor)(import_core.KeyboardSensor, {
      coordinateGetter: import_sortable.sortableKeyboardCoordinates
    })
  );
  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const currentItems2 = items || internalItems;
      const oldIndex = currentItems2.findIndex((item) => item.id === active.id);
      const newIndex = currentItems2.findIndex((item) => item.id === over.id);
      const reorderedItems = (0, import_sortable.arrayMove)(currentItems2, oldIndex, newIndex);
      if (onReorder) {
        onReorder(reorderedItems);
      } else {
        setInternalItems(reorderedItems);
      }
    }
    setActiveId(null);
  };
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "div",
      {
        className: (0, import_clsx27.default)(
          "flex items-center justify-center p-8",
          hasOuterBorder && "border rounded-lg",
          className
        ),
        style: {
          borderColor: hasOuterBorder ? colors.colorBlack6 : void 0,
          backgroundColor: colors.colorWhite
        },
        children: loadingContent || /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "text-sm", style: { color: colors.colorBlack3 }, children: "Loading..." })
      }
    );
  }
  if (hasError) {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "div",
      {
        className: (0, import_clsx27.default)(
          "flex items-center justify-center p-8",
          hasOuterBorder && "border rounded-lg",
          className
        ),
        style: {
          borderColor: hasOuterBorder ? colors.colorBlack6 : void 0,
          backgroundColor: colors.colorWhite
        },
        children: errorContent || /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "text-sm", style: { color: colors.colorRed1 }, children: "Error loading list" })
      }
    );
  }
  if (isEmpty) {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "div",
      {
        className: (0, import_clsx27.default)(
          "flex items-center justify-center p-8",
          hasOuterBorder && "border rounded-lg",
          className
        ),
        style: {
          borderColor: hasOuterBorder ? colors.colorBlack6 : void 0,
          backgroundColor: colors.colorWhite
        },
        children: emptyContent || /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "text-sm", style: { color: colors.colorBlack3 }, children: "No items to display" })
      }
    );
  }
  const childArray = Array.isArray(children) ? children : [children];
  const currentItems = items || internalItems;
  const itemIds = currentItems.map((item) => item.id || item);
  if (isDraggable && items) {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
      import_core.DndContext,
      {
        sensors,
        collisionDetection: import_core.closestCenter,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_sortable.SortableContext, { items: itemIds, strategy: import_sortable.verticalListSortingStrategy, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "ul",
            {
              className: (0, import_clsx27.default)(
                "p-0 m-0",
                hasOuterBorder && "border rounded-lg overflow-hidden",
                className
              ),
              style: {
                borderColor: hasOuterBorder ? colors.colorBlack6 : void 0,
                backgroundColor: colors.colorWhite
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_framer_motion.AnimatePresence, { children: currentItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                SortableItem,
                {
                  id: item.id || index.toString(),
                  isDraggable,
                  isLast: index === currentItems.length - 1,
                  children: childArray[index]
                },
                item.id || index
              )) })
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_core.DragOverlay, { children: activeId ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "div",
            {
              style: {
                opacity: 0.5,
                backgroundColor: colors.colorBlack8
              },
              children: childArray[currentItems.findIndex((item) => item.id === activeId)]
            }
          ) : null })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "ul",
    {
      className: (0, import_clsx27.default)(
        "p-0 m-0",
        hasOuterBorder && "border rounded-lg overflow-hidden",
        className
      ),
      style: {
        borderColor: hasOuterBorder ? colors.colorBlack6 : void 0,
        backgroundColor: colors.colorWhite
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_framer_motion.AnimatePresence, { children: childArray.map((child, index) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        import_framer_motion.motion.div,
        {
          initial: { opacity: 0, y: -8 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -8 },
          transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
          style: {
            borderBottom: index === childArray.length - 1 ? "none" : `1px solid ${colors.colorBlack6}`
          },
          children: child
        },
        index
      )) })
    }
  );
};
CanaryList.displayName = "CanaryList";
var CanaryList_default = CanaryList;

// components/canary-ui/layout/CanaryContainer.tsx
var import_clsx28 = __toESM(require("clsx"));
var import_jsx_runtime31 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    "div",
    {
      className: (0, import_clsx28.default)(
        "mx-auto w-full",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className
      ),
      children
    }
  );
}

// components/canary-ui/layout/CanaryGrid.tsx
var import_clsx29 = __toESM(require("clsx"));
var import_jsx_runtime32 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "div",
    {
      className: (0, import_clsx29.default)(
        "grid",
        columnClasses[columns],
        gapClasses[gap],
        className
      ),
      children
    }
  );
}

// components/canary-ui/layout/CanaryModal.tsx
var import_react34 = require("react");
var import_clsx30 = __toESM(require("clsx"));
var import_jsx_runtime33 = require("react/jsx-runtime");
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
  (0, import_react34.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center p-4",
      style: {
        zIndex: zIndex.modal,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      },
      onClick: handleOverlayClick,
      children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        "div",
        {
          className: (0, import_clsx30.default)(
            "bg-white rounded-lg w-full",
            "max-h-[90vh] flex flex-col",
            sizeClasses[size],
            className
          ),
          style: { boxShadow: shadows.xl },
          onClick: (e) => e.stopPropagation(),
          children: [
            (title || showCloseButton) && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
              "div",
              {
                className: "flex items-center justify-between px-6 py-4 border-b shrink-0",
                style: { borderColor: colors.colorBlack6 },
                children: [
                  title && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h2", { className: "text-[20px] font-semibold", style: { color: colors.colorBlack1 }, children: title }),
                  showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                    CanaryButton,
                    {
                      type: "icon_secondary" /* ICON_SECONDARY */,
                      onClick: onClose,
                      icon: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M15 5L5 15M5 5L15 15", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "px-6 py-4 overflow-y-auto flex-1", children }),
            footer && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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

// components/canary-ui/layout/CanaryAppShell.tsx
var import_clsx33 = __toESM(require("clsx"));

// components/canary-ui/navigation/CanarySidebar.tsx
var import_react36 = require("react");

// components/canary-ui/navigation/types.ts
var SidebarVariant = /* @__PURE__ */ ((SidebarVariant2) => {
  SidebarVariant2["MAIN"] = "main";
  SidebarVariant2["SETTINGS"] = "settings";
  SidebarVariant2["CUSTOM"] = "custom";
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

// components/canary-ui/navigation/CanaryLogo.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
function CanaryLogo({
  width = "140px",
  height = "24px",
  className = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    "svg",
    {
      width,
      height,
      viewBox: "0 0 140 23",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: { display: "block" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.2052 9.7303C61.0146 10.3639 60.7048 10.9975 60.3235 11.5858C59.9422 12.1968 59.4656 12.7173 58.9175 13.1925C58.3694 13.6677 57.726 14.0297 57.0111 14.3239C56.2961 14.5954 55.4859 14.7538 54.628 14.7538C53.5318 14.7538 52.5309 14.5728 51.6492 14.2108C50.7675 13.8487 50.0049 13.3509 49.3853 12.7173C48.7657 12.0837 48.2891 11.3143 47.9555 10.4318C47.6218 9.54927 47.455 8.59887 47.455 7.55795C47.455 6.49441 47.6218 5.52138 47.9793 4.59361C48.3129 3.66583 48.8134 2.87383 49.4568 2.19497C50.1002 1.51612 50.8628 0.97303 51.7445 0.588344C52.6262 0.203657 53.651 0 54.7472 0C55.6765 0 56.5344 0.1584 57.297 0.475201C58.0596 0.792001 58.7269 1.19932 59.275 1.69714C59.8231 2.19497 60.2758 2.73806 60.6333 3.34903C60.9669 3.96 61.2052 4.54835 61.2767 5.15932H58.2264C58.1311 4.81989 57.9881 4.50309 57.7736 4.18629C57.5592 3.86949 57.3209 3.59795 57.0349 3.34903C56.7489 3.10012 56.4153 2.89646 56.034 2.76069C55.6527 2.62492 55.2476 2.5344 54.8186 2.5344C54.1514 2.5344 53.5556 2.67017 53.0314 2.94172C52.5071 3.21326 52.0543 3.57532 51.6969 4.02789C51.3394 4.48046 51.0534 5.02355 50.8628 5.63452C50.6721 6.24549 50.5768 6.90172 50.5768 7.58058C50.5768 8.23681 50.6721 8.87041 50.839 9.43613C51.0058 10.0018 51.2679 10.4997 51.6254 10.9296C51.959 11.3596 52.3879 11.6764 52.9122 11.9253C53.4126 12.1742 54.0084 12.2873 54.6757 12.2873C55.1046 12.2873 55.4859 12.2194 55.8672 12.1063C56.2246 11.9705 56.5583 11.8121 56.8681 11.5858C57.154 11.3596 57.4162 11.088 57.6545 10.7938C57.869 10.4997 58.0596 10.1602 58.2026 9.79818H61.2052V9.7303Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M70.8901 0.565369H68.236L61.5768 14.4456H64.8472C64.9663 14.2202 65.0854 13.9738 65.2127 13.7104C65.3134 13.5021 65.4193 13.2831 65.5344 13.0553C65.7652 12.6185 65.9589 12.1816 66.1319 11.7915C66.1542 11.7411 66.1762 11.6914 66.1979 11.6427H72.8097L74.1367 14.468H77.5018L70.8901 0.565369ZM71.6476 9.11249H67.382L69.4911 4.69503C69.5543 4.82797 69.6155 4.95893 69.6751 5.08676C69.8168 5.39017 69.9502 5.6759 70.0836 5.92833C70.2137 6.17455 70.3326 6.42078 70.4481 6.65975C70.5008 6.76899 70.5529 6.87672 70.6049 6.98224L71.1026 7.99131C71.123 8.03274 71.1438 8.07485 71.1649 8.1176C71.3152 8.42191 71.4814 8.75858 71.6476 9.11249Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M79.3051 0.565369H82.0516L89.1446 9.24332V0.565369H92.2254V14.468H89.6461L82.4098 5.61069V14.468H79.3051V0.565369Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.332 0.565369H100.673L94.0281 14.4456H97.3033C97.4226 14.2202 97.5419 13.9738 97.6694 13.7104C97.7703 13.5021 97.8763 13.2831 97.9916 13.0553C98.2227 12.6185 98.4167 12.1816 98.5899 11.7915C98.6123 11.7411 98.6344 11.6914 98.6561 11.6427H105.254L106.583 14.468H109.953L103.332 0.565369ZM104.091 9.11249H99.8193L101.932 4.69503C101.995 4.82796 102.056 4.95892 102.116 5.08675C102.258 5.39016 102.391 5.6759 102.525 5.92833C102.655 6.17455 102.774 6.42078 102.89 6.65975C102.943 6.76899 102.995 6.87672 103.047 6.98224L103.545 7.99131C103.566 8.03271 103.587 8.0748 103.608 8.11752C103.758 8.42185 103.925 8.75855 104.091 9.11249Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M120.573 0.60449C119.853 0.39889 119.013 0.284668 118.029 0.284668H111.455V14.4482H114.574V9.10262H117.118L121.053 14.4711H124.676L120.429 8.85133C121.557 8.50866 122.42 7.9604 122.972 7.22937C123.524 6.47551 123.812 5.63026 123.812 4.6708C123.812 4.00831 123.692 3.41435 123.452 2.86609C123.212 2.34067 122.852 1.88378 122.372 1.49542C121.893 1.10707 121.293 0.81009 120.573 0.60449ZM114.574 6.56517V2.81868H117.861C118.869 2.81868 119.612 2.97859 120.044 3.3441C120.476 3.70962 120.692 4.1665 120.692 4.69193C120.692 5.24019 120.476 5.69708 120.02 6.03975C119.588 6.38241 118.869 6.56517 117.861 6.56517H114.574Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M130.606 14.468V8.99666L124.375 0.565369H128.148L132.163 6.14886L136.228 0.565369H140L133.745 8.99666V14.4456H130.606V14.468Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M53.5547 17.6829H51.5543V22.34H50.783V17.6829H48.7827V17.0665H53.5547V17.6829Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M60.713 22.3629H56.5194V17.0665H60.6407V17.6829H57.3148V19.2581H60.2551V19.8745H57.3148V21.7008H60.713V22.3629V22.3629Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M68.3289 20.8798C68.2566 21.0852 68.1602 21.2907 68.0397 21.4962C67.9192 21.7016 67.7505 21.8614 67.5577 22.0212C67.3649 22.181 67.1479 22.2952 66.8828 22.3865C66.6177 22.4778 66.3526 22.5235 66.0393 22.5235C65.6296 22.5235 65.2922 22.455 64.9547 22.318C64.6414 22.181 64.3522 21.9984 64.1353 21.7473C63.9184 21.4962 63.7497 21.2222 63.6292 20.8798C63.5087 20.5373 63.4605 20.1721 63.4605 19.784C63.4605 19.373 63.5328 19.0078 63.6533 18.6653C63.7738 18.3229 63.9425 18.0033 64.1835 17.7522C64.4245 17.501 64.6896 17.2956 65.0271 17.1358C65.3404 16.9988 65.726 16.9075 66.1116 16.9075C66.449 16.9075 66.7623 16.9531 67.0274 17.0673C67.2926 17.1814 67.5336 17.2956 67.7264 17.4782C67.9192 17.638 68.0879 17.8206 68.2084 18.0261C68.3289 18.2316 68.4012 18.4142 68.4253 18.6197H67.6059C67.5818 18.4827 67.5095 18.3457 67.4131 18.2087C67.3167 18.0718 67.2203 17.9576 67.0997 17.8663C66.9792 17.775 66.8346 17.6837 66.6659 17.638C66.4972 17.5695 66.3044 17.5467 66.1116 17.5467C65.8224 17.5467 65.5573 17.6152 65.3163 17.7293C65.0753 17.8435 64.8824 18.0033 64.7378 18.2087C64.5691 18.4142 64.4486 18.6425 64.3763 18.9165C64.2799 19.1904 64.2558 19.4644 64.2558 19.784C64.2558 20.0807 64.304 20.3547 64.3763 20.6058C64.4486 20.8569 64.5691 21.0852 64.7137 21.2679C64.8583 21.4505 65.0512 21.6103 65.2922 21.7016C65.5091 21.8158 65.7742 21.8614 66.0634 21.8614C66.2562 21.8614 66.4249 21.8386 66.5936 21.7929C66.7623 21.7473 66.9069 21.6788 67.0274 21.5875C67.1479 21.4962 67.2685 21.382 67.3649 21.2679C67.4613 21.1537 67.5336 21.0167 67.5818 20.8798H68.3289V20.8798Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M76.0171 22.3629H75.2218V20.1028H72.1851V22.3629H71.4138V17.0665H72.1851V19.4635H75.2218V17.0665H76.0171V22.3629V22.3629Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M79.2707 17.0665H80.0179L83.0787 21.0388V17.0665H83.8499V22.3629H83.151L80.042 18.3221V22.3629H79.2707V17.0665Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M90.7427 17.1597C90.4293 16.9999 90.0437 16.9314 89.634 16.9314C89.2002 16.9314 88.8387 16.9999 88.5254 17.1597C88.1879 17.2966 87.8987 17.5021 87.6818 17.7532C87.4649 18.0043 87.2962 18.3011 87.1757 18.6436C87.0552 18.9632 87.007 19.3284 87.007 19.7165C87.007 20.0818 87.0552 20.4471 87.1757 20.7895C87.2721 21.132 87.4649 21.4287 87.6818 21.6799C87.9228 21.931 88.1879 22.1365 88.5254 22.2734C88.8387 22.4332 89.2243 22.5017 89.634 22.5017C90.0437 22.5017 90.4052 22.4104 90.7427 22.2734C91.056 22.1365 91.3452 21.931 91.5621 21.6799C91.779 21.4287 91.9477 21.132 92.0682 20.7895C92.1887 20.4699 92.2369 20.1046 92.2369 19.7165C92.2369 19.3513 92.1887 18.986 92.0682 18.6436C91.9477 18.3011 91.779 18.0043 91.5621 17.7532C91.3452 17.5021 91.0801 17.2966 90.7427 17.1597ZM90.3809 21.7255C90.1639 21.8397 89.8988 21.8853 89.6337 21.8853C89.3445 21.8853 89.1035 21.8169 88.8866 21.7255C88.6697 21.6114 88.4769 21.4516 88.3082 21.269C88.1395 21.0863 88.0189 20.8352 87.9225 20.5841C87.8261 20.333 87.7779 20.0362 87.7779 19.7166C87.7779 19.397 87.8261 19.123 87.9225 18.849C88.0189 18.5751 88.1395 18.3468 88.3082 18.1642C88.4528 17.9587 88.6697 17.8217 88.8866 17.7076C89.1035 17.5934 89.3686 17.5478 89.6337 17.5478C89.8988 17.5478 90.1639 17.5934 90.3809 17.7076C90.5978 17.8217 90.7906 17.9815 90.9593 18.1642C91.128 18.3468 91.2485 18.5979 91.3449 18.849C91.4413 19.1002 91.4895 19.397 91.4895 19.7166C91.4895 20.0362 91.4413 20.3101 91.3449 20.5841C91.2485 20.858 91.128 21.0863 90.9593 21.269C90.8147 21.4744 90.5978 21.6114 90.3809 21.7255Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M99.54 22.3629H95.3946V17.0665H96.1658V21.7236H99.5159V22.3629H99.54Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M105.926 17.1597C105.613 16.9999 105.227 16.9314 104.817 16.9314C104.384 16.9314 104.022 16.9999 103.709 17.1597C103.371 17.2966 103.082 17.5021 102.865 17.7532C102.648 18.0043 102.48 18.3011 102.359 18.6436C102.239 18.9632 102.19 19.3284 102.19 19.7165C102.19 20.0818 102.239 20.4471 102.359 20.7895C102.455 21.132 102.648 21.4287 102.865 21.6799C103.106 21.931 103.371 22.1365 103.709 22.2734C104.022 22.4332 104.408 22.5017 104.817 22.5017C105.227 22.5017 105.589 22.4104 105.926 22.2734C106.239 22.1365 106.529 21.931 106.745 21.6799C106.962 21.4287 107.131 21.132 107.252 20.7895C107.372 20.4699 107.42 20.1046 107.42 19.7165C107.42 19.3513 107.372 18.986 107.252 18.6436C107.131 18.3011 106.962 18.0043 106.745 17.7532C106.529 17.5021 106.263 17.2966 105.926 17.1597ZM105.565 21.7255C105.348 21.8397 105.083 21.8853 104.818 21.8853C104.528 21.8853 104.287 21.8169 104.071 21.7255C103.854 21.6114 103.661 21.4516 103.492 21.269C103.323 21.0863 103.203 20.8352 103.107 20.5841C103.01 20.333 102.962 20.0362 102.962 19.7166C102.962 19.397 103.01 19.123 103.107 18.849C103.203 18.5751 103.323 18.3468 103.492 18.1642C103.637 17.9587 103.854 17.8217 104.071 17.7076C104.287 17.5934 104.553 17.5478 104.818 17.5478C105.083 17.5478 105.348 17.5934 105.565 17.7076C105.782 17.8217 105.975 17.9815 106.143 18.1642C106.312 18.3468 106.432 18.5979 106.529 18.849C106.625 19.1002 106.673 19.397 106.673 19.7166C106.673 20.0362 106.625 20.3101 106.529 20.5841C106.432 20.858 106.312 21.0863 106.143 21.269C105.999 21.4744 105.782 21.6114 105.565 21.7255Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M115.301 22.3639H114.627V21.816C114.458 21.9986 114.217 22.1813 113.928 22.3183C113.638 22.4552 113.301 22.5237 112.891 22.5237C112.53 22.5237 112.216 22.4552 111.903 22.3411C111.59 22.2269 111.349 22.0443 111.108 21.816C110.891 21.5877 110.722 21.2909 110.578 20.9713C110.457 20.6289 110.385 20.2636 110.385 19.8299C110.385 19.3961 110.457 19.008 110.578 18.6427C110.722 18.3003 110.891 17.9807 111.132 17.7296C111.373 17.4784 111.638 17.2958 111.951 17.1588C112.265 17.0219 112.602 16.9534 112.988 16.9534C113.277 16.9534 113.566 16.999 113.807 17.0675C114.072 17.1588 114.289 17.273 114.482 17.41C114.675 17.5469 114.843 17.7296 114.988 17.935C115.133 18.1405 115.229 18.3688 115.277 18.5971H114.482C114.434 18.4373 114.361 18.3003 114.265 18.1633C114.169 18.0263 114.048 17.935 113.903 17.8437C113.759 17.7524 113.614 17.6839 113.446 17.6382C113.277 17.5926 113.108 17.5698 112.915 17.5698C112.674 17.5698 112.433 17.6154 112.216 17.7296C112 17.8437 111.807 17.9807 111.638 18.1633C111.469 18.346 111.349 18.5971 111.252 18.871C111.156 19.145 111.108 19.4646 111.108 19.807C111.108 20.1266 111.156 20.4006 111.228 20.6745C111.301 20.9257 111.421 21.154 111.59 21.3366C111.734 21.5192 111.927 21.6562 112.144 21.7475C112.361 21.8388 112.602 21.9073 112.867 21.9073C113.084 21.9073 113.301 21.8845 113.494 21.816C113.687 21.7475 113.855 21.6562 113.976 21.5421C114.12 21.4279 114.217 21.2909 114.289 21.154C114.361 21.017 114.41 20.8572 114.41 20.6974V20.2864H112.674V19.6701H115.181V22.3639H115.301Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M119.303 22.3629H118.531V17.0665H119.303V22.3629Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M126.75 22.3629H122.556V17.0665H126.653V17.6829H123.327V19.2581H126.268V19.8745H123.327V21.7008H126.726V22.3629H126.75Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M130.606 18.4373C130.606 18.5743 130.654 18.7112 130.751 18.8025C130.847 18.8939 130.968 18.9852 131.136 19.0537C131.281 19.1222 131.474 19.1906 131.666 19.2363C131.859 19.282 132.076 19.3504 132.293 19.4189C132.51 19.4874 132.703 19.5559 132.92 19.6244C133.113 19.6929 133.305 19.807 133.45 19.9212C133.595 20.0353 133.739 20.1723 133.836 20.3321C133.932 20.4919 133.98 20.6974 133.98 20.9257C133.98 21.1311 133.932 21.3366 133.836 21.5192C133.739 21.7019 133.595 21.8845 133.402 22.0215C133.209 22.1585 132.992 22.2954 132.703 22.3867C132.438 22.4781 132.124 22.5237 131.763 22.5237C131.401 22.5237 131.064 22.4781 130.799 22.3639C130.534 22.2726 130.293 22.1356 130.124 21.9758C129.955 21.816 129.811 21.6334 129.714 21.4507C129.618 21.2681 129.57 21.0626 129.57 20.88H130.293C130.365 21.1768 130.51 21.4279 130.775 21.6106C131.04 21.7932 131.353 21.8845 131.739 21.8845C131.98 21.8845 132.173 21.8617 132.341 21.7932C132.51 21.7247 132.655 21.6562 132.775 21.5649C132.896 21.4736 132.992 21.3594 133.04 21.2453C133.088 21.1311 133.137 21.017 133.137 20.9028C133.137 20.743 133.088 20.6061 132.992 20.5147C132.896 20.4006 132.775 20.3093 132.606 20.2408C132.462 20.1723 132.269 20.1038 132.076 20.0353C131.883 19.9668 131.666 19.9212 131.474 19.8527C131.257 19.7842 131.064 19.7157 130.871 19.6472C130.678 19.5787 130.485 19.4874 130.341 19.3733C130.196 19.2591 130.052 19.145 129.955 18.9852C129.859 18.8254 129.811 18.6427 129.811 18.4373C129.811 18.2318 129.859 18.0492 129.955 17.8665C130.052 17.6839 130.172 17.5241 130.341 17.3871C130.51 17.2502 130.726 17.136 130.968 17.0675C131.209 16.9762 131.498 16.9534 131.835 16.9534C132.148 16.9534 132.414 16.999 132.655 17.0675C132.896 17.136 133.088 17.2502 133.257 17.3871C133.426 17.5241 133.546 17.6839 133.643 17.8665C133.739 18.0492 133.787 18.2318 133.836 18.4373H133.088C133.016 18.1862 132.896 17.9807 132.679 17.8209C132.462 17.6611 132.197 17.5698 131.835 17.5698C131.642 17.5698 131.474 17.5926 131.329 17.6382C131.184 17.6839 131.04 17.7524 130.943 17.8437C130.847 17.935 130.751 18.0263 130.702 18.1177C130.63 18.209 130.606 18.3231 130.606 18.4373Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.27397 1.73503H3.68836C6.73754 1.73503 9.69489 2.31693 12.5053 3.44545C15.2055 4.53871 17.6118 6.10806 19.6874 8.10061C20.0548 8.45327 20.4038 8.82357 20.7528 9.19387C20.9181 9.38783 21.1569 9.476 21.4141 9.476C21.6161 9.476 21.8182 9.40547 21.9835 9.2644C22.3509 8.96464 22.3876 8.43564 22.057 8.08298C21.6896 7.67742 21.3039 7.28949 20.9181 6.91919C18.6771 4.76794 16.0872 3.09279 13.1849 1.91137C10.1725 0.694676 6.97634 0.0775146 3.70672 0.0775146H2.29234C1.81476 0.0775146 1.42902 0.447811 1.42902 0.906274C1.42902 1.36474 1.79639 1.73503 2.27397 1.73503Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.867281 6.5831H3.56139C5.96025 6.5831 8.30375 7.0453 10.4996 7.93416C11.7544 8.4497 12.9539 9.08967 14.0426 9.85409C14.1902 9.96075 14.3747 10.0141 14.5592 10.0141C14.836 10.0141 15.0944 9.88964 15.2605 9.67632C15.5372 9.303 15.4634 8.76968 15.0759 8.50303C13.8765 7.6675 12.5663 6.95642 11.1824 6.38755C8.76507 5.40981 6.20014 4.91205 3.56139 4.91205H0.867281C0.387508 4.91205 0 5.28537 0 5.74757C0 6.20978 0.387508 6.5831 0.867281 6.5831Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.7087 6.25366C21.8951 6.25366 22.0816 6.20147 22.2495 6.07968C23.76 5.00103 25.4383 4.09636 27.2099 3.40046C30.0444 2.28701 33.0654 1.71289 36.161 1.71289H37.6902C38.1751 1.71289 38.5667 1.34754 38.5667 0.895202C38.5667 0.442864 38.1751 0.0775146 37.6902 0.0775146H36.161C32.823 0.0775146 29.5969 0.68643 26.5386 1.88686C24.6364 2.63496 22.8462 3.60923 21.2052 4.77487C20.8135 5.05323 20.739 5.55776 21.0373 5.92311C21.1865 6.14928 21.4476 6.25366 21.7087 6.25366Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.5755 8.15116C16.4644 9.34462 15.5039 10.6419 14.6753 12.0256C14.4493 12.4234 14.5999 12.925 15.0331 13.1326C15.1649 13.2018 15.3156 13.2363 15.4662 13.2363C15.7864 13.2363 16.0877 13.0807 16.2384 12.8039C16.9917 11.524 17.8956 10.3132 18.9314 9.20625C19.2516 8.86032 19.1951 8.34142 18.8373 8.06468C18.4606 7.77064 17.8956 7.80523 17.5755 8.15116Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.4362 6.35972C26.0998 7.26238 23.986 8.57379 22.1874 10.2258C21.6868 10.6857 21.2047 11.1796 20.7596 11.6735C20.463 12.0141 20.5186 12.5251 20.8894 12.7976C21.0563 12.9168 21.2417 12.9679 21.4457 12.9679C21.7053 12.9679 21.9463 12.8657 22.1318 12.6613C22.5397 12.2015 22.9662 11.7587 23.4297 11.3329C25.08 9.81709 26.9899 8.64192 29.1222 7.80738C31.3288 6.95581 33.6837 6.513 36.0942 6.513H38.8384C39.3205 6.513 39.7099 6.15534 39.7099 5.71252C39.7099 5.26971 39.3205 4.91205 38.8384 4.91205H36.0942C33.4241 4.94611 30.8467 5.42299 28.4362 6.35972Z", fill: "white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.663 10.4829C39.6584 10.4957 39.6537 10.5085 39.6537 10.517C39.6537 10.5232 39.6531 10.5288 39.6526 10.5339C39.6501 10.5573 39.6486 10.5713 39.7094 10.5853C36.7206 17.0874 30.2415 21.5246 22.7415 22.4461C22.6301 22.4973 22.5187 22.5144 22.4073 22.5144H22.3145H22.2774C21.4791 22.5997 20.6808 22.6339 19.864 22.6339C18.9915 22.6339 18.1189 22.5827 17.2464 22.4803H17.2093C13.8677 22.1048 10.6931 21.0126 7.87134 19.2719C4.39978 17.1215 1.70793 14.1179 0.0742579 10.6023L0.0185645 10.4487C0 10.3634 0 10.2952 0 10.2098V10.1757V10.1245C0.0185645 10.1074 0.0185645 10.0904 0.0185645 10.0733V10.0392C0.0185645 10.0306 0.0232056 10.0221 0.0278467 10.0136C0.0324878 10.005 0.037129 9.9965 0.037129 9.98796V9.9709C0.037129 9.96236 0.0417701 9.95383 0.0464112 9.9453C0.0510523 9.93676 0.0556935 9.92823 0.0556935 9.9197C0.0742579 9.9197 0.0742579 9.90263 0.0742579 9.90263C0.0742579 9.90263 0.0928224 9.88557 0.0928224 9.8685C0.0928224 9.85997 0.0974635 9.8557 0.102105 9.85143C0.106746 9.84717 0.111387 9.8429 0.111387 9.83437C0.111387 9.82584 0.116028 9.82157 0.120669 9.8173C0.12531 9.81304 0.129951 9.80877 0.129951 9.80024C0.129951 9.79313 0.129951 9.78898 0.131295 9.78532C0.133175 9.78021 0.137687 9.77606 0.148516 9.7661L0.16708 9.74904L0.204209 9.71491L0.222774 9.69784L0.259903 9.66371C0.269185 9.66371 0.273826 9.65944 0.278467 9.65518C0.283108 9.65091 0.28775 9.64664 0.297032 9.64664C0.306314 9.64664 0.310955 9.64238 0.315596 9.63811C0.320237 9.63384 0.324878 9.62958 0.334161 9.62958C0.343443 9.62104 0.352725 9.61678 0.362007 9.61251C0.37129 9.60824 0.380572 9.60398 0.389854 9.59544C0.389854 9.57838 0.408419 9.57838 0.408419 9.57838C0.482677 9.54425 0.556935 9.51011 0.649757 9.49305C0.724015 9.47598 0.779708 9.47598 0.835402 9.47598H3.52725C7.20302 9.47598 10.7117 10.7218 13.4221 12.9916C15.1301 14.4251 16.4296 16.1659 17.2464 18.0943C17.4321 17.5141 17.6363 16.9509 17.8776 16.3877C18.0447 15.9611 18.5645 15.7563 19.01 15.9269C19.4741 16.0805 19.6969 16.5584 19.5113 16.968C18.9543 18.265 18.583 19.6132 18.3974 20.9785C18.8801 21.0126 19.3813 21.0297 19.864 21.0297C20.3652 21.0297 20.8479 21.0126 21.3306 20.9785C21.1264 19.4767 20.6994 18.009 20.0496 16.6096C19.437 15.2784 18.6387 14.0326 17.692 12.9062C17.3949 12.5649 17.4506 12.0529 17.8405 11.7799C18.2118 11.5068 18.7687 11.558 19.0657 11.9164C20.1053 13.1622 20.9779 14.5275 21.6462 15.9781C21.9618 16.6608 22.2217 17.3605 22.4445 18.0772C22.6301 17.6506 22.8343 17.2239 23.0571 16.8144C23.2799 16.4218 23.8182 16.2682 24.2452 16.473C24.6722 16.6778 24.8393 17.1727 24.6165 17.5653C24.0596 18.5551 23.6697 19.6302 23.4284 20.7225C24.3566 20.5689 25.2663 20.347 26.1574 20.074C25.8789 18.265 25.3591 16.5072 24.5794 14.8176C24.2823 14.1691 23.9482 13.5377 23.5769 12.9233C23.3541 12.5308 23.5026 12.0359 23.9296 11.8311C24.3566 11.6263 24.895 11.7628 25.1177 12.1553C25.5076 12.8209 25.8789 13.5036 26.1945 14.2033C26.9742 15.9099 27.5126 17.6847 27.8282 19.4937C31.968 17.8383 35.4025 14.903 37.5003 11.0973H36.1636C33.3604 11.0973 30.7057 11.9164 28.4594 13.4353C28.3108 13.5377 28.1252 13.5889 27.9396 13.5889C27.6796 13.5889 27.4012 13.4865 27.2341 13.2646C26.9556 12.9062 27.0299 12.3943 27.4197 12.1383C29.9631 10.4146 32.9891 9.49305 36.1636 9.49305H38.874H38.9669H38.9854H39.0411C39.1154 9.51011 39.2082 9.54425 39.2824 9.57838L39.301 9.59544C39.3103 9.60398 39.3196 9.60824 39.3289 9.61251C39.3381 9.61678 39.3474 9.62104 39.3567 9.62958L39.3938 9.66371L39.4124 9.68077C39.4124 9.69132 39.4195 9.69535 39.4293 9.70092C39.4353 9.70436 39.4424 9.70839 39.4495 9.71491L39.4681 9.73197C39.4796 9.73197 39.484 9.73849 39.49 9.7475C39.4938 9.75307 39.4981 9.75959 39.5052 9.7661L39.5238 9.78317L39.5609 9.8173C39.5609 9.82584 39.5656 9.8301 39.5702 9.83437C39.5748 9.83863 39.5795 9.8429 39.5795 9.85143C39.5795 9.85997 39.5841 9.86423 39.5888 9.8685C39.5934 9.87277 39.598 9.87703 39.598 9.88557C39.598 9.8941 39.6027 9.89837 39.6073 9.90263C39.612 9.9069 39.6166 9.91117 39.6166 9.9197C39.6352 9.9197 39.6352 9.93676 39.6352 9.93676C39.6352 9.9453 39.6398 9.95383 39.6445 9.96236C39.6491 9.9709 39.6537 9.97943 39.6537 9.98796V10.005C39.6537 10.0136 39.6584 10.0221 39.663 10.0306C39.6677 10.0392 39.6723 10.0477 39.6723 10.0562V10.0904C39.6909 10.1074 39.6909 10.1245 39.6909 10.1416V10.1928V10.2098V10.3805C39.6909 10.389 39.6862 10.4018 39.6816 10.4146C39.6769 10.4274 39.6723 10.4402 39.6723 10.4487C39.6723 10.4573 39.6677 10.4701 39.663 10.4829ZM3.47189 11.0805H2.15381C4.25159 14.8863 7.68602 17.8045 11.7888 19.477C11.9373 18.6408 12.1415 17.8045 12.3828 16.9854C12.5128 16.5587 12.9955 16.3027 13.4596 16.4222C13.9237 16.5417 14.2022 16.9854 14.0722 17.412C13.8123 18.2824 13.6081 19.1698 13.4781 20.0743C14.3692 20.3474 15.2789 20.5692 16.2071 20.7228C15.0376 15.1593 9.74668 11.0805 3.47189 11.0805Z", fill: "white" })
      ]
    }
  );
}

// components/canary-ui/navigation/CanarySidebar.tsx
var import_clsx31 = __toESM(require("clsx"));

// components/canary-ui/navigation/standard-sidebar-sections.tsx
var import_react35 = __toESM(require("@mdi/react"));
var import_js11 = require("@mdi/js");
var import_jsx_runtime35 = require("react/jsx-runtime");
var standardMainSidebarSections = [
  {
    id: "main-section",
    items: [
      {
        id: "upsells",
        label: "Upsells",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiCashMultiple, size: 1 })
      },
      {
        id: "check-in",
        label: "Check-in",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiLogin, size: 1 })
      },
      {
        id: "checkout",
        label: "Checkout",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiLogout, size: 1 })
      },
      {
        id: "messages",
        label: "Messages",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiMessageProcessingOutline, size: 1 })
      },
      {
        id: "calls",
        label: "Calls",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiPhoneOutline, size: 1 })
      },
      {
        id: "digital-tips",
        label: "Digital Tips",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiCurrencyUsd, size: 1 })
      }
    ]
  },
  {
    id: "secondary-section",
    items: [
      {
        id: "authorizations",
        label: "Authorizations",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiShieldCheckOutline, size: 1 })
      },
      {
        id: "contracts",
        label: "Contracts",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiFileSign, size: 1 })
      },
      {
        id: "id-verification",
        label: "ID Verification",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiAccountCheckOutline, size: 1 })
      },
      {
        id: "clients-on-file",
        label: "Clients on File",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiAccountBoxOutline, size: 1 })
      },
      {
        id: "amenities",
        label: "Amenities",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiStoreOutline, size: 1 })
      },
      {
        id: "payment-links",
        label: "Payment Links",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiCreditCardOutline, size: 1 })
      }
    ]
  },
  {
    id: "bottom-section",
    items: [
      {
        id: "settings",
        label: "Settings",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiCogOutline, size: 1 })
      }
    ]
  }
];
var standardSettingsSidebarSections = [
  {
    id: "general-settings-section",
    title: "General Settings",
    items: [
      {
        id: "property-info",
        label: "Property Info",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiHomeOutline, size: 1 })
      },
      {
        id: "branding",
        label: "Branding",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiPaletteOutline, size: 1 })
      },
      {
        id: "billing-payment",
        label: "Billing & Payment",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiCreditCardOutline, size: 1 })
      },
      {
        id: "staff-members",
        label: "Staff Members",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiAccountGroupOutline, size: 1 })
      },
      {
        id: "security",
        label: "Security",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiShieldAccountOutline, size: 1 })
      },
      {
        id: "integrations",
        label: "Integrations",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiPuzzleOutline, size: 1 })
      },
      {
        id: "devices",
        label: "Devices",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiTabletCellphone, size: 1 })
      }
    ]
  },
  {
    id: "product-settings-section",
    title: "Product Settings",
    items: [
      {
        id: "compendium",
        label: "Compendium",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiNewspaperVariantOutline, size: 1 })
      },
      {
        id: "guest-journey",
        label: "Guest Journey",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiAccountCheckOutline, size: 1 })
      },
      {
        id: "upsells",
        label: "Upsells",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiCashMultiple, size: 1 })
      },
      {
        id: "check-in",
        label: "Check-in",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiLogin, size: 1 })
      },
      {
        id: "checkout",
        label: "Checkout",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiLogout, size: 1 })
      },
      {
        id: "messages",
        label: "Messages",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiMessageProcessingOutline, size: 1 })
      },
      {
        id: "calls",
        label: "Calls",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiPhoneOutline, size: 1 })
      },
      {
        id: "authorizations",
        label: "Authorizations",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiShieldCheckOutline, size: 1 })
      },
      {
        id: "digital-tips",
        label: "Digital Tips",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiCurrencyUsd, size: 1 })
      },
      {
        id: "contracts",
        label: "Contracts",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiFileSign, size: 1 })
      },
      {
        id: "payment-links",
        label: "Payment Links",
        icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react35.default, { path: import_js11.mdiCreditCardOutline, size: 1 })
      }
    ]
  }
];

// components/canary-ui/navigation/CanarySidebar.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
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
  const [focusedItemId, setFocusedItemId] = (0, import_react36.useState)(null);
  const [pressedItemId, setPressedItemId] = (0, import_react36.useState)(null);
  const [hoveredItemId, setHoveredItemId] = (0, import_react36.useState)(null);
  const getDefaultSections = () => {
    if (variant === "custom" /* CUSTOM */) {
      return [];
    }
    if (variant === "settings" /* SETTINGS */) {
      return standardSettingsSidebarSections;
    }
    return standardMainSidebarSections;
  };
  const resolvedSections = sections != null ? sections : getDefaultSections();
  const getBackgroundColor = () => {
    switch (variant) {
      case "main" /* MAIN */:
        return "#375492";
      // Custom blue for sidebar (not in design tokens)
      case "settings" /* SETTINGS */:
        return colors.colorBlack2;
      // $color-black-2 (#333333)
      case "custom" /* CUSTOM */:
        return "#375492";
      // Default to MAIN color for CUSTOM variant
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
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "aside",
    {
      className: (0, import_clsx31.default)(
        "flex flex-col shrink-0 w-[180px] h-full",
        className
      ),
      style: {
        backgroundColor
      },
      children: [
        backButton && variant === "settings" /* SETTINGS */ ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex items-center pt-4 pb-4 px-4 shrink-0", children: backButton }) : /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex items-center justify-center pt-6 pb-6 shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { style: { opacity: 0.35, width: "140px", height: "24px" }, children: logo !== void 0 ? logo : /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(CanaryLogo, {}) }) }),
        title && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "px-4 pb-4 shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h2", { className: "text-[16px] font-medium text-white", style: { fontFamily: "Roboto, sans-serif" }, children: title }) }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("nav", { className: "flex-1 overflow-y-auto flex flex-col gap-4 w-[180px] mx-auto pb-8", children: resolvedSections.map((section, sectionIndex) => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
          sectionIndex > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "div",
            {
              className: "h-[1px] mb-4",
              style: { backgroundColor: "rgba(255, 255, 255, 0.1)" }
            }
          ),
          section.title && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex flex-col", children: section.items.map((item) => {
            const state = getItemState(item);
            const iconOpacity = getIconOpacity(state);
            const isSelected = state === "selected" /* SELECTED */;
            return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
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
                  state === "selected" /* SELECTED */ && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
                  state === "focus" /* FOCUS */ && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
                  state === "onPress" /* ON_PRESS */ && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
                  item.icon && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
                  item.badge && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
                      children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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

// components/canary-ui/navigation/CanaryPageHeader.tsx
var import_clsx32 = __toESM(require("clsx"));
var import_react37 = __toESM(require("@mdi/react"));
var import_js12 = require("@mdi/js");
var import_jsx_runtime37 = require("react/jsx-runtime");
function CanaryPageHeader({
  propertyName,
  onPropertyClick,
  userProfile,
  onUserProfileClick,
  reservationStatus,
  onReservationStatusClick,
  actions,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
    "header",
    {
      className: (0, import_clsx32.default)(
        "w-full bg-white border-b flex items-center justify-between px-6 py-2 shrink-0",
        className
      ),
      style: {
        height: dimensions.headerHeight,
        borderColor: colors.colorBlack6
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
          "button",
          {
            onClick: onPropertyClick,
            className: "flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-50 transition-colors",
            style: { cursor: onPropertyClick ? "pointer" : "default" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                "span",
                {
                  className: "text-[14px] font-medium",
                  style: { color: colors.colorBlack1 },
                  children: propertyName
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                import_react37.default,
                {
                  path: import_js12.mdiChevronDown,
                  size: 0.85,
                  color: colors.colorBlueDark1
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex items-center gap-2", children: [
          actions,
          reservationStatus && /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
            "button",
            {
              onClick: onReservationStatusClick,
              className: "flex items-center gap-2 rounded-full pl-2 pr-4 py-1 transition-opacity hover:opacity-80",
              style: {
                backgroundColor: reservationStatus.isConnected ? colors.colorLightGreen5 : colors.colorBlack7,
                cursor: onReservationStatusClick ? "pointer" : "default"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                  import_react37.default,
                  {
                    path: import_js12.mdiCheckCircleOutline,
                    size: 1,
                    color: reservationStatus.isConnected ? colors.colorLightGreen1 : colors.colorBlack4,
                    style: { opacity: 0.5 }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                  "span",
                  {
                    className: "text-[14px]",
                    style: {
                      color: reservationStatus.isConnected ? colors.colorBlack1 : colors.colorBlack3
                    },
                    children: reservationStatus.label
                  }
                )
              ]
            }
          ),
          userProfile && /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
            "button",
            {
              onClick: onUserProfileClick,
              className: "flex items-center gap-2 rounded hover:bg-gray-50 transition-colors px-1 py-1",
              style: { cursor: onUserProfileClick ? "pointer" : "default" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0", children: userProfile.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                  "img",
                  {
                    src: userProfile.avatarUrl,
                    alt: userProfile.avatarAlt || userProfile.name,
                    className: "w-full h-full object-cover"
                  }
                ) : /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                  "div",
                  {
                    className: "w-full h-full flex items-center justify-center text-sm font-medium",
                    style: { color: colors.colorBlack3, backgroundColor: colors.colorBlack7 },
                    children: userProfile.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex flex-col items-start leading-tight", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                    "span",
                    {
                      className: "text-[12px] font-medium",
                      style: { color: colors.colorBlack1 },
                      children: userProfile.name
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                    "span",
                    {
                      className: "text-[10px] uppercase",
                      style: { color: colors.colorBlack4 },
                      children: userProfile.role
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                  import_react37.default,
                  {
                    path: import_js12.mdiChevronDown,
                    size: 0.85,
                    color: colors.colorBlack1
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}

// components/canary-ui/layout/CanaryAppShell.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
var paddingMap = {
  none: "p-0",
  small: "p-4",
  medium: "p-6",
  large: "p-8"
};
function CanaryAppShell({
  children,
  // Sidebar
  sidebarVariant = "main" /* MAIN */,
  sidebarSections,
  selectedSidebarItemId,
  onSidebarItemClick,
  sidebarTitle,
  sidebarBackButton,
  hideSidebar = false,
  // Header
  propertyName = "Property Name",
  onPropertyClick,
  userProfile,
  onUserProfileClick,
  reservationStatus,
  onReservationStatusClick,
  headerActions,
  hideHeader = false,
  // Content
  contentBackground,
  contentPadding = "medium",
  contentClassName,
  // Container
  className
}) {
  const resolvedSections = sidebarSections != null ? sidebarSections : standardMainSidebarSections;
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: (0, import_clsx33.default)("flex h-screen w-full overflow-hidden", className), children: [
    !hideSidebar && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      CanarySidebar,
      {
        variant: sidebarVariant,
        sections: resolvedSections,
        selectedItemId: selectedSidebarItemId,
        onItemClick: onSidebarItemClick,
        title: sidebarTitle,
        backButton: sidebarBackButton
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-col flex-1 min-w-0 overflow-hidden", children: [
      !hideHeader && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        CanaryPageHeader,
        {
          propertyName,
          onPropertyClick,
          userProfile,
          onUserProfileClick,
          reservationStatus,
          onReservationStatusClick,
          actions: headerActions
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        "main",
        {
          className: (0, import_clsx33.default)(
            "flex-1 overflow-auto",
            paddingMap[contentPadding],
            contentClassName
          ),
          style: {
            backgroundColor: contentBackground != null ? contentBackground : colors.colorBlack7
          },
          children
        }
      )
    ] })
  ] });
}

// components/canary-ui/navigation/CanaryTabs.tsx
var import_react38 = require("react");
var import_clsx34 = __toESM(require("clsx"));
var import_jsx_runtime39 = require("react/jsx-runtime");
function CanaryTabs({
  tabs,
  variant = "rounded",
  size = "normal",
  defaultTab,
  onChange,
  className = ""
}) {
  var _a, _b;
  const [activeTab, setActiveTab] = (0, import_react38.useState)(defaultTab || ((_a = tabs[0]) == null ? void 0 : _a.id));
  const [pressedTab, setPressedTab] = (0, import_react38.useState)(null);
  const [hoveredTab, setHoveredTab] = (0, import_react38.useState)(null);
  const handleTabClick = (tabId, isDisabled) => {
    if (isDisabled) return;
    setActiveTab(tabId);
    onChange == null ? void 0 : onChange(tabId);
  };
  const activeTabContent = (_b = tabs.find((tab) => tab.id === activeTab)) == null ? void 0 : _b.content;
  if (variant === "rounded") {
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: `w-full ${className}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        "div",
        {
          className: "inline-flex rounded-full p-1 gap-1 overflow-visible",
          style: {
            backgroundColor: colors.colorBlack6
          },
          children: tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            const isHovered = hoveredTab === tab.id;
            return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
              "button",
              {
                onClick: () => handleTabClick(tab.id, tab.disabled),
                onMouseEnter: () => !tab.disabled && setHoveredTab(tab.id),
                onMouseLeave: () => setHoveredTab(null),
                disabled: tab.disabled,
                className: (0, import_clsx34.default)(
                  "flex items-center gap-2 px-6 py-2",
                  "text-[14px] font-medium font-['Roboto',sans-serif]",
                  "rounded-full transition-all duration-200",
                  "focus:outline-none",
                  tab.disabled ? "cursor-not-allowed canary-opacity-50" : isActive ? "cursor-pointer" : "cursor-pointer canary-tab-hover"
                ),
                style: {
                  backgroundColor: isActive ? colors.colorBlueDark1 : colors.colorBlack6,
                  color: isActive ? colors.colorWhite : colors.colorBlack1,
                  boxShadow: isHovered && !isActive && !tab.disabled ? "0px 4px 0px 0px #CCCCCC" : void 0,
                  WebkitTapHighlightColor: "transparent"
                },
                children: [
                  tab.icon && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { children: tab.icon }),
                  /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { children: tab.label })
                ]
              },
              tab.id
            );
          })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children: activeTabContent })
    ] });
  }
  if (variant === "segmented") {
    const isCompactSegmented = size === "compact";
    const segmentedFontSize = isCompactSegmented ? "14px" : "16px";
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: `w-full ${className}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        "div",
        {
          className: "inline-flex items-start gap-px rounded-lg",
          style: {
            border: `1px solid ${colors.colorBlack6}`,
            overflow: "visible"
          },
          children: tabs.map((tab, index) => {
            const isActive = tab.id === activeTab;
            const isHovered = hoveredTab === tab.id;
            const isFirst = index === 0;
            const isLast = index === tabs.length - 1;
            return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              "button",
              {
                onClick: () => handleTabClick(tab.id, tab.disabled),
                onMouseEnter: () => !tab.disabled && setHoveredTab(tab.id),
                onMouseLeave: () => setHoveredTab(null),
                disabled: tab.disabled,
                className: (0, import_clsx34.default)(
                  "flex items-center justify-center px-6 py-4",
                  "font-medium font-['Roboto',sans-serif]",
                  "transition-all duration-200",
                  "focus:outline-none",
                  isFirst && "rounded-l-lg",
                  isLast && "rounded-r-lg",
                  tab.disabled && "cursor-not-allowed canary-opacity-50",
                  !tab.disabled && !isActive && "canary-tab-hover"
                ),
                style: {
                  fontSize: segmentedFontSize,
                  backgroundColor: isActive ? colors.colorBlueDark1 : colors.colorWhite,
                  color: isActive ? colors.colorWhite : colors.colorBlack1,
                  lineHeight: "1.5",
                  boxShadow: isHovered && !isActive && !tab.disabled ? "0px 4px 0px 0px #CCCCCC" : void 0,
                  WebkitTapHighlightColor: "transparent"
                },
                children: tab.label
              },
              tab.id
            );
          })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children: activeTabContent })
    ] });
  }
  const isCompact = size === "compact";
  const fontSize = isCompact ? "14px" : "16px";
  const lineHeight = isCompact ? "1.5" : "24px";
  const verticalPadding = isCompact ? "py-1" : "py-2";
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: `w-full ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "flex items-start", children: tabs.map((tab) => {
      const isActive = tab.id === activeTab;
      const isPressed = pressedTab === tab.id;
      return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
        "button",
        {
          onClick: () => handleTabClick(tab.id, tab.disabled),
          onMouseDown: () => !tab.disabled && setPressedTab(tab.id),
          onMouseUp: () => setPressedTab(null),
          onMouseLeave: () => setPressedTab(null),
          disabled: tab.disabled,
          className: (0, import_clsx34.default)(
            "flex flex-col items-start overflow-clip relative shrink-0",
            "focus:outline-none transition-all duration-200",
            tab.disabled && "cursor-not-allowed canary-opacity-50"
          ),
          style: { WebkitTapHighlightColor: "transparent" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
              "div",
              {
                className: (0, import_clsx34.default)(
                  "flex gap-2 items-center justify-center px-4",
                  verticalPadding,
                  !tab.disabled && "cursor-pointer transition-colors duration-200",
                  !tab.disabled && !isActive && !isPressed && "hover:bg-black/5 focus-within:bg-black/5",
                  !tab.disabled && !isActive && isPressed && "bg-black/10"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
                  tab.badge && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                    "div",
                    {
                      className: "flex items-center justify-center px-1 rounded-full",
                      style: {
                        backgroundColor: colors.colorPink1,
                        minWidth: "16px",
                        height: "16px"
                      },
                      children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children: activeTabContent })
  ] });
}

// components/canary-ui/navigation/CanaryHeader.tsx
var import_clsx35 = __toESM(require("clsx"));
var import_jsx_runtime40 = require("react/jsx-runtime");
function CanaryHeader({
  logo,
  title,
  actions,
  navigation,
  className = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    "header",
    {
      className: (0, import_clsx35.default)(
        "w-full bg-white border-b flex items-center px-6 shrink-0 sticky top-0 z-50",
        className
      ),
      style: {
        height: dimensions.headerHeight,
        borderColor: colors.colorBlack6
      },
      children: [
        (logo || title) && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex items-center gap-3", children: [
          logo && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "shrink-0", children: logo }),
          title && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h1", { className: "text-[20px] font-semibold", style: { color: colors.colorBlack1 }, children: title })
        ] }),
        navigation && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("nav", { className: "flex-1 flex items-center justify-center px-6", children: navigation }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "flex items-center gap-2 ml-auto", children: actions })
      ]
    }
  );
}

// components/canary-ui/navigation/sidebar-tabs.tsx
var import_react39 = __toESM(require("@mdi/react"));
var import_js13 = require("@mdi/js");
var import_jsx_runtime41 = require("react/jsx-runtime");
var sidebarTabs = {
  // Main Product Tabs
  upsells: {
    id: "upsells",
    label: "Upsells",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiCashMultiple, size: 1 })
  },
  checkIn: {
    id: "check-in",
    label: "Check-in",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiLogin, size: 1 })
  },
  checkout: {
    id: "checkout",
    label: "Checkout",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiLogout, size: 1 })
  },
  messages: {
    id: "messages",
    label: "Messages",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiMessageProcessingOutline, size: 1 })
  },
  calls: {
    id: "calls",
    label: "Calls",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiPhoneOutline, size: 1 })
  },
  digitalTips: {
    id: "digital-tips",
    label: "Digital Tips",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiCurrencyUsd, size: 1 })
  },
  authorizations: {
    id: "authorizations",
    label: "Authorizations",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiShieldCheckOutline, size: 1 })
  },
  contracts: {
    id: "contracts",
    label: "Contracts",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiFileSign, size: 1 })
  },
  idVerification: {
    id: "id-verification",
    label: "ID Verification",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiAccountCheckOutline, size: 1 })
  },
  clientsOnFile: {
    id: "clients-on-file",
    label: "Clients on File",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiAccountBoxOutline, size: 1 })
  },
  amenities: {
    id: "amenities",
    label: "Amenities",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiStoreOutline, size: 1 })
  },
  paymentLinks: {
    id: "payment-links",
    label: "Payment Links",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiCreditCardOutline, size: 1 })
  },
  settings: {
    id: "settings",
    label: "Settings",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiCogOutline, size: 1 })
  },
  // Settings Tabs
  propertyInfo: {
    id: "property-info",
    label: "Property Info",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiHomeOutline, size: 1 })
  },
  branding: {
    id: "branding",
    label: "Branding",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiPaletteOutline, size: 1 })
  },
  billingPayment: {
    id: "billing-payment",
    label: "Billing & Payment",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiCreditCardOutline, size: 1 })
  },
  staffMembers: {
    id: "staff-members",
    label: "Staff Members",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiAccountGroupOutline, size: 1 })
  },
  security: {
    id: "security",
    label: "Security",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiShieldAccountOutline, size: 1 })
  },
  pms: {
    id: "pms",
    label: "PMS",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiPuzzleOutline, size: 1 })
  },
  devices: {
    id: "devices",
    label: "Devices",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiTabletCellphone, size: 1 })
  },
  compendium: {
    id: "compendium",
    label: "Compendium",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiNewspaperVariantOutline, size: 1 })
  },
  areaInfo: {
    id: "area-info",
    label: "Area Info",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiMapMarker, size: 1 })
  },
  chat: {
    id: "chat",
    label: "Chat",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiChatOutline, size: 1 })
  },
  // Custom/Above-Property Tabs
  insights: {
    id: "insights",
    label: "Insights",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiChartLine, size: 1 })
  },
  properties: {
    id: "properties",
    label: "Properties",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiDomain, size: 1 })
  },
  analytics: {
    id: "analytics",
    label: "Analytics",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiChartBar, size: 1 })
  },
  surveys: {
    id: "surveys",
    label: "Surveys",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiPoll, size: 1 })
  },
  dashboard: {
    id: "dashboard",
    label: "Dashboard",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiViewDashboard, size: 1 })
  },
  tasks: {
    id: "tasks",
    label: "Tasks",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiClipboardList, size: 1 })
  },
  calendar: {
    id: "calendar",
    label: "Calendar",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiCalendar, size: 1 })
  },
  reports: {
    id: "reports",
    label: "Reports",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiNotebook, size: 1 })
  },
  performance: {
    id: "performance",
    label: "Performance",
    icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react39.default, { path: import_js13.mdiTrendingUp, size: 1 })
  }
};
var createSidebarTab = (id, label, icon, options) => __spreadValues({
  id,
  label,
  icon
}, options);

// components/canary-ui/navigation/sidebar-utils.ts
var hideProducts = (sections, productIds) => {
  return sections.map((section) => __spreadProps(__spreadValues({}, section), {
    items: section.items.filter((item) => !productIds.includes(item.id))
  })).filter((section) => section.items.length > 0);
};
var addProduct = (sections, product, options = {}) => {
  const { insertAfter, insertBefore, insertAtStart, insertAtEnd, sectionId } = options;
  if (!sections.length) {
    return [{
      id: "main-section",
      items: [product]
    }];
  }
  return sections.map((section) => {
    if (sectionId && section.id !== sectionId) {
      return section;
    }
    if (!sectionId && section !== sections[0]) {
      return section;
    }
    let newItems = [...section.items];
    if (insertAfter) {
      const index = newItems.findIndex((item) => item.id === insertAfter);
      if (index !== -1) {
        newItems.splice(index + 1, 0, product);
      } else {
        newItems.push(product);
      }
    } else if (insertBefore) {
      const index = newItems.findIndex((item) => item.id === insertBefore);
      if (index !== -1) {
        newItems.splice(index, 0, product);
      } else {
        newItems.unshift(product);
      }
    } else if (insertAtStart) {
      newItems.unshift(product);
    } else {
      newItems.push(product);
    }
    return __spreadProps(__spreadValues({}, section), {
      items: newItems
    });
  });
};
var reorderProducts = (sections, productOrder, sectionId) => {
  return sections.map((section) => {
    if (sectionId && section.id !== sectionId) {
      return section;
    }
    if (!sectionId && section !== sections[0]) {
      return section;
    }
    const itemMap = new Map(section.items.map((item) => [item.id, item]));
    const reorderedItems = [];
    productOrder.forEach((productId) => {
      const item = itemMap.get(productId);
      if (item) {
        reorderedItems.push(item);
        itemMap.delete(productId);
      }
    });
    itemMap.forEach((item) => {
      reorderedItems.push(item);
    });
    return __spreadProps(__spreadValues({}, section), {
      items: reorderedItems
    });
  });
};
var createCustomSection = (items, options = {}) => {
  return {
    id: options.id || "custom-section",
    title: options.title,
    items
  };
};
var mergeWithStandard = (customSections, standardSections, options = {}) => {
  const { insertAtStart, insertAtEnd, replaceStandard } = options;
  if (replaceStandard) {
    return customSections;
  }
  if (insertAtStart) {
    return [...customSections, ...standardSections];
  }
  return [...standardSections, ...customSections];
};
var updateProduct = (sections, productId, updates) => {
  return sections.map((section) => __spreadProps(__spreadValues({}, section), {
    items: section.items.map(
      (item) => item.id === productId ? __spreadValues(__spreadValues({}, item), updates) : item
    )
  }));
};
var addBadge = (sections, productId, badge) => {
  return updateProduct(sections, productId, { badge });
};
var removeBadge = (sections, productId) => {
  return updateProduct(sections, productId, { badge: void 0 });
};
var disableProduct = (sections, productId) => {
  return updateProduct(sections, productId, { isDisabled: true });
};
var enableProduct = (sections, productId) => {
  return updateProduct(sections, productId, { isDisabled: false });
};

// components/canary-ui/feedback/CanaryToast.tsx
var import_react40 = require("react");
var import_clsx36 = __toESM(require("clsx"));
var import_jsx_runtime42 = require("react/jsx-runtime");
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
  const [visible, setVisible] = (0, import_react40.useState)(isOpen);
  (0, import_react40.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
    "div",
    {
      className: (0, import_clsx36.default)(
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
        icon && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "shrink-0", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-[14px] font-medium flex-1", children: message }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "button",
          {
            onClick: handleClose,
            className: "shrink-0 hover:opacity-70 transition-opacity",
            children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M12 4L4 12M4 4L12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
          }
        )
      ]
    }
  );
}

// components/canary-ui/feedback/CanaryAlert.tsx
var import_clsx37 = __toESM(require("clsx"));
var import_jsx_runtime43 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
    "div",
    {
      className: (0, import_clsx37.default)(
        "flex items-start gap-3 p-4 rounded border",
        className
      ),
      style: {
        backgroundColor: colorScheme.bg,
        borderColor: colorScheme.border,
        color: colorScheme.text
      },
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "shrink-0 mt-0.5", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "flex-1", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("h4", { className: "text-[14px] font-semibold mb-1", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "text-[14px]", children: message })
        ] }),
        onClose && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          "button",
          {
            onClick: onClose,
            className: "shrink-0 hover:opacity-70 transition-opacity",
            children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("path", { d: "M12 4L4 12M4 4L12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonColor,
  ButtonSize,
  ButtonType,
  CanaryAlert,
  CanaryAppShell,
  CanaryButton,
  CanaryCard,
  CanaryCheckbox,
  CanaryContainer,
  CanaryGrid,
  CanaryHeader,
  CanaryIcon,
  CanaryInput,
  CanaryInputCreditCard,
  CanaryInputCreditCardUnderline,
  CanaryInputDate,
  CanaryInputDateRange,
  CanaryInputDateRangeUnderline,
  CanaryInputDateUnderline,
  CanaryInputPassword,
  CanaryInputPasswordUnderline,
  CanaryInputPhone,
  CanaryInputPhoneUnderline,
  CanaryInputSearch,
  CanaryInputSearchUnderline,
  CanaryInputUnderline,
  CanaryList,
  CanaryListItem,
  CanaryLoading,
  CanaryLogo,
  CanaryModal,
  CanaryPageHeader,
  CanaryRadio,
  CanaryRadioGroup,
  CanarySelect,
  CanarySelectUnderline,
  CanarySidebar,
  CanarySwitch,
  CanaryTable,
  CanaryTabs,
  CanaryTag,
  CanaryTextArea,
  CanaryTextAreaUnderline,
  CanaryToast,
  Icon,
  IconPosition,
  InputSize,
  InputType,
  NavigationItemState,
  SidebarVariant,
  TagColor,
  TagSize,
  TagVariant,
  addBadge,
  addProduct,
  borderRadius,
  breakpoints,
  colors,
  createCustomSection,
  createSidebarTab,
  dimensions,
  disableProduct,
  easings,
  enableProduct,
  hideProducts,
  iconPaths,
  mergeWithStandard,
  removeBadge,
  reorderProducts,
  shadows,
  sidebarTabs,
  spacing,
  standardMainSidebarSections,
  standardSettingsSidebarSections,
  transitions,
  typography,
  updateProduct,
  zIndex
});
//# sourceMappingURL=index.js.map
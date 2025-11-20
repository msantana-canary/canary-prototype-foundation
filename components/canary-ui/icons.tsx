/**
 * Canary UI Icons
 *
 * Standard icon set for Canary components.
 * All icons use Material Design Icons from @mdi/js
 *
 * Usage:
 * import { CanaryIcon } from '@canary-ui/components';
 * <CanaryIcon.Home size={24} color="#000" />
 */

import Icon from "@mdi/react";
import {
  // Navigation & UI
  mdiHome,
  mdiHomeOutline,
  mdiMenu,
  mdiClose,
  mdiChevronDown,
  mdiChevronUp,
  mdiChevronLeft,
  mdiChevronRight,
  mdiArrowLeft,
  mdiArrowRight,

  // User & Account
  mdiAccount,
  mdiAccountOutline,
  mdiAccountCircle,
  mdiAccountCircleOutline,
  mdiAccountGroup,
  mdiAccountGroupOutline,
  mdiAccountCheck,
  mdiAccountCheckOutline,
  mdiAccountMultiple,
  mdiAccountMultipleOutline,
  mdiLogin,
  mdiLogout,

  // Settings & Configuration
  mdiCog,
  mdiCogOutline,
  mdiPalette,
  mdiPaletteOutline,
  mdiPuzzle,
  mdiPuzzleOutline,

  // Documents & Files
  mdiFile,
  mdiFileOutline,
  mdiFileDocument,
  mdiFileDocumentOutline,
  mdiFolder,
  mdiFolderOutline,
  mdiNewspaper,
  mdiNewspaperVariant,
  mdiNewspaperVariantOutline,
  mdiBookOpen,
  mdiBookOpenPageVariant,
  mdiBookOpenPageVariantOutline,

  // Financial
  mdiCurrencyUsd,
  mdiCash,
  mdiCashMultiple,
  mdiCreditCard,
  mdiCreditCardOutline,

  // Communication
  mdiEmail,
  mdiEmailOutline,
  mdiMessage,
  mdiMessageOutline,
  mdiMessageProcessing,
  mdiMessageProcessingOutline,
  mdiChat,
  mdiChatOutline,
  mdiPhone,
  mdiPhoneOutline,

  // Actions
  mdiPlus,
  mdiMinus,
  mdiPencil,
  mdiPencilOutline,
  mdiDelete,
  mdiDeleteOutline,
  mdiContentCopy,
  mdiDownload,
  mdiUpload,
  mdiRefresh,
  mdiCheck,
  mdiCheckCircle,
  mdiCheckCircleOutline,

  // Status & Alerts
  mdiAlert,
  mdiAlertCircle,
  mdiAlertCircleOutline,
  mdiInformation,
  mdiInformationOutline,
  mdiHelp,
  mdiHelpCircle,
  mdiHelpCircleOutline,

  // Business
  mdiTrendingUp,
  mdiTrendingDown,
  mdiChartLine,
  mdiFinance,
  mdiShield,
  mdiShieldOutline,
  mdiShieldAccount,
  mdiShieldAccountOutline,
  mdiShieldCheck,
  mdiShieldCheckOutline,

  // Hospitality
  mdiSilverware,
  mdiSilverwareForkKnife,
  mdiMapMarker,
  mdiMapMarkerOutline,

  // Devices
  mdiTablet,
  mdiTabletCellphone,
  mdiCellphone,
  mdiLaptop,
  mdiMonitor,
} from "@mdi/js";

export interface CanaryIconProps {
  size?: string | number;
  color?: string;
  className?: string;
}

/**
 * Standard Canary Icons
 * Pre-configured icon components with consistent defaults
 */
export const CanaryIcon = {
  // Navigation & UI
  Home: (props: CanaryIconProps) => <Icon path={mdiHomeOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Menu: (props: CanaryIconProps) => <Icon path={mdiMenu} size={props.size || 1} color={props.color} className={props.className} />,
  Close: (props: CanaryIconProps) => <Icon path={mdiClose} size={props.size || 1} color={props.color} className={props.className} />,
  ChevronDown: (props: CanaryIconProps) => <Icon path={mdiChevronDown} size={props.size || 1} color={props.color} className={props.className} />,
  ChevronUp: (props: CanaryIconProps) => <Icon path={mdiChevronUp} size={props.size || 1} color={props.color} className={props.className} />,
  ChevronLeft: (props: CanaryIconProps) => <Icon path={mdiChevronLeft} size={props.size || 1} color={props.color} className={props.className} />,
  ChevronRight: (props: CanaryIconProps) => <Icon path={mdiChevronRight} size={props.size || 1} color={props.color} className={props.className} />,
  ArrowLeft: (props: CanaryIconProps) => <Icon path={mdiArrowLeft} size={props.size || 1} color={props.color} className={props.className} />,
  ArrowRight: (props: CanaryIconProps) => <Icon path={mdiArrowRight} size={props.size || 1} color={props.color} className={props.className} />,

  // User & Account
  Account: (props: CanaryIconProps) => <Icon path={mdiAccountOutline} size={props.size || 1} color={props.color} className={props.className} />,
  AccountCircle: (props: CanaryIconProps) => <Icon path={mdiAccountCircleOutline} size={props.size || 1} color={props.color} className={props.className} />,
  AccountGroup: (props: CanaryIconProps) => <Icon path={mdiAccountGroupOutline} size={props.size || 1} color={props.color} className={props.className} />,
  AccountCheck: (props: CanaryIconProps) => <Icon path={mdiAccountCheckOutline} size={props.size || 1} color={props.color} className={props.className} />,
  AccountMultiple: (props: CanaryIconProps) => <Icon path={mdiAccountMultipleOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Login: (props: CanaryIconProps) => <Icon path={mdiLogin} size={props.size || 1} color={props.color} className={props.className} />,
  Logout: (props: CanaryIconProps) => <Icon path={mdiLogout} size={props.size || 1} color={props.color} className={props.className} />,

  // Settings & Configuration
  Settings: (props: CanaryIconProps) => <Icon path={mdiCogOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Palette: (props: CanaryIconProps) => <Icon path={mdiPaletteOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Puzzle: (props: CanaryIconProps) => <Icon path={mdiPuzzleOutline} size={props.size || 1} color={props.color} className={props.className} />,

  // Documents & Files
  File: (props: CanaryIconProps) => <Icon path={mdiFileOutline} size={props.size || 1} color={props.color} className={props.className} />,
  FileDocument: (props: CanaryIconProps) => <Icon path={mdiFileDocumentOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Folder: (props: CanaryIconProps) => <Icon path={mdiFolderOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Newspaper: (props: CanaryIconProps) => <Icon path={mdiNewspaperVariantOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Compendium: (props: CanaryIconProps) => <Icon path={mdiNewspaperVariantOutline} size={props.size || 1} color={props.color} className={props.className} />,
  BookOpen: (props: CanaryIconProps) => <Icon path={mdiBookOpenPageVariantOutline} size={props.size || 1} color={props.color} className={props.className} />,

  // Financial
  Currency: (props: CanaryIconProps) => <Icon path={mdiCurrencyUsd} size={props.size || 1} color={props.color} className={props.className} />,
  Cash: (props: CanaryIconProps) => <Icon path={mdiCashMultiple} size={props.size || 1} color={props.color} className={props.className} />,
  CreditCard: (props: CanaryIconProps) => <Icon path={mdiCreditCardOutline} size={props.size || 1} color={props.color} className={props.className} />,

  // Communication
  Email: (props: CanaryIconProps) => <Icon path={mdiEmailOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Message: (props: CanaryIconProps) => <Icon path={mdiMessageOutline} size={props.size || 1} color={props.color} className={props.className} />,
  MessageProcessing: (props: CanaryIconProps) => <Icon path={mdiMessageProcessingOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Chat: (props: CanaryIconProps) => <Icon path={mdiChatOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Phone: (props: CanaryIconProps) => <Icon path={mdiPhoneOutline} size={props.size || 1} color={props.color} className={props.className} />,

  // Actions
  Plus: (props: CanaryIconProps) => <Icon path={mdiPlus} size={props.size || 1} color={props.color} className={props.className} />,
  Minus: (props: CanaryIconProps) => <Icon path={mdiMinus} size={props.size || 1} color={props.color} className={props.className} />,
  Pencil: (props: CanaryIconProps) => <Icon path={mdiPencilOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Delete: (props: CanaryIconProps) => <Icon path={mdiDeleteOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Copy: (props: CanaryIconProps) => <Icon path={mdiContentCopy} size={props.size || 1} color={props.color} className={props.className} />,
  Download: (props: CanaryIconProps) => <Icon path={mdiDownload} size={props.size || 1} color={props.color} className={props.className} />,
  Upload: (props: CanaryIconProps) => <Icon path={mdiUpload} size={props.size || 1} color={props.color} className={props.className} />,
  Refresh: (props: CanaryIconProps) => <Icon path={mdiRefresh} size={props.size || 1} color={props.color} className={props.className} />,
  Check: (props: CanaryIconProps) => <Icon path={mdiCheck} size={props.size || 1} color={props.color} className={props.className} />,
  CheckCircle: (props: CanaryIconProps) => <Icon path={mdiCheckCircleOutline} size={props.size || 1} color={props.color} className={props.className} />,

  // Status & Alerts
  Alert: (props: CanaryIconProps) => <Icon path={mdiAlertCircleOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Information: (props: CanaryIconProps) => <Icon path={mdiInformationOutline} size={props.size || 1} color={props.color} className={props.className} />,
  Help: (props: CanaryIconProps) => <Icon path={mdiHelpCircleOutline} size={props.size || 1} color={props.color} className={props.className} />,

  // Business
  TrendingUp: (props: CanaryIconProps) => <Icon path={mdiTrendingUp} size={props.size || 1} color={props.color} className={props.className} />,
  TrendingDown: (props: CanaryIconProps) => <Icon path={mdiTrendingDown} size={props.size || 1} color={props.color} className={props.className} />,
  Chart: (props: CanaryIconProps) => <Icon path={mdiChartLine} size={props.size || 1} color={props.color} className={props.className} />,
  Shield: (props: CanaryIconProps) => <Icon path={mdiShieldOutline} size={props.size || 1} color={props.color} className={props.className} />,
  ShieldAccount: (props: CanaryIconProps) => <Icon path={mdiShieldAccountOutline} size={props.size || 1} color={props.color} className={props.className} />,
  ShieldCheck: (props: CanaryIconProps) => <Icon path={mdiShieldCheckOutline} size={props.size || 1} color={props.color} className={props.className} />,

  // Hospitality
  Restaurant: (props: CanaryIconProps) => <Icon path={mdiSilverwareForkKnife} size={props.size || 1} color={props.color} className={props.className} />,
  Location: (props: CanaryIconProps) => <Icon path={mdiMapMarker} size={props.size || 1} color={props.color} className={props.className} />,

  // Devices
  Tablet: (props: CanaryIconProps) => <Icon path={mdiTabletCellphone} size={props.size || 1} color={props.color} className={props.className} />,
  Cellphone: (props: CanaryIconProps) => <Icon path={mdiCellphone} size={props.size || 1} color={props.color} className={props.className} />,
  Laptop: (props: CanaryIconProps) => <Icon path={mdiLaptop} size={props.size || 1} color={props.color} className={props.className} />,
  Monitor: (props: CanaryIconProps) => <Icon path={mdiMonitor} size={props.size || 1} color={props.color} className={props.className} />,
};

/**
 * Export raw icon paths for advanced usage
 */
export const iconPaths = {
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
  monitor: mdiMonitor,
};

/**
 * Export the Icon component for custom usage
 */
export { Icon };

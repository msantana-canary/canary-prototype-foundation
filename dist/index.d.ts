import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode, MouseEvent, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';
export { default as Icon } from '@mdi/react';

/**
 * Canary Design System - Design Tokens
 *
 * Extracted from the Canary UI design system.
 * Source: /Documents/Canary/canary/frontend/packages/canary-ui/
 *
 * These tokens should be used throughout all components to maintain
 * visual consistency with the main Canary product.
 */
/**
 * Status Colors
 * Used for success, warning, and error states
 */
declare const colors: {
    readonly ok: "#008040";
    readonly success: "#008040";
    readonly warning: "#FAB541";
    readonly danger: "#E40046";
    readonly error: "#E40046";
    readonly colorWhite: "#FFFFFF";
    readonly white: "#FFFFFF";
    readonly colorBlack1: "#000000";
    readonly colorBlack2: "#333333";
    readonly colorBlack3: "#666666";
    readonly colorBlack4: "#999999";
    readonly colorBlack5: "#CCCCCC";
    readonly colorBlack6: "#E5E5E5";
    readonly colorBlack7: "#F0F0F0";
    readonly colorBlack8: "#FAFAFA";
    readonly colorBlueCanary1: "#1C91FA";
    readonly colorBlueCanary2: "#55ACFB";
    readonly colorBlueCanary3: "#8DC8FC";
    readonly colorBlueCanary4: "#C6E3FE";
    readonly colorBlueCanary5: "#E8F4FF";
    readonly colorBlueDark1: "#2858C4";
    readonly colorBlueDark2: "#5E82D3";
    readonly colorBlueDark3: "#93ABE1";
    readonly colorBlueDark4: "#C9D5F0";
    readonly colorBlueDark5: "#EAEEF9";
    readonly colorPink1: "#F16682";
    readonly colorPink2: "#F48CA1";
    readonly colorPink3: "#F8B2C0";
    readonly colorPink4: "#FBD9E0";
    readonly colorPink5: "#FEF0F3";
    readonly colorLightGreen1: "#008040";
    readonly colorLightGreen2: "#339966";
    readonly colorLightGreen3: "#66B38C";
    readonly colorLightGreen4: "#99CCB3";
    readonly colorLightGreen5: "#CCE6D9";
    readonly colorWheat1: "#FAB541";
    readonly colorWheat2: "#FBC770";
    readonly colorWheat3: "#FCDAA0";
    readonly colorWheat4: "#FEECCF";
    readonly colorWheat5: "#FFF8EC";
    readonly colorPurple1: "#3304AD";
    readonly colorPurple2: "#723DFC";
    readonly colorPurple3: "#9D7AFA";
    readonly colorPurple4: "#CAB8F8";
    readonly colorPurple5: "#E3DCF6";
    readonly colorRed1: "#E40046";
    readonly colorRed2: "#EB4074";
    readonly colorRed3: "#F59FBA";
    readonly colorRed4: "#F8BFD1";
    readonly colorRed5: "#FCE6ED";
};
/**
 * Typography System
 * Based on Roboto font family with Material Design-inspired sizing
 */
declare const typography: {
    readonly fontFamily: {
        readonly primary: "\"Roboto\", sans-serif";
        readonly fallback: "system-ui, -apple-system, sans-serif";
    };
    readonly fontSize: {
        readonly displayTitleLg: "3.5rem";
        readonly displayTitle: "3rem";
        readonly displayTitleSm: "2rem";
        readonly titleLg: "1.75rem";
        readonly title: "1.5rem";
        readonly subtitleLg: "1.25rem";
        readonly subtitle: "1.125rem";
        readonly body: "1rem";
        readonly bodySm: "0.875rem";
        readonly caption: "0.75rem";
        readonly captionSm: "0.625rem";
    };
    readonly lineHeight: {
        readonly displayTitleLg: "5.25rem";
        readonly displayTitle: "4.5rem";
        readonly displayTitleSm: "3rem";
        readonly titleLg: "2.625rem";
        readonly title: "2.25rem";
        readonly subtitleLg: "1.875rem";
        readonly subtitle: "1.6875rem";
        readonly body: "1.5rem";
        readonly bodySm: "1.3125rem";
        readonly caption: "1.125rem";
        readonly captionSm: "0.9375rem";
    };
    readonly fontWeight: {
        readonly regular: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
    };
};
/**
 * Spacing scale based on 4px base unit
 * Follows a consistent scale for margins, padding, and gaps
 */
declare const spacing: {
    readonly 0: "0";
    readonly 1: "0.25rem";
    readonly 2: "0.5rem";
    readonly 3: "0.75rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 8: "2rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 24: "6rem";
};
/**
 * Border radius tokens
 * Used for rounded corners on buttons, cards, inputs, etc.
 */
declare const borderRadius: {
    readonly none: "0";
    readonly sm: "2px";
    readonly default: "4px";
    readonly md: "6px";
    readonly lg: "8px";
    readonly xl: "12px";
    readonly full: "9999px";
};
/**
 * Box shadow tokens
 * Used for elevation and depth
 */
declare const shadows: {
    readonly none: "none";
    readonly sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
    readonly default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
    readonly md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    readonly lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
    readonly xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
};
/**
 * Z-index scale
 * Ensures proper layering of components
 */
declare const zIndex: {
    readonly base: 0;
    readonly dropdown: 10;
    readonly sticky: 20;
    readonly overlay: 40;
    readonly modal: 50;
    readonly popover: 51;
    readonly toast: 100;
};
/**
 * Common dimension tokens
 */
declare const dimensions: {
    readonly headerHeight: "56px";
    readonly sectionContainerHeight: "24px";
};
/**
 * Responsive breakpoints
 * Mobile-first approach
 */
declare const breakpoints: {
    readonly sm: "640px";
    readonly md: "768px";
    readonly lg: "1024px";
    readonly xl: "1280px";
    readonly "2xl": "1536px";
};
/**
 * Transition timing tokens
 * For animations and transitions
 */
declare const transitions: {
    readonly fast: "150ms";
    readonly default: "200ms";
    readonly slow: "300ms";
    readonly slower: "500ms";
};
declare const easings: {
    readonly default: "cubic-bezier(0.4, 0, 0.2, 1)";
    readonly in: "cubic-bezier(0.4, 0, 1, 1)";
    readonly out: "cubic-bezier(0, 0, 0.2, 1)";
    readonly inOut: "cubic-bezier(0.4, 0, 0.2, 1)";
};

interface CanaryIconProps {
    size?: string | number;
    color?: string;
    className?: string;
}
/**
 * Standard Canary Icons
 * Pre-configured icon components with consistent defaults
 */
declare const CanaryIcon: {
    Home: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Menu: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Close: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    ChevronDown: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    ChevronUp: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    ChevronLeft: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    ChevronRight: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    ArrowLeft: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    ArrowRight: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Account: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    AccountCircle: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    AccountGroup: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    AccountCheck: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    AccountMultiple: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Login: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Logout: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Settings: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Palette: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Puzzle: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    File: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    FileDocument: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Folder: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Newspaper: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Compendium: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    BookOpen: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Currency: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Cash: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    CreditCard: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Email: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Message: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    MessageProcessing: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Chat: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Phone: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Plus: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Minus: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Pencil: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Delete: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Copy: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Download: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Upload: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Refresh: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Check: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    CheckCircle: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Alert: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Information: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Help: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    TrendingUp: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    TrendingDown: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Chart: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Shield: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    ShieldAccount: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    ShieldCheck: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Restaurant: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Location: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Tablet: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Cellphone: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Laptop: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
    Monitor: (props: CanaryIconProps) => react_jsx_runtime.JSX.Element;
};
/**
 * Export raw icon paths for advanced usage
 */
declare const iconPaths: {
    home: string;
    menu: string;
    close: string;
    chevronDown: string;
    chevronUp: string;
    chevronLeft: string;
    chevronRight: string;
    arrowLeft: string;
    arrowRight: string;
    account: string;
    accountCircle: string;
    accountGroup: string;
    accountCheck: string;
    accountMultiple: string;
    login: string;
    logout: string;
    settings: string;
    palette: string;
    puzzle: string;
    file: string;
    fileDocument: string;
    folder: string;
    newspaper: string;
    compendium: string;
    bookOpen: string;
    currency: string;
    cash: string;
    creditCard: string;
    email: string;
    message: string;
    messageProcessing: string;
    chat: string;
    phone: string;
    plus: string;
    minus: string;
    pencil: string;
    delete: string;
    copy: string;
    download: string;
    upload: string;
    refresh: string;
    check: string;
    checkCircle: string;
    alert: string;
    information: string;
    help: string;
    trendingUp: string;
    trendingDown: string;
    chart: string;
    shield: string;
    shieldAccount: string;
    shieldCheck: string;
    restaurant: string;
    location: string;
    tablet: string;
    cellphone: string;
    laptop: string;
    monitor: string;
};

/**
 * Button Types and Enums
 * Matches the Canary UI button system
 */
declare enum ButtonType {
    PRIMARY = "primary",
    OUTLINED = "outlined",
    SHADED = "shaded",
    TEXT = "text",
    ICON_PRIMARY = "icon_primary",
    ICON_SECONDARY = "icon_secondary"
}
declare enum ButtonSize {
    TABLET = "tablet",
    LARGE = "large",
    NORMAL = "normal",
    COMPACT = "compact"
}
declare enum ButtonColor {
    NORMAL = "normal",
    HEADING_TEXT = "heading_text",
    DANGER = "danger",
    WARNING = "warning",
    SUCCESS = "success",
    FONT = "font",
    FONT_SECONDARY = "font_secondary",
    WHITE = "white"
}
declare enum IconPosition {
    LEFT = "left",
    RIGHT = "right",
    TOP = "top"
}

interface CanaryButtonProps {
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    type?: ButtonType;
    size?: ButtonSize;
    color?: ButtonColor;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    isDisabled?: boolean;
    isLoading?: boolean;
    isExpanded?: boolean;
    isRounded?: boolean;
    href?: string;
    target?: string;
    nativeType?: "button" | "submit" | "reset";
    className?: string;
    dataAnalytics?: string;
}
declare function CanaryButton({ children, onClick, type, size, color: colorProp, icon, iconPosition, isDisabled, isLoading, isExpanded, isRounded, href, target, nativeType, className, dataAnalytics, }: CanaryButtonProps): react_jsx_runtime.JSX.Element;

/**
 * Form Component Types
 */
declare enum InputSize {
    TABLET = "tablet",
    LARGE = "large",
    NORMAL = "normal",
    COMPACT = "compact"
}
declare enum InputType {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",
    NUMBER = "number",
    TEL = "tel",
    URL = "url",
    SEARCH = "search",
    DATE = "date",
    TIME = "time",
    DATETIME_LOCAL = "datetime-local"
}
interface BaseFormProps {
    label?: string;
    isDisabled?: boolean;
    isReadonly?: boolean;
    isRequired?: boolean;
    error?: string;
    helperText?: string;
    size?: InputSize;
    className?: string;
}

interface CanaryInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">, BaseFormProps {
    type?: InputType;
    leftAddon?: React.ReactNode;
    rightAddon?: React.ReactNode;
}
declare const CanaryInput: react.ForwardRefExoticComponent<CanaryInputProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryTextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">, BaseFormProps {
    resize?: "none" | "vertical" | "horizontal" | "both";
}
declare const CanaryTextArea: react.ForwardRefExoticComponent<CanaryTextAreaProps & react.RefAttributes<HTMLTextAreaElement>>;

interface CanarySelectOption$1 {
    label: string;
    value: string | number;
    disabled?: boolean;
}
interface CanarySelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">, BaseFormProps {
    options: CanarySelectOption$1[];
    placeholder?: string;
}
declare const CanarySelect: react.ForwardRefExoticComponent<CanarySelectProps & react.RefAttributes<HTMLSelectElement>>;

type CheckboxSize = "normal" | "large" | "xlarge";
interface CanaryCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    label?: string;
    size?: CheckboxSize;
    isDisabled?: boolean;
    indeterminate?: boolean;
    error?: string;
    helperText?: string;
}
declare const CanaryCheckbox: react.ForwardRefExoticComponent<CanaryCheckboxProps & react.RefAttributes<HTMLInputElement>>;

type RadioSize = "normal" | "large" | "xlarge";
interface CanaryRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    label?: string;
    size?: RadioSize;
    isDisabled?: boolean;
    error?: string;
    helperText?: string;
}
declare const CanaryRadio: react.ForwardRefExoticComponent<CanaryRadioProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryRadioGroupProps {
    label?: string;
    children: ReactNode;
    error?: string;
    helperText?: string;
    isRequired?: boolean;
    className?: string;
}
declare function CanaryRadioGroup({ label, children, error, helperText, isRequired, className, }: CanaryRadioGroupProps): react_jsx_runtime.JSX.Element;

type SwitchSize = "normal" | "large" | "xlarge";
interface CanarySwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange"> {
    label?: string;
    size?: SwitchSize;
    isDisabled?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
declare const CanarySwitch: react.ForwardRefExoticComponent<CanarySwitchProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryInputPasswordProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">, BaseFormProps {
}
declare const CanaryInputPassword: react.ForwardRefExoticComponent<CanaryInputPasswordProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryInputSearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">, BaseFormProps {
}
declare const CanaryInputSearch: react.ForwardRefExoticComponent<CanaryInputSearchProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryInputCreditCardProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange">, BaseFormProps {
    onCardChange?: (cardNumber: string, cardType: string) => void;
}
declare const CanaryInputCreditCard: react.ForwardRefExoticComponent<CanaryInputCreditCardProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryInputPhoneProps extends Omit<BaseFormProps, "size"> {
    value?: string;
    onChange?: (value: string) => void;
    defaultCountry?: string;
    size?: InputSize;
    placeholder?: string;
}
declare const CanaryInputPhone: react.ForwardRefExoticComponent<CanaryInputPhoneProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryInputDateProps extends Omit<BaseFormProps, "size"> {
    size?: InputSize;
    value?: string;
    onChange?: (date: string) => void;
}
declare const CanaryInputDate: react.ForwardRefExoticComponent<CanaryInputDateProps & react.RefAttributes<HTMLDivElement>>;

interface CanaryInputDateRangeProps extends Omit<BaseFormProps, "size"> {
    size?: InputSize;
    startDate?: string;
    endDate?: string;
    onChange?: (startDate: string, endDate: string) => void;
}
declare const CanaryInputDateRange: react.ForwardRefExoticComponent<CanaryInputDateRangeProps & react.RefAttributes<HTMLDivElement>>;

interface CanaryInputUnderlineProps extends Omit<BaseFormProps, "size">, Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: InputSize;
}
declare const CanaryInputUnderline: react.ForwardRefExoticComponent<CanaryInputUnderlineProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryTextAreaUnderlineProps extends Omit<BaseFormProps, "size">, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
    size?: InputSize;
    rows?: number;
}
declare const CanaryTextAreaUnderline: react.ForwardRefExoticComponent<CanaryTextAreaUnderlineProps & react.RefAttributes<HTMLTextAreaElement>>;

interface CanarySelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}
interface CanarySelectUnderlineProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">, Omit<BaseFormProps, "size"> {
    options: CanarySelectOption[];
    placeholder?: string;
    size?: InputSize;
}
declare const CanarySelectUnderline: react.ForwardRefExoticComponent<CanarySelectUnderlineProps & react.RefAttributes<HTMLSelectElement>>;

interface CanaryInputPhoneUnderlineProps extends Omit<BaseFormProps, "size"> {
    value?: string;
    onChange?: (value: string) => void;
    defaultCountry?: string;
    size?: InputSize;
    placeholder?: string;
}
declare const CanaryInputPhoneUnderline: react.ForwardRefExoticComponent<CanaryInputPhoneUnderlineProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryInputPasswordUnderlineProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">, Omit<BaseFormProps, "size"> {
    size?: InputSize;
}
declare const CanaryInputPasswordUnderline: react.ForwardRefExoticComponent<CanaryInputPasswordUnderlineProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryInputSearchUnderlineProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">, Omit<BaseFormProps, "size"> {
    size?: InputSize;
}
declare const CanaryInputSearchUnderline: react.ForwardRefExoticComponent<CanaryInputSearchUnderlineProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryInputCreditCardUnderlineProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange">, Omit<BaseFormProps, "size"> {
    size?: InputSize;
    onCardChange?: (cardNumber: string, cardType: string) => void;
}
declare const CanaryInputCreditCardUnderline: react.ForwardRefExoticComponent<CanaryInputCreditCardUnderlineProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryInputDateUnderlineProps extends Omit<BaseFormProps, "size"> {
    size?: InputSize;
    value?: string;
    onChange?: (date: string) => void;
}
declare const CanaryInputDateUnderline: react.ForwardRefExoticComponent<CanaryInputDateUnderlineProps & react.RefAttributes<HTMLDivElement>>;

interface CanaryInputDateRangeUnderlineProps extends Omit<BaseFormProps, "size"> {
    size?: InputSize;
    startDate?: string;
    endDate?: string;
    onChange?: (startDate: string, endDate: string) => void;
}
declare const CanaryInputDateRangeUnderline: react.ForwardRefExoticComponent<CanaryInputDateRangeUnderlineProps & react.RefAttributes<HTMLDivElement>>;

/**
 * Data Display Component Types
 */
declare enum TagColor {
    /** SUCCESS - Green */
    SUCCESS = "success",
    /** WARNING - Yellow/Wheat */
    WARNING = "warning",
    /** INFO - Blue */
    INFO = "info",
    /** DEFAULT - Gray */
    DEFAULT = "default",
    /** ERROR - Red/Pink */
    ERROR = "error"
}
declare enum TagVariant {
    /** OUTLINE - Light background with colored border */
    OUTLINE = "outline",
    /** FILLED - Solid colored background with white text */
    FILLED = "filled"
}
declare enum TagSize {
    /** COMPACT - 10px font, 16px line-height */
    COMPACT = "compact",
    /** MEDIUM - 12px font, 18px line-height */
    MEDIUM = "medium"
}
interface CustomTagColor {
    backgroundColor?: string;
    borderColor?: string;
    fontColor?: string;
    iconColor?: string;
}

interface CanaryTagProps {
    label: string;
    color?: TagColor;
    variant?: TagVariant;
    size?: TagSize;
    customColor?: CustomTagColor;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    uppercase?: boolean;
    className?: string;
}
declare function CanaryTag({ label, color, variant, size, customColor, leadingIcon, trailingIcon, uppercase, className, }: CanaryTagProps): react_jsx_runtime.JSX.Element;

interface CanaryTableColumn<T = any> {
    key: string;
    label: string;
    render?: (value: any, row: T, index: number) => ReactNode;
    width?: string;
    align?: "left" | "center" | "right";
}
interface CanaryTableProps<T = any> {
    columns: CanaryTableColumn<T>[];
    data: T[];
    isLoading?: boolean;
    emptyMessage?: string;
    onRowClick?: (row: T, index: number) => void;
    className?: string;
}
declare function CanaryTable<T extends Record<string, any>>({ columns, data, isLoading, emptyMessage, onRowClick, className, }: CanaryTableProps<T>): react_jsx_runtime.JSX.Element;

interface CanaryCardProps {
    children: ReactNode;
    title?: string;
    subtitle?: string;
    footer?: ReactNode;
    padding?: "none" | "small" | "medium" | "large";
    hasShadow?: boolean;
    hasBorder?: boolean;
    className?: string;
    onClick?: () => void;
}
declare function CanaryCard({ children, title, subtitle, footer, padding, hasShadow, hasBorder, className, onClick, }: CanaryCardProps): react_jsx_runtime.JSX.Element;

interface CanaryListItemProps {
    children?: ReactNode;
    title?: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    onClick?: () => void;
    href?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    isClickable?: boolean;
    isDraggable?: boolean;
    className?: string;
    padding?: "normal" | "compact";
    alignment?: "start" | "center";
    isSelected?: boolean;
    backgroundColor?: string;
    hoverColor?: string;
    selectedBackgroundColor?: string;
    selectedTitleColor?: string;
    selectedSubtitleColor?: string;
    selectedDescriptionColor?: string;
    allowTextWrap?: boolean;
}
declare const CanaryListItem: react.ForwardRefExoticComponent<CanaryListItemProps & react.RefAttributes<HTMLLIElement>>;

interface CanaryListProps {
    children?: ReactNode;
    items?: any[];
    isDraggable?: boolean;
    onReorder?: (items: any[]) => void;
    className?: string;
    hasOuterBorder?: boolean;
    isLoading?: boolean;
    loadingContent?: ReactNode;
    isEmpty?: boolean;
    emptyContent?: ReactNode;
    hasError?: boolean;
    errorContent?: ReactNode;
}
declare const CanaryList: {
    ({ children, items, isDraggable, onReorder, className, hasOuterBorder, isLoading, loadingContent, isEmpty, emptyContent, hasError, errorContent, }: CanaryListProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface CanaryContainerProps {
    children: ReactNode;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    padding?: "none" | "small" | "medium" | "large";
    className?: string;
}
declare function CanaryContainer({ children, maxWidth, padding, className, }: CanaryContainerProps): react_jsx_runtime.JSX.Element;

interface CanaryGridProps {
    children: ReactNode;
    columns?: 1 | 2 | 3 | 4 | 6 | 12;
    gap?: "none" | "small" | "medium" | "large";
    className?: string;
}
declare function CanaryGrid({ children, columns, gap, className, }: CanaryGridProps): react_jsx_runtime.JSX.Element;

interface CanaryModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    footer?: ReactNode;
    size?: "small" | "medium" | "large" | "full";
    closeOnOverlayClick?: boolean;
    showCloseButton?: boolean;
    className?: string;
}
declare function CanaryModal({ isOpen, onClose, title, children, footer, size, closeOnOverlayClick, showCloseButton, className, }: CanaryModalProps): react_jsx_runtime.JSX.Element | null;

/**
 * Sidebar Navigation Types and Enums
 * Matches the Canary UI sidebar system
 */
declare enum SidebarVariant {
    MAIN = "main",
    SETTINGS = "settings",
    CUSTOM = "custom"
}
declare enum NavigationItemState {
    DEFAULT = "default",
    SELECTED = "selected",
    FOCUS = "focus",
    ON_PRESS = "onPress",
    DISABLED = "disabled"
}

interface SidebarNavigationItem {
    id: string;
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
    isDisabled?: boolean;
    badge?: string | number;
}
interface SidebarSection {
    id: string;
    title?: string;
    items: SidebarNavigationItem[];
}
interface CanarySidebarProps {
    variant?: SidebarVariant;
    sections?: SidebarSection[];
    logo?: ReactNode;
    title?: string;
    backButton?: ReactNode;
    selectedItemId?: string;
    onItemClick?: (itemId: string) => void;
    width?: number;
    className?: string;
}
declare function CanarySidebar({ variant, sections, logo, title, backButton, selectedItemId, onItemClick, width, // Remove default, let it auto-size
className, }: CanarySidebarProps): react_jsx_runtime.JSX.Element;

interface UserProfile {
    name: string;
    role: string;
    avatarUrl?: string;
    avatarAlt?: string;
}
interface ReservationStatus {
    label: string;
    isConnected: boolean;
}
interface CanaryPageHeaderProps {
    /** Property/Hotel name displayed on the left */
    propertyName: string;
    /** Called when property selector is clicked */
    onPropertyClick?: () => void;
    /** User profile information */
    userProfile?: UserProfile;
    /** Called when user profile is clicked */
    onUserProfileClick?: () => void;
    /** Reservation/PMS connection status */
    reservationStatus?: ReservationStatus;
    /** Called when reservation status is clicked */
    onReservationStatusClick?: () => void;
    /** Additional action items to render before user profile */
    actions?: ReactNode;
    /** Additional CSS classes */
    className?: string;
}
/**
 * CanaryPageHeader - The standard page header for Canary applications
 *
 * Features:
 * - Property selector (left side)
 * - Reservation status badge
 * - User profile with avatar, name, and role
 * - Slot for additional actions
 */
declare function CanaryPageHeader({ propertyName, onPropertyClick, userProfile, onUserProfileClick, reservationStatus, onReservationStatusClick, actions, className, }: CanaryPageHeaderProps): react_jsx_runtime.JSX.Element;

interface CanaryAppShellProps {
    /** Main content of the application */
    children: ReactNode;
    /** Sidebar variant - MAIN, SETTINGS, or CUSTOM */
    sidebarVariant?: SidebarVariant;
    /** Custom sidebar sections (defaults to standardMainSidebarSections) */
    sidebarSections?: SidebarSection[];
    /** Currently selected sidebar item ID */
    selectedSidebarItemId?: string;
    /** Called when a sidebar item is clicked */
    onSidebarItemClick?: (itemId: string) => void;
    /** Title for SETTINGS sidebar variant */
    sidebarTitle?: string;
    /** Back button for SETTINGS sidebar variant */
    sidebarBackButton?: ReactNode;
    /** Hide the sidebar entirely */
    hideSidebar?: boolean;
    /** Property/Hotel name */
    propertyName?: string;
    /** Called when property selector is clicked */
    onPropertyClick?: () => void;
    /** User profile information */
    userProfile?: UserProfile;
    /** Called when user profile is clicked */
    onUserProfileClick?: () => void;
    /** Reservation/PMS connection status */
    reservationStatus?: ReservationStatus;
    /** Called when reservation status is clicked */
    onReservationStatusClick?: () => void;
    /** Additional header action items */
    headerActions?: ReactNode;
    /** Hide the page header entirely */
    hideHeader?: boolean;
    /** Background color for content area (defaults to colorBlack7 / #F0F0F0) */
    contentBackground?: string;
    /** Additional padding for content area */
    contentPadding?: "none" | "small" | "medium" | "large";
    /** Additional CSS classes for the content area */
    contentClassName?: string;
    /** Additional CSS classes for the shell container */
    className?: string;
}
/**
 * CanaryAppShell - Complete application shell/scaffolding for Canary prototypes
 *
 * Provides the standard Canary application layout with:
 * - Sidebar navigation (left)
 * - Page header (top)
 * - Main content area (center/right)
 *
 * Usage:
 * ```tsx
 * <CanaryAppShell
 *   propertyName="My Hotel"
 *   userProfile={{ name: "John Doe", role: "Admin" }}
 *   reservationStatus={{ label: "Reservations", isConnected: true }}
 * >
 *   <YourPageContent />
 * </CanaryAppShell>
 * ```
 */
declare function CanaryAppShell({ children, sidebarVariant, sidebarSections, selectedSidebarItemId, onSidebarItemClick, sidebarTitle, sidebarBackButton, hideSidebar, propertyName, onPropertyClick, userProfile, onUserProfileClick, reservationStatus, onReservationStatusClick, headerActions, hideHeader, contentBackground, contentPadding, contentClassName, className, }: CanaryAppShellProps): react_jsx_runtime.JSX.Element;

type TabVariant = "rounded" | "text" | "segmented";
type TabSize = "normal" | "compact";
interface CanaryTab {
    id: string;
    label: string;
    content: ReactNode;
    icon?: ReactNode;
    badge?: string | number;
    disabled?: boolean;
}
interface CanaryTabsProps {
    tabs: CanaryTab[];
    variant?: TabVariant;
    size?: TabSize;
    defaultTab?: string;
    onChange?: (tabId: string) => void;
    className?: string;
}
declare function CanaryTabs({ tabs, variant, size, defaultTab, onChange, className, }: CanaryTabsProps): react_jsx_runtime.JSX.Element;

interface CanaryHeaderProps {
    logo?: ReactNode;
    title?: string;
    actions?: ReactNode;
    navigation?: ReactNode;
    className?: string;
}
declare function CanaryHeader({ logo, title, actions, navigation, className, }: CanaryHeaderProps): react_jsx_runtime.JSX.Element;

/**
 * Canary Logo Component
 *
 * Pre-configured logo component with embedded SVG.
 * No need for teammates to manage logo assets.
 */
interface CanaryLogoProps {
    width?: number | string;
    height?: number | string;
    className?: string;
}
declare function CanaryLogo({ width, height, className }: CanaryLogoProps): react_jsx_runtime.JSX.Element;

/**
 * Standard Canary Sidebar Sections
 *
 * Pre-configured sidebar navigation items matching the Canary product.
 * Use these as-is or customize for your prototype.
 */

/**
 * Standard Main Sidebar Sections
 * Used for the main application navigation
 */
declare const standardMainSidebarSections: SidebarSection[];
/**
 * Standard Settings Sidebar Sections
 * Used for settings/configuration pages
 */
declare const standardSettingsSidebarSections: SidebarSection[];

/**
 * Pre-built Sidebar Tabs - Reusable Lego Pieces
 *
 * These are standardized sidebar navigation items that can be reused
 * across different sidebar configurations. Ensures consistency and
 * prevents teammates from having to remember icon names and labels.
 */

/**
 * Pre-built sidebar tabs that can be used as lego pieces
 * in custom sidebar configurations.
 */
declare const sidebarTabs: {
    upsells: SidebarNavigationItem;
    checkIn: SidebarNavigationItem;
    checkout: SidebarNavigationItem;
    messages: SidebarNavigationItem;
    calls: SidebarNavigationItem;
    digitalTips: SidebarNavigationItem;
    authorizations: SidebarNavigationItem;
    contracts: SidebarNavigationItem;
    idVerification: SidebarNavigationItem;
    clientsOnFile: SidebarNavigationItem;
    amenities: SidebarNavigationItem;
    paymentLinks: SidebarNavigationItem;
    settings: SidebarNavigationItem;
    propertyInfo: SidebarNavigationItem;
    branding: SidebarNavigationItem;
    billingPayment: SidebarNavigationItem;
    staffMembers: SidebarNavigationItem;
    security: SidebarNavigationItem;
    pms: SidebarNavigationItem;
    devices: SidebarNavigationItem;
    compendium: SidebarNavigationItem;
    areaInfo: SidebarNavigationItem;
    chat: SidebarNavigationItem;
    insights: SidebarNavigationItem;
    properties: SidebarNavigationItem;
    analytics: SidebarNavigationItem;
    surveys: SidebarNavigationItem;
    dashboard: SidebarNavigationItem;
    tasks: SidebarNavigationItem;
    calendar: SidebarNavigationItem;
    reports: SidebarNavigationItem;
    performance: SidebarNavigationItem;
};
/**
 * Helper to create a custom tab with proper typing
 */
declare const createSidebarTab: (id: string, label: string, icon: React.ReactNode, options?: Partial<SidebarNavigationItem>) => SidebarNavigationItem;

/**
 * Sidebar Configuration Utilities
 *
 * Pure functions for modifying sidebar sections to support flexible
 * sidebar configurations while maintaining type safety and immutability.
 */

/**
 * Hide specific products from sidebar sections
 * @param sections - Original sidebar sections
 * @param productIds - Array of product IDs to hide
 * @returns New sections array with specified products removed
 */
declare const hideProducts: (sections: SidebarSection[], productIds: string[]) => SidebarSection[];
/**
 * Add a product to sidebar sections at a specific position
 * @param sections - Original sidebar sections
 * @param product - Product to add
 * @param options - Insertion options
 * @returns New sections array with product added
 */
declare const addProduct: (sections: SidebarSection[], product: SidebarNavigationItem, options?: {
    insertAfter?: string;
    insertBefore?: string;
    insertAtStart?: boolean;
    insertAtEnd?: boolean;
    sectionId?: string;
}) => SidebarSection[];
/**
 * Reorder products within sidebar sections
 * @param sections - Original sidebar sections
 * @param productOrder - Array of product IDs in desired order
 * @param sectionId - Which section to reorder (defaults to first section)
 * @returns New sections array with products reordered
 */
declare const reorderProducts: (sections: SidebarSection[], productOrder: string[], sectionId?: string) => SidebarSection[];
/**
 * Create a custom section from an array of navigation items
 * @param items - Navigation items for the section
 * @param options - Section options
 * @returns New sidebar section
 */
declare const createCustomSection: (items: SidebarNavigationItem[], options?: {
    id?: string;
    title?: string;
}) => SidebarSection;
/**
 * Merge custom sections with standard sections
 * @param customSections - Custom sections to add
 * @param standardSections - Standard sections to merge with
 * @param options - Merge options
 * @returns New sections array with custom sections merged
 */
declare const mergeWithStandard: (customSections: SidebarSection[], standardSections: SidebarSection[], options?: {
    insertAtStart?: boolean;
    insertAtEnd?: boolean;
    replaceStandard?: boolean;
}) => SidebarSection[];
/**
 * Update a specific product in sidebar sections
 * @param sections - Original sidebar sections
 * @param productId - ID of product to update
 * @param updates - Partial updates to apply
 * @returns New sections array with product updated
 */
declare const updateProduct: (sections: SidebarSection[], productId: string, updates: Partial<SidebarNavigationItem>) => SidebarSection[];
/**
 * Add badge to a specific product
 * @param sections - Original sidebar sections
 * @param productId - ID of product to badge
 * @param badge - Badge value (string or number)
 * @returns New sections array with badge added
 */
declare const addBadge: (sections: SidebarSection[], productId: string, badge: string | number) => SidebarSection[];
/**
 * Remove badge from a specific product
 * @param sections - Original sidebar sections
 * @param productId - ID of product to remove badge from
 * @returns New sections array with badge removed
 */
declare const removeBadge: (sections: SidebarSection[], productId: string) => SidebarSection[];
/**
 * Disable a specific product
 * @param sections - Original sidebar sections
 * @param productId - ID of product to disable
 * @returns New sections array with product disabled
 */
declare const disableProduct: (sections: SidebarSection[], productId: string) => SidebarSection[];
/**
 * Enable a specific product
 * @param sections - Original sidebar sections
 * @param productId - ID of product to enable
 * @returns New sections array with product enabled
 */
declare const enableProduct: (sections: SidebarSection[], productId: string) => SidebarSection[];

type ToastType = "success" | "error" | "warning" | "info";
interface CanaryToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    isOpen?: boolean;
    onClose?: () => void;
    icon?: ReactNode;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
    className?: string;
}
declare function CanaryToast({ message, type, duration, isOpen, onClose, icon, position, className, }: CanaryToastProps): react_jsx_runtime.JSX.Element | null;

type AlertType = "success" | "error" | "warning" | "info";
interface CanaryAlertProps {
    message: string;
    type?: AlertType;
    title?: string;
    icon?: ReactNode;
    onClose?: () => void;
    className?: string;
}
declare function CanaryAlert({ message, type, title, icon, onClose, className, }: CanaryAlertProps): react_jsx_runtime.JSX.Element;

interface CanaryLoadingProps {
    color?: string;
    size?: number;
    className?: string;
}
declare function CanaryLoading({ color, size, className, }: CanaryLoadingProps): react_jsx_runtime.JSX.Element;

export { type BaseFormProps, ButtonColor, ButtonSize, ButtonType, CanaryAlert, CanaryAppShell, type CanaryAppShellProps, CanaryButton, CanaryCard, CanaryCheckbox, CanaryContainer, CanaryGrid, CanaryHeader, CanaryIcon, type CanaryIconProps, CanaryInput, CanaryInputCreditCard, CanaryInputCreditCardUnderline, CanaryInputDate, CanaryInputDateRange, CanaryInputDateRangeUnderline, CanaryInputDateUnderline, CanaryInputPassword, CanaryInputPasswordUnderline, CanaryInputPhone, CanaryInputPhoneUnderline, CanaryInputSearch, CanaryInputSearchUnderline, CanaryInputUnderline, CanaryList, CanaryListItem, type CanaryListItemProps, type CanaryListProps, CanaryLoading, CanaryLogo, type CanaryLogoProps, CanaryModal, CanaryPageHeader, type CanaryPageHeaderProps, CanaryRadio, CanaryRadioGroup, CanarySelect, type CanarySelectOption$1 as CanarySelectOption, CanarySelectUnderline, CanarySidebar, type CanarySidebarProps, CanarySwitch, CanaryTable, type CanaryTableColumn, CanaryTabs, CanaryTag, CanaryTextArea, CanaryTextAreaUnderline, CanaryToast, type CustomTagColor, IconPosition, InputSize, InputType, NavigationItemState, type ReservationStatus, type SidebarNavigationItem, type SidebarSection, SidebarVariant, TagColor, TagSize, TagVariant, type UserProfile, addBadge, addProduct, borderRadius, breakpoints, colors, createCustomSection, createSidebarTab, dimensions, disableProduct, easings, enableProduct, hideProducts, iconPaths, mergeWithStandard, removeBadge, reorderProducts, shadows, sidebarTabs, spacing, standardMainSidebarSections, standardSettingsSidebarSections, transitions, typography, updateProduct, zIndex };

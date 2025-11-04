import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode, MouseEvent, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

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
    readonly danger: "#e40046";
    readonly error: "#e40046";
    readonly white: "#ffffff";
    readonly black1: "#2d2d2d";
    readonly black2: "#414141";
    readonly black3: "#707070";
    readonly black4: "#9f9f9f";
    readonly black5: "#cecece";
    readonly black6: "#eaeaea";
    readonly black7: "#f2f2f2";
    readonly black8: "#fafafa";
    readonly blueCanary1: "#1c91fa";
    readonly blueCanary2: "#55acfb";
    readonly blueCanary3: "#8dc8fc";
    readonly blueCanary4: "#c6e3f3";
    readonly blueCanary5: "#e8f4ff";
    readonly blueDark1: "#2858c4";
    readonly blueDark2: "#5e82d3";
    readonly blueDark3: "#93abe1";
    readonly blueDark4: "#c9d5f0";
    readonly blueDark5: "#eaeef9";
    readonly pink1: "#f16682";
    readonly pink2: "#f48ca1";
    readonly pink3: "#f8b2c0";
    readonly pink4: "#fbd9e0";
    readonly pink5: "#fef0f3";
    readonly lightGreen1: "#22d39a";
    readonly lightGreen2: "#59deb3";
    readonly lightGreen3: "#90e9cc";
    readonly lightGreen4: "#c8f4e6";
    readonly lightGreen5: "#e9fbf5";
    readonly darkGreen1: "#008040";
    readonly darkGreen2: "#59deb3";
    readonly darkGreen3: "#90e9cc";
    readonly darkGreen4: "#c8f4e6";
    readonly darkGreen5: "#e9fbf5";
    readonly wheat1: "#fab541";
    readonly wheat2: "#fbc770";
    readonly wheat3: "#fcdaa0";
    readonly wheat4: "#feeccf";
    readonly wheat5: "#fff8ec";
    readonly purple1: "#9b51e0";
    readonly purple2: "#bb6bd9";
    readonly purple3: "#cda8ef";
    readonly purple4: "#e6d3f7";
    readonly purple5: "#f5eefc";
    readonly red1: "#e40046";
    readonly red2: "#eb4074";
    readonly red3: "#f59fba";
    readonly red4: "#f8bfd1";
    readonly red5: "#fce6ed";
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
    COMPACT = "compact",
    TINY = "tiny"
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
    COMPACT = "compact",
    TINY = "tiny"
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

interface CanarySelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}
interface CanarySelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">, BaseFormProps {
    options: CanarySelectOption[];
    placeholder?: string;
}
declare const CanarySelect: react.ForwardRefExoticComponent<CanarySelectProps & react.RefAttributes<HTMLSelectElement>>;

interface CanaryCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    label?: string;
    isDisabled?: boolean;
    error?: string;
    helperText?: string;
}
declare const CanaryCheckbox: react.ForwardRefExoticComponent<CanaryCheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface CanaryRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    label?: string;
    isDisabled?: boolean;
    error?: string;
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

interface SegmentedControlOption {
    label: string;
    value: string;
}
interface CanarySegmentedControlProps {
    options: SegmentedControlOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}
declare function CanarySegmentedControl({ options, value, onChange, className, }: CanarySegmentedControlProps): react_jsx_runtime.JSX.Element;

/**
 * Data Display Component Types
 */
declare enum TagColor {
    /** SUCCESS Green */
    OK = "ok",
    /** WARNING Yellow */
    WARNING = "warning",
    /** ERROR Red */
    ERROR = "error",
    /** DEFAULT Black/Gray */
    DARK = "dark",
    /** INFO Blue */
    INFO = "canary_blue",
    /** THEME uses theme button color*/
    THEME = "theme",
    /** WHITE */
    WHITE = "white"
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
    customColor?: CustomTagColor;
    icon?: ReactNode;
    hasDropShadow?: boolean;
    className?: string;
}
declare function CanaryTag({ label, color, customColor, icon, hasDropShadow, className, }: CanaryTagProps): react_jsx_runtime.JSX.Element;

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

interface CanaryTab {
    id: string;
    label: string;
    content: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
}
interface CanaryTabsProps {
    tabs: CanaryTab[];
    defaultTab?: string;
    onChange?: (tabId: string) => void;
    className?: string;
}
declare function CanaryTabs({ tabs, defaultTab, onChange, className, }: CanaryTabsProps): react_jsx_runtime.JSX.Element;

interface CanarySidebarItem {
    id: string;
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
    isActive?: boolean;
    badge?: string | number;
}
interface CanarySidebarProps {
    items: CanarySidebarItem[];
    header?: ReactNode;
    footer?: ReactNode;
    width?: string;
    className?: string;
}
declare function CanarySidebar({ items, header, footer, width, className, }: CanarySidebarProps): react_jsx_runtime.JSX.Element;

interface CanaryHeaderProps {
    logo?: ReactNode;
    title?: string;
    actions?: ReactNode;
    navigation?: ReactNode;
    className?: string;
}
declare function CanaryHeader({ logo, title, actions, navigation, className, }: CanaryHeaderProps): react_jsx_runtime.JSX.Element;

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

export { type BaseFormProps, ButtonColor, ButtonSize, ButtonType, CanaryAlert, CanaryButton, CanaryCard, CanaryCheckbox, CanaryContainer, CanaryGrid, CanaryHeader, CanaryInput, CanaryLoading, CanaryModal, CanaryRadio, CanaryRadioGroup, CanarySegmentedControl, CanarySelect, type CanarySelectOption, CanarySidebar, CanaryTable, type CanaryTableColumn, CanaryTabs, CanaryTag, CanaryTextArea, CanaryToast, type CustomTagColor, IconPosition, InputSize, InputType, type SegmentedControlOption, TagColor, borderRadius, breakpoints, colors, dimensions, easings, shadows, spacing, transitions, typography, zIndex };

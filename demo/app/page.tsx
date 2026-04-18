"use client";

import { useState } from "react";
import {
  CanaryButton,
  CanaryInput,
  CanaryTextArea,
  CanarySelect,
  CanaryCheckbox,
  CanaryRadio,
  CanaryRadioGroup,
  CanarySwitch,
  CanaryInputPassword,
  CanaryInputSearch,
  CanaryInputCreditCard,
  CanaryInputPhone,
  CanaryInputDate,
  CanaryInputDateRange,
  CanaryInputMultiple,
  CanaryCalendar,
  // Underline variants
  CanaryInputUnderline,
  CanaryTextAreaUnderline,
  CanarySelectUnderline,
  CanaryInputPhoneUnderline,
  CanaryInputPasswordUnderline,
  CanaryInputSearchUnderline,
  CanaryInputCreditCardUnderline,
  CanaryInputDateUnderline,
  CanaryInputDateRangeUnderline,
  CanaryChip,
  CanaryTag,
  CanaryTable,
  CanaryCard,
  CanaryListItem,
  CanaryList,
  CanaryContainer,
  CanaryGrid,
  CanaryModal,
  CanaryTabs,
  CanarySidebar,
  CanaryHeader,
  CanaryPageHeader,
  CanaryAppShell,
  CanaryAlert,
  CanaryToast,
  CanaryLoading,
  // New v0.6.0 components
  CanaryBadge,
  CanaryDivider,
  CanaryNote,
  CanaryTimestamp,
  CanaryFormLabel,
  CanaryValidationError,
  CanaryProfileImage,
  CanaryTooltip,
  CanaryTooltipIcon,
  CanaryExpand,
  CanaryCounter,
  CanaryProgressBar,
  CanaryOverflowMenu,
  CanaryDialog,
  CanarySideSheet,
  CanarySteps,
  CanarySettingsCard,
  CanaryAutocomplete,
  // New enums
  BadgeType,
  BadgeSize,
  DividerDirection,
  NoteColor,
  TooltipPosition,
  TooltipIconColor,
  TimestampFormat,
  TimestampColor,
  ProfileImageSize,
  ProgressBarVariant,
  StepsOrientation,
  DialogStretch,
  SettingsCardState,
  LabelSize,
  // Flexible sidebar functionality
  sidebarTabs,
  hideProducts,
  addProduct,
  createCustomSection,
  createSidebarTab,
  standardMainSidebarSections,
  ButtonType,
  ButtonSize,
  ButtonColor,
  IconPosition,
  ChipType,
  TagColor,
  TagVariant,
  TagSize,
  InputSize,
  InputType,
  SidebarVariant,
  colors,
} from "@canary-ui/components";
import {
  mdiContentCopy,
  mdiCheckCircle,
  mdiChevronDown,
  mdiChevronUp,
  mdiPlus,
  mdiClose,
  mdiArrowRight,
  mdiDelete,
  mdiPencil,
  mdiDownload,
  mdiUpload,
  mdiRefresh,
  mdiMenu,
  mdiAccount,
  mdiCogOutline,
  mdiArrowLeft,
  mdiTrendingUp,
  mdiLogin,
  mdiLogout,
  mdiMessageProcessingOutline,
  mdiPhoneOutline,
  mdiCurrencyUsd,
  mdiShieldAccountOutline,
  mdiFileDocumentOutline,
  mdiAccountCheckOutline,
  mdiAccountMultipleOutline,
  mdiSilverwareForkKnife,
  mdiCreditCardOutline,
  mdiHomeOutline,
  mdiPaletteOutline,
  mdiCreditCard,
  mdiAccountGroupOutline,
  mdiShieldCheckOutline,
  mdiPuzzleOutline,
  mdiTabletCellphone,
  mdiBookOpenPageVariantOutline,
  mdiMapMarker,
  mdiChatOutline,
  mdiCashMultiple,
  mdiNewspaperVariantOutline,
  mdiInbox,
  mdiAlertCircle,
  mdiAlertCircleOutline,
  mdiDrag,
  mdiViewDashboard,
  mdiViewDashboardOutline,
  mdiMessage,
  mdiMessageOutline,
  mdiHelpCircle,
  mdiHelpCircleOutline,
  mdiAccountOutline,
  mdiCheckCircleOutline,
  // Hotel operations icons
  mdiDoorOpen,
  mdiSprayBottle,
  mdiWrench,
  mdiCalendarClock,
  mdiPartyPopper,
  mdiPackageVariant,
  mdiCommentTextOutline,
  mdiBellOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { DataTableDiagram, SplitViewDiagram, SettingsDiagram, DetailViewDiagram, ModalDiagram, InboxDiagram, TabbedContentDiagram, FormBuilderDiagram, EditorPreviewDiagram, GuestJourneyDiagram } from "../components/PatternDiagrams";

// Calendar demo
function CalendarDemo() {
  const [singleDate, setSingleDate] = useState<{ start: Date | null; end: Date | null }>({ start: new Date(2023, 7, 23), end: null });
  const [rangeDate, setRangeDate] = useState<{ start: Date | null; end: Date | null }>({ start: new Date(2023, 7, 14), end: new Date(2023, 7, 20) });
  const [quickDate, setQuickDate] = useState<{ start: Date | null; end: Date | null }>({ start: null, end: null });

  return (
    <div className="flex flex-wrap gap-6">
      <div>
        <h4 className="text-sm font-medium mb-3 text-gray-600">Single Date</h4>
        <CanaryCalendar
          value={singleDate}
          onChange={setSingleDate}
          selectionMode="date"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3 text-gray-600">Date Range</h4>
        <CanaryCalendar
          value={rangeDate}
          onChange={setRangeDate}
          selectionMode="range"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3 text-gray-600">With Quick Buttons (Range)</h4>
        <CanaryCalendar
          value={quickDate}
          onChange={setQuickDate}
          selectionMode="range"
          showQuickButtons
        />
      </div>
    </div>
  );
}

// Input multiple demo
function InputMultipleDemo() {
  const [emails, setEmails] = useState<string[]>([]);
  const [rooms, setRooms] = useState<string[]>(["101", "204", "315"]);

  return (
    <div className="space-y-4">
      <CanaryInputMultiple
        label="Email Recipients"
        placeholder="Type an email and press Enter"
        values={emails}
        onChange={setEmails}
        inputType={InputType.EMAIL}
        helperText="Press Enter to add each email"
      />
      <CanaryInputMultiple
        label="Room Numbers"
        placeholder="Add room numbers"
        values={rooms}
        onChange={setRooms}
      />
    </div>
  );
}

// Chip dropdown demo
function ChipDropdownDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <CanaryChip label="Guest Full Name" onClick={() => alert('Inserted: Guest Full Name')} />
      <CanaryChip label="Hotel Name" onClick={() => alert('Inserted: Hotel Name')} />
      <div className="relative inline-block">
        <CanaryChip
          label="Check-in URL"
          trailingIcon={<Icon path={open ? mdiChevronUp : mdiChevronDown} size={0.7} />}
          onClick={() => setOpen(!open)}
          isActive={open}
        />
        {open && (
          <div
            className="absolute left-0 top-full mt-2 bg-white rounded-2xl border border-gray-200 p-2 z-50 flex flex-col gap-2"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
          >
            <CanaryChip label="Button Link" onClick={() => { alert('Inserted: Button Link'); setOpen(false); }} />
            <CanaryChip label="Text Link" onClick={() => { alert('Inserted: Text Link'); setOpen(false); }} />
          </div>
        )}
      </div>
      <CanaryChip label="Room Number" onClick={() => alert('Inserted: Room Number')} />
    </div>
  );
}

// Text-checkbox tabs demo
function TextCheckboxTabsDemo() {
  const [channels, setChannels] = useState({
    email: true,
    sms: true,
    whatsapp: false,
    booking: true,
    expedia: false,
  });

  return (
    <CanaryTabs
      variant="text-checkbox"
      tabs={[
        { id: "email", label: "Email", checked: channels.email, content: <p className="py-4 text-sm text-gray-600">Email message editor content...</p> },
        { id: "sms", label: "SMS", checked: channels.sms, content: <p className="py-4 text-sm text-gray-600">SMS message editor content...</p> },
        { id: "whatsapp", label: "WhatsApp", checked: channels.whatsapp, content: <p className="py-4 text-sm text-gray-600">WhatsApp message editor content...</p> },
        { id: "booking", label: "Booking.com", checked: channels.booking, content: <p className="py-4 text-sm text-gray-600">Booking.com message content...</p> },
        { id: "expedia", label: "Expedia", checked: channels.expedia, content: <p className="py-4 text-sm text-gray-600">Expedia message content...</p> },
      ]}
      onCheckboxChange={(tabId, checked) =>
        setChannels((prev) => ({ ...prev, [tabId]: checked }))
      }
    />
  );
}

// Code snippet component
interface CodeSnippetProps {
  code: string;
  language?: string;
}

function CodeSnippet({ code, language = "tsx" }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden mt-4">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs text-gray-400 font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
        >
          <Icon path={copied ? mdiCheckCircle : mdiContentCopy} size={0.6} />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-100 font-mono">{code}</code>
      </pre>
    </div>
  );
}

// Section component with collapsible content
interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

function Section({ title, children, id }: SectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section id={id} className="scroll-mt-20">
      <div
        className="flex items-center justify-between mb-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <Icon path={isExpanded ? mdiChevronUp : mdiChevronDown} size={1} className="text-gray-400" />
      </div>
      {isExpanded && children}
    </section>
  );
}

// Usage guidance component for component documentation
interface UsageNoteProps {
  description: string;
  whenToUse: string[];
  whenNotToUse: string[];
}

function UsageNote({ description, whenToUse, whenNotToUse }: UsageNoteProps) {
  return (
    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
      <p className="text-sm text-gray-700 mb-3">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h5 className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">When to use</h5>
          <ul className="text-xs text-gray-600 space-y-1">
            {whenToUse.map((item, i) => (
              <li key={i} className="flex gap-1.5"><span className="text-green-500 mt-0.5">&#10003;</span>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-1">When NOT to use</h5>
          <ul className="text-xs text-gray-600 space-y-1">
            {whenNotToUse.map((item, i) => (
              <li key={i} className="flex gap-1.5"><span className="text-red-500 mt-0.5">&#10007;</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Draggable List Example Component
function DraggableListExample() {
  const [items, setItems] = useState([
    { id: '1', title: 'Drag Me First', subtitle: 'Try dragging this item' },
    { id: '2', title: 'Drag Me Second', subtitle: 'Reorder by dragging' },
    { id: '3', title: 'Drag Me Third', subtitle: 'Items maintain state' },
    { id: '4', title: 'Drag Me Fourth', subtitle: 'Smooth animations' },
  ]);

  return (
    <CanaryList
      hasOuterBorder={true}
      isDraggable={true}
      items={items}
      onReorder={setItems}
    >
      {items.map((item) => (
        <CanaryListItem
          key={item.id}
          isDraggable={true}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </CanaryList>
  );
}

// Selectable List Example Component
function SelectableListExample() {
  const [selectedId, setSelectedId] = useState<string | null>('1');

  const items = [
    { id: '1', title: 'Dashboard', subtitle: 'View your overview', icon: mdiViewDashboardOutline },
    { id: '2', title: 'Messages', subtitle: '5 unread messages', icon: mdiMessageOutline },
    { id: '3', title: 'Settings', subtitle: 'Configure your account', icon: mdiCogOutline },
    { id: '4', title: 'Profile', subtitle: 'Edit your information', icon: mdiAccountOutline },
    { id: '5', title: 'Help', subtitle: 'Get support', icon: mdiHelpCircleOutline },
  ];

  return (
    <CanaryList hasOuterBorder={true}>
      {items.map((item) => (
        <CanaryListItem
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          icon={<Icon path={item.icon} size={1} color={selectedId === item.id ? colors.colorWhite : colors.colorBlack1} />}
          isSelected={selectedId === item.id}
          onClick={() => setSelectedId(item.id)}
        />
      ))}
    </CanaryList>
  );
}

// v0.6.0 interactive demos
function ExpandDemo() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(true);
  return (
    <div className="space-y-2">
      <CanaryExpand
        isExpanded={expanded1}
        onToggle={() => setExpanded1(!expanded1)}
        header={<span className="text-sm font-medium">Room Details</span>}
      >
        <div className="p-3 text-sm text-gray-600">Room 301 - Deluxe King Suite, Ocean View, 2nd Floor</div>
      </CanaryExpand>
      <CanaryExpand
        isExpanded={expanded2}
        onToggle={() => setExpanded2(!expanded2)}
        header={<span className="text-sm font-medium">Guest Preferences</span>}
      >
        <div className="p-3 text-sm text-gray-600">Late checkout requested. Extra pillows. Non-smoking room.</div>
      </CanaryExpand>
    </div>
  );
}

function CounterDemo() {
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(1);
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">Guests:</span>
        <CanaryCounter value={guests} onChange={setGuests} minValue={1} maxValue={8} />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">Nights:</span>
        <CanaryCounter value={nights} onChange={setNights} minValue={1} maxValue={30} />
      </div>
    </div>
  );
}

function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CanaryButton onClick={() => setOpen(true)}>Open Dialog</CanaryButton>
      <CanaryDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Confirm Check-out"
        stretch={DialogStretch.NORMAL}
        footer={
          <div className="flex justify-end gap-2">
            <CanaryButton type={ButtonType.OUTLINED} onClick={() => setOpen(false)}>Cancel</CanaryButton>
            <CanaryButton type={ButtonType.PRIMARY} onClick={() => setOpen(false)}>Confirm Check-out</CanaryButton>
          </div>
        }
      >
        <p className="text-sm text-gray-600">Are you sure you want to check out the guest in Room 301? This will finalize their bill and release the room.</p>
      </CanaryDialog>
    </>
  );
}

function SideSheetDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CanaryButton onClick={() => setOpen(true)}>Open Side Sheet</CanaryButton>
      <CanarySideSheet
        isOpen={open}
        onClose={() => setOpen(false)}
        size="medium"
        header={<h3 className="text-lg font-semibold">Guest Details</h3>}
        footer={
          <div className="flex justify-end gap-2">
            <CanaryButton type={ButtonType.OUTLINED} onClick={() => setOpen(false)}>Close</CanaryButton>
            <CanaryButton type={ButtonType.PRIMARY}>Save Changes</CanaryButton>
          </div>
        }
      >
        <div className="space-y-4">
          <CanaryInput label="Full Name" value="John Smith" onChange={() => {}} />
          <CanaryInput label="Email" value="john@example.com" onChange={() => {}} />
          <CanaryInput label="Phone" value="+1 555-0123" onChange={() => {}} />
        </div>
      </CanarySideSheet>
    </>
  );
}

function SettingsCardDemo() {
  const [state, setState] = useState(SettingsCardState.VIEW);
  return (
    <CanarySettingsCard
      title="Property Information"
      subtitle="Basic hotel details and contact information"
      state={state}
      onStateChange={setState}
      onSave={() => setState(SettingsCardState.VIEW)}
    >
      {state === SettingsCardState.VIEW ? (
        <div className="space-y-2 text-sm">
          <div><span className="font-medium text-gray-500">Name:</span> Hotel Canary</div>
          <div><span className="font-medium text-gray-500">Address:</span> 123 Main Street, New York, NY</div>
          <div><span className="font-medium text-gray-500">Phone:</span> +1 (555) 123-4567</div>
        </div>
      ) : (
        <div className="space-y-3">
          <CanaryInput label="Hotel Name" value="Hotel Canary" onChange={() => {}} />
          <CanaryInput label="Address" value="123 Main Street, New York, NY" onChange={() => {}} />
          <CanaryInput label="Phone" value="+1 (555) 123-4567" onChange={() => {}} />
        </div>
      )}
    </CanarySettingsCard>
  );
}

function AutocompleteDemo() {
  const [value, setValue] = useState("");
  return (
    <div className="max-w-sm">
      <CanaryAutocomplete
        label="Select Country"
        value={value}
        onChange={setValue}
        placeholder="Type to search..."
        options={[
          { value: "us", label: "United States" },
          { value: "ca", label: "Canada" },
          { value: "uk", label: "United Kingdom" },
          { value: "fr", label: "France" },
          { value: "de", label: "Germany" },
          { value: "jp", label: "Japan" },
          { value: "au", label: "Australia" },
          { value: "mx", label: "Mexico" },
          { value: "br", label: "Brazil" },
          { value: "it", label: "Italy" },
        ]}
      />
    </div>
  );
}

export default function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [switchStates, setSwitchStates] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
  });
  const [activeItem, setActiveItem] = useState("intro");
  const [useUnderlineInputs, setUseUnderlineInputs] = useState(false);

  const navigation = [
    { id: "intro", label: "Introduction", children: [] },
    { id: "design-tokens", label: "Design Tokens", children: [
      { id: "colors", label: "Color System" },
    ]},
    { id: "buttons", label: "Buttons", children: [
      { id: "canary-button", label: "CanaryButton" },
    ]},
    { id: "forms", label: "Form Components", children: [
      { id: "canary-input", label: "CanaryInput" },
      { id: "canary-input-password", label: "CanaryInputPassword" },
      { id: "canary-input-search", label: "CanaryInputSearch" },
      { id: "canary-input-credit-card", label: "CanaryInputCreditCard" },
      { id: "canary-input-phone", label: "CanaryInputPhone" },
      { id: "canary-calendar", label: "CanaryCalendar" },
      { id: "canary-input-date", label: "CanaryInputDate" },
      { id: "canary-input-date-range", label: "CanaryInputDateRange" },
      { id: "canary-input-multiple", label: "CanaryInputMultiple" },
      { id: "canary-select", label: "CanarySelect" },
      { id: "canary-textarea", label: "CanaryTextArea" },
      { id: "canary-checkbox", label: "CanaryCheckbox" },
      { id: "canary-radio", label: "CanaryRadio" },
      { id: "canary-switch", label: "CanarySwitch" },
    ]},
    { id: "data-display", label: "Data Display", children: [
      { id: "canary-tag", label: "CanaryTag" },
      { id: "canary-chip", label: "CanaryChip" },
      { id: "canary-table", label: "CanaryTable" },
      { id: "canary-list", label: "CanaryList" },
    ]},
    { id: "layout", label: "Layout & Navigation", children: [
      { id: "canary-tabs", label: "CanaryTabs" },
      { id: "canary-sidebar", label: "CanarySidebar" },
      { id: "canary-modal", label: "CanaryModal" },
    ]},
    { id: "app-shell", label: "App Layout", children: [
      { id: "canary-page-header", label: "CanaryPageHeader" },
      { id: "canary-app-shell", label: "CanaryAppShell" },
    ]},
    { id: "patterns", label: "Patterns", children: [
      { id: "pattern-data-table", label: "Data Table" },
      { id: "pattern-split-view", label: "Split View" },
      { id: "pattern-tabbed-content", label: "Tabbed Content" },
      { id: "pattern-settings", label: "Settings" },
      { id: "pattern-detail-view", label: "Detail View" },
      { id: "pattern-form-builder", label: "Form Builder" },
      { id: "pattern-editor-preview", label: "Editor with Preview" },
      { id: "pattern-guest-journey", label: "Guest Journey" },
      { id: "pattern-inbox", label: "Inbox" },
      { id: "pattern-modal", label: "Modal Action" },
    ]},
    { id: "feedback", label: "Feedback", children: [
      { id: "canary-alert", label: "CanaryAlert" },
      { id: "canary-toast", label: "CanaryToast" },
      { id: "canary-loading", label: "CanaryLoading" },
    ]},
  ];

  const isInSection = (sectionId: string) => {
    if (activeItem === sectionId) return true;
    return navigation.find(n => n.id === sectionId)?.children.some(c => c.id === activeItem) ?? false;
  };

  const showComponent = (componentId: string) => {
    return activeItem === componentId;
  };
  const [selectedMainSidebarItem, setSelectedMainSidebarItem] = useState("upsells");
  const [selectedSettingsSidebarItem, setSelectedSettingsSidebarItem] = useState("general");

  const toggleCheckbox = (id: string) => {
    setSelectedCheckboxes(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const sampleTableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
  ];

  const tableColumns = [
    { key: "id", label: "ID", width: "80px" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    {
      key: "role",
      label: "Role",
      render: (value: string) => <CanaryTag label={value} color={TagColor.INFO} />
    },
  ];

  const navigationItems = [
    { id: "intro", label: "Introduction" },
    { id: "design-tokens", label: "Design Tokens" },
    { id: "buttons", label: "Buttons" },
    { id: "forms", label: "Form Components" },
    { id: "data-display", label: "Data Display" },
    { id: "layout", label: "Layout & Navigation" },
    { id: "app-shell", label: "App Shell" },
    { id: "feedback", label: "Feedback" },
    { id: "new-components", label: "New in v0.6.0" },
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <CanaryHeader
        title="Canary UI Component Library"
        actions={
          <CanaryButton href="https://github.com/msantana-canary/canary-prototype-foundation" target="_blank">
            View on GitHub
          </CanaryButton>
        }
      />

      <div className="flex h-[calc(100vh-56px)]">
        {/* Navigation Sidebar */}
        <aside className="w-56 shrink-0 bg-white border-r border-gray-200 overflow-y-auto">
          <nav className="p-3">
            <ul className="space-y-0.5">
              {navigation.map((section) => (
                <li key={section.id}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isInSection(section.id) && activeItem !== section.id
                        ? "text-blue-700"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveItem(section.children[0]?.id ?? section.id)}
                  >
                    {section.label}
                  </button>
                  {section.children.length > 0 && isInSection(section.id) && (
                    <ul className="mt-0.5 mb-1 ml-3 space-y-0.5">
                      {section.children.map((child) => (
                        <li key={child.id}>
                          <button
                            className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                              activeItem === child.id
                                ? "bg-blue-50 text-blue-700 font-medium"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                            onClick={() => setActiveItem(child.id)}
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <CanaryContainer maxWidth="2xl" padding="large">
            <div className="py-8">
          {activeItem === "intro" && (
          <section id="intro">
            <h2 className="text-3xl font-bold mb-4">Welcome to Canary UI</h2>
            <p className="text-lg text-gray-600 mb-6">
              A comprehensive React component library for building high-fidelity prototypes.
              All components match the Canary design system for consistent, professional interfaces.
            </p>
            <CanaryAlert
              type="info"
              title="Foundation Project"
              message="This is a template repository. Clone it to start building your prototype with pre-built Canary UI components."
            />

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Quick Start</h4>
              <CodeSnippet
                code={`import { CanaryButton, ButtonType } from "@canary-ui/components";

export default function MyComponent() {
  return (
    <CanaryButton type={ButtonType.PRIMARY}>
      Click me!
    </CanaryButton>
  );
}`}
              />
            </div>
          </section>
          )}

          {isInSection("design-tokens") && (
          <Section title="Design Tokens" id="design-tokens">
            <CanaryCard title="Color System">
              <p className="text-sm text-gray-600 mb-4">
                Official Canary color palette synced with Figma Master Styles. All color values match the design system exactly.
              </p>

              <div className="space-y-6">
                {/* Status Colors */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Status Colors</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { name: "Success", hex: colors.success },
                      { name: "Warning", hex: colors.warning },
                      { name: "Danger", hex: colors.danger },
                      { name: "Error", hex: colors.error },
                    ].map(({ name, hex }) => (
                      <div key={name} className="flex flex-col">
                        <div
                          className="h-20 rounded-md border border-gray-200 shadow-sm"
                          style={{ backgroundColor: hex }}
                        />
                        <p className="text-xs font-medium mt-2">{name}</p>
                        <p className="text-xs text-gray-500 font-mono">{hex}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Black Scale */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Black Scale (Grayscale)</h4>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    {[
                      { name: "$color-black-1", hex: colors.colorBlack1 },
                      { name: "$color-black-2", hex: colors.colorBlack2 },
                      { name: "$color-black-3", hex: colors.colorBlack3 },
                      { name: "$color-black-4", hex: colors.colorBlack4 },
                      { name: "$color-black-5", hex: colors.colorBlack5 },
                      { name: "$color-black-6", hex: colors.colorBlack6 },
                      { name: "$color-black-7", hex: colors.colorBlack7 },
                      { name: "$color-black-8", hex: colors.colorBlack8 },
                    ].map(({ name, hex }) => (
                      <div key={name} className="flex flex-col">
                        <div
                          className="h-16 rounded-md border border-gray-200 shadow-sm"
                          style={{ backgroundColor: hex }}
                        />
                        <p className="text-xs font-medium mt-2">{name}</p>
                        <p className="text-xs text-gray-500 font-mono">{hex}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Blue Canary */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Canary Blue (Brand)</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {[
                      { name: "$color-blue-canary-1", hex: colors.colorBlueCanary1 },
                      { name: "$color-blue-canary-2", hex: colors.colorBlueCanary2 },
                      { name: "$color-blue-canary-3", hex: colors.colorBlueCanary3 },
                      { name: "$color-blue-canary-4", hex: colors.colorBlueCanary4 },
                      { name: "$color-blue-canary-5", hex: colors.colorBlueCanary5 },
                    ].map(({ name, hex }) => (
                      <div key={name} className="flex flex-col">
                        <div
                          className="h-16 rounded-md border border-gray-200 shadow-sm"
                          style={{ backgroundColor: hex }}
                        />
                        <p className="text-xs font-medium mt-2">{name}</p>
                        <p className="text-xs text-gray-500 font-mono">{hex}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Blue Dark */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Blue Dark (Primary Action)</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {[
                      { name: "$color-blue-dark-1", hex: colors.colorBlueDark1 },
                      { name: "$color-blue-dark-2", hex: colors.colorBlueDark2 },
                      { name: "$color-blue-dark-3", hex: colors.colorBlueDark3 },
                      { name: "$color-blue-dark-4", hex: colors.colorBlueDark4 },
                      { name: "$color-blue-dark-5", hex: colors.colorBlueDark5 },
                    ].map(({ name, hex }) => (
                      <div key={name} className="flex flex-col">
                        <div
                          className="h-16 rounded-md border border-gray-200 shadow-sm"
                          style={{ backgroundColor: hex }}
                        />
                        <p className="text-xs font-medium mt-2">{name}</p>
                        <p className="text-xs text-gray-500 font-mono">{hex}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Light Green */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Light Green</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {[
                      { name: "$color-light-green-1", hex: colors.colorLightGreen1 },
                      { name: "$color-light-green-2", hex: colors.colorLightGreen2 },
                      { name: "$color-light-green-3", hex: colors.colorLightGreen3 },
                      { name: "$color-light-green-4", hex: colors.colorLightGreen4 },
                      { name: "$color-light-green-5", hex: colors.colorLightGreen5 },
                    ].map(({ name, hex }) => (
                      <div key={name} className="flex flex-col">
                        <div
                          className="h-16 rounded-md border border-gray-200 shadow-sm"
                          style={{ backgroundColor: hex }}
                        />
                        <p className="text-xs font-medium mt-2">{name}</p>
                        <p className="text-xs text-gray-500 font-mono">{hex}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purple */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Purple</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {[
                      { name: "$color-purple-1", hex: colors.colorPurple1 },
                      { name: "$color-purple-2", hex: colors.colorPurple2 },
                      { name: "$color-purple-3", hex: colors.colorPurple3 },
                      { name: "$color-purple-4", hex: colors.colorPurple4 },
                      { name: "$color-purple-5", hex: colors.colorPurple5 },
                    ].map(({ name, hex }) => (
                      <div key={name} className="flex flex-col">
                        <div
                          className="h-16 rounded-md border border-gray-200 shadow-sm"
                          style={{ backgroundColor: hex }}
                        />
                        <p className="text-xs font-medium mt-2">{name}</p>
                        <p className="text-xs text-gray-500 font-mono">{hex}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pink */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Pink</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {[
                      { name: "$color-pink-1", hex: colors.colorPink1 },
                      { name: "$color-pink-2", hex: colors.colorPink2 },
                      { name: "$color-pink-3", hex: colors.colorPink3 },
                      { name: "$color-pink-4", hex: colors.colorPink4 },
                      { name: "$color-pink-5", hex: colors.colorPink5 },
                    ].map(({ name, hex }) => (
                      <div key={name} className="flex flex-col">
                        <div
                          className="h-16 rounded-md border border-gray-200 shadow-sm"
                          style={{ backgroundColor: hex }}
                        />
                        <p className="text-xs font-medium mt-2">{name}</p>
                        <p className="text-xs text-gray-500 font-mono">{hex}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wheat */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Wheat (Orange/Yellow)</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {[
                      { name: "$color-wheat-1", hex: colors.colorWheat1 },
                      { name: "$color-wheat-2", hex: colors.colorWheat2 },
                      { name: "$color-wheat-3", hex: colors.colorWheat3 },
                      { name: "$color-wheat-4", hex: colors.colorWheat4 },
                      { name: "$color-wheat-5", hex: colors.colorWheat5 },
                    ].map(({ name, hex }) => (
                      <div key={name} className="flex flex-col">
                        <div
                          className="h-16 rounded-md border border-gray-200 shadow-sm"
                          style={{ backgroundColor: hex }}
                        />
                        <p className="text-xs font-medium mt-2">{name}</p>
                        <p className="text-xs text-gray-500 font-mono">{hex}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Red */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Red</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {[
                      { name: "$color-red-1", hex: colors.colorRed1 },
                      { name: "$color-red-2", hex: colors.colorRed2 },
                      { name: "$color-red-3", hex: colors.colorRed3 },
                      { name: "$color-red-4", hex: colors.colorRed4 },
                      { name: "$color-red-5", hex: colors.colorRed5 },
                    ].map(({ name, hex }) => (
                      <div key={name} className="flex flex-col">
                        <div
                          className="h-16 rounded-md border border-gray-200 shadow-sm"
                          style={{ backgroundColor: hex }}
                        />
                        <p className="text-xs font-medium mt-2">{name}</p>
                        <p className="text-xs text-gray-500 font-mono">{hex}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <CodeSnippet
                code={`import { colors } from "@canary-ui/components";

// Use colors in your components
<div style={{ backgroundColor: colors.colorBlueCanary1 }}>
  Canary Blue Background
</div>

// Or with Tailwind arbitrary values
<div className="bg-[#2858C4]">
  Primary Blue Background
</div>`}
              />
            </CanaryCard>
          </Section>
          )}

          {isInSection("buttons") && (
          <Section title="Buttons" id="buttons">
            {showComponent('canary-button') && (
            <CanaryCard title="CanaryButton">
              <UsageNote
                description="Interactive button for triggering actions. Supports primary, secondary, outlined, text, and icon-only variants with loading states."
                whenToUse={[
                  "ButtonType.PRIMARY — main CTA: submit, confirm, save. One per section. Production: 'Approve' order buttons, auth form submit, e-folio charges.",
                  "ButtonType.OUTLINED — secondary actions: cancel, go back. Production: filter buttons with icon + badge count on reservation dashboards.",
                  "ButtonType.SHADED + ButtonSize.COMPACT — tertiary table row actions. Production: 'View Details', 'Approve', 'Deny' in F&B order rows.",
                  "ButtonType.TEXT — minimal link-like buttons: 'View all', 'Skip', 'Edit'. Production: card header actions, modal dismiss alternatives.",
                  "ButtonType.TEXT + ButtonColor.WHITE — dark background buttons. Production: 'Back' button with arrow icon on settings sidebar.",
                  "ButtonType.ICON_PRIMARY / ICON_SECONDARY — icon-only in toolbars, table rows, compact spaces.",
                  "ButtonColor.DANGER — destructive: delete, remove. Always pair with confirmation modal.",
                  "isLoading — during async ops, shows spinner, prevents double-clicks. Production: set while API requests are in-flight.",
                  "isExpanded — full-width in modals/mobile. Production: submit buttons at bottom of modal forms.",
                  "href — renders as <a> for links needing button styling.",
                ]}
                whenNotToUse={[
                  "Navigation without button styling — use <a> or Next.js <Link>",
                  "Toggling a boolean state — use CanarySwitch or CanaryCheckbox",
                  "Selecting from options — use CanaryChip, CanarySegmentedControl, or CanaryRadioGroup",
                ]}
              />
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Button Types</h4>
                  <div className="flex flex-wrap gap-3">
                    <CanaryButton type={ButtonType.PRIMARY}>Primary</CanaryButton>
                    <CanaryButton type={ButtonType.OUTLINED}>Outlined</CanaryButton>
                    <CanaryButton type={ButtonType.SHADED}>Shaded</CanaryButton>
                    <CanaryButton type={ButtonType.TEXT}>Text</CanaryButton>
                  </div>
                  <CodeSnippet
                    code={`<CanaryButton type={ButtonType.PRIMARY}>Primary</CanaryButton>
<CanaryButton type={ButtonType.OUTLINED}>Outlined</CanaryButton>
<CanaryButton type={ButtonType.SHADED}>Shaded</CanaryButton>
<CanaryButton type={ButtonType.TEXT}>Text</CanaryButton>`}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Button Sizes</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <CanaryButton size={ButtonSize.TABLET}>Tablet (56px)</CanaryButton>
                    <CanaryButton size={ButtonSize.LARGE}>Large (48px)</CanaryButton>
                    <CanaryButton size={ButtonSize.NORMAL}>Normal (40px)</CanaryButton>
                    <CanaryButton size={ButtonSize.COMPACT}>Compact (32px)</CanaryButton>
                  </div>
                  <CodeSnippet
                    code={`<CanaryButton size={ButtonSize.TABLET}>Tablet (56px)</CanaryButton>
<CanaryButton size={ButtonSize.LARGE}>Large (48px)</CanaryButton>
<CanaryButton size={ButtonSize.NORMAL}>Normal (40px)</CanaryButton>
<CanaryButton size={ButtonSize.COMPACT}>Compact (32px)</CanaryButton>`}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Button States</h4>
                  <div className="flex flex-wrap gap-3">
                    <CanaryButton>Normal</CanaryButton>
                    <CanaryButton isLoading>Loading</CanaryButton>
                    <CanaryButton isDisabled>Disabled</CanaryButton>
                  </div>
                  <CodeSnippet
                    code={`<CanaryButton>Normal</CanaryButton>
<CanaryButton isLoading>Loading</CanaryButton>
<CanaryButton isDisabled>Disabled</CanaryButton>`}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Buttons with Icons</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-2">Leading Icon (Left)</p>
                      <div className="flex flex-wrap gap-3">
                        <CanaryButton
                          icon={<Icon path={mdiPlus} size={1} />}
                          iconPosition={IconPosition.LEFT}
                        >
                          Add Item
                        </CanaryButton>
                        <CanaryButton
                          type={ButtonType.OUTLINED}
                          icon={<Icon path={mdiUpload} size={1} />}
                          iconPosition={IconPosition.LEFT}
                        >
                          Upload
                        </CanaryButton>
                        <CanaryButton
                          type={ButtonType.SHADED}
                          size={ButtonSize.COMPACT}
                          icon={<Icon path={mdiRefresh} size={0.7} />}
                          iconPosition={IconPosition.LEFT}
                        >
                          Refresh
                        </CanaryButton>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-2">Trailing Icon (Right)</p>
                      <div className="flex flex-wrap gap-3">
                        <CanaryButton
                          icon={<Icon path={mdiArrowRight} size={1} />}
                          iconPosition={IconPosition.RIGHT}
                        >
                          Continue
                        </CanaryButton>
                        <CanaryButton
                          type={ButtonType.OUTLINED}
                          icon={<Icon path={mdiDownload} size={1} />}
                          iconPosition={IconPosition.RIGHT}
                        >
                          Download
                        </CanaryButton>
                        <CanaryButton
                          type={ButtonType.TEXT}
                          icon={<Icon path={mdiChevronDown} size={1} />}
                          iconPosition={IconPosition.RIGHT}
                        >
                          Show More
                        </CanaryButton>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-2">Top Icon (Above Text)</p>
                      <div className="flex flex-wrap gap-3 items-start">
                        <CanaryButton
                          size={ButtonSize.TABLET}
                          icon={<Icon path={mdiUpload} size={1.33} />}
                          iconPosition={IconPosition.TOP}
                        >
                          Upload
                        </CanaryButton>
                        <CanaryButton
                          size={ButtonSize.LARGE}
                          type={ButtonType.OUTLINED}
                          icon={<Icon path={mdiDownload} size={1} />}
                          iconPosition={IconPosition.TOP}
                        >
                          Download
                        </CanaryButton>
                        <CanaryButton
                          icon={<Icon path={mdiContentCopy} size={0.83} />}
                          iconPosition={IconPosition.TOP}
                        >
                          Copy
                        </CanaryButton>
                        <CanaryButton
                          size={ButtonSize.COMPACT}
                          type={ButtonType.SHADED}
                          icon={<Icon path={mdiAccount} size={0.83} />}
                          iconPosition={IconPosition.TOP}
                        >
                          Profile
                        </CanaryButton>
                      </div>
                    </div>
                  </div>
                  <CodeSnippet
                    code={`import Icon from "@mdi/react";
import { mdiPlus, mdiArrowRight, mdiUpload, mdiDownload } from "@mdi/js";

// Leading icon (left)
<CanaryButton
  icon={<Icon path={mdiPlus} size={1} />}
  iconPosition={IconPosition.LEFT}
>
  Add Item
</CanaryButton>

// Trailing icon (right)
<CanaryButton
  icon={<Icon path={mdiArrowRight} size={1} />}
  iconPosition={IconPosition.RIGHT}
>
  Continue
</CanaryButton>

// Top icon
<CanaryButton
  icon={<Icon path={mdiContentCopy} size={1} />}
  iconPosition={IconPosition.TOP}
>
  Copy
</CanaryButton>`}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Icon-Only Buttons</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-2">Primary Icon Buttons</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <CanaryButton
                          type={ButtonType.ICON_PRIMARY}
                          size={ButtonSize.TABLET}
                          icon={<Icon path={mdiPlus} size={1.67} />}
                        />
                        <CanaryButton
                          type={ButtonType.ICON_PRIMARY}
                          size={ButtonSize.LARGE}
                          icon={<Icon path={mdiPencil} size={1} />}
                        />
                        <CanaryButton
                          type={ButtonType.ICON_PRIMARY}
                          icon={<Icon path={mdiCheckCircle} size={0.83} />}
                        />
                        <CanaryButton
                          type={ButtonType.ICON_PRIMARY}
                          size={ButtonSize.COMPACT}
                          icon={<Icon path={mdiArrowRight} size={0.83} />}
                        />
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-2">Secondary Icon Buttons</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <CanaryButton
                          type={ButtonType.ICON_SECONDARY}
                          size={ButtonSize.TABLET}
                          icon={<Icon path={mdiMenu} size={1.67} />}
                        />
                        <CanaryButton
                          type={ButtonType.ICON_SECONDARY}
                          size={ButtonSize.LARGE}
                          icon={<Icon path={mdiClose} size={1} />}
                        />
                        <CanaryButton
                          type={ButtonType.ICON_SECONDARY}
                          icon={<Icon path={mdiDelete} size={0.83} />}
                        />
                        <CanaryButton
                          type={ButtonType.ICON_SECONDARY}
                          size={ButtonSize.COMPACT}
                          icon={<Icon path={mdiRefresh} size={0.83} />}
                        />
                      </div>
                    </div>
                  </div>
                  <CodeSnippet
                    code={`import Icon from "@mdi/react";
import { mdiPlus, mdiClose, mdiPencil, mdiDelete } from "@mdi/js";

// Icon-only buttons (no text)
<CanaryButton
  type={ButtonType.ICON_PRIMARY}
  icon={<Icon path={mdiPencil} size={1} />}
/>

<CanaryButton
  type={ButtonType.ICON_SECONDARY}
  icon={<Icon path={mdiClose} size={1} />}
/>`}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Expanded Buttons</h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Expanded buttons fill available width with icons pinned to edges. Useful in flex containers or full-width layouts.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CanaryButton
                        isExpanded
                        icon={<Icon path={mdiArrowRight} size={1} />}
                        iconPosition={IconPosition.RIGHT}
                      >
                        Continue to Payment
                      </CanaryButton>
                    </div>

                    <div className="flex items-center gap-3">
                      <CanaryButton
                        type={ButtonType.OUTLINED}
                        isExpanded
                        icon={<Icon path={mdiDownload} size={1} />}
                        iconPosition={IconPosition.LEFT}
                      >
                        Download Report
                      </CanaryButton>
                    </div>

                    <div className="flex items-center gap-3">
                      <CanaryButton
                        type={ButtonType.SHADED}
                        isExpanded
                        size={ButtonSize.LARGE}
                        icon={<Icon path={mdiChevronDown} size={1} />}
                        iconPosition={IconPosition.RIGHT}
                      >
                        Select Option
                      </CanaryButton>
                    </div>
                  </div>
                  <CodeSnippet
                    code={`import Icon from "@mdi/react";
import { mdiArrowRight, mdiDownload } from "@mdi/js";

// Expanded button fills available width
// Icon is pinned to the edge
<div className="flex items-center gap-3">
  <CanaryButton
    isExpanded
    icon={<Icon path={mdiArrowRight} size={1} />}
    iconPosition={IconPosition.RIGHT}
  >
    Continue to Payment
  </CanaryButton>
</div>

<div className="flex items-center gap-3">
  <CanaryButton
    type={ButtonType.OUTLINED}
    isExpanded
    icon={<Icon path={mdiDownload} size={1} />}
    iconPosition={IconPosition.LEFT}
  >
    Download Report
  </CanaryButton>
</div>`}
                  />
                </div>
              </div>
            </CanaryCard>
            )}
          </Section>
          )}

          {isInSection("forms") && (
          <Section title="Form Components" id="forms">
            {/* Toggle for Underline vs Bordered */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-blue-900">Input Style</h3>
                  <p className="text-xs text-blue-700 mt-1">
                    Toggle between bordered inputs and underline (floating label) inputs
                  </p>
                </div>
                <button
                  onClick={() => setUseUnderlineInputs(!useUnderlineInputs)}
                  className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                    useUnderlineInputs ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      useUnderlineInputs ? "translate-x-9" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="mt-2 flex gap-2 text-xs">
                <span className={!useUnderlineInputs ? "font-semibold text-blue-900" : "text-gray-600"}>
                  Bordered
                </span>
                <span className="text-gray-400">|</span>
                <span className={useUnderlineInputs ? "font-semibold text-blue-900" : "text-gray-600"}>
                  Underline (Bottom Border)
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Inputs */}
              {showComponent('canary-input') && (
              <CanaryCard title={useUnderlineInputs ? "CanaryInputUnderline" : "CanaryInput"}>
                <UsageNote
                  description={useUnderlineInputs
                    ? "Floating label input with underline style. The label animates above the field when focused or filled. Use for guest-facing flows, check-in forms, and modern/minimal designs."
                    : "Standard bordered text input with label above, validation, error display, and optional left/right addons. Use for admin/staff forms."
                  }
                  whenToUse={[
                    "Single-line text entry. Production examples: hotel names, guest names, emails, confirmation codes, cohort labels, membership lookup by email.",
                    useUnderlineInputs ? "Guest-facing check-in/checkout flows. Production: wallet setup, booking info forms, kiosk check-in steps." : "Admin dashboards, settings pages, staff tools. Production: demo hotel creation, PMS config, cohort management.",
                    "InputSize.TABLET (64px) — touch-friendly kiosk/tablet interfaces",
                    "InputSize.LARGE (48px) — prominent form fields, hero forms",
                    "InputSize.NORMAL (40px) — standard form fields (default)",
                    "InputSize.COMPACT (32px) — dense forms, inline editing, table filters",
                    "leftAddon / rightAddon — icons, currency symbols, or unit labels inside the input",
                    "error prop — inline validation messages below the field. Production: API error responses displayed per-field.",
                    "Wrap with CanaryForm for form submission handling.",
                  ]}
                  whenNotToUse={[
                    "Multi-line text — use CanaryTextArea (supports auto-expand)",
                    "Passwords — use CanaryInputPassword (has built-in show/hide toggle)",
                    "Search — use CanaryInputSearch (has built-in search icon, don't use leftAddon)",
                    "Phone numbers — use CanaryInputPhone (has country code picker and flag)",
                    "Credit cards — use CanaryInputCreditCard (has card type detection and formatting)",
                    "Dates — use CanaryInputDate (has split MM/DD/YYYY fields + calendar popup)",
                    "Multiple values — use CanaryInputMultiple (chip-based entry)",
                  ]}
                />
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Input Sizes</h4>
                    <div className="space-y-4">
                      {useUnderlineInputs ? (
                        <>
                          <CanaryInputUnderline
                            label="Tablet Size"
                            size={InputSize.TABLET}
                            placeholder="Tablet size input (64px height, 24px font)"
                          />
                          <CanaryInputUnderline
                            label="Large Size"
                            size={InputSize.LARGE}
                            placeholder="Large size input (48px height, 18px font)"
                          />
                          <CanaryInputUnderline
                            label="Normal Size (Default)"
                            size={InputSize.NORMAL}
                            placeholder="Normal size input (40px height, 14px font)"
                          />
                          <CanaryInputUnderline
                            label="Compact Size"
                            size={InputSize.COMPACT}
                            placeholder="Compact size input (32px height, 14px font)"
                          />
                        </>
                      ) : (
                        <>
                          <CanaryInput
                            label="Tablet Size"
                            size={InputSize.TABLET}
                            placeholder="Tablet size input (64px height, 24px font)"
                          />
                          <CanaryInput
                            label="Large Size"
                            size={InputSize.LARGE}
                            placeholder="Large size input (48px height, 18px font)"
                          />
                          <CanaryInput
                            label="Normal Size (Default)"
                            size={InputSize.NORMAL}
                            placeholder="Normal size input (40px height, 14px font)"
                          />
                          <CanaryInput
                            label="Compact Size"
                            size={InputSize.COMPACT}
                            placeholder="Compact size input (32px height, 14px font)"
                          />
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Input States</h4>
                    <div className="space-y-4">
                      {useUnderlineInputs ? (
                        <>
                          <CanaryInputUnderline
                            label="Email Address"
                            size={InputSize.NORMAL}
                            type={InputType.EMAIL}
                            placeholder="Enter your email"
                            helperText="We'll never share your email"
                          />
                          <CanaryInputUnderline
                            label="With Error"
                            size={InputSize.NORMAL}
                            placeholder="Enter value"
                            error="This field is required"
                          />
                          <CanaryInputUnderline
                            label="Disabled Input"
                            size={InputSize.NORMAL}
                            placeholder="Disabled state"
                            isDisabled
                          />
                        </>
                      ) : (
                        <>
                          <CanaryInput
                            label="Email Address"
                            size={InputSize.NORMAL}
                            type={InputType.EMAIL}
                            placeholder="Enter your email"
                            helperText="We'll never share your email"
                          />
                          <CanaryInput
                            label="With Error"
                            size={InputSize.NORMAL}
                            placeholder="Enter value"
                            error="This field is required"
                          />
                          <CanaryInput
                            label="Disabled Input"
                            size={InputSize.NORMAL}
                            placeholder="Disabled state"
                            isDisabled
                          />
                          <CanaryInput
                            label="Readonly Input"
                            size={InputSize.NORMAL}
                            value="Read-only value"
                            isReadonly
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  code={`// Input Sizes
<CanaryInput size={InputSize.TABLET} placeholder="Tablet (64px)" />
<CanaryInput size={InputSize.LARGE} placeholder="Large (48px)" />
<CanaryInput size={InputSize.NORMAL} placeholder="Normal (40px)" />
<CanaryInput size={InputSize.COMPACT} placeholder="Compact (32px)" />

// Input States
<CanaryInput
  label="Email"
  type={InputType.EMAIL}
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>

<CanaryInput
  label="With Error"
  error="This field is required"
/>

<CanaryInput label="Disabled" isDisabled />
<CanaryInput label="Readonly" isReadonly />`}
                />
              </CanaryCard>
              )}

              {/* Specialized Inputs */}
              {showComponent('canary-input-password') && (
              <CanaryCard title="CanaryInputPassword">
                <UsageNote
                  description="Password input with built-in show/hide visibility toggle."
                  whenToUse={["Login forms, registration, password change screens. Production: password creation with confirmation field, PMS credential setup (Opera, Synxis), PCI session re-authentication."]}
                  whenNotToUse={["Non-secret text fields — use CanaryInput"]}
                />
                <div className="space-y-4">
                  {useUnderlineInputs ? (
                    <>
                      <CanaryInputPasswordUnderline
                        label="Password"
                        placeholder="Enter your password"
                      />
                      <CanaryInputPasswordUnderline
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        error="Passwords do not match"
                      />
                    </>
                  ) : (
                    <>
                      <CanaryInputPassword
                        label="Password"
                        placeholder="Enter your password"
                      />
                      <CanaryInputPassword
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        error="Passwords do not match"
                      />
                    </>
                  )}
                </div>
                <CodeSnippet
                  code={`<CanaryInputPassword
  label="Password"
  placeholder="Enter your password"
/>

<CanaryInputPassword
  label="Confirm Password"
  error="Passwords do not match"
/>`}
                />
              </CanaryCard>
              )}

              {showComponent('canary-input-search') && (
              <CanaryCard title="CanaryInputSearch">
                <UsageNote
                  description="Search input with a built-in search icon on the left."
                  whenToUse={["Search/filter fields. Production: reservation search dashboards, check-in/check-out search, cohort hotel filtering. Typically connected to server-side search with debounced queries."]}
                  whenNotToUse={["General text input — use CanaryInput"]}
                />
                <div className="space-y-4">
                  {useUnderlineInputs ? (
                    <>
                      <CanaryInputSearchUnderline
                        label="Search"
                        placeholder="Search for anything..."
                      />
                      <CanaryInputSearchUnderline
                        placeholder="Quick search (no label)"
                      />
                    </>
                  ) : (
                    <>
                      <CanaryInputSearch
                        label="Search"
                        placeholder="Search for anything..."
                      />
                      <CanaryInputSearch
                        placeholder="Quick search (no label)"
                      />
                    </>
                  )}
                </div>
                <CodeSnippet
                  code={`<CanaryInputSearch
  label="Search"
  placeholder="Search for anything..."
/>

<CanaryInputSearch
  placeholder="Quick search (no label)"
/>`}
                />
              </CanaryCard>
              )}

              {showComponent('canary-input-credit-card') && (
              <CanaryCard title="CanaryInputCreditCard">
                <UsageNote
                  description="Credit card input with automatic card type detection (Visa, Mastercard, etc.) and number formatting."
                  whenToUse={["Payment forms. Production: authorization forms, payment collection during check-in, e-folio charges."]}
                  whenNotToUse={["Non-payment number fields — use CanaryInput", "Currency amounts — use CanaryInputCurrency"]}
                />
                <div className="space-y-4">
                  {useUnderlineInputs ? (
                    <>
                      <CanaryInputCreditCardUnderline
                        label="Credit Card Number"
                        placeholder="Enter credit card number"
                        helperText="We accept Visa, Mastercard, American Express, and Discover"
                      />
                      <CanaryInputCreditCardUnderline
                        label="Card Number"
                        placeholder="4242 4242 4242 4242"
                      />
                    </>
                  ) : (
                    <>
                      <CanaryInputCreditCard
                        label="Credit Card Number"
                        placeholder="Enter credit card number"
                        helperText="We accept Visa, Mastercard, American Express, and Discover"
                      />
                      <CanaryInputCreditCard
                        label="Card Number"
                        placeholder="4242 4242 4242 4242"
                      />
                    </>
                  )}
                </div>
                <CodeSnippet
                  code={`<CanaryInputCreditCard
  label="Credit Card Number"
  placeholder="Enter credit card number"
  helperText="We accept major credit cards"
  onCardChange={(number, type) => console.log(type)}
/>`}
                />
              </CanaryCard>
              )}

              {showComponent('canary-input-phone') && (
              <CanaryCard title={useUnderlineInputs ? "CanaryInputPhoneUnderline" : "CanaryInputPhone"}>
                <UsageNote
                  description="International phone input with country code selector and flag display."
                  whenToUse={["Guest contact forms. Production: wallet login (phone → OTP), check-in contact info, authorization client details, digital tip wallet user setup."]}
                  whenNotToUse={["Simple numeric input — use CanaryInput with InputType.TEL"]}
                />
                <div className="space-y-4">
                  {useUnderlineInputs ? (
                    <>
                      <CanaryInputPhoneUnderline
                        label="Mobile Phone"
                        defaultCountry="US"
                      />
                      <CanaryInputPhoneUnderline
                        label="International Phone"
                        defaultCountry="GB"
                        helperText="Include country code"
                      />
                    </>
                  ) : (
                    <>
                      <CanaryInputPhone
                        label="Mobile Phone"
                        defaultCountry="US"
                      />
                      <CanaryInputPhone
                        label="International Phone"
                        defaultCountry="GB"
                        helperText="Include country code"
                      />
                    </>
                  )}
                </div>
                <CodeSnippet
                  code={useUnderlineInputs ? `<CanaryInputPhoneUnderline
  label="Mobile Phone"
  defaultCountry="US"
  value={phoneNumber}
  onChange={setPhoneNumber}
/>` : `<CanaryInputPhone
  label="Mobile Phone"
  defaultCountry="US"
  value={phoneNumber}
  onChange={setPhoneNumber}
/>`}
                />
              </CanaryCard>
              )}

              {showComponent('canary-calendar') && (
              <CanaryCard title="CanaryCalendar">
                <UsageNote
                  description="Full calendar component supporting single date and date range selection with month/year navigation and quick selection buttons."
                  whenToUse={["Inline calendar views on dashboards or booking pages", "Date selection needing full month context"]}
                  whenNotToUse={["Date entry in forms — use CanaryInputDate (compact field with popup)", "Date range in forms — use CanaryInputDateRange"]}
                />
                <CalendarDemo />
                <CodeSnippet
                  code={`// Single date selection
<CanaryCalendar
  value={{ start: selectedDate, end: null }}
  onChange={(sel) => setSelectedDate(sel.start)}
  selectionMode="date"
/>

// Date range selection
<CanaryCalendar
  value={{ start: startDate, end: endDate }}
  onChange={({ start, end }) => { setStartDate(start); setEndDate(end); }}
  selectionMode="range"
/>

// With constraints
<CanaryCalendar
  minDate={new Date()}
  maxDate={new Date(2024, 11, 31)}
  startOfWeek="sunday"
/>`}
                />
              </CanaryCard>
              )}

              {showComponent('canary-input-date') && (
              <CanaryCard title={useUnderlineInputs ? "CanaryInputDateUnderline" : "CanaryInputDate"}>
                <UsageNote
                  description="Split date input with separate MM/DD/YYYY fields and an optional calendar picker popup."
                  whenToUse={["Date fields in forms (birth date, check-in date, expiry date)"]}
                  whenNotToUse={["Date ranges — use CanaryInputDateRange", "Inline calendar display — use CanaryCalendar"]}
                />
                <div className="space-y-4">
                  {useUnderlineInputs ? (
                    <>
                      <CanaryInputDateUnderline
                        label="Date"
                        helperText="Select a date"
                      />
                      <CanaryInputDateUnderline
                        label="Birth Date"
                      />
                      <CanaryInputDateUnderline
                        label="Date"
                        error="Please select a valid date"
                      />
                    </>
                  ) : (
                    <>
                      <CanaryInputDate
                        label="Select Date"
                        helperText="Choose a date from the calendar"
                      />
                      <CanaryInputDate
                        label="Birth Date"
                      />
                      <CanaryInputDate
                        label="Date with Error"
                        error="Please select a valid date"
                      />
                    </>
                  )}
                </div>
                <CodeSnippet
                  code={`<CanaryInputDate
  label="Select Date"
  value={selectedDate}
  onChange={(date) => setSelectedDate(date)}
  helperText="Choose a date from the calendar"
/>`}
                />
              </CanaryCard>
              )}

              {showComponent('canary-input-date-range') && (
              <CanaryCard title={useUnderlineInputs ? "CanaryInputDateRangeUnderline" : "CanaryInputDateRange"}>
                <UsageNote
                  description="Dual date input for selecting a start and end date, with range selection in a calendar popup."
                  whenToUse={["Booking date ranges, stay duration, report date filters"]}
                  whenNotToUse={["Single dates — use CanaryInputDate", "Inline calendar — use CanaryCalendar with selectionMode='range'"]}
                />
                <div className="space-y-4">
                  {useUnderlineInputs ? (
                    <>
                      <CanaryInputDateRangeUnderline
                        label="Date Range"
                        helperText="Select start and end dates"
                      />
                      <CanaryInputDateRangeUnderline
                        label="Vacation Dates"
                      />
                      <CanaryInputDateRangeUnderline
                        label="Date Range"
                        error="Please select valid dates"
                      />
                    </>
                  ) : (
                    <>
                      <CanaryInputDateRange
                        label="Select Date Range"
                        helperText="Choose start and end dates"
                      />
                      <CanaryInputDateRange
                        label="Vacation Dates"
                      />
                      <CanaryInputDateRange
                        label="Range with Error"
                        error="Please select valid dates"
                      />
                    </>
                  )}
                </div>
                <CodeSnippet
                  code={`<CanaryInputDateRange
  label="Select Date Range"
  startDate={startDate}
  endDate={endDate}
  onChange={(start, end) => {
    setStartDate(start);
    setEndDate(end);
  }}
  helperText="Choose start and end dates"
/>`}
                />
              </CanaryCard>
              )}

              {showComponent('canary-input-multiple') && (
              <CanaryCard title="CanaryInputMultiple">
                <UsageNote
                  description="Chip-based input for entering multiple values. Press Enter to add, backspace to remove."
                  whenToUse={["Email recipients. Production: report distribution lists (tip reports to multiple emails), notification settings (F&B alert emails), guest journey segment selection.", "Built-in email validation when used with InputType.EMAIL."]}
                  whenNotToUse={["Single text value — use CanaryInput", "Selecting from predefined options — use CanarySelect or CanaryChip"]}
                />
                <InputMultipleDemo />
                <CodeSnippet
                  code={`const [emails, setEmails] = useState<string[]>([]);

<CanaryInputMultiple
  label="Email Recipients"
  placeholder="Type an email and press Enter"
  values={emails}
  onChange={setEmails}
  inputType={InputType.EMAIL}
/>

// With pre-filled values
<CanaryInputMultiple
  label="Room Numbers"
  values={["101", "204", "315"]}
  onChange={setRoomNumbers}
/>

// Disabled
<CanaryInputMultiple
  label="Locked"
  values={["admin@hotel.com"]}
  isDisabled
/>`}
                />
              </CanaryCard>
              )}

              {/* Other Form Components */}
              {showComponent('canary-select') && (
              <CanaryCard title={useUnderlineInputs ? "CanarySelectUnderline & CanaryTextAreaUnderline" : "CanarySelect & CanaryTextArea"}>
                <UsageNote
                  description="CanarySelect: Native HTML dropdown with custom styling. CanaryTextArea: Multi-line text input with optional auto-expand."
                  whenToUse={[
                    "Select: dropdowns with 4+ options. Production: cohort state changes (inline in table rows with per-state styling), brand/onboarding type selection, country, room type filters.",
                    "Select: production pattern — dependent selects where one dropdown filters another's options (e.g., onboarding type → available brands).",
                    "TextArea: multi-line input. Production: internal notes on reservations, broadcast messages, tip customization copy, cohort notes.",
                    "TextArea with autoExpand: grows as user types — great for messaging or notes fields.",
                    "TextArea resize prop: 'none' for fixed, 'vertical' for manual resize (default), 'both' for full resize.",
                  ]}
                  whenNotToUse={[
                    "Select with 2–3 visible options — use CanaryRadioGroup or CanarySegmentedControl instead",
                    "Multi-select — render multiple CanaryCheckbox components or use CanaryInputMultiple",
                    "Searchable/filterable dropdown — this uses native browser select; build custom if needed",
                    "Single-line text — use CanaryInput",
                  ]}
                />
                <CanaryGrid columns={2} gap="large">
                  {useUnderlineInputs ? (
                    <CanarySelectUnderline
                      label="Select Country"
                      size={InputSize.NORMAL}
                      defaultValue=""
                      options={[
                        { label: "United States", value: "us" },
                        { label: "Canada", value: "ca" },
                        { label: "United Kingdom", value: "uk" },
                      ]}
                    />
                  ) : (
                    <CanarySelect
                      label="Select Country"
                      size={InputSize.NORMAL}
                      options={[
                        { label: "United States", value: "us" },
                        { label: "Canada", value: "ca" },
                        { label: "United Kingdom", value: "uk" },
                      ]}
                    />
                  )}

                  <CanarySelect
                    label="Disabled Select"
                    size={InputSize.NORMAL}
                    isDisabled
                    options={[
                      { label: "United States", value: "us" },
                      { label: "Canada", value: "ca" },
                    ]}
                  />

                  <div className="col-span-2">
                    {useUnderlineInputs ? (
                      <CanaryTextAreaUnderline
                        label="Message"
                        placeholder="Enter your message"
                        rows={4}
                      />
                    ) : (
                      <CanaryTextArea
                        label="Message"
                        placeholder="Enter your message"
                        rows={4}
                      />
                    )}
                  </div>

                  {/* Auto-expanding TextArea */}
                  <div className="col-span-2">
                    <CanaryCard title="CanaryTextArea — Auto Expand">
                      <div className="space-y-4">
                        <CanaryTextArea
                          label="Auto-expanding (pre-filled)"
                          autoExpand
                          defaultValue={"Dear Guest,\n\nThank you for choosing to stay with us at the Statler New York. We're delighted to confirm your reservation for a Deluxe King Room arriving on March 20th. Our concierge team is available 24/7 to assist with any special requests you may have prior to your arrival.\n\nWe look forward to welcoming you."}
                        />
                        <CanaryTextArea
                          label="Auto-expanding (empty — try typing)"
                          autoExpand
                          placeholder="Start typing and watch it grow..."
                        />
                      </div>
                      <CodeSnippet
                        code={`// Auto-expands to hug content, starts at input height
<CanaryTextArea
  label="Message"
  autoExpand
  defaultValue="Pre-filled text that sets initial height..."
/>

// Empty — grows as you type
<CanaryTextArea
  label="Notes"
  autoExpand
  placeholder="Start typing..."
/>`}
                      />
                    </CanaryCard>
                  </div>

                  {/* Checkboxes */}
                  {showComponent('canary-checkbox') && (
                  <div className="col-span-2">
                    <CanaryCard title="CanaryCheckbox">
                      <UsageNote
                        description="Custom checkbox with checked, unchecked, and indeterminate states."
                        whenToUse={["Form consent/agreement", "Multi-select lists", "\"Select all\" with indeterminate state"]}
                        whenNotToUse={["Binary settings toggles — use CanarySwitch", "Single selection — use CanaryRadioGroup", "Filter chips — use CanaryChip"]}
                      />
                      <div className="space-y-8">
                        {/* Interactive Example */}
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-gray-600">Interactive Example</h4>
                          <div className="space-y-2">
                            <CanaryCheckbox
                              size="normal"
                              label="Receive email notifications"
                              checked={selectedCheckboxes.includes("email")}
                              onChange={() => toggleCheckbox("email")}
                            />
                            <CanaryCheckbox
                              size="normal"
                              label="Receive SMS notifications"
                              checked={selectedCheckboxes.includes("sms")}
                              onChange={() => toggleCheckbox("sms")}
                            />
                            <CanaryCheckbox
                              size="normal"
                              label="Receive push notifications"
                              checked={selectedCheckboxes.includes("push")}
                              onChange={() => toggleCheckbox("push")}
                            />
                          </div>
                        </div>

                        {/* Disabled States */}
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-gray-600">Disabled States</h4>
                          <div className="space-y-2">
                            <CanaryCheckbox size="normal" label="Disabled unchecked" isDisabled />
                            <CanaryCheckbox size="normal" label="Disabled checked" checked isDisabled />
                          </div>
                        </div>

                        {/* Special States */}
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-gray-600">Special States</h4>
                          <div className="space-y-2">
                            <CanaryCheckbox size="normal" label="Indeterminate state" indeterminate />
                            <CanaryCheckbox
                              size="normal"
                              label="With helper text"
                              helperText="This provides additional context"
                            />
                            <CanaryCheckbox
                              size="normal"
                              label="With error message"
                              error="This field is required"
                            />
                          </div>
                        </div>

                        {/* Size Variants */}
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-gray-600">Size Variants</h4>
                          <div className="space-y-2">
                            <CanaryCheckbox size="normal" label="Normal (Desktop) - 24px icon, 14px font" />
                            <CanaryCheckbox size="large" label="Large (Mobile) - 24px icon, 18px font" />
                            <CanaryCheckbox size="xlarge" label="XLarge (Tablet) - 32px icon, 28px font" />
                          </div>
                        </div>
                      </div>
                    </CanaryCard>
                  </div>
                  )}

                  {/* Radio Buttons */}
                  {showComponent('canary-radio') && (
                  <div className="col-span-2">
                    <CanaryCard title="CanaryRadio">
                      <UsageNote
                        description="Radio button group for single selection from 2–5 visible options."
                        whenToUse={["Single selection from a small set (room type, payment method)"]}
                        whenNotToUse={["More than 5 options — use CanarySelect", "Multi-select — use CanaryCheckbox", "Inline toggle — use CanarySegmentedControl"]}
                      />
                      <div className="space-y-8">
                        {/* Interactive Example */}
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-gray-600">Interactive Example</h4>
                          <CanaryRadioGroup label="Preferred Contact Method">
                            <CanaryRadio
                              size="normal"
                              name="contact"
                              label="Email"
                              checked={selectedRadio === "email"}
                              onChange={() => setSelectedRadio("email")}
                            />
                            <CanaryRadio
                              size="normal"
                              name="contact"
                              label="Phone"
                              checked={selectedRadio === "phone"}
                              onChange={() => setSelectedRadio("phone")}
                            />
                            <CanaryRadio
                              size="normal"
                              name="contact"
                              label="SMS"
                              checked={selectedRadio === "sms"}
                              onChange={() => setSelectedRadio("sms")}
                            />
                          </CanaryRadioGroup>
                        </div>

                        {/* Disabled States */}
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-gray-600">Disabled States</h4>
                          <div className="space-y-2">
                            <CanaryRadio size="normal" name="disabled-demo" label="Disabled unchecked" isDisabled />
                            <CanaryRadio size="normal" name="disabled-demo" label="Disabled checked" checked isDisabled />
                          </div>
                        </div>

                        {/* Helper Text and Error States */}
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-gray-600">Helper Text & Error States</h4>
                          <div className="space-y-2">
                            <CanaryRadio
                              size="normal"
                              name="helper-demo"
                              label="With helper text"
                              helperText="Additional information appears here"
                            />
                            <CanaryRadio
                              size="normal"
                              name="error-demo"
                              label="With error message"
                              error="Please select an option"
                            />
                          </div>
                        </div>

                        {/* Size Variants */}
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-gray-600">Size Variants</h4>
                          <div className="space-y-2">
                            <CanaryRadio size="normal" name="size-demo" label="Normal (Desktop) - 24px icon, 14px font" />
                            <CanaryRadio size="large" name="size-demo" label="Large (Mobile) - 24px icon, 18px font" />
                            <CanaryRadio size="xlarge" name="size-demo" label="XLarge (Tablet) - 32px icon, 28px font" />
                          </div>
                        </div>
                      </div>
                    </CanaryCard>
                  </div>
                  )}
                </CanaryGrid>

                {/* Switch Component Demos */}
                {showComponent('canary-switch') && (<>
                <div className="mt-6">
                  <CanaryCard title="CanarySwitch - Interactive Examples">
                    <UsageNote
                      description="Toggle switch for binary on/off states with smooth animation."
                      whenToUse={["Settings toggles (enable/disable features, notifications)", "Preferences that take effect immediately"]}
                      whenNotToUse={["Form consent — use CanaryCheckbox", "Selecting from multiple options — use CanaryRadioGroup or CanarySelect"]}
                    />
                    <p className="text-sm text-gray-600 mb-4">
                      Toggle switches for on/off states. Supports two sizes: Normal (Desktop) and Large (Mobile).
                    </p>

                    <div className="space-y-4">
                      <CanarySwitch
                        size="normal"
                        label="Enable notifications"
                        checked={switchStates.notifications}
                        onChange={(checked) => setSwitchStates({ ...switchStates, notifications: checked })}
                      />
                      <CanarySwitch
                        size="normal"
                        label="Dark mode"
                        checked={switchStates.darkMode}
                        onChange={(checked) => setSwitchStates({ ...switchStates, darkMode: checked })}
                      />
                      <CanarySwitch
                        size="normal"
                        label="Auto-save"
                        checked={switchStates.autoSave}
                        onChange={(checked) => setSwitchStates({ ...switchStates, autoSave: checked })}
                      />
                    </div>

                    <CodeSnippet
                      code={`const [isEnabled, setIsEnabled] = useState(false);

<CanarySwitch
  size="normal"
  label="Enable notifications"
  checked={isEnabled}
  onChange={(checked) => setIsEnabled(checked)}
/>`}
                    />
                  </CanaryCard>
                </div>

                <div className="mt-6">
                  <CanaryCard title="CanarySwitch - States">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-3">Normal Size (Desktop)</h4>
                        <div className="space-y-3">
                          <CanarySwitch size="normal" label="Switch On" checked={true} />
                          <CanarySwitch size="normal" label="Switch Off" checked={false} />
                          <CanarySwitch size="normal" label="Disabled On" checked={true} isDisabled />
                          <CanarySwitch size="normal" label="Disabled Off" checked={false} isDisabled />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-3">Large Size (Mobile)</h4>
                        <div className="space-y-3">
                          <CanarySwitch size="large" label="Switch On" checked={true} />
                          <CanarySwitch size="large" label="Switch Off" checked={false} />
                          <CanarySwitch size="large" label="Disabled On" checked={true} isDisabled />
                          <CanarySwitch size="large" label="Disabled Off" checked={false} isDisabled />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-3">XLarge Size (Tablet)</h4>
                        <div className="space-y-3">
                          <CanarySwitch size="xlarge" label="Switch On" checked={true} />
                          <CanarySwitch size="xlarge" label="Switch Off" checked={false} />
                          <CanarySwitch size="xlarge" label="Disabled On" checked={true} isDisabled />
                          <CanarySwitch size="xlarge" label="Disabled Off" checked={false} isDisabled />
                        </div>
                      </div>
                    </div>

                    <CodeSnippet
                      code={`// Normal size (Desktop) - 28px × 16px
<CanarySwitch size="normal" label="Switch On" checked={true} />
<CanarySwitch size="normal" label="Disabled" checked={true} isDisabled />

// Large size (Mobile) - 44px × 24px
<CanarySwitch size="large" label="Switch On" checked={true} />
<CanarySwitch size="large" label="Disabled" checked={true} isDisabled />`}
                    />
                  </CanaryCard>
                </div>

                <div className="mt-6">
                  <CanaryCard title="CanarySwitch - Size Comparison">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Normal (Desktop) - 28px × 16px</h4>
                        <CanarySwitch size="normal" label="Normal size switch with label" checked={true} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Large (Mobile) - 44px × 24px</h4>
                        <CanarySwitch size="large" label="Large size switch with label" checked={true} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">XLarge (Tablet) - 56px × 30px</h4>
                        <CanarySwitch size="xlarge" label="XLarge size switch with label" checked={true} />
                      </div>
                    </div>

                    <CodeSnippet
                      code={`<CanarySwitch size="normal" label="Normal (Desktop)" />
<CanarySwitch size="large" label="Large (Mobile)" />
<CanarySwitch size="xlarge" label="XLarge (Tablet)" />`}
                    />
                  </CanaryCard>
                </div>
                </>)}

                <CodeSnippet
                  code={useUnderlineInputs ? `<CanarySelectUnderline
  label="Select Country"
  options={[
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" },
  ]}
/>

<CanaryTextAreaUnderline
  label="Message"
  placeholder="Enter your message"
  rows={4}
/>

<CanaryCheckbox label="I agree to the terms" />

<CanaryRadioGroup label="Contact Method">
  <CanaryRadio size="normal" name="contact" label="Email" />
  <CanaryRadio size="large" name="contact" label="Phone" />
  <CanaryRadio size="xlarge" name="contact" label="SMS" />
</CanaryRadioGroup>` : `<CanarySelect
  label="Select Country"
  options={[
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" },
  ]}
/>

<CanaryTextArea
  label="Message"
  placeholder="Enter your message"
  rows={4}
/>

<CanaryCheckbox label="I agree to the terms" />

<CanaryRadioGroup label="Contact Method">
  <CanaryRadio size="normal" name="contact" label="Email" />
  <CanaryRadio size="large" name="contact" label="Phone" />
  <CanaryRadio size="xlarge" name="contact" label="SMS" />
</CanaryRadioGroup>`}
                />
              </CanaryCard>
              )}
            </div>
          </Section>
          )}

          {isInSection("data-display") && (
          <Section title="Data Display" id="data-display">
            <div className="space-y-6">
              {/* Tags */}
              {showComponent('canary-tag') && (
              <CanaryCard title="CanaryTag">
                <UsageNote
                  description="Non-interactive colored label for displaying status, categories, or metadata. Purely visual — no click handlers."
                  whenToUse={[
                    "TagColor.SUCCESS (green) — Production: 'Active', 'Confirmed', 'Fulfilled', 'Connected', 'Paid'",
                    "TagColor.WARNING (yellow) — Production: 'In Transit', 'Expiring Soon', time elapsed indicators (e.g., '15m ago' turning red after threshold)",
                    "TagColor.ERROR (red) — Production: 'Blocked', 'Declined', 'Failed', 'Expired', 'Overdue'",
                    "TagColor.INFO (blue) — Production: 'Submitted', 'In Progress', 'New', 'Scheduled'",
                    "TagColor.DEFAULT (gray) — Production: 'Archived', 'Draft', 'N/A', 'Inactive'",
                    "TagVariant.FILLED — prominent status in dashboards, headers, key metrics",
                    "TagVariant.OUTLINE — subtle indicators in tables, lists, secondary context",
                    "TagSize.COMPACT — inside table cells or dense layouts",
                    "leadingIcon / trailingIcon — add context icons (e.g., check mark for confirmed)",
                    "customColor — brand-specific or non-standard status colors",
                  ]}
                  whenNotToUse={[
                    "Interactive/clickable tags — use CanaryChip with ChipType.SELECTABLE",
                    "Removable items (filters, recipients) — use CanaryChip with ChipType.REMOVABLE",
                    "Action buttons — use CanaryButton",
                  ]}
                />
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Outline Variant (Default)</h4>
                    <div className="flex flex-wrap gap-2">
                      <CanaryTag label="Success" color={TagColor.SUCCESS} />
                      <CanaryTag label="Warning" color={TagColor.WARNING} />
                      <CanaryTag label="Info" color={TagColor.INFO} />
                      <CanaryTag label="Default" color={TagColor.DEFAULT} />
                      <CanaryTag label="Error" color={TagColor.ERROR} />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Filled Variant</h4>
                    <div className="flex flex-wrap gap-2">
                      <CanaryTag label="Success" color={TagColor.SUCCESS} variant={TagVariant.FILLED} />
                      <CanaryTag label="Warning" color={TagColor.WARNING} variant={TagVariant.FILLED} />
                      <CanaryTag label="Info" color={TagColor.INFO} variant={TagVariant.FILLED} />
                      <CanaryTag label="Default" color={TagColor.DEFAULT} variant={TagVariant.FILLED} />
                      <CanaryTag label="Error" color={TagColor.ERROR} variant={TagVariant.FILLED} />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">With Icons</h4>
                    <div className="flex flex-wrap gap-2">
                      <CanaryTag
                        label="Add"
                        color={TagColor.SUCCESS}
                        leadingIcon={<Icon path={mdiPlus} size={0.5} />}
                      />
                      <CanaryTag
                        label="Remove"
                        color={TagColor.ERROR}
                        variant={TagVariant.FILLED}
                        trailingIcon={<Icon path={mdiClose} size={0.5} />}
                      />
                      <CanaryTag
                        label="Verified"
                        color={TagColor.INFO}
                        leadingIcon={<Icon path={mdiCheckCircle} size={0.5} />}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Tag Sizes</h4>
                    <div className="flex flex-wrap items-center gap-2">
                      <CanaryTag label="Compact" size={TagSize.COMPACT} color={TagColor.INFO} />
                      <CanaryTag label="Medium" size={TagSize.MEDIUM} color={TagColor.INFO} />
                    </div>
                  </div>
                </div>
                <CodeSnippet
                  code={`// Outline variant (default)
<CanaryTag label="Success" color={TagColor.SUCCESS} />
<CanaryTag label="Warning" color={TagColor.WARNING} />
<CanaryTag label="Info" color={TagColor.INFO} />
<CanaryTag label="Default" color={TagColor.DEFAULT} />
<CanaryTag label="Error" color={TagColor.ERROR} />

// Filled variant
<CanaryTag label="Success" color={TagColor.SUCCESS} variant={TagVariant.FILLED} />
<CanaryTag label="Error" color={TagColor.ERROR} variant={TagVariant.FILLED} />

// With icons
<CanaryTag
  label="Add"
  color={TagColor.SUCCESS}
  leadingIcon={<Icon path={mdiPlus} size={0.5} />}
/>
<CanaryTag
  label="Remove"
  color={TagColor.ERROR}
  variant={TagVariant.FILLED}
  trailingIcon={<Icon path={mdiClose} size={0.5} />}
/>

// Tag sizes
<CanaryTag label="Compact" size={TagSize.COMPACT} />
<CanaryTag label="Medium" size={TagSize.MEDIUM} />`}
                />
              </CanaryCard>
              )}

              {/* Chips */}
              {showComponent('canary-chip') && (
              <CanaryCard title="CanaryChip">
                <UsageNote
                  description="Interactive chip component with two distinct modes determined by ChipType."
                  whenToUse={[
                    "ChipType.SELECTABLE — filter toggles: click to toggle on/off. Use for category filters ('VIP', 'Late Checkout'), tag selection, multi-select displayed inline.",
                    "ChipType.REMOVABLE — dismissible items. Production: applied reservation filter chips (each shows filter label with X to remove individual filters). Pattern: CanarySearch + CanaryChip row below it.",
                    "Size.LARGE — prominent chip groups, touch-friendly interfaces",
                    "Size.NORMAL — standard chip rows, filter bars (default)",
                    "Size.COMPACT — dense layouts, inline within text or table cells",
                    "isRounded — fully rounded pill shape for softer visual style",
                    "leadingIcon / trailingIcon — add context (e.g., user avatar, status dot)",
                  ]}
                  whenNotToUse={[
                    "Display-only status labels (no interaction) — use CanaryTag",
                    "Chip-based text entry (type + Enter to add) — use CanaryInputMultiple",
                    "Navigation or tab switching — use CanaryTabs or CanarySegmentedControl",
                    "Binary on/off toggle — use CanarySwitch for settings, CanaryCheckbox for forms",
                  ]}
                />
                <div className="space-y-6">
                  {/* Selectable - Sizes */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Selectable — Sizes</h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <CanaryChip label="Large" size="large" />
                      <CanaryChip label="Normal" size="normal" />
                      <CanaryChip label="Compact" size="compact" />
                    </div>
                  </div>

                  {/* Selectable - Selected state */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Selectable — Selected</h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <CanaryChip label="Large" size="large" isSelected />
                      <CanaryChip label="Normal" size="normal" isSelected />
                      <CanaryChip label="Compact" size="compact" isSelected />
                    </div>
                  </div>

                  {/* Selectable - Disabled */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Selectable — Disabled</h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <CanaryChip label="Disabled" isDisabled />
                      <CanaryChip label="Selected Disabled" isSelected isDisabled />
                    </div>
                  </div>

                  {/* Selectable - With dropdown chevron */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Selectable — Dropdown (Trailing Icon)</h4>
                    <ChipDropdownDemo />
                  </div>

                  {/* Removable - Sizes */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Removable — Sizes</h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <CanaryChip label="Large" chipType={ChipType.REMOVABLE} size="large" onRemove={() => alert('Remove large')} />
                      <CanaryChip label="Normal" chipType={ChipType.REMOVABLE} size="normal" onRemove={() => alert('Remove normal')} />
                      <CanaryChip label="Compact" chipType={ChipType.REMOVABLE} size="compact" onRemove={() => alert('Remove compact')} />
                    </div>
                  </div>

                  {/* Removable - Realistic example */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Removable — Email Tags Example</h4>
                    <div className="flex flex-wrap items-center gap-2">
                      <CanaryChip label="john@hotel.com" chipType={ChipType.REMOVABLE} size="compact" onRemove={() => alert('Remove')} />
                      <CanaryChip label="jane@hotel.com" chipType={ChipType.REMOVABLE} size="compact" onRemove={() => alert('Remove')} />
                      <CanaryChip label="admin@canarytech.com" chipType={ChipType.REMOVABLE} size="compact" onRemove={() => alert('Remove')} />
                    </div>
                  </div>

                  {/* Removable - Disabled */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Removable — Disabled</h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <CanaryChip label="Can't remove" chipType={ChipType.REMOVABLE} isDisabled />
                    </div>
                  </div>
                </div>
                <CodeSnippet
                  code={`// Selectable chips (default)
<CanaryChip label="Selection" size="large" />
<CanaryChip label="Selection" size="normal" />
<CanaryChip label="Selection" size="compact" />

// Selected state
<CanaryChip label="Selected" isSelected />

// Dropdown chip with trailing icon
<CanaryChip
  label="Select Tag"
  trailingIcon={<Icon path={mdiChevronDown} size={0.7} />}
/>

// Removable chips
<CanaryChip
  label="john@hotel.com"
  chipType={ChipType.REMOVABLE}
  onRemove={() => handleRemove()}
/>

// Disabled
<CanaryChip label="Disabled" isDisabled />
<CanaryChip label="Can't remove" chipType={ChipType.REMOVABLE} isDisabled />`}
                />
              </CanaryCard>
              )}

              {/* Table */}
              {showComponent('canary-table') && (
              <CanaryCard title="CanaryTable">
                <UsageNote
                  description="Data table with configurable columns, custom cell rendering via column render functions, and optional row click handlers."
                  whenToUse={[
                    "Structured data with columns. Production: authorization forms (status tags + amounts + dates + actions), F&B orders (time elapsed tags + location + approve/deny buttons), reservations (11+ columns with sorting + pagination), cohorts (inline CanarySelect for state changes in cells), tipping orders.",
                    "Custom cell rendering: render functions for CanaryTag status, CanaryButton row actions, CanarySelect inline edits, formatted currency/dates.",
                    "Combine with CanarySearch above for filtering + CanaryChip below for active filter badges (production pattern).",
                    "Column alignment: right-align currency, center status columns.",
                    "onRowClick: navigate to detail views (e.g., click reservation → open detail).",
                  ]}
                  whenNotToUse={[
                    "Simple vertical lists without columns — use CanaryList + CanaryListItem",
                    "Key-value pairs — use a grid layout or CanaryCard",
                    "Editable data grids — this is display-only; build custom edit interactions",
                    "Very few items (1–3) — a simple card layout may be cleaner",
                  ]}
                />
                <CanaryTable
                  columns={tableColumns}
                  data={sampleTableData}
                  onRowClick={(row) => alert(`Clicked row: ${row.name}`)}
                />
                <CodeSnippet
                  code={`const columns = [
  { key: "id", label: "ID", width: "80px" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  {
    key: "role",
    label: "Role",
    render: (value) => <CanaryTag label={value} color={TagColor.INFO} />
  },
];

<CanaryTable
  columns={columns}
  data={data}
  onRowClick={(row) => alert(\`Clicked: \${row.name}\`)}
/>`}
                />
              </CanaryCard>
              )}

              {/* List Item */}
              {showComponent('canary-list') && (<>
              <CanaryCard title="CanaryListItem">
                <UsageNote
                  description="Flexible list item with structured layout: icon, title, subtitle, description, and left/right content areas."
                  whenToUse={[
                    "Inside CanaryList for consistent list rendering with borders between items.",
                    "title + subtitle + icon pattern. Production: F&B menu items (image in leftContent, name as title, modifiers+price as subtitle, quantity counter in rightContent).",
                    "onClick / href — clickable items that navigate to detail views or trigger actions",
                    "isDraggable — items in a reorderable list (pair with CanaryList isDraggable)",
                    "leftContent / rightContent — custom content areas (avatars on left, action buttons on right)",
                    "children — fully custom content that overrides the title/subtitle/icon structure",
                    "padding=\"compact\" — dense lists in sidebars or dropdown menus",
                    "isSelected — highlight the currently active item in a selection list",
                  ]}
                  whenNotToUse={[
                    "Table rows with columns — use CanaryTable with column definitions",
                    "Card-style grouped content — use CanaryCard",
                    "Outside of CanaryList — always wrap in CanaryList for proper borders and spacing",
                  ]}
                />
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Basic Usage</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem
                        title="Simple List Item"
                        subtitle="This is a subtitle"
                      />
                      <CanaryListItem
                        title="With Left Content"
                        leftContent={<Icon path={mdiAccount} size={1} />}
                        subtitle="Has an icon on the left"
                      />
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">With Left & Right Content</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem
                        leftContent={
                          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                            JD
                          </div>
                        }
                        title="John Doe"
                        subtitle="john.doe@example.com"
                        rightContent={
                          <CanaryButton type={ButtonType.OUTLINED} size={ButtonSize.COMPACT}>
                            View
                          </CanaryButton>
                        }
                      />
                      <CanaryListItem
                        leftContent={
                          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
                            JS
                          </div>
                        }
                        title="Jane Smith"
                        subtitle="jane.smith@example.com"
                        rightContent={
                          <CanaryTag label="Active" color={TagColor.SUCCESS} size={TagSize.COMPACT} />
                        }
                      />
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Clickable & Selected States</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem
                        title="Clickable Item"
                        subtitle="Click me"
                        onClick={() => alert('Item clicked!')}
                        leftContent={<Icon path={mdiCheckCircle} size={1} />}
                      />
                      <CanaryListItem
                        title="Selected Item"
                        subtitle="This item is selected"
                        isSelected={true}
                        leftContent={<Icon path={mdiCheckCircle} size={1} />}
                      />
                      <CanaryListItem
                        title="Link Item"
                        subtitle="I'm a link"
                        href="https://example.com"
                        target="_blank"
                        leftContent={<Icon path={mdiArrowRight} size={1} />}
                      />
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Non-Clickable Items</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem
                        title="Read-Only Item"
                        subtitle="No hover effect or cursor change"
                        isClickable={false}
                        leftContent={
                          <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-medium">
                            RO
                          </div>
                        }
                      />
                      <CanaryListItem
                        title="Display Only"
                        subtitle="Information display without interaction"
                        isClickable={false}
                        leftContent={<Icon path={mdiAccount} size={1} />}
                      />
                      <CanaryListItem
                        title="Static Content"
                        subtitle="No click handler"
                        isClickable={false}
                        rightContent={
                          <CanaryTag label="Disabled" color={TagColor.DEFAULT} size={TagSize.COMPACT} />
                        }
                      />
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Compact Padding</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem
                        padding="compact"
                        title="Compact Item 1"
                        subtitle="Less padding"
                      />
                      <CanaryListItem
                        padding="compact"
                        title="Compact Item 2"
                        subtitle="Less padding"
                      />
                      <CanaryListItem
                        padding="compact"
                        title="Compact Item 3"
                        subtitle="Less padding"
                      />
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Start Alignment</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem
                        alignment="start"
                        leftContent={
                          <div className="w-10 h-10 rounded-full bg-purple-500" />
                        }
                        title="Aligned to Start"
                        subtitle="This is aligned to the start"
                        rightContent={
                          <Icon path={mdiChevronDown} size={1} />
                        }
                      />
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">With Description Field</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem
                        leftContent={
                          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                            JD
                          </div>
                        }
                        title="John Doe"
                        subtitle="Product Manager"
                        description="This is additional description text"
                      />
                      <CanaryListItem
                        leftContent={
                          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
                            JS
                          </div>
                        }
                        title="Jane Smith"
                        subtitle="Software Engineer"
                        description="Another description here"
                        isSelected={true}
                      />
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">With Icon (Separate from Left Content)</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem
                        icon={<Icon path={mdiCheckCircle} size={1} />}
                        title="Verified Account"
                        subtitle="This has an icon before any left content"
                      />
                      <CanaryListItem
                        icon={<Icon path={mdiCheckCircle} size={1} />}
                        leftContent={
                          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium">
                            AB
                          </div>
                        }
                        title="Both Icon and Left Content"
                        subtitle="Icon renders first, then left content"
                      />
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Title with Badge (ReactNode)</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem
                        leftContent={
                          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                            VIP
                          </div>
                        }
                        title={
                          <div className="flex items-center gap-2">
                            <span>Premium User</span>
                            <CanaryTag label="VIP" color={TagColor.SUCCESS} size={TagSize.COMPACT} />
                          </div>
                        }
                        subtitle="Custom ReactNode in title with badge"
                      />
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Text Wrapping (Long Content)</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem
                        title="Really long test title that should push the limits and wraps and wraps to the next line when allowTextWrap is enabled"
                        subtitle="Really long test subtitle that should push the limits and wraps to the next line"
                        allowTextWrap={true}
                        leftContent={
                          <div className="w-10 h-10 rounded-full bg-orange-500" />
                        }
                      />
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Custom Children (Maximum Flexibility)</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem>
                        <div className="flex items-center gap-4 w-full">
                          <Icon path={mdiCogOutline} size={1.5} />
                          <div className="flex-1">
                            <div className="font-semibold text-lg">Custom Layout</div>
                            <div className="text-sm text-gray-500">Build any structure you want with children</div>
                          </div>
                          <div className="flex gap-2">
                            <CanaryButton type={ButtonType.OUTLINED} size={ButtonSize.COMPACT}>
                              <Icon path={mdiPencil} size={0.7} />
                            </CanaryButton>
                            <CanaryButton type={ButtonType.OUTLINED} size={ButtonSize.COMPACT} color={ButtonColor.DANGER}>
                              <Icon path={mdiDelete} size={0.7} />
                            </CanaryButton>
                          </div>
                        </div>
                      </CanaryListItem>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Draggable</h4>
                    <ul className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
                      <CanaryListItem
                        isDraggable={true}
                        title="Draggable Item 1"
                        subtitle="I can be dragged"
                      />
                      <CanaryListItem
                        isDraggable={true}
                        title="Draggable Item 2"
                        subtitle="I can be dragged too"
                      />
                    </ul>
                  </div>
                </div>
                <CodeSnippet
                  code={`// Basic usage
<CanaryListItem
  title="Simple List Item"
  subtitle="This is a subtitle"
/>

// With left content (icon or any component)
<CanaryListItem
  title="With Icon"
  subtitle="Subtitle text"
  leftContent={<Icon path={mdiAccount} size={1} />}
/>

// With left and right content
<CanaryListItem
  leftContent={<div className="w-10 h-10 rounded-full bg-blue-500" />}
  title="John Doe"
  subtitle="john.doe@example.com"
  rightContent={<CanaryButton>View</CanaryButton>}
/>

// Clickable
<CanaryListItem
  title="Click Me"
  onClick={() => alert('Clicked!')}
/>

// As a link
<CanaryListItem
  title="Link Item"
  href="https://example.com"
  target="_blank"
/>

// Non-clickable (no hover effect)
<CanaryListItem
  title="Read-Only Item"
  subtitle="Display only, no interaction"
  isClickable={false}
/>

// Selected state
<CanaryListItem
  title="Selected"
  isSelected={true}
/>

// Compact padding
<CanaryListItem
  padding="compact"
  title="Compact Item"
/>

// Start alignment
<CanaryListItem
  alignment="start"
  title="Aligned to Start"
  subtitle="For multi-line content"
/>

// With description field
<CanaryListItem
  title="John Doe"
  subtitle="Product Manager"
  description="Additional description text"
/>

// With icon (separate from leftContent)
<CanaryListItem
  icon={<Icon path={mdiCheckCircle} size={1} />}
  title="Verified Account"
  subtitle="Has icon before left content"
/>

// Title with badge (ReactNode)
<CanaryListItem
  title={
    <div className="flex items-center gap-2">
      <span>Premium User</span>
      <CanaryTag label="VIP" />
    </div>
  }
  subtitle="Custom content in title"
/>

// Text wrapping (no truncation)
<CanaryListItem
  title="Really long title that wraps to next line"
  subtitle="Really long subtitle that also wraps"
  allowTextWrap={true}
/>

// Draggable
<CanaryListItem
  isDraggable={true}
  title="Drag Me"
/>

// Maximum flexibility with children
<CanaryListItem>
  <div className="flex items-center gap-4 w-full">
    <Icon path={mdiCog} size={1.5} />
    <div className="flex-1">
      <div className="font-semibold">Custom Layout</div>
      <div>Build any structure you want</div>
    </div>
    <CanaryButton>Edit</CanaryButton>
  </div>
</CanaryListItem>`}
                />
              </CanaryCard>

              {/* CanaryList */}
              <CanaryCard title="CanaryList">
                <UsageNote
                  description="List container with built-in support for drag-and-drop reordering, loading, empty, and error states. Wraps CanaryListItem children."
                  whenToUse={[
                    "Static ordered lists: task lists, contact directories, settings sections, room lists",
                    "isDraggable + onReorder — reorderable lists with drag handles and smooth animations (uses @dnd-kit)",
                    "isLoading + loadingContent — show a custom loading state while fetching list data",
                    "isEmpty + emptyContent — show an empty state message when there are no items",
                    "hasError + errorContent — show an error state with retry option",
                    "hasOuterBorder — wrap the list in a visible border container",
                  ]}
                  whenNotToUse={[
                    "Tabular data with columns — use CanaryTable",
                    "Navigation menus — use CanarySidebar or CanaryTabs",
                    "Simple vertical stacking — use plain div with flexbox if you don't need list semantics or state handling",
                  ]}
                />
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Basic List with Bordered Container</h4>
                    <CanaryList hasOuterBorder={true}>
                      <CanaryListItem
                        title="First Item"
                        subtitle="This is in a CanaryList container"
                        leftContent={<Icon path={mdiAccountOutline} size={1} />}
                      />
                      <CanaryListItem
                        title="Second Item"
                        subtitle="The list handles borders and styling"
                        leftContent={<Icon path={mdiCheckCircleOutline} size={1} />}
                      />
                      <CanaryListItem
                        title="Third Item"
                        subtitle="Clean and organized"
                        leftContent={<Icon path={mdiCogOutline} size={1} />}
                      />
                    </CanaryList>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Draggable List (Try dragging items!)</h4>
                    <DraggableListExample />
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Selectable List (Click to select)</h4>
                    <SelectableListExample />
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Loading State</h4>
                    <CanaryList hasOuterBorder={true} isLoading={true} />
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Empty State</h4>
                    <CanaryList
                      hasOuterBorder={true}
                      isEmpty={true}
                      emptyContent={
                        <div className="flex flex-col items-center gap-2">
                          <Icon path={mdiInbox} size={2} color={colors.colorBlack4} />
                          <div className="text-sm font-medium" style={{ color: colors.colorBlack3 }}>No items found</div>
                          <div className="text-xs" style={{ color: colors.colorBlack4 }}>Try adding some items to get started</div>
                        </div>
                      }
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Error State</h4>
                    <CanaryList
                      hasOuterBorder={true}
                      hasError={true}
                      errorContent={
                        <div className="flex flex-col items-center gap-2">
                          <Icon path={mdiAlertCircleOutline} size={2} color={colors.colorRed1} />
                          <div className="text-sm font-medium" style={{ color: colors.colorRed1 }}>Failed to load items</div>
                          <CanaryButton type={ButtonType.OUTLINED} size={ButtonSize.COMPACT}>
                            Retry
                          </CanaryButton>
                        </div>
                      }
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">List without Border</h4>
                    <CanaryList>
                      <CanaryListItem
                        title="Item 1"
                        subtitle="No outer border"
                      />
                      <CanaryListItem
                        title="Item 2"
                        subtitle="Items still have separators"
                      />
                    </CanaryList>
                  </div>
                </div>
                <CodeSnippet
                  code={`// Basic list with bordered container
<CanaryList hasOuterBorder={true}>
  <CanaryListItem
    title="First Item"
    subtitle="Description"
  />
  <CanaryListItem
    title="Second Item"
    subtitle="Description"
  />
</CanaryList>

// Draggable list with reordering
const [items, setItems] = useState([
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' }
]);

<CanaryList
  hasOuterBorder={true}
  isDraggable={true}
  items={items}
  onReorder={setItems}
>
  {items.map((item) => (
    <CanaryListItem
      key={item.id}
      isDraggable={true}
      title={item.title}
    />
  ))}
</CanaryList>

// Loading state
<CanaryList
  hasOuterBorder={true}
  isLoading={true}
/>

// Empty state with custom content
<CanaryList
  hasOuterBorder={true}
  isEmpty={true}
  emptyContent={
    <div>
      <p>No items found</p>
      <button>Add Item</button>
    </div>
  }
/>

// Error state with custom content
<CanaryList
  hasOuterBorder={true}
  hasError={true}
  errorContent={
    <div>
      <p>Failed to load</p>
      <button>Retry</button>
    </div>
  }
/>

// List without outer border
<CanaryList>
  <CanaryListItem title="Item 1" />
  <CanaryListItem title="Item 2" />
</CanaryList>`}
                />
              </CanaryCard>
              </>)}
            </div>
          </Section>
          )}

          {isInSection("layout") && (
          <Section title="Layout & Navigation" id="layout">
            {showComponent('canary-tabs') && (<>
            <CanaryCard title="CanaryTabs - Rounded Variant">
              <UsageNote
                description="Tab navigation with multiple visual variants. Each tab can have an icon, a badge count, and a disabled state."
                whenToUse={[
                  "variant=\"text\" — standard underlined tabs for page sections. Production: reservation detail sections, settings pages.",
                  "variant=\"rounded\" — pill-style filter/mode tabs. Production: kiosk membership lookup switching between Email and App methods.",
                  "variant=\"segmented\" — bordered toggle for 2–4 views (Day/Week/Month, Grid/List).",
                  "variant=\"text-checkbox\" — tabs with checkboxes for enabling/disabling sections while navigating.",
                  "badge prop — dynamic notification counts. Production: Pending order count (Pending (3)), unread messages. Tabs auto-show badge with pink background.",
                  "Production pattern: tabs with two rows for status filtering — Pending / In Progress / Processed / Canceled / All — each with live badge counts.",
                ]}
                whenNotToUse={[
                  "App-level navigation — use CanarySidebar via CanaryAppShell",
                  "Selecting a form value — use CanarySegmentedControl (form-oriented) or CanaryRadioGroup",
                  "More than 6–8 tabs — consider CanarySelect or a sidebar with sections",
                ]}
              />
              <CanaryTabs
                variant="rounded"
                tabs={[
                  { id: "tab1", label: "Overview", content: <p>Overview content goes here</p> },
                  { id: "tab2", label: "Settings", content: <p>Settings content goes here</p> },
                  { id: "tab3", label: "Users", content: <p>Users content goes here</p> },
                ]}
              />
              <CodeSnippet
                code={`<CanaryTabs
  variant="rounded"
  tabs={[
    { id: "tab1", label: "Overview", content: <p>Overview content</p> },
    { id: "tab2", label: "Settings", content: <p>Settings content</p> },
    { id: "tab3", label: "Users", content: <p>Users content</p> },
  ]}
/>`}
              />
            </CanaryCard>

            <div className="mt-6">
              <CanaryCard title="CanaryTabs - Text Variant (Normal)">
                <CanaryTabs
                  variant="text"
                  size="normal"
                  tabs={[
                    { id: "tab1", label: "Overview", content: <p>Overview content goes here</p> },
                    { id: "tab2", label: "Analytics", badge: 3, content: <p>Analytics content with badge</p> },
                    { id: "tab3", label: "Settings", content: <p>Settings content goes here</p> },
                  ]}
                />
                <CodeSnippet
                  code={`<CanaryTabs
  variant="text"
  size="normal"
  tabs={[
    { id: "tab1", label: "Overview", content: <p>Overview content</p> },
    { id: "tab2", label: "Analytics", badge: 3, content: <p>Analytics content</p> },
    { id: "tab3", label: "Settings", content: <p>Settings content</p> },
  ]}
/>`}
                />
              </CanaryCard>
            </div>

            <div className="mt-6">
              <CanaryCard title="CanaryTabs - Text Variant (Compact)">
                <CanaryTabs
                  variant="text"
                  size="compact"
                  tabs={[
                    { id: "tab1", label: "Overview", content: <p>Overview content goes here</p> },
                    { id: "tab2", label: "Analytics", badge: 3, content: <p>Analytics content with badge</p> },
                    { id: "tab3", label: "Settings", content: <p>Settings content goes here</p> },
                  ]}
                />
                <CodeSnippet
                  code={`<CanaryTabs
  variant="text"
  size="compact"
  tabs={[
    { id: "tab1", label: "Overview", content: <p>Overview content</p> },
    { id: "tab2", label: "Analytics", badge: 3, content: <p>Analytics content</p> },
    { id: "tab3", label: "Settings", content: <p>Settings content</p> },
  ]}
/>`}
                />
              </CanaryCard>
            </div>

            <div className="mt-6">
              <CanaryCard title="CanaryTabs - Segmented Variant (Normal)">
                <CanaryTabs
                  variant="segmented"
                  size="normal"
                  tabs={[
                    { id: "tab1", label: "Dashboard", content: <p>Dashboard content goes here</p> },
                    { id: "tab2", label: "Analytics", content: <p>Analytics content goes here</p> },
                    { id: "tab3", label: "Reports", content: <p>Reports content goes here</p> },
                    { id: "tab4", label: "Settings", content: <p>Settings content goes here</p> },
                  ]}
                />
                <CodeSnippet
                  code={`<CanaryTabs
  variant="segmented"
  size="normal"
  tabs={[
    { id: "tab1", label: "Dashboard", content: <p>Dashboard content</p> },
    { id: "tab2", label: "Analytics", content: <p>Analytics content</p> },
    { id: "tab3", label: "Reports", content: <p>Reports content</p> },
    { id: "tab4", label: "Settings", content: <p>Settings content</p> },
  ]}
/>`}
                />
              </CanaryCard>
            </div>

            <div className="mt-6">
              <CanaryCard title="CanaryTabs - Segmented Variant (Compact)">
                <CanaryTabs
                  variant="segmented"
                  size="compact"
                  tabs={[
                    { id: "tab1", label: "Dashboard", content: <p>Dashboard content goes here</p> },
                    { id: "tab2", label: "Analytics", content: <p>Analytics content goes here</p> },
                    { id: "tab3", label: "Reports", content: <p>Reports content goes here</p> },
                    { id: "tab4", label: "Settings", content: <p>Settings content goes here</p> },
                  ]}
                />
                <CodeSnippet
                  code={`<CanaryTabs
  variant="segmented"
  size="compact"
  tabs={[
    { id: "tab1", label: "Dashboard", content: <p>Dashboard content</p> },
    { id: "tab2", label: "Analytics", content: <p>Analytics content</p> },
    { id: "tab3", label: "Reports", content: <p>Reports content</p> },
    { id: "tab4", label: "Settings", content: <p>Settings content</p> },
  ]}
/>`}
                />
              </CanaryCard>
            </div>

            <div className="mt-6">
              <CanaryCard title="CanaryTabs - Text-Checkbox Variant">
                <TextCheckboxTabsDemo />
                <CodeSnippet
                  code={`const [channels, setChannels] = useState({
  email: true, sms: true, whatsapp: false, booking: true, expedia: false,
});

<CanaryTabs
  variant="text-checkbox"
  tabs={[
    { id: "email", label: "Email", checked: channels.email, content: <p>Email content</p> },
    { id: "sms", label: "SMS", checked: channels.sms, content: <p>SMS content</p> },
    { id: "whatsapp", label: "WhatsApp", checked: channels.whatsapp, content: <p>WhatsApp content</p> },
  ]}
  onCheckboxChange={(tabId, checked) =>
    setChannels((prev) => ({ ...prev, [tabId]: checked }))
  }
/>`}
                />
              </CanaryCard>
            </div>
            </>)}

            {showComponent('canary-sidebar') && (<>
            <div className="mt-6">
              <CanaryCard title="CanarySidebar - Main Variant">
                <UsageNote
                  description="Side navigation panel with pre-built sections for Canary product navigation. Usually accessed via CanaryAppShell rather than directly."
                  whenToUse={["Custom layouts that need a sidebar without CanaryAppShell"]}
                  whenNotToUse={["Most prototypes — use CanaryAppShell instead (includes sidebar automatically)"]}
                />
                <p className="text-sm text-gray-600 mb-4">
                  A navigation sidebar with two variants: Main (blue) and Settings (dark gray).
                  Supports sections, icons, badges, and interactive states (default, selected, focus, onPress, disabled).
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Main Variant */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Main Variant</h4>
                    <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "900px" }}>
                      <CanarySidebar
                        variant={SidebarVariant.MAIN}
                        logo={
                          <img
                            src="/canary-logo.png"
                            alt="Canary Technologies"
                            className="w-full h-full object-contain brightness-0 invert"
                          />
                        }
                        selectedItemId={selectedMainSidebarItem}
                        onItemClick={setSelectedMainSidebarItem}
                        sections={[
                          {
                            id: "main-section",
                            items: [
                              {
                                id: "upsells",
                                label: "Upsells",
                                icon: (
                                  <img
                                    src="/upsells-icon.svg"
                                    alt="Upsells"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "check-in",
                                label: "Check-in",
                                icon: <Icon path={mdiLogin} size={1} />,
                              },
                              {
                                id: "checkout",
                                label: "Checkout",
                                icon: <Icon path={mdiLogout} size={1} />,
                              },
                              {
                                id: "messages",
                                label: "Messages",
                                icon: <Icon path={mdiMessageProcessingOutline} size={1} />,
                              },
                              {
                                id: "calls",
                                label: "Calls",
                                icon: <Icon path={mdiPhoneOutline} size={1} />,
                              },
                              {
                                id: "digital-tips",
                                label: "Digital Tips",
                                icon: (
                                  <img
                                    src="/digital-tips-icon.svg"
                                    alt="Digital Tips"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                            ],
                          },
                          {
                            id: "secondary-section",
                            items: [
                              {
                                id: "authorizations",
                                label: "Authorizations",
                                icon: (
                                  <img
                                    src="/authorizations-icon.svg"
                                    alt="Authorizations"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "contracts",
                                label: "Contracts",
                                icon: (
                                  <img
                                    src="/contracts-icon.svg"
                                    alt="Contracts"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "guest-verification",
                                label: "Guest Verification",
                                icon: <Icon path={mdiAccountCheckOutline} size={1} />,
                              },
                              {
                                id: "clients-on-file",
                                label: "Clients on File",
                                icon: (
                                  <img
                                    src="/clients-on-file-icon.svg"
                                    alt="Clients on File"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "amenities",
                                label: "Amenities",
                                icon: (
                                  <img
                                    src="/amenities-icon.svg"
                                    alt="Amenities"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "payment-links",
                                label: "Payment Links",
                                icon: <Icon path={mdiCreditCardOutline} size={1} />,
                              },
                            ],
                          },
                          {
                            id: "bottom-section",
                            items: [
                              {
                                id: "settings",
                                label: "Settings",
                                icon: <Icon path={mdiCogOutline} size={1} />,
                              },
                            ],
                          },
                        ]}
                      />
                    </div>
                  </div>

                  {/* Settings Variant */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Settings Variant</h4>
                    <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "900px" }}>
                      <CanarySidebar
                        variant={SidebarVariant.SETTINGS}
                        selectedItemId={selectedSettingsSidebarItem}
                        onItemClick={setSelectedSettingsSidebarItem}
                        sections={[
                          {
                            id: "general-settings-section",
                            title: "General Settings",
                            items: [
                              {
                                id: "property-info",
                                label: "Property Info",
                                icon: <Icon path={mdiHomeOutline} size={1} />,
                              },
                              {
                                id: "branding",
                                label: "Branding",
                                icon: <Icon path={mdiPaletteOutline} size={1} />,
                              },
                              {
                                id: "billing-payment",
                                label: "Billing & Payment",
                                icon: <Icon path={mdiCreditCardOutline} size={1} />,
                              },
                              {
                                id: "staff-members",
                                label: "Staff Members",
                                icon: <Icon path={mdiAccountGroupOutline} size={1} />,
                              },
                              {
                                id: "security",
                                label: "Security",
                                icon: <Icon path={mdiShieldCheckOutline} size={1} />,
                              },
                              {
                                id: "integrations",
                                label: "Integrations",
                                icon: <Icon path={mdiPuzzleOutline} size={1} />,
                              },
                              {
                                id: "devices",
                                label: "Devices",
                                icon: <Icon path={mdiTabletCellphone} size={1} />,
                              },
                            ],
                          },
                          {
                            id: "product-settings-section",
                            title: "Product Settings",
                            items: [
                              {
                                id: "compendium",
                                label: "Compendium",
                                icon: <Icon path={mdiNewspaperVariantOutline} size={1} />,
                              },
                              {
                                id: "guest-journey",
                                label: "Guest Journey",
                                icon: <Icon path={mdiMapMarker} size={1} />,
                              },
                              {
                                id: "upsells-settings",
                                label: "Upsells",
                                icon: (
                                  <img
                                    src="/upsells-icon.svg"
                                    alt="Upsells"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "check-in-settings",
                                label: "Check-in",
                                icon: <Icon path={mdiLogin} size={1} />,
                              },
                              {
                                id: "checkout-settings",
                                label: "Checkout",
                                icon: <Icon path={mdiLogout} size={1} />,
                              },
                              {
                                id: "messages-settings",
                                label: "Messages",
                                icon: <Icon path={mdiMessageProcessingOutline} size={1} />,
                              },
                              {
                                id: "calls-settings",
                                label: "Calls",
                                icon: <Icon path={mdiPhoneOutline} size={1} />,
                              },
                              {
                                id: "authorizations-settings",
                                label: "Authorizations",
                                icon: (
                                  <img
                                    src="/authorizations-icon.svg"
                                    alt="Authorizations"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "digital-tips-settings",
                                label: "Digital Tips",
                                icon: (
                                  <img
                                    src="/digital-tips-icon.svg"
                                    alt="Digital Tips"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "contracts-settings",
                                label: "Contracts",
                                icon: (
                                  <img
                                    src="/contracts-icon.svg"
                                    alt="Contracts"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "payment-links-settings",
                                label: "Payment Links",
                                icon: <Icon path={mdiCreditCardOutline} size={1} />,
                              },
                            ],
                          },
                        ]}
                        backButton={
                          <CanaryButton
                            type={ButtonType.TEXT}
                            color={ButtonColor.WHITE}
                            icon={<Icon path={mdiArrowLeft} size={1} />}
                            iconPosition={IconPosition.LEFT}
                            onClick={() => console.log("Back clicked")}
                          >
                            Back
                          </CanaryButton>
                        }
                      />
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  code={`// Main Variant
<CanarySidebar
  variant={SidebarVariant.MAIN}
  logo={<div className="text-white text-xl font-bold">LOGO</div>}
  selectedItemId={selectedItemId}
  onItemClick={setSelectedItemId}
  sections={[
    {
      id: "main",
      items: [
        { id: "home", label: "Home", icon: <Icon path={mdiHome} size={1} /> },
        { id: "analytics", label: "Analytics", icon: <Icon path={mdiChartBar} size={1} />, badge: 5 },
      ],
    },
  ]}
/>

// Settings Variant
<CanarySidebar
  variant={SidebarVariant.SETTINGS}
  logo={<img src="/canary-logo.png" alt="Logo" />}
  title="General Settings"
  selectedItemId={selectedItemId}
  onItemClick={setSelectedItemId}
  sections={[
    {
      id: "general-settings",
      title: "General Settings",
      items: [
        { id: "property-info", label: "Property Info", icon: <Icon path={mdiHome} size={1} /> },
        { id: "security", label: "Security", icon: <Icon path={mdiShield} size={1} /> },
      ],
    },
  ]}
  backButton={
    <CanaryButton
      type={ButtonType.TEXT}
      color={ButtonColor.WHITE}
      icon={<Icon path={mdiArrowLeft} size={1} />}
      iconPosition={IconPosition.LEFT}
    >
      Back
    </CanaryButton>
  }
/>`}
                />
              </CanaryCard>
            </div>

            <div className="mt-6">
              <CanaryCard title="Sidebar States Demo">
                <p className="text-sm text-gray-600 mb-4">
                  Compare different states: Default (no badges), Selected item, and With Notifications (badges enabled on items).
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Default State - No Badges */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-center">Default State</h4>
                    <p className="text-xs text-gray-500 mb-3 text-center">No badges, no selection</p>
                    <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "600px" }}>
                      <CanarySidebar
                        variant={SidebarVariant.MAIN}
                        logo={
                          <img
                            src="/canary-logo.png"
                            alt="Canary Technologies"
                            className="w-full h-full object-contain brightness-0 invert"
                          />
                        }
                        sections={[
                          {
                            id: "main-section-default",
                            items: [
                              {
                                id: "upsells-default",
                                label: "Upsells",
                                icon: (
                                  <img
                                    src="/upsells-icon.svg"
                                    alt="Upsells"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "check-in-default",
                                label: "Check-in",
                                icon: <Icon path={mdiLogin} size={1} />,
                              },
                              {
                                id: "checkout-default",
                                label: "Checkout",
                                icon: <Icon path={mdiLogout} size={1} />,
                              },
                              {
                                id: "messages-default",
                                label: "Messages",
                                icon: <Icon path={mdiMessageProcessingOutline} size={1} />,
                              },
                              {
                                id: "calls-default",
                                label: "Calls",
                                icon: <Icon path={mdiPhoneOutline} size={1} />,
                              },
                              {
                                id: "digital-tips-default",
                                label: "Digital Tips",
                                icon: (
                                  <img
                                    src="/digital-tips-icon.svg"
                                    alt="Digital Tips"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                            ],
                          },
                          {
                            id: "secondary-section-default",
                            items: [
                              {
                                id: "authorizations-default",
                                label: "Authorizations",
                                icon: (
                                  <img
                                    src="/authorizations-icon.svg"
                                    alt="Authorizations"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "settings-default",
                                label: "Settings",
                                icon: <Icon path={mdiCogOutline} size={1} />,
                              },
                            ],
                          },
                        ]}
                      />
                    </div>
                  </div>

                  {/* Selected State - With Selection */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-center">Selected State</h4>
                    <p className="text-xs text-gray-500 mb-3 text-center">Item selected, no badges</p>
                    <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "600px" }}>
                      <CanarySidebar
                        variant={SidebarVariant.MAIN}
                        logo={
                          <img
                            src="/canary-logo.png"
                            alt="Canary Technologies"
                            className="w-full h-full object-contain brightness-0 invert"
                          />
                        }
                        selectedItemId="messages-selected"
                        sections={[
                          {
                            id: "main-section-selected",
                            items: [
                              {
                                id: "upsells-selected",
                                label: "Upsells",
                                icon: (
                                  <img
                                    src="/upsells-icon.svg"
                                    alt="Upsells"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "check-in-selected",
                                label: "Check-in",
                                icon: <Icon path={mdiLogin} size={1} />,
                              },
                              {
                                id: "checkout-selected",
                                label: "Checkout",
                                icon: <Icon path={mdiLogout} size={1} />,
                              },
                              {
                                id: "messages-selected",
                                label: "Messages",
                                icon: <Icon path={mdiMessageProcessingOutline} size={1} />,
                              },
                              {
                                id: "calls-selected",
                                label: "Calls",
                                icon: <Icon path={mdiPhoneOutline} size={1} />,
                              },
                              {
                                id: "digital-tips-selected",
                                label: "Digital Tips",
                                icon: (
                                  <img
                                    src="/digital-tips-icon.svg"
                                    alt="Digital Tips"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                            ],
                          },
                          {
                            id: "secondary-section-selected",
                            items: [
                              {
                                id: "authorizations-selected",
                                label: "Authorizations",
                                icon: (
                                  <img
                                    src="/authorizations-icon.svg"
                                    alt="Authorizations"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "settings-selected",
                                label: "Settings",
                                icon: <Icon path={mdiCogOutline} size={1} />,
                              },
                            ],
                          },
                        ]}
                      />
                    </div>
                  </div>

                  {/* With Notifications - Badges Enabled */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-center">With Notifications</h4>
                    <p className="text-xs text-gray-500 mb-3 text-center">Badges visible on items</p>
                    <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "600px" }}>
                      <CanarySidebar
                        variant={SidebarVariant.MAIN}
                        logo={
                          <img
                            src="/canary-logo.png"
                            alt="Canary Technologies"
                            className="w-full h-full object-contain brightness-0 invert"
                          />
                        }
                        selectedItemId="upsells-notifications"
                        sections={[
                          {
                            id: "main-section-notifications",
                            items: [
                              {
                                id: "upsells-notifications",
                                label: "Upsells",
                                icon: (
                                  <img
                                    src="/upsells-icon.svg"
                                    alt="Upsells"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                                badge: 4,
                              },
                              {
                                id: "check-in-notifications",
                                label: "Check-in",
                                icon: <Icon path={mdiLogin} size={1} />,
                                badge: 4,
                              },
                              {
                                id: "checkout-notifications",
                                label: "Checkout",
                                icon: <Icon path={mdiLogout} size={1} />,
                                badge: 2,
                              },
                              {
                                id: "messages-notifications",
                                label: "Messages",
                                icon: <Icon path={mdiMessageProcessingOutline} size={1} />,
                                badge: 7,
                              },
                              {
                                id: "calls-notifications",
                                label: "Calls",
                                icon: <Icon path={mdiPhoneOutline} size={1} />,
                                badge: 3,
                              },
                              {
                                id: "digital-tips-notifications",
                                label: "Digital Tips",
                                icon: (
                                  <img
                                    src="/digital-tips-icon.svg"
                                    alt="Digital Tips"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                                badge: 5,
                              },
                            ],
                          },
                          {
                            id: "secondary-section-notifications",
                            items: [
                              {
                                id: "authorizations-notifications",
                                label: "Authorizations",
                                icon: (
                                  <img
                                    src="/authorizations-icon.svg"
                                    alt="Authorizations"
                                    className="w-6 h-6 sidebar-icon"
                                  />
                                ),
                              },
                              {
                                id: "settings-notifications",
                                label: "Settings",
                                icon: <Icon path={mdiCogOutline} size={1} />,
                              },
                            ],
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  code={`// Default State - No badges
<CanarySidebar
  variant={SidebarVariant.MAIN}
  sections={[
    {
      id: "main",
      items: [
        { id: "upsells", label: "Upsells", icon: <Icon path={mdiTrendingUp} size={1} /> },
        { id: "messages", label: "Messages", icon: <Icon path={mdiMessage} size={1} /> },
      ],
    },
  ]}
/>

// Selected State - Item selected, no badges
<CanarySidebar
  variant={SidebarVariant.MAIN}
  selectedItemId="messages"
  sections={[
    {
      id: "main",
      items: [
        { id: "upsells", label: "Upsells", icon: <Icon path={mdiTrendingUp} size={1} /> },
        { id: "messages", label: "Messages", icon: <Icon path={mdiMessage} size={1} /> },
      ],
    },
  ]}
/>

// With Notifications - Badges enabled
<CanarySidebar
  variant={SidebarVariant.MAIN}
  selectedItemId="upsells"
  sections={[
    {
      id: "main",
      items: [
        { id: "upsells", label: "Upsells", icon: <Icon path={mdiTrendingUp} size={1} />, badge: 4 },
        { id: "messages", label: "Messages", icon: <Icon path={mdiMessage} size={1} />, badge: 7 },
        { id: "check-in", label: "Check-in", icon: <Icon path={mdiLogin} size={1} />, badge: 4 },
        { id: "checkout", label: "Checkout", icon: <Icon path={mdiLogout} size={1} />, badge: 2 },
        { id: "calls", label: "Calls", icon: <Icon path={mdiPhone} size={1} />, badge: 3 },
        { id: "digital-tips", label: "Digital Tips", icon: <Icon path={mdiCurrencyUsd} size={1} />, badge: 5 },
      ],
    },
  ]}
/>`}
                />
              </CanaryCard>
            </div>

            <div className="mt-6">
              <CanaryCard title="Flexible Sidebar System - Custom Hotel Scenarios">
                <p className="text-sm text-gray-600 mb-6">
                  The flexible sidebar system allows teams to create custom sidebars for different customer scenarios. 
                  Here are examples showing how hotels might customize their dashboard beyond standard Canary products.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Basic Package - Minimal */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-center">Basic Package</h4>
                    <p className="text-xs text-gray-500 mb-3 text-center">Small hotel, limited products</p>
                    <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "400px" }}>
                      <CanarySidebar
                        variant={SidebarVariant.MAIN}
                        sections={hideProducts(standardMainSidebarSections, ['calls', 'digital-tips', 'authorizations', 'contracts', 'amenities', 'payment-links'])}
                      />
                    </div>
                  </div>

                  {/* Hotel Operations Dashboard */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-center">Hotel Operations</h4>
                    <p className="text-xs text-gray-500 mb-3 text-center">Property management focused</p>
                    <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "400px" }}>
                      <CanarySidebar
                        variant={SidebarVariant.CUSTOM}
                        sections={[
                          createCustomSection([
                            sidebarTabs.checkIn,
                            sidebarTabs.checkout,
                            { ...createSidebarTab('rooms', 'Room Mgmt', <Icon path={mdiDoorOpen} size={1} />), badge: 3 },
                            { ...createSidebarTab('housekeeping', 'Housekeeping', <Icon path={mdiSprayBottle} size={1} />), badge: 7 },
                            createSidebarTab('maintenance', 'Maintenance', <Icon path={mdiWrench} size={1} />),
                            createSidebarTab('staff', 'Staff Schedule', <Icon path={mdiCalendarClock} size={1} />),
                          ], { id: 'operations' }),
                          createCustomSection([
                            sidebarTabs.settings,
                          ], { id: 'settings' })
                        ]}
                      />
                    </div>
                  </div>

                  {/* Corporate Dashboard */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-center">Corporate Dashboard</h4>
                    <p className="text-xs text-gray-500 mb-3 text-center">Above-property management</p>
                    <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "400px" }}>
                      <CanarySidebar
                        variant={SidebarVariant.CUSTOM}
                        sections={[
                          createCustomSection([
                            sidebarTabs.dashboard,
                            sidebarTabs.properties,
                            sidebarTabs.analytics,
                            createSidebarTab('revenue', 'Revenue Mgmt', <Icon path={mdiCashMultiple} size={1} />),
                            createSidebarTab('guests', 'Guest Insights', <Icon path={mdiAccountGroupOutline} size={1} />),
                            createSidebarTab('events', 'Events & Catering', <Icon path={mdiPartyPopper} size={1} />),
                          ], { id: 'corporate' })
                        ]}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-3">Extended Hotel Operations Example</h4>
                  <p className="text-xs text-gray-500 mb-3">Full-featured hotel with comprehensive operations dashboard</p>
                  <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "600px" }}>
                    <CanarySidebar
                      variant={SidebarVariant.CUSTOM}
                      sections={[
                        createCustomSection([
                          sidebarTabs.dashboard,
                          sidebarTabs.upsells,
                          sidebarTabs.checkIn,
                          sidebarTabs.checkout,
                        ], { id: 'guest-services', title: 'Guest Services' }),
                        createCustomSection([
                          { ...createSidebarTab('rooms', 'Room Mgmt', <Icon path={mdiDoorOpen} size={1} />), badge: 2 },
                          { ...createSidebarTab('housekeeping', 'Housekeeping', <Icon path={mdiSprayBottle} size={1} />), badge: 5 },
                          createSidebarTab('maintenance', 'Maintenance', <Icon path={mdiWrench} size={1} />),
                          createSidebarTab('inventory', 'Inventory', <Icon path={mdiPackageVariant} size={1} />),
                        ], { id: 'operations', title: 'Operations' }),
                        createCustomSection([
                          createSidebarTab('staff', 'Staff Schedule', <Icon path={mdiCalendarClock} size={1} />),
                          createSidebarTab('feedback', 'Guest Feedback', <Icon path={mdiCommentTextOutline} size={1} />),
                          createSidebarTab('concierge', 'Concierge', <Icon path={mdiBellOutline} size={1} />),
                          createSidebarTab('events', 'Events & Catering', <Icon path={mdiPartyPopper} size={1} />),
                        ], { id: 'services', title: 'Services' }),
                        createCustomSection([
                          sidebarTabs.reports,
                          sidebarTabs.settings,
                        ], { id: 'admin', title: 'Administration' })
                      ]}
                    />
                  </div>
                </div>

                <CodeSnippet
                  code={`// Basic Package - Hide products customer didn't purchase
import { hideProducts, standardMainSidebarSections } from '@canary-ui/components';

const basicSections = hideProducts(
  standardMainSidebarSections, 
  ['calls', 'digital-tips', 'authorizations', 'contracts']
);

<CanarySidebar sections={basicSections} />

// Custom Hotel Operations - Using lego pieces + custom tabs
import { sidebarTabs, createSidebarTab, createCustomSection } from '@canary-ui/components';

const hotelSections = [
  createCustomSection([
    sidebarTabs.checkIn,
    sidebarTabs.checkout,
    createSidebarTab('rooms', 'Room Mgmt', <Icon path={mdiDoor} />),
    createSidebarTab('housekeeping', 'Housekeeping', <Icon path={mdiSpray} />),
  ])
];

<CanarySidebar variant={SidebarVariant.CUSTOM} sections={hotelSections} />

// Corporate Dashboard - Above-property management
const corporateSections = [
  createCustomSection([
    sidebarTabs.dashboard,
    sidebarTabs.properties,
    sidebarTabs.analytics,
    createSidebarTab('revenue', 'Revenue Mgmt', <Icon path={mdiCash} />),
  ])
];

<CanarySidebar variant={SidebarVariant.CUSTOM} sections={corporateSections} />`}
                />
              </CanaryCard>
            </div>
            </>)}

            {showComponent('canary-modal') && (
            <div className="mt-6">
              <CanaryCard title="CanaryModal">
                <UsageNote
                  description="Fixed-position modal dialog with overlay, title bar, and optional footer. Handles ESC key, overlay click, and prevents body scrolling."
                  whenToUse={[
                    "size=\"small\" — simple confirmations (\"Delete this guest?\"), quick actions",
                    "size=\"medium\" — forms and detail views (default). Production: creating demo hotels (inputs + selects), PCI session re-auth (password input).",
                    "size=\"large\" — complex forms. Production: advanced reservation filters (date ranges + statuses + room types), payment schedule config.",
                    "size=\"full\" — fullscreen takeover for immersive experiences or mobile views",
                    "footer prop — place Save/Cancel buttons. Production pattern: primary button right-aligned, outlined cancel left.",
                    "closeOnOverlayClick={false} — prevent accidental dismissal for forms with unsaved changes",
                  ]}
                  whenNotToUse={[
                    "Full-page forms — navigate to a new page instead",
                    "Inline messages — use CanaryAlert for persistent in-page feedback",
                    "Temporary notifications — use CanaryToast for auto-dismissing messages",
                    "Side panels — use CanaryModal with size=\"large\" as an alternative (no drawer component)",
                  ]}
                />
                <CanaryButton onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </CanaryButton>

                <CanaryModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title="Example Modal"
                  footer={
                    <div className="flex justify-end gap-3">
                      <CanaryButton type={ButtonType.OUTLINED} onClick={() => setIsModalOpen(false)}>
                        Cancel
                      </CanaryButton>
                      <CanaryButton onClick={() => setIsModalOpen(false)}>
                        Confirm
                      </CanaryButton>
                    </div>
                  }
                >
                  <p className="text-gray-600">
                    This is an example modal dialog. It can contain any content you need,
                    including forms, images, or other components.
                  </p>
                </CanaryModal>

                <CodeSnippet
                  code={`const [isOpen, setIsOpen] = useState(false);

<CanaryButton onClick={() => setIsOpen(true)}>
  Open Modal
</CanaryButton>

<CanaryModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Example Modal"
  footer={
    <div className="flex justify-end gap-3">
      <CanaryButton type={ButtonType.OUTLINED} onClick={() => setIsOpen(false)}>
        Cancel
      </CanaryButton>
      <CanaryButton onClick={() => setIsOpen(false)}>
        Confirm
      </CanaryButton>
    </div>
  }
>
  <p>Modal content goes here</p>
</CanaryModal>`}
                />
              </CanaryCard>
            </div>
            )}
          </Section>
          )}

          {isInSection("app-shell") && (
          <Section title="App Shell & Scaffolding" id="app-shell">
            <div className="space-y-6">
              {showComponent('canary-page-header') && (
              <CanaryCard title="CanaryPageHeader">
                <UsageNote
                  description="Content-area page header with a title and optional action buttons. Use at the top of every main content page."
                  whenToUse={["Top of any page content area to label the current page", "When you need page-level action buttons alongside the title"]}
                  whenNotToUse={["Inside modals or cards — those have their own title patterns", "Guest-facing screens — typically no page header"]}
                />

                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <CanaryPageHeader
                    title="Contracts"
                    actions={
                      <CanaryButton type={ButtonType.OUTLINED}>
                        Publish changes
                      </CanaryButton>
                    }
                  />
                </div>

                <h4 className="text-sm font-semibold mb-2 mt-6">Title only</h4>
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <CanaryPageHeader title="Reservations" />
                </div>

                <CodeSnippet
                  code={`import { CanaryPageHeader } from '@canary-ui/components';

<CanaryPageHeader
  title="Contracts"
  actions={<CanaryButton>Publish changes</CanaryButton>}
/>`}
                />
              </CanaryCard>
              )}

              {showComponent('canary-app-shell') && (
              <CanaryCard title="CanaryAppShell">
                <UsageNote
                  description="RECOMMENDED — Complete application scaffolding combining sidebar, page header, and content area. This should be your first component for any prototype."
                  whenToUse={[
                    "SidebarVariant.MAIN — standard Canary product with pre-built navigation (Check-in, Messages, Upsells, etc.)",
                    "SidebarVariant.SETTINGS — settings pages with General/Product sections and a back button",
                    "SidebarVariant.CUSTOM — custom dashboards with your own sidebar sections using sidebarTabs and createCustomSection",
                    "contentPadding=\"none\" — edge-to-edge content (full-bleed tables, maps)",
                    "contentPadding=\"medium\" — standard page content with comfortable margins (default)",
                    "hideSidebar / hideHeader — temporarily hide for focused views like onboarding",
                    "headerActions — add custom buttons/controls to the right side of the header",
                  ]}
                  whenNotToUse={[
                    "Guest-facing pages (check-in flows, surveys) — use CanaryContainer with plain layout",
                    "Login/authentication screens — use a centered layout without sidebar",
                    "Fullscreen or embedded views — use CanaryContainer or plain layout",
                  ]}
                />
                <p className="text-sm text-gray-600 mb-4">
                  Complete application scaffolding that combines sidebar, page header, and content area.
                  This is the recommended starting point for building Canary prototypes.
                </p>

                <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "500px" }}>
                  <CanaryAppShell
                    pageTitle="Dashboard"
                    onSidebarItemClick={(id) => alert(`Clicked: ${id}`)}
                    contentPadding="medium"
                  >
                    <div className="space-y-4">
                      <CanaryCard title="Dashboard">
                        <p className="text-gray-600">
                          Your page content goes here. The CanaryAppShell provides the complete
                          application frame with sidebar and header already configured.
                        </p>
                      </CanaryCard>
                      <div className="grid grid-cols-3 gap-4">
                        <CanaryCard title="Check-ins Today">
                          <p className="text-3xl font-bold" style={{ color: colors.colorBlueDark1 }}>24</p>
                        </CanaryCard>
                        <CanaryCard title="Checkouts Today">
                          <p className="text-3xl font-bold" style={{ color: colors.colorLightGreen1 }}>18</p>
                        </CanaryCard>
                        <CanaryCard title="Messages">
                          <p className="text-3xl font-bold" style={{ color: colors.colorWheat1 }}>7</p>
                        </CanaryCard>
                      </div>
                    </div>
                  </CanaryAppShell>
                </div>

                <h4 className="text-sm font-semibold mb-2 mt-6">Settings Variant</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Use the SETTINGS variant for settings pages with a back button.
                </p>

                <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: "400px" }}>
                  <CanaryAppShell
                    sidebarVariant={SidebarVariant.SETTINGS}
                    sidebarTitle="Settings"
                    sidebarBackButton={
                      <CanaryButton
                        type={ButtonType.TEXT}
                        color={ButtonColor.WHITE}
                        icon={<Icon path={mdiArrowLeft} size={1} />}
                        iconPosition={IconPosition.LEFT}
                      >
                        Back
                      </CanaryButton>
                    }
                    pageTitle="Settings"
                    contentPadding="medium"
                  >
                    <CanaryCard title="Property Information">
                      <div className="space-y-4">
                        <CanaryInput label="Hotel Name" defaultValue="Statler New York" />
                        <CanaryInput label="Address" defaultValue="123 Main Street, New York, NY" />
                        <CanaryInput label="Phone" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </CanaryCard>
                  </CanaryAppShell>
                </div>

                <CodeSnippet
                  code={`import { CanaryAppShell, SidebarVariant } from '@canary-ui/components';

// Basic usage - wraps your content with sidebar + page header
<CanaryAppShell
  pageTitle="Contracts"
  headerActions={<CanaryButton>Publish changes</CanaryButton>}
  onSidebarItemClick={(id) => router.push(\`/\${id}\`)}
>
  <YourPageContent />
</CanaryAppShell>

// Settings page variant
<CanaryAppShell
  sidebarVariant={SidebarVariant.SETTINGS}
  sidebarTitle="Settings"
  sidebarBackButton={<BackButton />}
  pageTitle="Property Settings"
>
  <SettingsContent />
</CanaryAppShell>

// No header (e.g. full-bleed content)
<CanaryAppShell hideHeader>
  <DashboardContent />
</CanaryAppShell>`}
                />
              </CanaryCard>
              )}
            </div>
          </Section>
          )}

          {isInSection("feedback") && (
          <Section title="Feedback Components" id="feedback">
            <div className="space-y-6">
              {showComponent('canary-alert') && (
              <CanaryCard title="CanaryAlert">
                <UsageNote
                  description="Inline alert banner for persistent messages within page content (success, error, warning, info)."
                  whenToUse={["Form validation summaries, important notices, success confirmations"]}
                  whenNotToUse={["Temporary notifications — use CanaryToast", "Per-field validation — use the error prop on form components"]}
                />
                <div className="space-y-3">
                  <CanaryAlert type="success" message="This is a success alert!" />
                  <CanaryAlert type="error" message="This is an error alert!" />
                  <CanaryAlert type="warning" message="This is a warning alert!" />
                  <CanaryAlert type="info" message="This is an info alert!" />
                </div>
                <CodeSnippet
                  code={`<CanaryAlert type="success" message="Success message!" />
<CanaryAlert type="error" message="Error message!" />
<CanaryAlert type="warning" message="Warning message!" />
<CanaryAlert type="info" message="Info message!" />`}
                />
              </CanaryCard>
              )}

              {showComponent('canary-toast') && (
              <CanaryCard title="CanaryToast">
                <UsageNote
                  description="Temporary notification that auto-dismisses after a configurable duration (default 5 seconds)."
                  whenToUse={["Transient confirmations. Production: managed globally via ToastStore singleton — every app has a toast container at root level.", "Triggered after async ops: order approval, settings save, payment processing. Production: success for 'Changes saved', error for 'Unexpected error'."]}
                  whenNotToUse={["Persistent messages — use CanaryAlert", "Critical errors requiring action — use CanaryModal"]}
                />
                <CanaryButton onClick={() => setShowToast(true)}>
                  Show Toast
                </CanaryButton>

                <CanaryToast
                  message="This is a toast notification!"
                  type="success"
                  isOpen={showToast}
                  onClose={() => setShowToast(false)}
                />

                <CodeSnippet
                  code={`const [showToast, setShowToast] = useState(false);

<CanaryButton onClick={() => setShowToast(true)}>
  Show Toast
</CanaryButton>

<CanaryToast
  message="This is a toast notification!"
  type="success"
  isOpen={showToast}
  onClose={() => setShowToast(false)}
/>`}
                />
              </CanaryCard>
              )}

              {showComponent('canary-loading') && (
              <CanaryCard title="CanaryLoading">
                <UsageNote
                  description="Animated spinner for indicating loading states."
                  whenToUse={["While fetching data, during form submission"]}
                  whenNotToUse={["List loading — use CanaryList with isLoading prop"]}
                />
                <div className="flex items-center gap-4">
                  <CanaryLoading />
                  <CanaryLoading size={32} color="#e40046" />
                  <CanaryLoading size={48} color="#008040" />
                </div>
                <CodeSnippet
                  code={`<CanaryLoading />
<CanaryLoading size={32} color="#e40046" />
<CanaryLoading size={48} color="#008040" />`}
                />
              </CanaryCard>
              )}
            </div>
          </Section>
          )}

          {/* New Components (v0.6.0) */}
          <Section title="New in v0.6.0" id="new-components">
            <div className="space-y-6">

              {/* Badge */}
              <CanaryCard title="CanaryBadge">
                <div className="flex items-center gap-3 flex-wrap">
                  <CanaryBadge type={BadgeType.INFO} label="3 new" />
                  <CanaryBadge type={BadgeType.URGENT} label="Urgent" />
                  <CanaryBadge type={BadgeType.WARNING} label="Pending" />
                  <CanaryBadge type={BadgeType.INFO} size={BadgeSize.LARGE} label="Large badge" />
                </div>
                <CodeSnippet code={`<CanaryBadge type={BadgeType.INFO} label="3 new" />
<CanaryBadge type={BadgeType.URGENT} label="Urgent" />
<CanaryBadge type={BadgeType.WARNING} label="Pending" />`} />
              </CanaryCard>

              {/* Divider */}
              <CanaryCard title="CanaryDivider">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">Content above</p>
                  <CanaryDivider />
                  <p className="text-sm text-gray-600">Content below</p>
                  <CanaryDivider text="OR" />
                  <p className="text-sm text-gray-600">Content after labeled divider</p>
                  <div className="flex items-stretch gap-4 h-16">
                    <span className="text-sm text-gray-600">Left</span>
                    <CanaryDivider direction={DividerDirection.VERTICAL} />
                    <span className="text-sm text-gray-600">Right</span>
                  </div>
                </div>
                <CodeSnippet code={`<CanaryDivider />
<CanaryDivider text="OR" />
<CanaryDivider direction={DividerDirection.VERTICAL} />`} />
              </CanaryCard>

              {/* Note */}
              <CanaryCard title="CanaryNote">
                <div className="space-y-3">
                  <CanaryNote color={NoteColor.OK}>
                    Your changes have been saved successfully.
                  </CanaryNote>
                  <CanaryNote color={NoteColor.WARNING}>
                    This action will affect all properties in your group.
                  </CanaryNote>
                  <CanaryNote color={NoteColor.DANGER}>
                    This guest has an outstanding balance of $245.00.
                  </CanaryNote>
                </div>
                <CodeSnippet code={`<CanaryNote color={NoteColor.OK}>Saved successfully.</CanaryNote>
<CanaryNote color={NoteColor.WARNING}>Affects all properties.</CanaryNote>
<CanaryNote color={NoteColor.DANGER}>Outstanding balance.</CanaryNote>`} />
              </CanaryCard>

              {/* Timestamp */}
              <CanaryCard title="CanaryTimestamp">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium w-32">DateTime:</span>
                    <CanaryTimestamp date={new Date()} format={TimestampFormat.DATETIME} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium w-32">With timezone:</span>
                    <CanaryTimestamp date={new Date()} format={TimestampFormat.DATETIME_ZONE} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium w-32">Relative:</span>
                    <CanaryTimestamp date={Date.now() - 3600000} format={TimestampFormat.RELATIVE_TIME} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium w-32">Secondary:</span>
                    <CanaryTimestamp date={new Date()} color={TimestampColor.SECONDARY} />
                  </div>
                </div>
                <CodeSnippet code={`<CanaryTimestamp date={new Date()} format={TimestampFormat.DATETIME} />
<CanaryTimestamp date={new Date()} format={TimestampFormat.RELATIVE_TIME} />
<CanaryTimestamp date={new Date()} color={TimestampColor.SECONDARY} />`} />
              </CanaryCard>

              {/* FormLabel + ValidationError */}
              <CanaryCard title="CanaryFormLabel + CanaryValidationError">
                <div className="space-y-3">
                  <div>
                    <CanaryFormLabel label="Guest Name" size={LabelSize.NORMAL} />
                    <input className="w-full border rounded px-3 py-2 text-sm" placeholder="Enter name" />
                  </div>
                  <div>
                    <CanaryFormLabel label="Email Address" size={LabelSize.LARGE} isRequired />
                    <input className="w-full border border-red-300 rounded px-3 py-2 text-sm" placeholder="Enter email" />
                    <CanaryValidationError error="Email address is required" />
                  </div>
                  <div>
                    <CanaryFormLabel label="Phone" />
                    <input className="w-full border border-yellow-300 rounded px-3 py-2 text-sm" placeholder="Optional" />
                    <CanaryValidationError warning="Phone number recommended for guest communication" />
                  </div>
                </div>
                <CodeSnippet code={`<CanaryFormLabel label="Email Address" isRequired />
<CanaryValidationError error="Email address is required" />
<CanaryValidationError warning="Phone recommended" />`} />
              </CanaryCard>

              {/* ProfileImage */}
              <CanaryCard title="CanaryProfileImage">
                <div className="flex items-end gap-4">
                  <CanaryProfileImage size={ProfileImageSize.TINY} initials="JD" />
                  <CanaryProfileImage size={ProfileImageSize.SMALL} initials="TW" />
                  <CanaryProfileImage size={ProfileImageSize.MEDIUM} initials="AB" />
                  <CanaryProfileImage size={ProfileImageSize.NORMAL} initials="KL" />
                  <CanaryProfileImage size={ProfileImageSize.LARGE} initials="MN" />
                </div>
                <CodeSnippet code={`<CanaryProfileImage size={ProfileImageSize.TINY} initials="JD" />
<CanaryProfileImage size={ProfileImageSize.SMALL} initials="TW" />
<CanaryProfileImage size={ProfileImageSize.LARGE} initials="MN" />`} />
              </CanaryCard>

              {/* Tooltip */}
              <CanaryCard title="CanaryTooltip + CanaryTooltipIcon">
                <div className="flex items-center gap-8">
                  <CanaryTooltip content="This is a tooltip" position={TooltipPosition.TOP}>
                    <span className="text-sm underline cursor-help">Hover me (top)</span>
                  </CanaryTooltip>
                  <CanaryTooltip content="Bottom tooltip" position={TooltipPosition.BOTTOM}>
                    <span className="text-sm underline cursor-help">Hover me (bottom)</span>
                  </CanaryTooltip>
                  <span className="flex items-center gap-1 text-sm">
                    Guest ID <CanaryTooltipIcon content="Unique identifier assigned at check-in" color={TooltipIconColor.PRIMARY} />
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    Warning <CanaryTooltipIcon content="Action cannot be undone" color={TooltipIconColor.DANGER} />
                  </span>
                </div>
                <CodeSnippet code={`<CanaryTooltip content="This is a tooltip" position={TooltipPosition.TOP}>
  <span>Hover me</span>
</CanaryTooltip>
<CanaryTooltipIcon content="Help text" color={TooltipIconColor.PRIMARY} />`} />
              </CanaryCard>

              {/* Expand */}
              <CanaryCard title="CanaryExpand">
                <ExpandDemo />
                <CodeSnippet code={`const [expanded, setExpanded] = useState(false);
<CanaryExpand
  isExpanded={expanded}
  onToggle={() => setExpanded(!expanded)}
  header={<span>Room Details</span>}
>
  <p>Room 301 - Deluxe King Suite</p>
</CanaryExpand>`} />
              </CanaryCard>

              {/* Counter */}
              <CanaryCard title="CanaryCounter">
                <CounterDemo />
                <CodeSnippet code={`const [count, setCount] = useState(1);
<CanaryCounter value={count} onChange={setCount} minValue={0} maxValue={10} />`} />
              </CanaryCard>

              {/* ProgressBar */}
              <CanaryCard title="CanaryProgressBar">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium mb-2">Continuous (65%)</p>
                    <CanaryProgressBar variant={ProgressBarVariant.CONTINUOUS} progress={65} showLabel />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Steps (2 of 4)</p>
                    <CanaryProgressBar variant={ProgressBarVariant.STEPS} totalSteps={4} currentStep={2} />
                  </div>
                </div>
                <CodeSnippet code={`<CanaryProgressBar variant={ProgressBarVariant.CONTINUOUS} progress={65} showLabel />
<CanaryProgressBar variant={ProgressBarVariant.STEPS} totalSteps={4} currentStep={2} />`} />
              </CanaryCard>

              {/* Steps */}
              <CanaryCard title="CanarySteps">
                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-medium mb-4">Horizontal</p>
                    <CanarySteps
                      steps={[
                        { label: "Guest Info" },
                        { label: "Room Selection" },
                        { label: "Payment" },
                        { label: "Confirmation" },
                      ]}
                      currentStep={1}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-4">Vertical</p>
                    <CanarySteps
                      steps={[
                        { label: "Check-in", description: "Completed at 2:30 PM" },
                        { label: "ID Verification", description: "In progress" },
                        { label: "Payment Auth", description: "Pending" },
                      ]}
                      currentStep={1}
                      orientation={StepsOrientation.VERTICAL}
                    />
                  </div>
                </div>
                <CodeSnippet code={`<CanarySteps
  steps={[
    { label: "Guest Info" },
    { label: "Room Selection" },
    { label: "Payment" },
    { label: "Confirmation" },
  ]}
  currentStep={1}
/>`} />
              </CanaryCard>

              {/* OverflowMenu */}
              <CanaryCard title="CanaryOverflowMenu">
                <div className="flex items-center gap-4">
                  <CanaryOverflowMenu
                    items={[
                      { id: "edit", label: "Edit guest", onClick: () => {} },
                      { id: "message", label: "Send message", onClick: () => {} },
                      { id: "divider", label: "", isDivider: true },
                      { id: "delete", label: "Remove guest", isDanger: true, onClick: () => {} },
                    ]}
                  />
                  <span className="text-sm text-gray-500">Click the three dots</span>
                </div>
                <CodeSnippet code={`<CanaryOverflowMenu
  items={[
    { id: "edit", label: "Edit guest", onClick: () => {} },
    { id: "message", label: "Send message", onClick: () => {} },
    { id: "divider", label: "", isDivider: true },
    { id: "delete", label: "Remove guest", isDanger: true },
  ]}
/>`} />
              </CanaryCard>

              {/* Dialog */}
              <CanaryCard title="CanaryDialog">
                <DialogDemo />
                <CodeSnippet code={`const [open, setOpen] = useState(false);
<CanaryButton onClick={() => setOpen(true)}>Open Dialog</CanaryButton>
<CanaryDialog
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Confirm Check-out"
  stretch={DialogStretch.NORMAL}
  footer={<CanaryButton onClick={() => setOpen(false)}>Confirm</CanaryButton>}
>
  <p>Are you sure you want to check out Room 301?</p>
</CanaryDialog>`} />
              </CanaryCard>

              {/* SideSheet */}
              <CanaryCard title="CanarySideSheet">
                <SideSheetDemo />
                <CodeSnippet code={`const [open, setOpen] = useState(false);
<CanaryButton onClick={() => setOpen(true)}>Open Side Sheet</CanaryButton>
<CanarySideSheet
  isOpen={open}
  onClose={() => setOpen(false)}
  size="medium"
  header={<h3>Guest Details</h3>}
>
  <p>Side sheet content here</p>
</CanarySideSheet>`} />
              </CanaryCard>

              {/* SettingsCard */}
              <CanaryCard title="CanarySettingsCard">
                <SettingsCardDemo />
                <CodeSnippet code={`const [state, setState] = useState(SettingsCardState.VIEW);
<CanarySettingsCard
  title="Property Information"
  subtitle="Basic hotel details"
  state={state}
  onStateChange={setState}
  onSave={() => alert('Saved!')}
>
  {state === SettingsCardState.VIEW
    ? <p>Hotel Canary - 123 Main St</p>
    : <CanaryInput label="Hotel Name" value="Hotel Canary" />}
</CanarySettingsCard>`} />
              </CanaryCard>

              {/* Autocomplete */}
              <CanaryCard title="CanaryAutocomplete">
                <AutocompleteDemo />
                <CodeSnippet code={`const [value, setValue] = useState("");
<CanaryAutocomplete
  label="Select Country"
  value={value}
  onChange={setValue}
  options={[
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ]}
  placeholder="Type to search..."
/>`} />
              </CanaryCard>

            </div>
          </Section>

          {/* Footer */}
          <section className="text-center text-gray-500 text-sm py-8 border-t">
            <p>Canary UI Component Library - Built with Next.js, React, and Tailwind CSS</p>
            <p className="mt-2">Clone this project to start building your prototype</p>
          </section>
            </div>
          {isInSection("patterns") && (
          <div id="patterns">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {showComponent("pattern-data-table") && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <DataTableDiagram />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Data Table</h3>
                  <p className="text-sm text-gray-600 mb-3">List page for managing collections of records. Used on Contracts, Payments, and Upsells.</p>
                  <div className="flex flex-wrap gap-1">
                    {["CanarySidebar", "CanaryPageHeader", "CanaryInputSearch", "CanarySelect", "CanaryTabs", "CanaryTable", "CanaryButton"].map(c => (
                      <span key={c} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              )}
              {showComponent("pattern-split-view") && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <SplitViewDiagram />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Split View</h3>
                  <p className="text-sm text-gray-600 mb-3">Two-panel layout with a list on the left and cards or detail on the right. Used on Check-ins and Checkout.</p>
                  <div className="flex flex-wrap gap-1">
                    {["CanarySidebar", "CanaryInputSearch", "CanaryListItem", "CanaryList", "CanaryCard", "CanaryButton"].map(c => (
                      <span key={c} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              )}
              {showComponent("pattern-tabbed-content") && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <TabbedContentDiagram />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Tabbed Content</h3>
                  <p className="text-sm text-gray-600 mb-3">Page title with action button and tabbed sections switching between different views. Used on Upsells, F&B Ordering.</p>
                  <div className="flex flex-wrap gap-1">
                    {["CanaryAppShell", "CanaryPageHeader", "CanaryTabs", "CanaryCard", "CanaryButton"].map(c => (
                      <span key={c} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              )}
              {showComponent("pattern-settings") && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <SettingsDiagram />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Settings Page</h3>
                  <p className="text-sm text-gray-600 mb-3">Configuration pages with grouped form sections. Used across all Settings pages.</p>
                  <div className="flex flex-wrap gap-1">
                    {["CanaryAppShell", "CanaryCard", "CanaryInput", "CanarySelect", "CanarySwitch", "CanaryButton"].map(c => (
                      <span key={c} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              )}
              {showComponent("pattern-detail-view") && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <DetailViewDiagram />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Detail View</h3>
                  <p className="text-sm text-gray-600 mb-3">Two-column detail layout with a main content area and a narrower info sidebar. Used on Check-in details and Guest Verification.</p>
                  <div className="flex flex-wrap gap-1">
                    {["CanaryAppShell", "CanaryPageHeader", "CanaryCard", "CanaryButton", "CanaryTag"].map(c => (
                      <span key={c} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              )}
              {showComponent("pattern-form-builder") && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <FormBuilderDiagram />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Form Builder</h3>
                  <p className="text-sm text-gray-600 mb-3">Settings sidebar with a centered form card containing stacked rule sections. Each rule has condition selects, a multi-value chip input, and AND connectors between rules. Used for segment builders, automation triggers, and rule-based configs.</p>
                  <div className="flex flex-wrap gap-1">
                    {["CanarySelect", "CanaryInputMultiple", "CanaryButton", "CanaryCard"].map(c => (
                      <span key={c} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              )}
              {showComponent("pattern-editor-preview") && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <EditorPreviewDiagram />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Editor with Preview</h3>
                  <p className="text-sm text-gray-600 mb-3">Two-column layout: editable list on the left with drag-and-drop sections, item controls, and hidden-state badges; live preview panel on the right showing the guest-facing output. Used for compendium builders, digital welcome books, and content editors.</p>
                  <div className="flex flex-wrap gap-1">
                    {["CanaryList", "CanaryListItem", "CanaryTag", "CanaryButton", "CanaryCard"].map(c => (
                      <span key={c} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              )}
              {showComponent("pattern-guest-journey") && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <GuestJourneyDiagram />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Guest Journey</h3>
                  <p className="text-sm text-gray-600 mb-3">Horizontal timeline across the top shows journey stages (Pre-Arrival → Check-In → In-Stay → Check-Out → Post). Below, each stage has a detail card with its settings. The active stage is highlighted. Used for journey settings, automation sequences, and stage-based configuration flows.</p>
                  <div className="flex flex-wrap gap-1">
                    {["CanaryTabs", "CanaryCard", "CanaryButton", "CanaryPageHeader"].map(c => (
                      <span key={c} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              )}
              {showComponent("pattern-inbox") && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <InboxDiagram />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Inbox</h3>
                  <p className="text-sm text-gray-600 mb-3">Three-column layout with a conversation list and message thread view. Used on Messages and Calls.</p>
                  <div className="flex flex-wrap gap-1">
                    {["CanaryAppShell", "CanaryPageHeader", "CanaryInputSearch", "CanaryListItem", "CanaryInput", "CanaryButton"].map(c => (
                      <span key={c} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              )}
              {showComponent("pattern-modal") && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <ModalDiagram />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Modal Action Flow</h3>
                  <p className="text-sm text-gray-600 mb-3">Overlay form for creating or editing a record without leaving the current page. Used for New Contract, New Upsell, etc.</p>
                  <div className="flex flex-wrap gap-1">
                    {["CanaryModal", "CanaryInput", "CanarySelect", "CanaryTextArea", "CanaryButton"].map(c => (
                      <span key={c} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
          )}
          </CanaryContainer>
        </main>
      </div>
    </div>
  );
}

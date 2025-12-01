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
  CanaryAlert,
  CanaryToast,
  CanaryLoading,
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
  mdiCashUsdOutline,
  mdiPartyPopper,
  mdiPackageVariant,
  mdiCommentTextOutline,
  mdiBellOutline,
} from "@mdi/js";
import Icon from "@mdi/react";

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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [useUnderlineInputs, setUseUnderlineInputs] = useState(false);
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
    { id: "feedback", label: "Feedback" },
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

      <div className="flex">
        {/* Navigation Sidebar */}
        <aside className="hidden lg:block w-64 h-[calc(100vh-56px)] sticky top-14 bg-white border-r border-gray-200 overflow-y-auto">
          <nav className="p-6">
            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-4">Components</h4>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <CanaryContainer maxWidth="2xl" padding="large">
            <div className="space-y-12 py-8">
          {/* Introduction */}
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

          {/* Design Tokens */}
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

          {/* Buttons */}
          <Section title="Buttons" id="buttons">
            <CanaryCard title="CanaryButton">
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
          </Section>

          {/* Form Components */}
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
              <CanaryCard title={useUnderlineInputs ? "CanaryInputUnderline" : "CanaryInput"}>
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

              {/* Specialized Inputs */}
              <CanaryCard title="CanaryInputPassword">
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

              <CanaryCard title="CanaryInputSearch">
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

              <CanaryCard title="CanaryInputCreditCard">
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

              <CanaryCard title={useUnderlineInputs ? "CanaryInputPhoneUnderline" : "CanaryInputPhone"}>
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

              <CanaryCard title={useUnderlineInputs ? "CanaryInputDateUnderline" : "CanaryInputDate"}>
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

              <CanaryCard title={useUnderlineInputs ? "CanaryInputDateRangeUnderline" : "CanaryInputDateRange"}>
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

              {/* Other Form Components */}
              <CanaryCard title={useUnderlineInputs ? "CanarySelectUnderline & CanaryTextAreaUnderline" : "CanarySelect & CanaryTextArea"}>
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

                  {/* Checkboxes */}
                  <div className="col-span-2">
                    <CanaryCard title="CanaryCheckbox">
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

                  {/* Radio Buttons */}
                  <div className="col-span-2">
                    <CanaryCard title="CanaryRadio">
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
                </CanaryGrid>

                {/* Switch Component Demos */}
                <div className="mt-6">
                  <CanaryCard title="CanarySwitch - Interactive Examples">
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
            </div>
          </Section>

          {/* Data Display */}
          <Section title="Data Display" id="data-display">
            <div className="space-y-6">
              {/* Tags */}
              <CanaryCard title="CanaryTag">
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

              {/* Table */}
              <CanaryCard title="CanaryTable">
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

              {/* List Item */}
              <CanaryCard title="CanaryListItem">
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
            </div>
          </Section>

          {/* Layout Components */}
          <Section title="Layout & Navigation" id="layout">
            <CanaryCard title="CanaryTabs - Rounded Variant">
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
              <CanaryCard title="CanarySidebar - Main Variant">
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
                            { ...createSidebarTab('rooms', 'Room Management', <Icon path={mdiDoorOpen} size={1} />), badge: 3 },
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
                            createSidebarTab('revenue', 'Revenue Management', <Icon path={mdiCashUsdOutline} size={1} />),
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
                          { ...createSidebarTab('rooms', 'Room Management', <Icon path={mdiDoorOpen} size={1} />), badge: 2 },
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
    createSidebarTab('rooms', 'Room Management', <Icon path={mdiDoor} />),
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
    createSidebarTab('revenue', 'Revenue Management', <Icon path={mdiCash} />),
  ])
];

<CanarySidebar variant={SidebarVariant.CUSTOM} sections={corporateSections} />`}
                />
              </CanaryCard>
            </div>

            <div className="mt-6">
              <CanaryCard title="CanaryModal">
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
          </Section>

          {/* Feedback */}
          <Section title="Feedback Components" id="feedback">
            <div className="space-y-6">
              <CanaryCard title="CanaryAlert">
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

              <CanaryCard title="CanaryToast">
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

              <CanaryCard title="CanaryLoading">
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
            </div>
          </Section>

          {/* Footer */}
          <section className="text-center text-gray-500 text-sm py-8 border-t">
            <p>Canary UI Component Library - Built with Next.js, React, and Tailwind CSS</p>
            <p className="mt-2">Clone this project to start building your prototype</p>
          </section>
            </div>
          </CanaryContainer>
        </main>
      </div>
    </div>
  );
}

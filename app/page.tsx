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
  CanaryContainer,
  CanaryGrid,
  CanaryModal,
  CanaryTabs,
  CanarySidebar,
  CanaryHeader,
  CanaryAlert,
  CanaryToast,
  CanaryLoading,
  ButtonType,
  ButtonSize,
  TagColor,
  TagSize,
  InputSize,
  InputType,
  colors,
} from "@/components/canary-ui";
import { mdiContentCopy, mdiCheckCircle, mdiChevronDown, mdiChevronUp } from "@mdi/js";
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

export default function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [useUnderlineInputs, setUseUnderlineInputs] = useState(false);

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
      render: (value: string) => <CanaryTag label={value} color={TagColor.PRIMARY} />
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
                code={`import { CanaryButton, ButtonType } from "@/components/canary-ui";

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
                      { name: "$color-black-1", hex: colors.black1 },
                      { name: "$color-black-2", hex: colors.black2 },
                      { name: "$color-black-3", hex: colors.black3 },
                      { name: "$color-black-4", hex: colors.black4 },
                      { name: "$color-black-5", hex: colors.black5 },
                      { name: "$color-black-6", hex: colors.black6 },
                      { name: "$color-black-7", hex: colors.black7 },
                      { name: "$color-black-8", hex: colors.black8 },
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
                      { name: "$color-blue-canary-1", hex: colors.blueCanary1 },
                      { name: "$color-blue-canary-2", hex: colors.blueCanary2 },
                      { name: "$color-blue-canary-3", hex: colors.blueCanary3 },
                      { name: "$color-blue-canary-4", hex: colors.blueCanary4 },
                      { name: "$color-blue-canary-5", hex: colors.blueCanary5 },
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
                      { name: "$color-blue-dark-1", hex: colors.blueDark1 },
                      { name: "$color-blue-dark-2", hex: colors.blueDark2 },
                      { name: "$color-blue-dark-3", hex: colors.blueDark3 },
                      { name: "$color-blue-dark-4", hex: colors.blueDark4 },
                      { name: "$color-blue-dark-5", hex: colors.blueDark5 },
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
                      { name: "$color-light-green-1", hex: colors.lightGreen1 },
                      { name: "$color-light-green-2", hex: colors.lightGreen2 },
                      { name: "$color-light-green-3", hex: colors.lightGreen3 },
                      { name: "$color-light-green-4", hex: colors.lightGreen4 },
                      { name: "$color-light-green-5", hex: colors.lightGreen5 },
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
                      { name: "$color-purple-1", hex: colors.purple1 },
                      { name: "$color-purple-2", hex: colors.purple2 },
                      { name: "$color-purple-3", hex: colors.purple3 },
                      { name: "$color-purple-4", hex: colors.purple4 },
                      { name: "$color-purple-5", hex: colors.purple5 },
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
                      { name: "$color-pink-1", hex: colors.pink1 },
                      { name: "$color-pink-2", hex: colors.pink2 },
                      { name: "$color-pink-3", hex: colors.pink3 },
                      { name: "$color-pink-4", hex: colors.pink4 },
                      { name: "$color-pink-5", hex: colors.pink5 },
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
                      { name: "$color-wheat-1", hex: colors.wheat1 },
                      { name: "$color-wheat-2", hex: colors.wheat2 },
                      { name: "$color-wheat-3", hex: colors.wheat3 },
                      { name: "$color-wheat-4", hex: colors.wheat4 },
                      { name: "$color-wheat-5", hex: colors.wheat5 },
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
                      { name: "$color-red-1", hex: colors.red1 },
                      { name: "$color-red-2", hex: colors.red2 },
                      { name: "$color-red-3", hex: colors.red3 },
                      { name: "$color-red-4", hex: colors.red4 },
                      { name: "$color-red-5", hex: colors.red5 },
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
                code={`import { colors } from "@/components/canary-ui";

// Use colors in your components
<div style={{ backgroundColor: colors.blueCanary1 }}>
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
                    <CanaryButton size={ButtonSize.LARGE}>Large</CanaryButton>
                    <CanaryButton size={ButtonSize.NORMAL}>Normal</CanaryButton>
                    <CanaryButton size={ButtonSize.COMPACT}>Compact</CanaryButton>
                    <CanaryButton size={ButtonSize.TINY}>Tiny</CanaryButton>
                  </div>
                  <CodeSnippet
                    code={`<CanaryButton size={ButtonSize.LARGE}>Large</CanaryButton>
<CanaryButton size={ButtonSize.NORMAL}>Normal</CanaryButton>
<CanaryButton size={ButtonSize.COMPACT}>Compact</CanaryButton>
<CanaryButton size={ButtonSize.TINY}>Tiny</CanaryButton>`}
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

                  <div>
                    <CanaryCheckbox label="I agree to the terms and conditions" />
                    <CanaryCheckbox label="Subscribe to newsletter" className="mt-3" />
                  </div>

                  <div>
                    <CanaryRadioGroup label="Preferred Contact Method">
                      <CanaryRadio
                        name="contact"
                        label="Email"
                        checked={selectedRadio === "option1"}
                        onChange={() => setSelectedRadio("option1")}
                      />
                      <CanaryRadio
                        name="contact"
                        label="Phone"
                        checked={selectedRadio === "option2"}
                        onChange={() => setSelectedRadio("option2")}
                      />
                      <CanaryRadio
                        name="contact"
                        label="SMS"
                        checked={selectedRadio === "option3"}
                        onChange={() => setSelectedRadio("option3")}
                      />
                    </CanaryRadioGroup>
                  </div>
                </CanaryGrid>

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
  <CanaryRadio name="contact" label="Email" />
  <CanaryRadio name="contact" label="Phone" />
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
  <CanaryRadio name="contact" label="Email" />
  <CanaryRadio name="contact" label="Phone" />
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
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Tag Colors</h4>
                    <div className="flex flex-wrap gap-2">
                      <CanaryTag label="Primary" color={TagColor.PRIMARY} />
                      <CanaryTag label="Success" color={TagColor.SUCCESS} />
                      <CanaryTag label="Warning" color={TagColor.WARNING} />
                      <CanaryTag label="Danger" color={TagColor.DANGER} />
                      <CanaryTag label="Gray" color={TagColor.GRAY} />
                      <CanaryTag label="Black" color={TagColor.BLACK} />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-600">Tag Sizes</h4>
                    <div className="flex flex-wrap items-center gap-2">
                      <CanaryTag label="Small" size={TagSize.SMALL} color={TagColor.PRIMARY} />
                      <CanaryTag label="Medium" size={TagSize.MEDIUM} color={TagColor.PRIMARY} />
                    </div>
                  </div>
                </div>
                <CodeSnippet
                  code={`// Tag Colors
<CanaryTag label="Primary" color={TagColor.PRIMARY} />
<CanaryTag label="Success" color={TagColor.SUCCESS} />
<CanaryTag label="Warning" color={TagColor.WARNING} />
<CanaryTag label="Danger" color={TagColor.DANGER} />
<CanaryTag label="Gray" color={TagColor.GRAY} />
<CanaryTag label="Black" color={TagColor.BLACK} />

// Tag Sizes
<CanaryTag label="Small" size={TagSize.SMALL} />
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
    render: (value) => <CanaryTag label={value} color={TagColor.PRIMARY} />
  },
];

<CanaryTable
  columns={columns}
  data={data}
  onRowClick={(row) => alert(\`Clicked: \${row.name}\`)}
/>`}
                />
              </CanaryCard>
            </div>
          </Section>

          {/* Layout Components */}
          <Section title="Layout & Navigation" id="layout">
            <CanaryCard title="CanaryTabs">
              <CanaryTabs
                tabs={[
                  { id: "tab1", label: "Overview", content: <p>Overview content goes here</p> },
                  { id: "tab2", label: "Settings", content: <p>Settings content goes here</p> },
                  { id: "tab3", label: "Users", content: <p>Users content goes here</p> },
                ]}
              />
              <CodeSnippet
                code={`<CanaryTabs
  tabs={[
    { id: "tab1", label: "Overview", content: <p>Overview content</p> },
    { id: "tab2", label: "Settings", content: <p>Settings content</p> },
    { id: "tab3", label: "Users", content: <p>Users content</p> },
  ]}
/>`}
              />
            </CanaryCard>

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

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
  CanarySegmentedControl,
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
  InputSize,
  InputType,
  colors,
  shadows,
} from "@/components/canary-ui";

export default function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");
  const [buttonSize, setButtonSize] = useState<"large" | "normal" | "compact">("large");
  const [formSize, setFormSize] = useState<"large" | "normal">("large");

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <CanaryHeader
        title="Canary UI Component Library"
        actions={
          <CanaryButton onClick={() => alert("Action clicked!")}>
            Get Started
          </CanaryButton>
        }
      />

      <CanaryContainer maxWidth="2xl" padding="large">
        <div className="space-y-12 py-8">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-[#2d2d2d]">Welcome to Canary UI</h2>
            <p className="text-lg text-gray-600 mb-6">
              A comprehensive React component library for building high-fidelity prototypes.
              All components match the Canary design system for consistent, professional interfaces.
            </p>
            <CanaryAlert
              type="info"
              title="Foundation Project"
              message="This is a template repository. Clone it to start building your prototype with pre-built Canary UI components."
            />
          </section>

          {/* Color Palette */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-[#2d2d2d]">Color Palette</h3>
            <CanaryCard title="Canary Design System Colors">
              <div className="space-y-8">
                {/* Status Colors */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Status Colors</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div>
                      <div className="h-20 rounded-lg shadow-sm" style={{ backgroundColor: colors.ok }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">OK / Success</p>
                      <p className="text-xs text-gray-500">{colors.ok}</p>
                    </div>
                    <div>
                      <div className="h-20 rounded-lg shadow-sm" style={{ backgroundColor: colors.warning }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">Warning</p>
                      <p className="text-xs text-gray-500">{colors.warning}</p>
                    </div>
                    <div>
                      <div className="h-20 rounded-lg shadow-sm" style={{ backgroundColor: colors.danger }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">Danger / Error</p>
                      <p className="text-xs text-gray-500">{colors.danger}</p>
                    </div>
                  </div>
                </div>

                {/* Black Scale */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Black Scale (Grayscale)</h4>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.black1 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">black1</p>
                      <p className="text-xs text-gray-500">{colors.black1}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.black2 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">black2</p>
                      <p className="text-xs text-gray-500">{colors.black2}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.black3 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">black3</p>
                      <p className="text-xs text-gray-500">{colors.black3}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.black4 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">black4</p>
                      <p className="text-xs text-gray-500">{colors.black4}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.black5 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">black5</p>
                      <p className="text-xs text-gray-500">{colors.black5}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.black6 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">black6</p>
                      <p className="text-xs text-gray-500">{colors.black6}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.black7 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">black7</p>
                      <p className="text-xs text-gray-500">{colors.black7}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.black8 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">black8</p>
                      <p className="text-xs text-gray-500">{colors.black8}</p>
                    </div>
                  </div>
                </div>

                {/* Blue Canary */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Blue Canary (Brand)</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.blueCanary1 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">blueCanary1</p>
                      <p className="text-xs text-gray-500">{colors.blueCanary1}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.blueCanary2 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">blueCanary2</p>
                      <p className="text-xs text-gray-500">{colors.blueCanary2}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.blueCanary3 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">blueCanary3</p>
                      <p className="text-xs text-gray-500">{colors.blueCanary3}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.blueCanary4 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">blueCanary4</p>
                      <p className="text-xs text-gray-500">{colors.blueCanary4}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.blueCanary5 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">blueCanary5</p>
                      <p className="text-xs text-gray-500">{colors.blueCanary5}</p>
                    </div>
                  </div>
                </div>

                {/* Blue Dark */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Blue Dark (Primary Actions)</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.blueDark1 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">blueDark1</p>
                      <p className="text-xs text-gray-500">{colors.blueDark1}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.blueDark2 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">blueDark2</p>
                      <p className="text-xs text-gray-500">{colors.blueDark2}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.blueDark3 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">blueDark3</p>
                      <p className="text-xs text-gray-500">{colors.blueDark3}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.blueDark4 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">blueDark4</p>
                      <p className="text-xs text-gray-500">{colors.blueDark4}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.blueDark5 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">blueDark5</p>
                      <p className="text-xs text-gray-500">{colors.blueDark5}</p>
                    </div>
                  </div>
                </div>

                {/* Pink */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Pink</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.pink1 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">pink1</p>
                      <p className="text-xs text-gray-500">{colors.pink1}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.pink2 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">pink2</p>
                      <p className="text-xs text-gray-500">{colors.pink2}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.pink3 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">pink3</p>
                      <p className="text-xs text-gray-500">{colors.pink3}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.pink4 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">pink4</p>
                      <p className="text-xs text-gray-500">{colors.pink4}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.pink5 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">pink5</p>
                      <p className="text-xs text-gray-500">{colors.pink5}</p>
                    </div>
                  </div>
                </div>

                {/* Light Green */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Light Green</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.lightGreen1 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">lightGreen1</p>
                      <p className="text-xs text-gray-500">{colors.lightGreen1}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.lightGreen2 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">lightGreen2</p>
                      <p className="text-xs text-gray-500">{colors.lightGreen2}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.lightGreen3 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">lightGreen3</p>
                      <p className="text-xs text-gray-500">{colors.lightGreen3}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.lightGreen4 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">lightGreen4</p>
                      <p className="text-xs text-gray-500">{colors.lightGreen4}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.lightGreen5 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">lightGreen5</p>
                      <p className="text-xs text-gray-500">{colors.lightGreen5}</p>
                    </div>
                  </div>
                </div>

                {/* Dark Green */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Dark Green</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.darkGreen1 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">darkGreen1</p>
                      <p className="text-xs text-gray-500">{colors.darkGreen1}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.darkGreen2 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">darkGreen2</p>
                      <p className="text-xs text-gray-500">{colors.darkGreen2}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.darkGreen3 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">darkGreen3</p>
                      <p className="text-xs text-gray-500">{colors.darkGreen3}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.darkGreen4 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">darkGreen4</p>
                      <p className="text-xs text-gray-500">{colors.darkGreen4}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.darkGreen5 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">darkGreen5</p>
                      <p className="text-xs text-gray-500">{colors.darkGreen5}</p>
                    </div>
                  </div>
                </div>

                {/* Wheat */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Wheat (Orange/Yellow)</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.wheat1 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">wheat1</p>
                      <p className="text-xs text-gray-500">{colors.wheat1}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.wheat2 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">wheat2</p>
                      <p className="text-xs text-gray-500">{colors.wheat2}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.wheat3 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">wheat3</p>
                      <p className="text-xs text-gray-500">{colors.wheat3}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.wheat4 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">wheat4</p>
                      <p className="text-xs text-gray-500">{colors.wheat4}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.wheat5 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">wheat5</p>
                      <p className="text-xs text-gray-500">{colors.wheat5}</p>
                    </div>
                  </div>
                </div>

                {/* Purple */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Purple</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.purple1 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">purple1</p>
                      <p className="text-xs text-gray-500">{colors.purple1}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.purple2 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">purple2</p>
                      <p className="text-xs text-gray-500">{colors.purple2}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.purple3 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">purple3</p>
                      <p className="text-xs text-gray-500">{colors.purple3}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.purple4 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">purple4</p>
                      <p className="text-xs text-gray-500">{colors.purple4}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.purple5 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">purple5</p>
                      <p className="text-xs text-gray-500">{colors.purple5}</p>
                    </div>
                  </div>
                </div>

                {/* Red */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Red</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.red1 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">red1</p>
                      <p className="text-xs text-gray-500">{colors.red1}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.red2 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">red2</p>
                      <p className="text-xs text-gray-500">{colors.red2}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm" style={{ backgroundColor: colors.red3 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">red3</p>
                      <p className="text-xs text-gray-500">{colors.red3}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.red4 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">red4</p>
                      <p className="text-xs text-gray-500">{colors.red4}</p>
                    </div>
                    <div>
                      <div className="h-16 rounded-lg shadow-sm border" style={{ backgroundColor: colors.red5 }} />
                      <p className="text-xs font-medium mt-2 text-[#2d2d2d]">red5</p>
                      <p className="text-xs text-gray-500">{colors.red5}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CanaryCard>
          </section>

          {/* Drop Shadows */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-[#2d2d2d]">Drop Shadows</h3>
            <CanaryCard title="Elevation & Depth">
              <div className="space-y-6">
                <p className="text-sm text-gray-600 mb-4">
                  Box shadows are used to create depth and elevation in the UI. All shadows use subtle black opacity values.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div
                      className="h-24 rounded-lg bg-white flex items-center justify-center"
                      style={{ boxShadow: shadows.default }}
                    >
                      <span className="text-sm font-medium text-[#2d2d2d]">Small</span>
                    </div>
                    <p className="text-xs font-medium mt-2 text-[#2d2d2d]">Small</p>
                    <p className="text-xs text-gray-500 mt-1">shadows.default</p>
                  </div>
                  <div>
                    <div
                      className="h-24 rounded-lg bg-white flex items-center justify-center"
                      style={{ boxShadow: shadows.md }}
                    >
                      <span className="text-sm font-medium text-[#2d2d2d]">Medium</span>
                    </div>
                    <p className="text-xs font-medium mt-2 text-[#2d2d2d]">Medium</p>
                    <p className="text-xs text-gray-500 mt-1">shadows.md</p>
                  </div>
                  <div>
                    <div
                      className="h-24 rounded-lg bg-white flex items-center justify-center"
                      style={{ boxShadow: shadows.xl }}
                    >
                      <span className="text-sm font-medium text-[#2d2d2d]">Large</span>
                    </div>
                    <p className="text-xs font-medium mt-2 text-[#2d2d2d]">Large</p>
                    <p className="text-xs text-gray-500 mt-1">shadows.xl</p>
                  </div>
                </div>
              </div>
            </CanaryCard>
          </section>

          {/* Buttons */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-[#2d2d2d]">Buttons</h3>
            <CanaryCard>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Button Types</h4>
                  <div className="flex flex-wrap gap-3">
                    <CanaryButton type={ButtonType.PRIMARY}>Primary</CanaryButton>
                    <CanaryButton type={ButtonType.OUTLINED}>Outlined</CanaryButton>
                    <CanaryButton type={ButtonType.SHADED}>Shaded</CanaryButton>
                    <CanaryButton type={ButtonType.TEXT}>Text</CanaryButton>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Button Sizes</h4>
                  <CanarySegmentedControl
                    options={[
                      { label: "Large", value: "large" },
                      { label: "Normal", value: "normal" },
                      { label: "Compact", value: "compact" },
                    ]}
                    value={buttonSize}
                    onChange={(value) => setButtonSize(value as "large" | "normal" | "compact")}
                  />
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <CanaryButton
                      size={
                        buttonSize === "large"
                          ? ButtonSize.LARGE
                          : buttonSize === "normal"
                          ? ButtonSize.NORMAL
                          : ButtonSize.COMPACT
                      }
                    >
                      Primary Button
                    </CanaryButton>
                    <CanaryButton
                      type={ButtonType.OUTLINED}
                      size={
                        buttonSize === "large"
                          ? ButtonSize.LARGE
                          : buttonSize === "normal"
                          ? ButtonSize.NORMAL
                          : ButtonSize.COMPACT
                      }
                    >
                      Outlined Button
                    </CanaryButton>
                    <CanaryButton
                      type={ButtonType.SHADED}
                      size={
                        buttonSize === "large"
                          ? ButtonSize.LARGE
                          : buttonSize === "normal"
                          ? ButtonSize.NORMAL
                          : ButtonSize.COMPACT
                      }
                    >
                      Shaded Button
                    </CanaryButton>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Button States</h4>
                  <div className="flex flex-wrap gap-3">
                    <CanaryButton>Normal</CanaryButton>
                    <CanaryButton isLoading>Loading</CanaryButton>
                    <CanaryButton isDisabled>Disabled</CanaryButton>
                  </div>
                </div>
              </div>
            </CanaryCard>
          </section>

          {/* Form Components */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-[#2d2d2d]">Form Components</h3>
            <CanaryCard>
              <div className="space-y-8">
                {/* Size Selector */}
                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Form Input Sizes</h4>
                  <CanarySegmentedControl
                    options={[
                      { label: "Large", value: "large" },
                      { label: "Normal", value: "normal" },
                    ]}
                    value={formSize}
                    onChange={(value) => setFormSize(value as "large" | "normal")}
                  />
                </div>

                {/* Form Examples */}
                <CanaryGrid columns={2} gap="large">
                  <CanaryInput
                    label="Email Address"
                    type={InputType.EMAIL}
                    size={formSize === "large" ? InputSize.LARGE : InputSize.NORMAL}
                    placeholder="Enter your email"
                    helperText="We'll never share your email"
                  />

                  <CanarySelect
                    label="Select Country"
                    size={formSize === "large" ? InputSize.LARGE : InputSize.NORMAL}
                    placeholder="Choose a country"
                    options={[
                      { label: "United States", value: "us" },
                      { label: "Canada", value: "ca" },
                      { label: "United Kingdom", value: "uk" },
                    ]}
                  />

                  <div className="col-span-2">
                    <CanaryTextArea
                      label="Message"
                      size={formSize === "large" ? InputSize.LARGE : InputSize.NORMAL}
                      placeholder="Enter your message"
                      rows={4}
                    />
                  </div>
                </CanaryGrid>

                {/* Other Form Elements */}
                <div>
                  <h4 className="text-sm font-medium mb-4 text-gray-600">Other Form Elements</h4>
                  <CanaryGrid columns={2} gap="large">
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
                </div>
              </div>
            </CanaryCard>
          </section>

          {/* Data Display */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-[#2d2d2d]">Data Display</h3>

            <div className="space-y-6">
              {/* Tags */}
              <CanaryCard title="Tags">
                <div className="flex flex-wrap gap-2">
                  <CanaryTag label="Success" color={TagColor.OK} />
                  <CanaryTag label="Warning" color={TagColor.WARNING} />
                  <CanaryTag label="Error" color={TagColor.ERROR} />
                  <CanaryTag label="Info" color={TagColor.INFO} />
                  <CanaryTag label="Dark" color={TagColor.DARK} />
                </div>
              </CanaryCard>

              {/* Table */}
              <CanaryCard title="Table Example">
                <CanaryTable
                  columns={tableColumns}
                  data={sampleTableData}
                  onRowClick={(row) => alert(`Clicked row: ${row.name}`)}
                />
              </CanaryCard>
            </div>
          </section>

          {/* Layout Components */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-[#2d2d2d]">Layout & Navigation</h3>

            <CanaryCard title="Tabs Example">
              <CanaryTabs
                tabs={[
                  { id: "tab1", label: "Overview", content: <p>Overview content goes here</p> },
                  { id: "tab2", label: "Settings", content: <p>Settings content goes here</p> },
                  { id: "tab3", label: "Users", content: <p>Users content goes here</p> },
                ]}
              />
            </CanaryCard>

            <div className="mt-6">
              <CanaryCard title="Modal Example">
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
              </CanaryCard>
            </div>
          </section>

          {/* Feedback */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-[#2d2d2d]">Feedback Components</h3>

            <div className="space-y-6">
              <CanaryCard title="Alerts">
                <div className="space-y-3">
                  <CanaryAlert type="success" message="This is a success alert!" />
                  <CanaryAlert type="error" message="This is an error alert!" />
                  <CanaryAlert type="warning" message="This is a warning alert!" />
                  <CanaryAlert type="info" message="This is an info alert!" />
                </div>
              </CanaryCard>

              <CanaryCard title="Toast Notifications">
                <CanaryButton onClick={() => setShowToast(true)}>
                  Show Toast
                </CanaryButton>

                <CanaryToast
                  message="This is a toast notification!"
                  type="success"
                  isOpen={showToast}
                  onClose={() => setShowToast(false)}
                />
              </CanaryCard>

              <CanaryCard title="Loading Spinner">
                <div className="flex items-center gap-4">
                  <CanaryLoading />
                  <CanaryLoading size={32} color="#e40046" />
                  <CanaryLoading size={48} color="#008040" />
                </div>
              </CanaryCard>
            </div>
          </section>

          {/* Footer */}
          <section className="text-center text-gray-500 text-sm py-8 border-t">
            <p>Canary UI Component Library - Built with Next.js, React, and Tailwind CSS</p>
            <p className="mt-2">Clone this project to start building your prototype</p>
          </section>
        </div>
      </CanaryContainer>
    </div>
  );
}

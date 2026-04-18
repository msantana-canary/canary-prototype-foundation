// Shared sidebar shape used across all diagrams
function Sidebar({ selectedIndex = 1 }: { selectedIndex?: number }) {
  const items = [32, 48, 62, 76, 90, 104, 118, 132, 146];
  return (
    <>
      <rect x="0" y="0" width="52" height="220" fill="#1E3060" />
      <rect x="10" y="8" width="32" height="14" fill="#2563EB" rx="2" />
      {items.map((y, i) => (
        <g key={i}>
          {i === selectedIndex && (
            <rect x="0" y={y - 2} width="52" height="16" fill="#FFFFFF" fillOpacity="0.15" />
          )}
          <rect x="14" y={y} width="24" height="8"
            fill="#FFFFFF"
            fillOpacity={i === selectedIndex ? 0.5 : 0.2}
            rx="2"
          />
        </g>
      ))}
    </>
  );
}

// Standard page header bar (new design: title left, optional action right)
function PageHeader({ hasAction = true, hasBack = false }: { hasAction?: boolean; hasBack?: boolean }) {
  return (
    <>
      <rect x="52" y="0" width="308" height="34" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      {hasBack && <rect x="62" y="12" width="10" height="10" fill="#CBD5E1" rx="2" />}
      <rect x={hasBack ? 78 : 62} y="13" width="80" height="8" fill="#1E293B" fillOpacity="0.7" rx="2" />
      {hasAction && <rect x="314" y="11" width="38" height="14" fill="#2563EB" rx="3" />}
    </>
  );
}

export function DataTableDiagram() {
  return (
    <svg viewBox="0 0 360 220" width="100%" xmlns="http://www.w3.org/2000/svg">
      <Sidebar selectedIndex={2} />
      <PageHeader hasAction />

      {/* Content bg */}
      <rect x="52" y="34" width="308" height="186" fill="#F8FAFC" />

      {/* Search bar + filters */}
      <rect x="62" y="42" width="155" height="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" rx="2" />
      <rect x="66" y="46" width="8" height="6" fill="#94A3B8" rx="1" />
      <rect x="224" y="42" width="56" height="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" rx="2" />
      <rect x="286" y="42" width="66" height="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" rx="2" />

      {/* Tabs */}
      <rect x="62" y="62" width="32" height="8" fill="#2563EB" rx="2" />
      <rect x="102" y="62" width="32" height="8" fill="#E2E8F0" rx="2" />
      <rect x="142" y="62" width="32" height="8" fill="#E2E8F0" rx="2" />
      <rect x="182" y="62" width="32" height="8" fill="#E2E8F0" rx="2" />

      {/* Table header */}
      <rect x="62" y="76" width="290" height="14" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
      {[68, 118, 178, 233, 293].map((x, i) => (
        <rect key={i} x={x} y="80" width={[30, 40, 35, 40, 35][i]} height="6" fill="#CBD5E1" rx="1" />
      ))}

      {/* Table rows */}
      {[94, 112, 130, 148, 166, 184].map((y, i) => (
        <g key={i}>
          <rect x="62" y={y} width="290" height="16" fill={i % 2 === 0 ? "#FFFFFF" : "#F8FAFC"} stroke="#E2E8F0" strokeWidth="1" />
          {[68, 118, 178, 233, 293].map((x, j) => (
            <rect key={j} x={x} y={y + 5} width={[28, 38, 32, 36, 34][j]} height="6" fill="#CBD5E1" rx="1" />
          ))}
        </g>
      ))}
    </svg>
  );
}

export function SplitViewDiagram() {
  return (
    <svg viewBox="0 0 360 220" width="100%" xmlns="http://www.w3.org/2000/svg">
      <Sidebar selectedIndex={3} />
      <PageHeader hasAction />

      {/* Content bg */}
      <rect x="52" y="34" width="308" height="186" fill="#F8FAFC" />

      {/* Search bar */}
      <rect x="62" y="40" width="290" height="18" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" rx="2" />
      <rect x="67" y="45" width="10" height="8" fill="#94A3B8" rx="1" />
      <rect x="82" y="47" width="70" height="5" fill="#CBD5E1" rx="1" />

      {/* Left list panel */}
      <rect x="62" y="64" width="138" height="150" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="2" />
      <rect x="70" y="70" width="55" height="7" fill="#CBD5E1" rx="2" />

      {/* List items */}
      {[82, 118, 154, 190].map((y, i) => (
        <g key={i}>
          <rect x="62" y={y} width="138" height="34" fill={i % 2 === 0 ? "#FFFFFF" : "#F8FAFC"} stroke="#E2E8F0" strokeWidth="0.5" />
          <circle cx="78" cy={y + 17} r="9" fill="#E2E8F0" />
          <rect x="92" y={y + 9} width="44" height="5" fill="#CBD5E1" rx="1" />
          <rect x="92" y={y + 18} width="32" height="4" fill="#E2E8F0" rx="1" />
          <rect x="156" y={y + 11} width="30" height="12" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" rx="2" />
        </g>
      ))}

      {/* Right cards panel */}
      <rect x="206" y="64" width="146" height="150" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" rx="2" />
      <rect x="214" y="70" width="60" height="7" fill="#CBD5E1" rx="2" />

      {/* 2x2 guest cards */}
      {[{ x: 212, y: 82 }, { x: 282, y: 82 }, { x: 212, y: 152 }, { x: 282, y: 152 }].map((pos, i) => (
        <g key={i}>
          <rect x={pos.x} y={pos.y} width="62" height="62" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="2" />
          <circle cx={pos.x + 31} cy={pos.y + 20} r="12" fill="#E2E8F0" />
          <rect x={pos.x + 8} y={pos.y + 36} width="46" height="5" fill="#CBD5E1" rx="1" />
          <rect x={pos.x + 12} y={pos.y + 45} width="38" height="4" fill="#E2E8F0" rx="1" />
          <rect x={pos.x + 8} y={pos.y + 52} width="46" height="6" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5" rx="2" />
        </g>
      ))}
    </svg>
  );
}

export function SettingsDiagram() {
  return (
    <svg viewBox="0 0 360 220" width="100%" xmlns="http://www.w3.org/2000/svg">
      {/* Settings sidebar (wider) */}
      <rect x="0" y="0" width="82" height="220" fill="#1E3060" />
      <rect x="10" y="8" width="32" height="14" fill="#2563EB" rx="2" />
      {/* Back button */}
      <rect x="8" y="30" width="10" height="8" fill="#FFFFFF" fillOpacity="0.3" rx="1" />
      <rect x="22" y="32" width="40" height="5" fill="#FFFFFF" fillOpacity="0.3" rx="1" />
      {/* Settings title */}
      <rect x="10" y="46" width="50" height="8" fill="#FFFFFF" fillOpacity="0.6" rx="2" />
      {/* Nav items */}
      <rect x="0" y="60" width="82" height="16" fill="#FFFFFF" fillOpacity="0.15" />
      <rect x="12" y="64" width="48" height="7" fill="#FFFFFF" fillOpacity="0.6" rx="2" />
      {[80, 94, 108, 122, 136].map((y) => (
        <rect key={y} x="12" y={y} width={y % 28 === 0 ? 42 : 44} height="7" fill="#FFFFFF" fillOpacity="0.2" rx="2" />
      ))}

      {/* Page header */}
      <rect x="82" y="0" width="278" height="34" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="92" y="13" width="80" height="8" fill="#1E293B" fillOpacity="0.7" rx="2" />

      {/* Content area */}
      <rect x="82" y="34" width="278" height="186" fill="#F8FAFC" />

      {/* Card 1 */}
      <rect x="92" y="42" width="258" height="80" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="3" />
      <rect x="100" y="50" width="60" height="7" fill="#94A3B8" rx="2" />
      {[62, 76, 90].map((y) => (
        <g key={y}>
          <rect x="100" y={y} width="50" height="5" fill="#E2E8F0" rx="1" />
          <rect x="158" y={y - 3} width="178" height="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" rx="2" />
        </g>
      ))}
      <rect x="100" y="106" width="70" height="8" fill="#E2E8F0" rx="1" />

      {/* Card 2 */}
      <rect x="92" y="128" width="258" height="62" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="3" />
      <rect x="100" y="136" width="68" height="7" fill="#94A3B8" rx="2" />
      {[148, 162].map((y, i) => (
        <g key={y}>
          <rect x="100" y={y} width={i === 0 ? 100 : 80} height="5" fill="#E2E8F0" rx="1" />
          <rect x="314" y={y - 3} width="26" height="12" fill={i === 0 ? "#2563EB" : "#CBD5E1"} rx="6" />
        </g>
      ))}

      {/* Save button */}
      <rect x="300" y="198" width="40" height="14" fill="#2563EB" rx="3" />
    </svg>
  );
}

export function DetailViewDiagram() {
  return (
    <svg viewBox="0 0 360 220" width="100%" xmlns="http://www.w3.org/2000/svg">
      <Sidebar selectedIndex={3} />
      <PageHeader hasAction hasBack />

      {/* Content bg */}
      <rect x="52" y="34" width="308" height="186" fill="#F8FAFC" />

      {/* Action buttons */}
      <rect x="296" y="11" width="32" height="12" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" rx="3" />
      <rect x="334" y="11" width="18" height="12" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" rx="3" />

      {/* Left main card (2/3) */}
      <rect x="62" y="42" width="188" height="168" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="3" />
      <rect x="70" y="50" width="80" height="7" fill="#94A3B8" rx="2" />
      {[62, 75, 88, 101, 114, 127, 140].map((y, i) => (
        <g key={i}>
          <rect x="70" y={y} width="36" height="5" fill="#E2E8F0" rx="1" />
          <rect x="116" y={y} width={[100, 80, 120, 90, 110, 85, 95][i]} height="5" fill="#CBD5E1" rx="1" />
        </g>
      ))}
      <rect x="70" y="168" width="58" height="14" fill="#2563EB" rx="3" />
      <rect x="134" y="168" width="58" height="14" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" rx="3" />

      {/* Right top card */}
      <rect x="256" y="42" width="96" height="86" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="3" />
      <rect x="264" y="50" width="48" height="6" fill="#94A3B8" rx="2" />
      {[62, 74, 86, 98, 110].map((y, i) => (
        <rect key={i} x="264" y={y} width={i % 2 === 0 ? 68 : 54} height="5" fill="#CBD5E1" rx="1" />
      ))}

      {/* Right bottom card */}
      <rect x="256" y="134" width="96" height="76" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="3" />
      <rect x="264" y="142" width="48" height="6" fill="#94A3B8" rx="2" />
      {[154, 166, 178, 190].map((y, i) => (
        <rect key={i} x="264" y={y} width={i % 2 === 0 ? 62 : 52} height="5" fill="#CBD5E1" rx="1" />
      ))}
    </svg>
  );
}

export function ModalDiagram() {
  return (
    <svg viewBox="0 0 360 220" width="100%" xmlns="http://www.w3.org/2000/svg">
      {/* Dimmed page bg */}
      <rect x="0" y="0" width="52" height="220" fill="#1E3060" fillOpacity="0.45" />
      <rect x="52" y="0" width="308" height="220" fill="#F8FAFC" fillOpacity="0.55" />
      <rect x="62" y="8" width="290" height="18" fill="#FFFFFF" fillOpacity="0.35" stroke="#E2E8F0" strokeWidth="0.5" />
      {[32, 48, 64, 80].map((y) => (
        <rect key={y} x="62" y={y} width="290" height="12" fill={y % 32 === 0 ? "#FFFFFF" : "#F1F5F9"} fillOpacity="0.4" />
      ))}

      {/* Overlay */}
      <rect x="0" y="0" width="360" height="220" fill="#000000" fillOpacity="0.28" />

      {/* Modal shadow */}
      <rect x="78" y="24" width="210" height="178" fill="#00000018" rx="6" />
      {/* Modal */}
      <rect x="75" y="20" width="210" height="178" fill="#FFFFFF" rx="6" />
      {/* Header */}
      <rect x="75" y="20" width="210" height="34" fill="#F8FAFC" rx="6" />
      <rect x="75" y="40" width="210" height="14" fill="#F8FAFC" />
      <rect x="75" y="54" width="210" height="1" fill="#E2E8F0" />
      <rect x="86" y="31" width="88" height="9" fill="#1E293B" fillOpacity="0.7" rx="2" />
      <rect x="269" y="28" width="10" height="10" fill="#CBD5E1" rx="2" />

      {/* Fields */}
      {[
        { ly: 62, lw: 50, iy: 70 },
        { ly: 90, lw: 62, iy: 98 },
        { ly: 118, lw: 44, iy: 126 },
      ].map((f, i) => (
        <g key={i}>
          <rect x="86" y={f.ly} width={f.lw} height="5" fill="#94A3B8" rx="2" />
          <rect x="86" y={f.iy} width="188" height="13" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" rx="2" />
          {i === 2 && <rect x="262" y={f.iy + 4} width="8" height="5" fill="#CBD5E1" rx="1" />}
        </g>
      ))}

      {/* Divider + buttons */}
      <rect x="86" y="150" width="188" height="1" fill="#E2E8F0" />
      <rect x="177" y="156" width="44" height="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" rx="3" />
      <rect x="227" y="156" width="48" height="14" fill="#2563EB" rx="3" />
    </svg>
  );
}

export function InboxDiagram() {
  return (
    <svg viewBox="0 0 360 220" width="100%" xmlns="http://www.w3.org/2000/svg">
      <Sidebar selectedIndex={4} />
      <PageHeader hasAction={false} />

      {/* Left conversation list */}
      <rect x="52" y="34" width="108" height="186" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      {/* Search */}
      <rect x="58" y="40" width="96" height="13" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" rx="2" />
      <rect x="62" y="44" width="8" height="6" fill="#94A3B8" rx="1" />

      {/* Conversation items */}
      {[58, 98, 138, 178].map((y, i) => (
        <g key={i}>
          <rect x="52" y={y} width="108" height="38" fill={i === 1 ? "#EFF6FF" : "#FFFFFF"} stroke="#E2E8F0" strokeWidth="0.5" />
          <circle cx="68" cy={y + 19} r="9" fill={i === 1 ? "#BFDBFE" : "#E2E8F0"} />
          <rect x="82" y={y + 10} width="50" height="5" fill="#CBD5E1" rx="1" />
          <rect x="82" y={y + 20} width="60" height="4" fill="#E2E8F0" rx="1" />
          <rect x="82" y={y + 28} width="44" height="4" fill="#E2E8F0" rx="1" />
          {i === 1 && <rect x="148" y={y + 8} width="8" height="8" fill="#2563EB" rx="4" />}
        </g>
      ))}

      {/* Thread area */}
      <rect x="160" y="34" width="200" height="186" fill="#F8FAFC" />
      {/* Thread header */}
      <rect x="160" y="34" width="200" height="30" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <circle cx="178" cy="49" r="10" fill="#E2E8F0" />
      <rect x="192" y="43" width="70" height="6" fill="#CBD5E1" rx="1" />
      <rect x="192" y="53" width="50" height="4" fill="#E2E8F0" rx="1" />

      {/* Message bubbles */}
      {/* Incoming */}
      <rect x="166" y="72" width="100" height="20" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="8" />
      <rect x="172" y="78" width="88" height="5" fill="#CBD5E1" rx="1" />
      <rect x="172" y="86" width="70" height="4" fill="#E2E8F0" rx="1" />
      {/* Outgoing */}
      <rect x="224" y="100" width="126" height="20" fill="#2563EB" rx="8" fillOpacity="0.9" />
      <rect x="230" y="106" width="114" height="5" fill="#FFFFFF" fillOpacity="0.6" rx="1" />
      <rect x="230" y="114" width="90" height="4" fill="#FFFFFF" fillOpacity="0.4" rx="1" />
      {/* Incoming */}
      <rect x="166" y="128" width="110" height="20" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="8" />
      <rect x="172" y="134" width="98" height="5" fill="#CBD5E1" rx="1" />
      <rect x="172" y="142" width="76" height="4" fill="#E2E8F0" rx="1" />

      {/* Reply box */}
      <rect x="160" y="186" width="200" height="34" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="168" y="196" width="150" height="14" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" rx="2" />
      <rect x="322" y="196" width="28" height="14" fill="#2563EB" rx="2" />
    </svg>
  );
}

export function FormBuilderDiagram() {
  return (
    <svg viewBox="0 0 360 220" width="100%" xmlns="http://www.w3.org/2000/svg">
      {/* Settings-style wider sidebar */}
      <rect x="0" y="0" width="72" height="220" fill="#1E3060" />
      <rect x="8" y="8" width="32" height="14" fill="#2563EB" rx="2" />
      <rect x="0" y="30" width="72" height="16" fill="#FFFFFF" fillOpacity="0.15" />
      <rect x="10" y="34" width="44" height="7" fill="#FFFFFF" fillOpacity="0.5" rx="2" />
      {[52, 66, 80, 94, 108, 122, 136].map((y, i) => (
        <rect key={y} x="10" y={y} width={i % 2 === 0 ? 40 : 36} height="6" fill="#FFFFFF" fillOpacity="0.2" rx="2" />
      ))}

      {/* Page header with back arrow + title + Save */}
      <rect x="72" y="0" width="288" height="32" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="82" y="11" width="8" height="10" fill="#CBD5E1" rx="1" />
      <rect x="96" y="12" width="72" height="8" fill="#1E293B" fillOpacity="0.7" rx="2" />
      <rect x="318" y="9" width="34" height="14" fill="#2563EB" rx="3" />

      {/* Content bg */}
      <rect x="72" y="32" width="288" height="188" fill="#F8FAFC" />

      {/* Centered form card */}
      <rect x="86" y="40" width="260" height="168" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="3" />

      {/* Card title row */}
      <rect x="96" y="48" width="90" height="7" fill="#94A3B8" rx="2" />
      <rect x="314" y="46" width="24" height="11" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" rx="2" />

      {/* Description lines */}
      <rect x="96" y="62" width="220" height="5" fill="#E2E8F0" rx="1" />
      <rect x="96" y="71" width="160" height="5" fill="#E2E8F0" rx="1" />

      {/* Rule 1 — selects row + chips input */}
      <rect x="96" y="84" width="108" height="13" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" rx="2" />
      <rect x="100" y="88" width="60" height="5" fill="#CBD5E1" rx="1" />
      <rect x="212" y="87" width="6" height="6" fill="#CBD5E1" rx="1" />
      <rect x="212" y="84" width="108" height="13" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" rx="2" />
      <rect x="216" y="88" width="60" height="5" fill="#CBD5E1" rx="1" />
      <rect x="314" y="87" width="6" height="6" fill="#CBD5E1" rx="1" />
      {/* Chips input */}
      <rect x="96" y="102" width="224" height="16" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" rx="2" />
      <rect x="100" y="107" width="28" height="6" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="0.5" rx="3" />
      <rect x="132" y="107" width="32" height="6" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="0.5" rx="3" />
      <rect x="168" y="107" width="24" height="6" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="0.5" rx="3" />

      {/* AND connector */}
      <rect x="152" y="122" width="28" height="10" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" rx="3" />
      <rect x="158" y="125" width="16" height="4" fill="#94A3B8" rx="1" />

      {/* Rule 2 — selects row + chips input */}
      <rect x="96" y="136" width="108" height="13" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" rx="2" />
      <rect x="100" y="140" width="50" height="5" fill="#CBD5E1" rx="1" />
      <rect x="212" y="136" width="108" height="13" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" rx="2" />
      <rect x="216" y="140" width="55" height="5" fill="#CBD5E1" rx="1" />
      <rect x="96" y="154" width="224" height="16" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" rx="2" />
      <rect x="100" y="159" width="36" height="6" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="0.5" rx="3" />
      <rect x="140" y="159" width="28" height="6" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="0.5" rx="3" />

      {/* Add rule button */}
      <rect x="96" y="178" width="68" height="12" fill="none" stroke="#2563EB" strokeWidth="1" rx="3" />
      <rect x="102" y="182" width="56" height="4" fill="#2563EB" rx="1" />
    </svg>
  );
}

export function EditorPreviewDiagram() {
  return (
    <svg viewBox="0 0 360 220" width="100%" xmlns="http://www.w3.org/2000/svg">
      {/* Settings sidebar */}
      <rect x="0" y="0" width="68" height="220" fill="#1E3060" />
      <rect x="8" y="8" width="32" height="14" fill="#2563EB" rx="2" />
      <rect x="0" y="28" width="68" height="16" fill="#FFFFFF" fillOpacity="0.15" />
      <rect x="10" y="32" width="42" height="6" fill="#FFFFFF" fillOpacity="0.5" rx="2" />
      {[48, 62, 76, 90, 104, 118, 132].map((y, i) => (
        <rect key={y} x="10" y={y} width={i % 3 === 0 ? 44 : 38} height="6" fill="#FFFFFF" fillOpacity="0.2" rx="2" />
      ))}

      {/* Page header */}
      <rect x="68" y="0" width="292" height="32" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="78" y="12" width="70" height="8" fill="#1E293B" fillOpacity="0.7" rx="2" />
      <rect x="282" y="9" width="36" height="14" fill="none" stroke="#CBD5E1" strokeWidth="1" rx="3" />
      <rect x="322" y="9" width="30" height="14" fill="#2563EB" rx="3" />

      {/* Left editor panel ~55% */}
      <rect x="68" y="32" width="162" height="188" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />

      {/* Section cards in left panel */}
      {[38, 90, 142].map((y, si) => (
        <g key={si}>
          <rect x="74" y={y} width="150" height="46" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="2" />
          {/* Card header row */}
          <rect x="78" y={y + 5} width="6" height="10" fill="#E2E8F0" rx="1" />
          <rect x="88" y={y + 7} width="50" height="6" fill="#CBD5E1" rx="2" />
          <rect x="168" y={y + 6} width="18" height="8" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5" rx="2" />
          <rect x="188" y={y + 6} width="14" height="8" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5" rx="2" />
          {/* Sub-items */}
          {[y + 18, y + 30].map((iy, ii) => (
            <g key={ii}>
              <rect x="82" y={iy} width="6" height="8" fill="#E2E8F0" rx="1" />
              <rect x="92" y={iy + 1} width="44" height="5" fill="#CBD5E1" rx="1" />
              {ii === 0 && si === 1 && (
                <rect x="138" y={iy} width="22" height="8" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="0.5" rx="2" />
              )}
              <rect x="166" y={iy} width="12" height="8" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5" rx="1" />
              <rect x="180" y={iy} width="12" height="8" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5" rx="1" />
            </g>
          ))}
        </g>
      ))}

      {/* Right preview panel ~45% */}
      <rect x="230" y="32" width="130" height="188" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="238" y="38" width="40" height="6" fill="#94A3B8" rx="2" />

      {/* Phone-frame preview */}
      <rect x="252" y="50" width="76" height="160" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" rx="8" />
      {/* Phone notch */}
      <rect x="274" y="52" width="32" height="5" fill="#E2E8F0" rx="2" />
      {/* Preview image placeholder */}
      <rect x="256" y="62" width="68" height="36" fill="#E2E8F0" rx="2" />
      <rect x="278" y="74" width="24" height="12" fill="#CBD5E1" rx="2" />
      {/* Preview content rows */}
      {[104, 116, 128, 140, 152, 164, 176, 188].map((y, i) => (
        <rect key={y} x="258" y={y} width={i % 3 === 0 ? 64 : i % 3 === 1 ? 52 : 44} height="5" fill="#CBD5E1" rx="1" />
      ))}
    </svg>
  );
}

export function GuestJourneyDiagram() {
  return (
    <svg viewBox="0 0 360 220" width="100%" xmlns="http://www.w3.org/2000/svg">
      {/* Settings-style sidebar */}
      <rect x="0" y="0" width="68" height="220" fill="#1E3060" />
      <rect x="8" y="8" width="32" height="14" fill="#2563EB" rx="2" />
      <rect x="0" y="28" width="68" height="16" fill="#FFFFFF" fillOpacity="0.15" />
      <rect x="10" y="32" width="42" height="6" fill="#FFFFFF" fillOpacity="0.5" rx="2" />
      {[48, 62, 76, 90, 104, 118, 132, 146].map((y, i) => (
        <rect key={y} x="10" y={y} width={i % 3 === 0 ? 44 : 36} height="6" fill="#FFFFFF" fillOpacity="0.2" rx="2" />
      ))}

      {/* Page header */}
      <rect x="68" y="0" width="292" height="32" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="78" y="12" width="68" height="8" fill="#1E293B" fillOpacity="0.7" rx="2" />
      <rect x="318" y="9" width="34" height="14" fill="none" stroke="#CBD5E1" strokeWidth="1" rx="3" />

      {/* Tabs */}
      <rect x="68" y="32" width="292" height="22" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.5" />
      <rect x="78" y="38" width="68" height="8" fill="#2563EB" fillOpacity="0.15" rx="2" />
      <rect x="80" y="40" width="64" height="4" fill="#2563EB" rx="1" />
      <rect x="78" y="46" width="68" height="2" fill="#2563EB" />
      <rect x="152" y="40" width="54" height="4" fill="#94A3B8" rx="1" />

      {/* Content area */}
      <rect x="68" y="54" width="292" height="166" fill="#F8FAFC" />

      {/* Section label: PRE-ARRIVAL */}
      <rect x="78" y="62" width="48" height="6" fill="#2563EB" rx="1" />

      {/* Vertical timeline line */}
      <rect x="110" y="74" width="2" height="138" fill="#CBD5E1" />

      {/* Timeline entries */}
      {[
        { y: 74, label1: "14 days", label2: "before arrival" },
        { y: 120, label1: "7 days", label2: "before arrival" },
        { y: 166, label1: "1 day", label2: "before arrival" },
      ].map(({ y, label1, label2 }, i) => (
        <g key={i}>
          {/* Time label */}
          <rect x="74" y={y + 2} width="30" height="4" fill="#94A3B8" rx="1" />
          <rect x="76" y={y + 9} width="26" height="4" fill="#CBD5E1" rx="1" />
          {/* Dot on timeline */}
          <circle cx="111" cy={y + 6} r="4" fill="#2563EB" />
          <circle cx="111" cy={y + 6} r="2" fill="#FFFFFF" />
          {/* Message card */}
          <rect x="120" y={y} width="228" height="40" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="3" />
          {/* Card title row */}
          <rect x="128" y={y + 7} width="50" height="6" fill="#CBD5E1" rx="2" />
          <rect x="182" y={y + 6} width="22" height="8" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="0.5" rx="2" />
          {/* Toggle */}
          <rect x="326" y={y + 6} width="18" height="10" fill="#2563EB" rx="5" />
          <circle cx="340" cy={y + 11} r="4" fill="#FFFFFF" />
          {/* Sub-info */}
          <rect x="128" y={y + 18} width="40" height="4" fill="#E2E8F0" rx="1" />
          <rect x="172" y={y + 18} width="60" height="4" fill="#E2E8F0" rx="1" />
          {/* Mini tabs */}
          <rect x="128" y={y + 27} width="18" height="6" fill="none" rx="1" />
          <rect x="128" y={y + 27} width="18" height="4" fill="#2563EB" rx="1" />
          <rect x="128" y={y + 31} width="18" height="2" fill="#2563EB" />
          <rect x="150" y={y + 27} width="18" height="4" fill="#CBD5E1" rx="1" />
        </g>
      ))}
    </svg>
  );
}

export function TabbedContentDiagram() {
  return (
    <svg viewBox="0 0 360 220" width="100%" xmlns="http://www.w3.org/2000/svg">
      <Sidebar selectedIndex={0} />
      <PageHeader hasAction />

      {/* Content bg */}
      <rect x="52" y="34" width="308" height="186" fill="#F8FAFC" />

      {/* Tabs row */}
      <rect x="52" y="34" width="308" height="28" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      {/* Active tab */}
      <rect x="62" y="42" width="68" height="12" fill="#EFF6FF" rx="2" />
      <rect x="66" y="45" width="60" height="6" fill="#2563EB" rx="1" />
      <rect x="62" y="53" width="68" height="2" fill="#2563EB" />
      {/* Other tabs */}
      <rect x="136" y="42" width="72" height="12" fill="none" rx="2" />
      <rect x="140" y="45" width="64" height="6" fill="#94A3B8" rx="1" />
      <rect x="214" y="42" width="68" height="12" fill="none" rx="2" />
      <rect x="218" y="45" width="60" height="6" fill="#94A3B8" rx="1" />

      {/* Card grid */}
      {[
        { x: 62, y: 70 }, { x: 182, y: 70 }, { x: 302, y: 70 },
        { x: 62, y: 148 }, { x: 182, y: 148 },
      ].map((pos, i) => (
        <g key={i}>
          <rect x={pos.x} y={pos.y} width="110" height="70" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="3" />
          <rect x={pos.x + 8} y={pos.y + 10} width="60" height="7" fill="#CBD5E1" rx="2" />
          <rect x={pos.x + 8} y={pos.y + 22} width="94" height="18" fill="#F8FAFC" rx="2" />
          <rect x={pos.x + 8} y={pos.y + 46} width="40" height="6" fill="#E2E8F0" rx="1" />
          <rect x={pos.x + 72} y={pos.y + 43} width="30" height="12" fill="#2563EB" fillOpacity="0.15" stroke="#2563EB" strokeWidth="1" rx="2" />
        </g>
      ))}
    </svg>
  );
}

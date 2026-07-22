"use client";

import React from "react";
import {
  Palette,
  Type,
  Grid,
  Square,
  Sun,
  MousePointer,
  FormInput,
  Box,
  ShoppingBag,
  Smile,
  Layout,
  Code2,
  Sliders,
  ShieldCheck,
  Zap,
  BellRing,
} from "lucide-react";

interface DsSidebarProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

const NAVIGATION_ITEMS = [
  { id: "colors", number: "01", title: "Colors", icon: Palette },
  { id: "typography", number: "02", title: "Typography", icon: Type },
  { id: "grid", number: "03", title: "Grid & Spacing", icon: Grid },
  { id: "radius", number: "04", title: "Border Radius", icon: Square },
  { id: "shadow", number: "05", title: "Shadows & Elevation", icon: Sun },
  { id: "buttons", number: "06", title: "Buttons & Actions", icon: MousePointer },
  { id: "inputs", number: "07", title: "Inputs & Controls", icon: FormInput },
  { id: "components", number: "08", title: "UI Components", icon: Box },
  { id: "product-card", number: "09", title: "Product Card", icon: ShoppingBag },
  { id: "icons", number: "10", title: "Icon System", icon: Smile },
  { id: "layout", number: "11", title: "Layout Guidelines", icon: Layout },
  { id: "tailwind-tokens", number: "12", title: "Tailwind Tokens", icon: Code2 },
  { id: "shadcn-theme", number: "13", title: "shadcn/ui Theme", icon: Sliders },
  { id: "accessibility", number: "14", title: "Accessibility", icon: ShieldCheck },
  { id: "motion", number: "15", title: "Motion & Animation", icon: Zap },
  { id: "toast-alerts", number: "16", title: "Toast Alerts", icon: BellRing },
];

export function DsSidebar({ activeSection, onSelectSection }: DsSidebarProps) {
  return (
    <aside className="w-60 shrink-0 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto bg-white dark:bg-zinc-950 border-r border-[#E5E7EB] dark:border-zinc-800 p-4 space-y-6">
      <div>
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] dark:text-zinc-500 mb-3 px-2">
          Design System Tokens
        </h3>
        <ul className="space-y-0.5">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onSelectSection(item.id);
                    const el = document.getElementById(item.id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-[8px] text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-red-50 text-[#E30613] font-bold dark:bg-red-950/40 dark:text-red-400 shadow-2xs"
                      : "text-[#374151] hover:text-[#111827] hover:bg-[#F8F9FA] dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-[#E30613]" : "text-[#6B7280]"
                      }`}
                    />
                    <span>{item.title}</span>
                  </div>
                  <span
                    className={`text-[10px] font-mono ${
                      isActive ? "text-[#E30613]" : "text-slate-400"
                    }`}
                  >
                    {item.number}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-3 bg-[#F8F9FA] dark:bg-zinc-900 rounded-[10px] border border-[#E5E7EB] dark:border-zinc-800 text-[11px] text-[#6B7280] space-y-1">
        <p className="font-bold text-[#111827] dark:text-zinc-200">
          Boonthavorn Design System
        </p>
        <p>Enterprise UI Specification for E-Commerce Platforms</p>
      </div>
    </aside>
  );
}

"use client";

import React from "react";
import { Card } from "@/components/ui/card";

const SPACING_TOKENS = [
  { key: "4", px: "4px", rem: "0.25rem", label: "xxs (4px)" },
  { key: "8", px: "8px", rem: "0.5rem", label: "xs (8px)" },
  { key: "12", px: "12px", rem: "0.75rem", label: "sm (12px)" },
  { key: "16", px: "16px", rem: "1.0rem", label: "md (16px)" },
  { key: "24", px: "24px", rem: "1.5rem", label: "lg (24px)" },
  { key: "32", px: "32px", rem: "2.0rem", label: "xl (32px)" },
  { key: "40", px: "40px", rem: "2.5rem", label: "2xl (40px)" },
  { key: "48", px: "48px", rem: "3.0rem", label: "3xl (48px)" },
  { key: "64", px: "64px", rem: "4.0rem", label: "4xl (64px)" },
  { key: "80", px: "80px", rem: "5.0rem", label: "5xl (80px)" },
  { key: "96", px: "96px", rem: "6.0rem", label: "6xl (96px)" },
];

export function Section03Grid() {
  return (
    <section id="grid" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>03</span>
          <span>•</span>
          <span>Layout & Grid System</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          12 Columns Grid & 8-Point Spacing
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          ระยะห่าง (Spacing) และระบบโครงสร้างตาราง Grid 12 คอลัมน์ (Max-Width 1440px / Content 1280px / Gap 24px)
        </p>
      </div>

      {/* 8-Point Spacing Scale */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-[#111827] dark:text-zinc-200">
          8-Point Spacing Tokens
        </h3>
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <div className="space-y-3">
            {SPACING_TOKENS.map((token, idx) => (
              <div key={idx} className="flex items-center gap-4 text-xs">
                <div className="w-24 font-mono font-bold text-[#111827] dark:text-zinc-200 shrink-0">
                  {token.label}
                </div>
                <div className="w-20 font-mono text-[#6B7280] text-[11px] shrink-0">
                  {token.rem}
                </div>
                <div className="flex-1 bg-[#F8F9FA] dark:bg-zinc-800 rounded p-1 border border-[#E5E7EB]">
                  <div
                    className="bg-[#E30613] h-4 rounded-xs transition-all duration-200"
                    style={{ width: token.px }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* 12-Column Visual Grid Demo */}
      <div className="space-y-3 pt-4">
        <h3 className="text-sm font-bold text-[#111827] dark:text-zinc-200">
          Visual 12-Column Grid Demonstration (24px Gap)
        </h3>
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-[#F8F9FA] dark:bg-zinc-900 rounded-[12px] p-4">
          <div className="grid grid-cols-12 gap-3 text-center text-[10px] font-mono font-bold">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-red-50 text-[#E30613] border border-red-200 py-6 rounded-[6px] dark:bg-red-950/40 dark:border-red-900 dark:text-red-400"
              >
                Col {i + 1}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

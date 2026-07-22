"use client";

import React from "react";

const SHADOW_TOKENS = [
  {
    name: "Small Shadow",
    code: "0 1px 3px rgba(0,0,0,.08)",
    css: "shadow-[0_1px_3px_rgba(0,0,0,0.08)]",
    usage: "การ์ดทั่วไป, ปุ่ม Hover, Dropdown Items",
  },
  {
    name: "Medium Shadow",
    code: "0 4px 12px rgba(0,0,0,.08)",
    css: "shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
    usage: "Product Card Hover, Sticky Header Bar",
  },
  {
    name: "Large Shadow",
    code: "0 12px 32px rgba(0,0,0,.12)",
    css: "shadow-[0_12px_32px_rgba(0,0,0,0.12)]",
    usage: "Popover Menu, Floating Bar, Drawer Sidebar",
  },
  {
    name: "Dialog Shadow",
    code: "0 24px 64px rgba(0,0,0,.18)",
    css: "shadow-[0_24px_64px_rgba(0,0,0,0.18)]",
    usage: "Modal Dialog, Confirmation Windows",
  },
];

export function Section05Shadow() {
  return (
    <section id="shadow" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>05</span>
          <span>•</span>
          <span>Shadow & Elevation System</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Soft & Natural Elevation Levels
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          ระบบเงาเพื่อสร้างมิติความลึกขององค์ประกอบ UI อย่างเป็นธรรมชาติ
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SHADOW_TOKENS.map((token, idx) => (
          <div
            key={idx}
            className={`p-6 bg-white dark:bg-zinc-900 rounded-[12px] border border-[#E5E7EB] dark:border-zinc-800 flex flex-col justify-between space-y-6 ${token.css}`}
          >
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#E30613]">{token.name}</span>
              <p className="text-xs font-mono text-[#6B7280] break-all">
                {token.code}
              </p>
            </div>

            <div className="h-20 bg-[#F8F9FA] dark:bg-zinc-800/50 rounded-[8px] border border-dashed border-slate-300 flex items-center justify-center">
              <span className="text-xs font-semibold text-[#374151] dark:text-zinc-300">
                Elevation Preview
              </span>
            </div>

            <p className="text-[11px] text-[#6B7280] pt-2 border-t border-[#EEEEEE] dark:border-zinc-800">
              {token.usage}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

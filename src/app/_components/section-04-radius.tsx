"use client";

import React from "react";
import { Card } from "@/components/ui/card";

const RADIUS_TOKENS = [
  { name: "Input Radius", value: "8px", usage: "ช่องกรอกข้อมูล, Dropdown, Search Inputs", className: "rounded-[8px]" },
  { name: "Button Radius", value: "8px", usage: "ปุ่มกดหลัก Primary, Secondary, Action Buttons", className: "rounded-[8px]" },
  { name: "Card Radius", value: "12px", usage: "การ์ดข้อมูล, Product Card, Container Boxes", className: "rounded-[12px]" },
  { name: "Dialog Radius", value: "16px", usage: "Modal Dialog, Popover Container, Alert Windows", className: "rounded-[16px]" },
  { name: "Badge Radius", value: "999px", usage: "ป้ายสถานะ Badge, Pill Tag, Counter Chips", className: "rounded-full" },
];

export function Section04Radius() {
  return (
    <section id="radius" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>04</span>
          <span>•</span>
          <span>Border Radius System</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Subtle & Consistent Corner Radii
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          รัศมีมุมของส่วนประกอบ UI เพื่อความมนอย่างเหมาะสมและมีมาตรฐาน
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {RADIUS_TOKENS.map((token, idx) => (
          <Card
            key={idx}
            className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs hover:shadow-md transition-all p-4 bg-white dark:bg-zinc-900 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#E30613]">{token.name}</span>
              <div className="text-xl font-bold font-mono text-[#111827] dark:text-zinc-100">
                {token.value}
              </div>
            </div>

            {/* Visual Demo Box */}
            <div
              className={`h-24 w-full bg-red-50 dark:bg-red-950/40 border-2 border-dashed border-[#E30613] flex items-center justify-center ${token.className}`}
            >
              <span className="text-xs font-mono font-bold text-[#E30613]">
                {token.value}
              </span>
            </div>

            <p className="text-[11px] text-[#6B7280] leading-tight">
              {token.usage}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

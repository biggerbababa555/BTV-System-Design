"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Section15Motion() {
  return (
    <section id="motion" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>15</span>
          <span>•</span>
          <span>Motion & Animation System</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Motion Guidelines & Micro-Interactions
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          ระยะเวลาและเอฟเฟกต์การเคลื่อนไหว (Durations 150ms, 200ms, 300ms / Ease-in-out)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Fast 150ms */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#E30613]">150ms (Fast)</span>
            <h3 className="text-base font-bold text-[#111827] dark:text-zinc-100">
              Press & Click Interactions
            </h3>
            <p className="text-xs text-[#6B7280]">
              ใช้สำหรับจังหวะการกดปุ่ม (Active scale 95%) หรือการกด Checkbox/Switch
            </p>
          </div>

          <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800 rounded-[8px] flex items-center justify-center border border-[#E5E7EB]">
            <Button className="h-10 px-5 text-xs font-semibold bg-[#E30613] hover:bg-[#C8000E] text-white rounded-[8px] active:scale-95 transition-all duration-150">
              ทดสอบกด 150ms
            </Button>
          </div>
        </Card>

        {/* Standard 200ms */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#E30613]">200ms (Standard)</span>
            <h3 className="text-base font-bold text-[#111827] dark:text-zinc-100">
              Hover & State Transitions
            </h3>
            <p className="text-xs text-[#6B7280]">
              ใช้สำหรับการเลื่อนเมาส์ชี้บนการ์ด (Hover lift -2px) และการเปลี่ยนสีปุ่ม
            </p>
          </div>

          <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800 rounded-[8px] flex items-center justify-center border border-[#E5E7EB]">
            <div className="px-5 py-2.5 bg-white dark:bg-zinc-900 text-xs font-semibold border border-[#E5E7EB] rounded-[8px] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              Hover ลอยตัว 200ms
            </div>
          </div>
        </Card>

        {/* Slow 300ms */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#E30613]">300ms (Complex)</span>
            <h3 className="text-base font-bold text-[#111827] dark:text-zinc-100">
              Dialog & Drawer Transitions
            </h3>
            <p className="text-xs text-[#6B7280]">
              ใช้สำหรับการเปิดหน้าต่าง Modal Dialog, Dropdown Menu, หรือ Drawer Sidebar
            </p>
          </div>

          <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800 rounded-[8px] flex items-center justify-center border border-[#E5E7EB]">
            <div className="px-5 py-2.5 bg-slate-800 text-white text-xs font-semibold rounded-[8px] hover:bg-[#E30613] transition-colors duration-300 cursor-pointer">
              Transition 300ms
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

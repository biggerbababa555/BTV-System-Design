"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Eye, Keyboard, Zap, CheckCircle2 } from "lucide-react";

export function Section14Accessibility() {
  return (
    <section id="accessibility" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>14</span>
          <span>•</span>
          <span>Accessibility Guidelines (a11y)</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Accessibility Standards (WCAG 2.1 AA)
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          มาตรฐานการเข้าถึงสำหรับผู้ใช้งานทุกคน (Contrast 4.5:1, Focus Ring, Keyboard Nav, ARIA)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contrast Ratio */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#E30613] font-bold text-sm">
            <Eye className="w-5 h-5" />
            <span>Color Contrast (อัตราส่วนความต่างสี)</span>
          </div>
          <p className="text-xs text-[#374151] dark:text-zinc-300 leading-relaxed">
            ทุกข้อความและปุ่มกดหลักต้องมีอัตราส่วนความต่างสี (Contrast Ratio) อย่างน้อย <b>4.5:1</b> สำหรับตัวอักษรขนาดปกติ และ <b>3:1</b> สำหรับตัวอักษรขนาดใหญ่ (WCAG 2.1 AA Standard)
          </p>
          <div className="p-3 bg-emerald-50 text-emerald-800 rounded-[8px] border border-emerald-200 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>#E30613 บนพื้นหลังสีขาว #FFFFFF ผ่านเกณฑ์ AA Contrast</span>
          </div>
        </Card>

        {/* Focus Ring & Keyboard Nav */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#E30613] font-bold text-sm">
            <Keyboard className="w-5 h-5" />
            <span>Focus Ring & Keyboard Navigation</span>
          </div>
          <p className="text-xs text-[#374151] dark:text-zinc-300 leading-relaxed">
            ทุก Interactive Element (Inputs, Buttons, Links) ต้องมีวงแหวนสถาวะ Focus ชัดเจน (Focus Ring 2px Color `#E30613` opacity 15%) เมื่อผู้ใช้กดปุ่ม Tab บนคีย์บอร์ด
          </p>
          <div className="p-3 bg-[#F8F9FA] dark:bg-zinc-800 rounded-[8px] border border-[#E5E7EB]">
            <input
              type="text"
              defaultValue="ทดสอบกด Tab เพื่อดู Focus Ring"
              className="w-full h-9 px-3 text-xs bg-white dark:bg-zinc-900 border border-[#E5E7EB] rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#E30613]/30 outline-none"
            />
          </div>
        </Card>

        {/* ARIA Attributes */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#E30613] font-bold text-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>ARIA Attributes & Screen Readers</span>
          </div>
          <p className="text-xs text-[#374151] dark:text-zinc-300 leading-relaxed">
            องค์ประกอบที่เป็นไอคอนอย่างเดียว ต้องใส่ <code>aria-label</code> หรือ <code>sr-only</code> เพื่อให้โปรแกรมอ่านหน้าจอ (Screen Reader) อ่านความหมายได้ถูกต้อง
          </p>
        </Card>

        {/* Motion Reduction */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#E30613] font-bold text-sm">
            <Zap className="w-5 h-5" />
            <span>Prefers-Reduced-Motion</span>
          </div>
          <p className="text-xs text-[#374151] dark:text-zinc-300 leading-relaxed">
            รองรับ <code>motion-reduce:transition-none</code> สำหรับผู้ใช้ที่ตั้งค่าปิดอนิเมชันในระบบปฏิบัติการ
          </p>
        </Card>
      </div>
    </section>
  );
}

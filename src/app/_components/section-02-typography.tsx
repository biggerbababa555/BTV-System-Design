"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const TYPO_ITEMS = [
  { level: "Section Header (หัวข้อส่วน)", size: "14px", weight: "700 Bold", lh: "150%", class: "text-sm font-bold text-black dark:text-white", tag: "มาตรฐานหัวข้อ" },
  { level: "Body Text (เนื้อหาทั่วไป)", size: "14px", weight: "400 Regular", lh: "150%", class: "text-sm font-normal text-black dark:text-zinc-200", tag: "มาตรฐานเนื้อหา" },
  { level: "Display Title", size: "48px", weight: "700 Bold", lh: "150%", class: "text-5xl font-bold leading-tight text-black dark:text-white", tag: "Display" },
  { level: "H1 Page Header", size: "32px", weight: "700 Bold", lh: "150%", class: "text-3xl font-bold leading-snug text-black dark:text-white", tag: "H1" },
  { level: "H2 Component Header", size: "24px", weight: "600 SemiBold", lh: "150%", class: "text-xl font-semibold text-black dark:text-white", tag: "H2" },
  { level: "H3 SubHeader", size: "18px", weight: "600 SemiBold", lh: "150%", class: "text-base font-semibold text-black dark:text-white", tag: "H3" },
  { level: "Body Small", size: "12px", weight: "400 Regular", lh: "150%", class: "text-xs font-normal text-zinc-600 dark:text-zinc-400", tag: "Small" },
];

export function Section02Typography() {
  const [sampleText, setSampleText] = useState("ระบบบริหารจัดการข้อมูลสินค้าและแคตตาล็อกออนไลน์ บุญถาวร");

  return (
    <section id="typography" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] dark:border-zinc-800 pb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
            <span>02</span>
            <span>•</span>
            <span>Typography System</span>
          </div>
          <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
            IBM Plex Sans Thai & Noto Sans Thai
          </h2>
          <p className="text-sm text-[#6B7280] dark:text-zinc-400 mt-1">
            ระบบฟอนต์ทางการสำหรับแสดงผลในทุกแพลตฟอร์มของบุญถาวร
          </p>
        </div>

        {/* Interactive Custom Text Input */}
        <div className="w-full sm:w-80">
          <label className="text-xs font-semibold text-[#374151] dark:text-zinc-300 block mb-1">
            ทดลองพิมพ์ข้อความตัวอย่าง:
          </label>
          <Input
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
            className="h-8 text-xs bg-white dark:bg-zinc-900 border-[#E5E7EB] dark:border-zinc-800 rounded-[8px]"
          />
        </div>
      </div>

      {/* Primary Typography Guidelines Callout */}
      <div className="bg-red-50/60 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-[12px] p-5 space-y-3">
        <h3 className="text-sm font-bold text-[#111827] dark:text-white flex items-center gap-2">
          <span>📌 กฎมาตรฐาน Tailwind สำหรับ Typography ทีม Dev</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-[8px] border border-red-100 dark:border-red-900/30 space-y-1">
            <span className="font-bold text-[#E30613] block">1. Title / หัวข้อส่วนประกอบ</span>
            <code className="text-[11px] bg-slate-100 dark:bg-zinc-800 text-[#111827] dark:text-zinc-200 px-2 py-0.5 rounded font-mono block">
              font-bold text-sm text-black
            </code>
            <p className="text-[#6B7280] dark:text-zinc-400 text-[11px]">ใช้สำหรับชื่อการ์ด หัวข้อตาราง และ Label สำคัญทั้งหมด</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-[8px] border border-red-100 dark:border-red-900/30 space-y-1">
            <span className="font-bold text-[#E30613] block">2. Body / เนื้อหาทั่วไป</span>
            <code className="text-[11px] bg-slate-100 dark:bg-zinc-800 text-[#111827] dark:text-zinc-200 px-2 py-0.5 rounded font-mono block">
              text-sm text-black
            </code>
            <p className="text-[#6B7280] dark:text-zinc-400 text-[11px]">ใช้สำหรับคำอธิบาย ข้อมูลตาราง ข้อความหลักในหน้าเว็บ</p>
          </div>
        </div>
      </div>

      <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-0 overflow-hidden divide-y divide-[#EEEEEE] dark:divide-zinc-800">
        {TYPO_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#F8F9FA] dark:hover:bg-zinc-800/40 transition-colors"
          >
            <div className="md:col-span-4 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#E30613]">{item.level}</span>
                <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-mono bg-slate-50 dark:bg-zinc-800">
                  {item.tag}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#6B7280] dark:text-zinc-400 font-mono">
                <span>{item.size}</span>
                <span>•</span>
                <span>{item.weight}</span>
              </div>
            </div>
            <div className="md:col-span-8 overflow-hidden">
              <p className={item.class}>
                {sampleText || "บุญถาวร บุญใส่ใจ"}
              </p>
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
}

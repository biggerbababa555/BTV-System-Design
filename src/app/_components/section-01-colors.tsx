"use client";

import React from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";

interface ColorSwatchProps {
  name: string;
  hex: string;
  rgb: string;
  tailwind: string;
  cssVar: string;
  usage: string;
  bgClass?: string;
  textColor?: string;
}

function ColorSwatch({
  name,
  hex,
  rgb,
  tailwind,
  cssVar,
  usage,
  bgClass,
  textColor = "text-white",
}: ColorSwatchProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    toast.success(`คัดลอก ${hex} สำเร็จ!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      onClick={handleCopy}
      className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden rounded-[12px] bg-white dark:bg-zinc-900 group p-0 py-0 gap-0"
    >
      <div
        className={`h-24 w-full p-3 flex flex-col justify-between ${bgClass}`}
        style={!bgClass ? { backgroundColor: hex } : undefined}
      >
        <div className="flex justify-between items-center">
          <span className={`text-xs font-bold ${textColor}`}>{name}</span>
          <button className={`p-1 rounded bg-black/10 hover:bg-black/20 ${textColor}`}>
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
        <span className={`text-sm font-mono font-bold ${textColor}`}>{hex}</span>
      </div>
      <div className="p-3 text-[11px] space-y-1 bg-white dark:bg-zinc-900">
        <div className="flex justify-between text-[#6B7280]">
          <span>RGB:</span> <span className="font-mono text-[#111827] dark:text-zinc-200">{rgb}</span>
        </div>
        <div className="flex justify-between text-[#6B7280]">
          <span>Tailwind:</span> <span className="font-mono text-[#E30613]">{tailwind}</span>
        </div>
        <div className="flex justify-between text-[#6B7280]">
          <span>CSS Var:</span> <span className="font-mono text-blue-600">{cssVar}</span>
        </div>
        <p className="text-[#374151] dark:text-zinc-300 font-medium pt-1 border-t border-[#EEEEEE] dark:border-zinc-800">
          {usage}
        </p>
      </div>
    </Card>
  );
}

export function Section01Colors() {
  return (
    <section id="colors" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>01</span>
          <span>•</span>
          <span>Color Palette</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Primary & Brand Color System
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          ระบบสีทางการของบุญถาวร (Boonthavorn Corporate Identity Color Tokens)
        </p>
      </div>

      {/* Primary Brand Palette */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-[#111827] dark:text-zinc-200 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E30613]" />
          Primary Brand (Boonthavorn Red)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ColorSwatch
            name="Primary 500 (Base CI)"
            hex="#E30613"
            rgb="227, 6, 19"
            tailwind="bg-[#E30613]"
            cssVar="var(--color-primary)"
            usage="ปุ่มหลัก, โลโก้, สถานะหลัก, Active Links"
          />
          <ColorSwatch
            name="Primary 600 (Hover)"
            hex="#C8000E"
            rgb="200, 0, 14"
            tailwind="bg-[#C8000E]"
            cssVar="var(--color-primary-hover)"
            usage="สถานะ Hover เมื่อเมาส์ชี้บนปุ่ม Primary"
          />
          <ColorSwatch
            name="Primary 700 (Active)"
            hex="#A8000B"
            rgb="168, 0, 11"
            tailwind="bg-[#A8000B]"
            cssVar="var(--color-primary-active)"
            usage="สถานะ Active / Pressed เมื่อคลิกปุ่ม"
          />
        </div>
      </div>

      {/* Semantic Status Colors */}
      <div className="space-y-3 pt-4">
        <h3 className="text-sm font-bold text-[#111827] dark:text-zinc-200">
          Semantic Status Palette
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch
            name="Success"
            hex="#22C55E"
            rgb="34, 197, 94"
            tailwind="bg-emerald-500"
            cssVar="var(--color-success)"
            usage="สำเร็จ, ยืนยันการสั่งซื้อ, พร้อมส่ง"
          />
          <ColorSwatch
            name="Warning"
            hex="#F59E0B"
            rgb="245, 158, 11"
            tailwind="bg-amber-500"
            cssVar="var(--color-warning)"
            usage="เตือน, ใกล้หมดเวลา Cutoff, รอดำเนินการ"
          />
          <ColorSwatch
            name="Error / Danger"
            hex="#EF4444"
            rgb="239, 68, 68"
            tailwind="bg-red-500"
            cssVar="var(--color-error)"
            usage="ยกเลิก, สินค้าหมด, ข้อผิดพลาด"
          />
          <ColorSwatch
            name="Info"
            hex="#3B82F6"
            rgb="59, 130, 246"
            tailwind="bg-blue-500"
            cssVar="var(--color-info)"
            usage="สายส่ง, ข้อมูลทั่วไป, หมายเลข DO"
          />
        </div>
      </div>

      {/* Neutral & Surfaces */}
      <div className="space-y-3 pt-4">
        <h3 className="text-sm font-bold text-[#111827] dark:text-zinc-200">
          Neutral & Surface Tones
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <ColorSwatch
            name="Background"
            hex="#FFFFFF"
            rgb="255, 255, 255"
            tailwind="bg-white"
            cssVar="var(--bg-main)"
            usage="พื้นหลังการ์ด, Surface"
            textColor="text-slate-800"
          />
          <ColorSwatch
            name="Secondary BG"
            hex="#F8F9FA"
            rgb="248, 249, 250"
            tailwind="bg-[#F8F9FA]"
            cssVar="var(--bg-secondary)"
            usage="พื้นหลังหน้าเว็บหลัก, Section BG"
            textColor="text-slate-800"
          />
          <ColorSwatch
            name="Border"
            hex="#E5E7EB"
            rgb="229, 231, 235"
            tailwind="border-[#E5E7EB]"
            cssVar="var(--border-default)"
            usage="เส้นขอบตาราง, ขอบการ์ด"
            textColor="text-slate-800"
          />
          <ColorSwatch
            name="Heading Text"
            hex="#111827"
            rgb="17, 24, 39"
            tailwind="text-[#111827]"
            cssVar="var(--text-heading)"
            usage="ข้อความหัวข้อหลัก H1-H5"
          />
          <ColorSwatch
            name="Body Text"
            hex="#374151"
            rgb="55, 65, 81"
            tailwind="text-[#374151]"
            cssVar="var(--text-body)"
            usage="ข้อความเนื้อหาทั่วไป"
          />
        </div>
      </div>
    </section>
  );
}

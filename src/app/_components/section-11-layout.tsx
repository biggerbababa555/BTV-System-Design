"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Monitor, Tablet, Smartphone } from "lucide-react";

export function Section11Layout() {
  return (
    <section id="layout" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>11</span>
          <span>•</span>
          <span>Layout System Specifications</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Layout Guidelines & Responsive Breakpoints
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          โครงสร้างเลย์เอาต์หน้าเว็บ (Header 72px / Sidebar 240px / Container 1440px)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Desktop Layout */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <div className="flex items-center gap-2 text-[#E30613] font-bold text-sm">
            <Monitor className="w-5 h-5" />
            <span>Desktop Layout (&ge; 1024px)</span>
          </div>
          <ul className="text-xs space-y-2 text-[#374151] dark:text-zinc-300">
            <li>• Container Max-Width: <b>1440px</b></li>
            <li>• Content Width: <b>1280px</b></li>
            <li>• Header Height: <b>72px (Sticky)</b></li>
            <li>• Sidebar Width: <b>240px (Sticky)</b></li>
            <li>• Grid: <b>12 Columns (24px Gap)</b></li>
          </ul>
        </Card>

        {/* Tablet Layout */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <div className="flex items-center gap-2 text-[#E30613] font-bold text-sm">
            <Tablet className="w-5 h-5" />
            <span>Tablet Layout (768px - 1023px)</span>
          </div>
          <ul className="text-xs space-y-2 text-[#374151] dark:text-zinc-300">
            <li>• Container: <b>Fluid 100% (Padding 24px)</b></li>
            <li>• Header: <b>72px Compact</b></li>
            <li>• Sidebar: <b>Collapsible / Drawer</b></li>
            <li>• Grid: <b>6-8 Columns (16px Gap)</b></li>
          </ul>
        </Card>

        {/* Mobile Layout */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <div className="flex items-center gap-2 text-[#E30613] font-bold text-sm">
            <Smartphone className="w-5 h-5" />
            <span>Mobile Layout (&lt; 768px)</span>
          </div>
          <ul className="text-xs space-y-2 text-[#374151] dark:text-zinc-300">
            <li>• Container: <b>Fluid 100% (Padding 16px)</b></li>
            <li>• Header: <b>56px Compact Mobile Bar</b></li>
            <li>• Navigation: <b>Bottom Nav / Hamburger</b></li>
            <li>• Grid: <b>1 Column (12px Gap)</b></li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  Truck,
  Building2,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Settings,
  Filter,
  Plus,
  ArrowRight,
  LogOut,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ICON_LIST = [
  { name: "Search", icon: Search },
  { name: "User Profile", icon: User },
  { name: "Heart / Wishlist", icon: Heart },
  { name: "Shopping Cart", icon: ShoppingCart },
  { name: "Truck / Queue", icon: Truck },
  { name: "Building / Branch", icon: Building2 },
  { name: "Calendar", icon: Calendar },
  { name: "Check Circle", icon: CheckCircle2 },
  { name: "Alert Triangle", icon: AlertTriangle },
  { name: "Sales Order", icon: FileText },
  { name: "Settings", icon: Settings },
  { name: "Filter", icon: Filter },
  { name: "Plus Add", icon: Plus },
  { name: "Arrow Right", icon: ArrowRight },
  { name: "Logout", icon: LogOut },
  { name: "Map Pin Address", icon: MapPin },
];

export function Section10Icons() {
  return (
    <section id="icons" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>10</span>
          <span>•</span>
          <span>Icon System</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Standardized Icon Set (Lucide Icons)
        </h2>
        <p className="text-sm text-[#6B7280] dark:text-zinc-400 mt-1">
          ระบบไอคอนมาตรฐาน ดึงมาจากแพ็กเกจ <code className="text-[#E30613] font-mono">lucide-react</code> (ขนาด 16px, 20px, 24px, 32px)
        </p>
      </div>

      {/* Lucide Icons Credit Banner */}
      <div className="bg-red-50/60 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-[12px] p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#111827] dark:text-white flex items-center gap-2">
            <span>📦 มาตรฐานคลังไอคอนของบุญถาวร: Lucide Icons</span>
          </h3>
          <a
            href="https://lucide.dev/icons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#E30613] hover:underline flex items-center gap-1"
          >
            ค้นหาไอคอนเพิ่มเติมที่ lucide.dev
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="text-xs text-[#374151] dark:text-zinc-300 leading-relaxed">
          ไอคอนทั้งหมดในระบบจะถูกดึงมาจากโอเพนซอร์ส <b>Lucide Icons (<code className="font-mono">lucide-react</code>)</b> เพื่อให้ได้ดีไซน์ Vector ที่คมชัด น้ำหนักเส้นบางสไตล์ Clean & Modern
        </p>
        <div className="bg-white dark:bg-zinc-900 p-3 rounded-[8px] border border-red-100 dark:border-red-900/30 text-xs font-mono text-[#111827] dark:text-zinc-200 space-y-1">
          <span className="text-[#6B7280] block text-[11px] font-sans">วิธีนำไอคอนไปใช้งานในคอมโพเนนต์:</span>
          <code>import &#123; Truck, Search, ShoppingCart &#125; from "lucide-react";</code>
        </div>
      </div>

      {/* Size Scale Demo */}
      <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
        <h3 className="text-xs font-bold text-[#111827] dark:text-zinc-200">
          Icon Size Standard Scale
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800 rounded-[8px] space-y-2 border border-[#E5E7EB] dark:border-zinc-700">
            <Truck className="w-4 h-4 text-[#E30613] mx-auto" />
            <p className="text-xs font-mono font-bold">16px (Small)</p>
          </div>
          <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800 rounded-[8px] space-y-2 border border-[#E5E7EB] dark:border-zinc-700">
            <Truck className="w-5 h-5 text-[#E30613] mx-auto" />
            <p className="text-xs font-mono font-bold">20px (Medium)</p>
          </div>
          <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800 rounded-[8px] space-y-2 border border-[#E5E7EB] dark:border-zinc-700">
            <Truck className="w-6 h-6 text-[#E30613] mx-auto" />
            <p className="text-xs font-mono font-bold">24px (Large)</p>
          </div>
          <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800 rounded-[8px] space-y-2 border border-[#E5E7EB] dark:border-zinc-700">
            <Truck className="w-8 h-8 text-[#E30613] mx-auto" />
            <p className="text-xs font-mono font-bold">32px (X-Large)</p>
          </div>
        </div>
      </Card>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {ICON_LIST.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <Card
              key={idx}
              className="border-[#E5E7EB] dark:border-zinc-800 shadow-2xs hover:shadow-xs p-3 text-center bg-white dark:bg-zinc-900 rounded-[8px] flex flex-col items-center justify-center space-y-2"
            >
              <IconComponent className="w-5 h-5 text-[#374151] dark:text-zinc-300" />
              <span className="text-[10px] text-[#6B7280] dark:text-zinc-400 font-medium truncate w-full">
                {item.name}
              </span>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

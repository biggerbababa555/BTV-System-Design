"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import { Search, X, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

import { DsHeader } from "./_components/ds-header";
import { DsSidebar } from "./_components/ds-sidebar";

// 16 Section Components
import { Section01Colors } from "./_components/section-01-colors";
import { Section02Typography } from "./_components/section-02-typography";
import { Section03Grid } from "./_components/section-03-grid";
import { Section04Radius } from "./_components/section-04-radius";
import { Section05Shadow } from "./_components/section-05-shadow";
import { Section06Buttons } from "./_components/section-06-buttons";
import { Section07Inputs } from "./_components/section-07-inputs";
import { Section08Components } from "./_components/section-08-components";
import { Section09ProductCard } from "./_components/section-09-product-card";
import { Section10Icons } from "./_components/section-10-icons";
import { Section11Layout } from "./_components/section-11-layout";
import { Section12TailwindTokens } from "./_components/section-12-tailwind-tokens";
import { Section13ShadcnTheme } from "./_components/section-13-shadcn-theme";
import { Section14Accessibility } from "./_components/section-14-accessibility";
import { Section15Motion } from "./_components/section-15-motion";
import { Section16Toast } from "./_components/section-16-toast";

const SECTIONS_CONFIG = [
  { id: "colors", title: "Colors Token Palette", keywords: ["color", "palette", "red", "e30613", "brand", "primary", "secondary", "สี", "โทเค็น"], component: Section01Colors },
  { id: "typography", title: "Typography System", keywords: ["typography", "font", "ibm plex", "noto sans", "text-sm", "font-bold", "title", "body", "ฟอนต์", "ตัวอักษร"], component: Section02Typography },
  { id: "grid", title: "Grid & Spacing System", keywords: ["grid", "spacing", "12 column", "gap", "margin", "padding", "ระยะห่าง", "คอลัมน์"], component: Section03Grid },
  { id: "radius", title: "Border Radius System", keywords: ["radius", "corner", "radii", "rounded", "มุมมน", "ขอบ"], component: Section04Radius },
  { id: "shadow", title: "Shadows & Elevation", keywords: ["shadow", "elevation", "depth", "เงา", "มิติ"], component: Section05Shadow },
  { id: "buttons", title: "Buttons & Slim Actions", keywords: ["button", "slim", "action", "h-8", "primary", "secondary", "loading", "ปุ่ม"], component: Section06Buttons },
  { id: "inputs", title: "Inputs & Form Controls", keywords: ["input", "slim", "textarea", "form", "select", "checkbox", "radio", "switch", "otp", "ช่องกรอก"], component: Section07Inputs },
  { id: "components", title: "UI Components Showcase", keywords: ["badge", "tooltip", "card", "accordion", "tabs", "dialog", "คอมโพเนนท์"], component: Section08Components },
  { id: "product-card", title: "Product Card Pattern", keywords: ["product", "card", "e-commerce", "price", "การ์ดสินค้า"], component: Section09ProductCard },
  { id: "icons", title: "Icon System (Lucide Icons)", keywords: ["icon", "lucide", "lucide-react", "vector", "ไอคอน"], component: Section10Icons },
  { id: "layout", title: "Layout Guidelines", keywords: ["layout", "container", "structure", "1440px", "โครงสร้าง"], component: Section11Layout },
  { id: "tailwind-tokens", title: "Tailwind Tokens Registry", keywords: ["tailwind", "tokens", "registry", "config", "คลาส"], component: Section12TailwindTokens },
  { id: "shadcn-theme", title: "shadcn/ui Theme Integration", keywords: ["shadcn", "theme", "oklch", "variables", "ธีม"], component: Section13ShadcnTheme },
  { id: "accessibility", title: "Accessibility (WCAG 2.1)", keywords: ["accessibility", "a11y", "wcag", "contrast", "screen reader", "การเข้าถึง"], component: Section14Accessibility },
  { id: "motion", title: "Motion & Animation", keywords: ["motion", "animation", "transition", "framer", "อนิเมชัน"], component: Section15Motion },
  { id: "toast-alerts", title: "Toast Alerts & Feedback", keywords: ["toast", "alert", "feedback", "sonner", "notification", "success", "error", "loading", "top-right", "ขาว", "แจ้งเตือน"], component: Section16Toast },
];

export default function SystemDesignPage() {
  const [activeSection, setActiveSection] = useState("colors");
  const [searchQuery, setSearchQuery] = useState("");

  // Scrollspy IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of SECTIONS_CONFIG) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter sections by search query
  const queryLower = searchQuery.trim().toLowerCase();
  const filteredSections = SECTIONS_CONFIG.filter((sec) => {
    if (!queryLower) return true;
    return (
      sec.title.toLowerCase().includes(queryLower) ||
      sec.id.toLowerCase().includes(queryLower) ||
      sec.keywords.some((k) => k.toLowerCase().includes(queryLower))
    );
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-zinc-950 font-sans text-[#374151] dark:text-zinc-200">
      {/* 72px Top Header Navigation */}
      <DsHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Main Documentation Container (1440px max width) */}
      <div className="max-w-[1440px] mx-auto flex min-h-[calc(100vh-72px)]">
        {/* 240px Sticky Sidebar Navigation */}
        <DsSidebar
          activeSection={activeSection}
          onSelectSection={setActiveSection}
        />

        {/* Content Area (80px section spacing) */}
        <main className="flex-1 p-6 md:p-12 space-y-[80px] max-w-[1280px]">
          {/* Hero Documentation Header Banner */}
          <div className="bg-[#F8F9FA] dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-[16px] p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-36 flex items-center">
                <Image
                  src={logoImg}
                  alt="Boonthavorn"
                  width={144}
                  height={44}
                  className="object-contain w-auto h-10"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-[#111827] dark:text-zinc-100">
                Design System
              </span>
            </div>

            <h1 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight">
              ระบบออกแบบสำหรับเว็บไซต์บุญถาวร (BTV System Design)
            </h1>

            <p className="text-sm text-[#6B7280] dark:text-zinc-400 max-w-3xl leading-relaxed">
              คู่มือมาตรฐานระบบออกแบบระดับองค์กร (Enterprise Design System Guidelines) รวมโทเค็นสี แบบอักษร เลย์เอาต์ คอมโพเนนท์อินเทอร์เฟซ และระบบการแจ้งเตือนสำหรับทีมพัฒนาในองค์กร
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold pt-2 text-[#374151] dark:text-zinc-300 border-t border-[#E5E7EB] dark:border-zinc-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Primary Color: <b>#E30613</b></span>
              </div>
              <div>•</div>
              <div>Slim Controls: <b>Height 32px</b></div>
              <div>•</div>
              <div>Typography: <b>Title font-bold / Body text-sm</b></div>
              <div>•</div>
              <div>Toasts: <b>White Background (Top-Right)</b></div>
            </div>
          </div>

          {/* Search Result Count Indicator */}
          {searchQuery && (
            <div className="flex items-center justify-between bg-red-50/70 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 p-4 rounded-[10px] text-xs font-semibold text-[#111827] dark:text-zinc-200">
              <span>
                🔍 ผลการค้นหาสำหรับ <b>"{searchQuery}"</b>: พบ <b>{filteredSections.length}</b> หมวดหมู่
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-[#E30613] hover:underline flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                ล้างคำค้นหา
              </button>
            </div>
          )}

          {/* Render Filtered Sections */}
          {filteredSections.length > 0 ? (
            filteredSections.map((sec) => {
              const Component = sec.component;
              return <Component key={sec.id} />;
            })
          ) : (
            <div className="p-12 text-center bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-[16px] space-y-3">
              <SearchX className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-[#111827] dark:text-zinc-100">
                ไม่พบหมวดหมู่ที่ตรงกับคำค้นหา "{searchQuery}"
              </h3>
              <p className="text-xs text-[#6B7280] dark:text-zinc-400 max-w-md mx-auto">
                ลองค้นหาด้วยคำอื่นๆ เช่น Colors, Typography, Buttons, Slim, Toasts, หรือ Lucide Icons
              </p>
              <Button
                onClick={() => setSearchQuery("")}
                className="h-8 text-xs font-bold bg-[#E30613] hover:bg-[#C8000E] text-white rounded-[6px]"
              >
                แสดงทุกหมวดหมู่
              </Button>
            </div>
          )}

          {/* Official Footer */}
          <footer className="pt-12 border-t border-[#E5E7EB] dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-[#6B7280]">
            <div className="flex items-center gap-2">
              <Image
                src={logoImg}
                alt="Boonthavorn Logo"
                width={96}
                height={28}
                className="object-contain w-auto h-6"
              />
              <span>© 2026 Boonthavorn Retail Corporation. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 font-medium">
              <a href="/system-design.md" download className="hover:text-[#E30613]">system-design.md</a>
              <a href="#" className="hover:text-[#E30613]">Privacy Policy</a>
              <a href="#" className="hover:text-[#E30613]">Terms of Service</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

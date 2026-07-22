"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  User,
  Bell,
  AlertCircle,
  FileText,
  Loader2,
  CheckCircle2,
  PackageX,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

export function Section08Components() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="components" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>08</span>
          <span>•</span>
          <span>UI Components Library</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Core Interactive UI Components
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          ส่วนประกอบสถาปัตยกรรมอินเทอร์เฟซผู้ใช้สำหรับระบบองค์กร (Cards, Badges, Tabs, Accordion, Avatar, Skeleton)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Badges & Chips */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <h3 className="text-xs font-bold text-[#111827] dark:text-zinc-200">
            Badges & Status Chips (Radius 999px)
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-[#E30613] text-white font-bold text-xs px-3 py-1 rounded-full">
              Primary Brand
            </Badge>
            <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Success Status
            </Badge>
            <Badge className="bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold px-3 py-1 rounded-full">
              Warning Pending
            </Badge>
            <Badge className="bg-red-50 text-red-700 border border-red-200 text-xs font-semibold px-3 py-1 rounded-full">
              Error Canceled
            </Badge>
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
              Route W105
            </Badge>
            <Badge
              variant="outline"
              className="text-xs font-semibold border-[#E5E7EB] text-[#374151] px-3 py-1 rounded-full"
            >
              Default Outline
            </Badge>
          </div>
        </Card>

        {/* 2. Tabs Bar */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <h3 className="text-xs font-bold text-[#111827] dark:text-zinc-200">
            Navigation Tabs Bar
          </h3>
          <div className="flex items-center gap-1 bg-[#F8F9FA] dark:bg-zinc-800/60 p-1 rounded-[8px] border border-[#E5E7EB]">
            {["all", "pending", "completed", "canceled"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-1.5 px-3 rounded-[6px] text-xs font-semibold capitalize transition-all ${
                  activeTab === tab
                    ? "bg-white dark:bg-zinc-900 text-[#E30613] shadow-xs font-bold"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
              >
                {tab === "all" ? "ทั้งหมด" : tab === "pending" ? "รอดำเนินการ" : tab === "completed" ? "สำเร็จ" : "ยกเลิก"}
              </button>
            ))}
          </div>
        </Card>

        {/* 3. Breadcrumb & Navigation Path */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <h3 className="text-xs font-bold text-[#111827] dark:text-zinc-200">
            Breadcrumb Trail Navigation
          </h3>
          <nav className="flex items-center gap-2 text-xs text-[#6B7280]">
            <a href="#" className="hover:text-[#E30613]">หน้าแรก</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <a href="#" className="hover:text-[#E30613]">กระเบื้อง</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-[#111827] dark:text-zinc-100">กระเบื้องพื้นและผนัง</span>
          </nav>
        </Card>

        {/* 4. Avatars & User Profiles */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <h3 className="text-xs font-bold text-[#111827] dark:text-zinc-200">
            Avatars & Status Indicators
          </h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-10 w-10 border border-[#E5E7EB]">
                <AvatarFallback className="bg-red-50 text-[#E30613] font-bold text-xs">
                  BT
                </AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-white" />
            </div>

            <Avatar className="h-10 w-10 border border-[#E5E7EB]">
              <AvatarFallback className="bg-blue-50 text-blue-600 font-bold text-xs">
                KP
              </AvatarFallback>
            </Avatar>

            <div className="text-xs">
              <p className="font-bold text-[#111827] dark:text-zinc-100">กฤษฎา พระแก้ว</p>
              <p className="text-[#6B7280]">เจ้าหน้าที่บริหารคลังสินค้า</p>
            </div>
          </div>
        </Card>

        {/* 5. Skeleton Loading State */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-4">
          <h3 className="text-xs font-bold text-[#111827] dark:text-zinc-200">
            Skeleton Placeholder Loading
          </h3>
          <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-[#F8F9FA] dark:bg-zinc-800 rounded w-3/4" />
            <div className="h-3 bg-[#F8F9FA] dark:bg-zinc-800 rounded w-1/2" />
            <div className="h-10 bg-[#F8F9FA] dark:bg-zinc-800 rounded-[8px] w-full" />
          </div>
        </Card>

        {/* 6. Empty State Container */}
        <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-[#F8F9FA] dark:bg-zinc-900 rounded-[12px] p-6 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-200/60 dark:bg-zinc-800 mx-auto flex items-center justify-center text-[#6B7280]">
            <PackageX className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#111827] dark:text-zinc-100">
              ไม่พบรายการสินค้า
            </h4>
            <p className="text-xs text-[#6B7280]">
              ไม่มีข้อมูลคำสั่งซื้อหรือรายการจองคิวในวันที่เลือก
            </p>
          </div>
          <Button className="h-8 text-xs font-semibold bg-[#E30613] hover:bg-[#C8000E] text-white rounded-[8px]">
            ค้นหาใหม่อีกครั้ง
          </Button>
        </Card>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Plus, ShoppingCart, Loader2, ArrowRight, Trash2, CheckCircle2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export function Section06Buttons() {
  const [isLoading, setIsLoading] = useState(false);

  const handleTriggerLoading = () => {
    setIsLoading(true);
    toast.info("กำลังประมวลผลข้อมูล...");
    setTimeout(() => {
      setIsLoading(false);
      toast.success("บันทึกข้อมูลสำเร็จ!");
    }, 1800);
  };

  return (
    <section id="buttons" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>06</span>
          <span>•</span>
          <span>Button System</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Buttons & Interactive Actions
        </h2>
        <p className="text-sm text-[#6B7280] dark:text-zinc-400 mt-1">
          ปุ่มกดขนาดสลิมกะทัดรัด (Slim Controls: Height 32px / Text-xs / Radius 6px) เพื่ออินเทอร์เฟซระดับองค์กรที่สะอาดและเป็นระเบียบ
        </p>
      </div>

      {/* Slim Button Specs Banner */}
      <div className="bg-red-50/60 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-[12px] p-5 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#111827] dark:text-white flex items-center gap-2">
            <span>✨ มาตรฐาน Slim Buttons สำหรับทีมพัฒนา</span>
          </h3>
          <Badge className="bg-[#E30613] text-white text-[10px]">Standard Slim Spec</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs">
          <div className="bg-white dark:bg-zinc-900 p-3 rounded-[8px] border border-red-100 dark:border-red-900/30 space-y-1">
            <span className="font-bold text-[#E30613]">Standard Slim Button (h-8):</span>
            <code className="text-[11px] bg-slate-100 dark:bg-zinc-800 text-[#111827] dark:text-zinc-200 px-2 py-0.5 rounded font-mono block">
              className="h-8 text-xs font-semibold duration-150 active:scale-95"
            </code>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-3 rounded-[8px] border border-red-100 dark:border-red-900/30 space-y-1">
            <span className="font-bold text-[#E30613]">Extra Slim Button (h-7):</span>
            <code className="text-[11px] bg-slate-100 dark:bg-zinc-800 text-[#111827] dark:text-zinc-200 px-2 py-0.5 rounded font-mono block">
              className="h-7 px-2.5 text-[11px] font-semibold active:scale-95"
            </code>
          </div>
        </div>
      </div>

      <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-8">
        {/* Button Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primary Slim Button */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#111827] dark:text-zinc-200">
              Primary Slim Button (h-8)
            </span>
            <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800/50 rounded-[8px] flex items-center justify-center">
              <Button className="h-8 px-4 text-xs font-semibold bg-[#E30613] hover:bg-[#C8000E] active:scale-95 text-white shadow-xs rounded-[6px] transition-all">
                <Save className="w-3.5 h-3.5 mr-1.5" />
                บันทึกข้อมูล
              </Button>
            </div>
            <p className="text-[11px] text-[#6B7280] dark:text-zinc-400">
              ปุ่มหลักแบบสลิมสำหรับ Action หลักในฟอร์มตารางและโมดอล
            </p>
          </div>

          {/* Secondary Slim Button */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#111827] dark:text-zinc-200">
              Secondary Slim Button (h-8)
            </span>
            <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800/50 rounded-[8px] flex items-center justify-center">
              <Button
                variant="outline"
                className="h-8 px-4 text-xs font-semibold border-[#E5E7EB] dark:border-zinc-700 text-[#111827] dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-[6px] active:scale-95"
              >
                ดูรายละเอียด
              </Button>
            </div>
            <p className="text-[11px] text-[#6B7280] dark:text-zinc-400">
              ปุ่มรองสไตล์ Outline สำหรับดูข้อมูลหรือทางเลือกทั่วไป
            </p>
          </div>

          {/* Extra Slim Button */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#111827] dark:text-zinc-200">
              Extra Slim Button (h-7)
            </span>
            <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800/50 rounded-[8px] flex items-center justify-center">
              <Button className="h-7 px-3 text-[11px] font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-[6px] active:scale-95">
                <Plus className="w-3 h-3 mr-1" />
                เพิ่มรายการ
              </Button>
            </div>
            <p className="text-[11px] text-[#6B7280] dark:text-zinc-400">
              ปุ่มขนาดเล็กพิเศษสำหรับแทรกในตารางข้อมูลหรือ Toolbar
            </p>
          </div>

          {/* Danger Slim Button */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#111827] dark:text-zinc-200">
              Danger Slim Button
            </span>
            <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800/50 rounded-[8px] flex items-center justify-center">
              <Button className="h-8 px-4 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white shadow-xs rounded-[6px] active:scale-95">
                <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                ลบรายการ
              </Button>
            </div>
            <p className="text-[11px] text-[#6B7280] dark:text-zinc-400">
              ปุ่มคำสั่งลบข้อมูลหรือการดำเนินการลบอันตราย
            </p>
          </div>

          {/* Disabled Slim State */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#111827] dark:text-zinc-200">
              Disabled Slim State
            </span>
            <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800/50 rounded-[8px] flex items-center justify-center">
              <Button
                disabled
                className="h-8 px-4 text-xs font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 cursor-not-allowed rounded-[6px]"
              >
                ไม่สามารถดำเนินการได้
              </Button>
            </div>
            <p className="text-[11px] text-[#6B7280] dark:text-zinc-400">
              สถานะปุ่มที่ไม่สามารถกดใช้งานได้ในขณะนั้น
            </p>
          </div>

          {/* Loading Slim Button */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#111827] dark:text-zinc-200">
              Loading Slim State (Click Test)
            </span>
            <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800/50 rounded-[8px] flex items-center justify-center">
              <Button
                onClick={handleTriggerLoading}
                disabled={isLoading}
                className="h-8 px-4 text-xs font-semibold bg-[#E30613] hover:bg-[#C8000E] text-white shadow-xs rounded-[6px] active:scale-95"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                    กำลังบันทึก...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                    ทดสอบบันทึกข้อมูล
                  </>
                )}
              </Button>
            </div>
            <p className="text-[11px] text-[#6B7280] dark:text-zinc-400">
              สถานะโหลดแบบ Slim แสดงตัวหมุนขนาดเล็กขณะรอ API
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}

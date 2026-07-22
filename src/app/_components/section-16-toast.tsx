"use client";

import React, { useState } from "react";
import {
  BellRing,
  CheckCircle2,
  AlertOctagon,
  Loader2,
  AlertTriangle,
  Info,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export function Section16Toast() {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleSuccessToast = () => {
    toast.success("บันทึกข้อมูลเรียบร้อยแล้ว", {
      description: "ข้อมูลรหัสสินค้า #BTV-8890 ถูกอัปเดตลงระบบเรียบร้อย",
    });
  };

  const handleErrorToast = () => {
    toast.error("บันทึกข้อมูลไม่สำเร็จ", {
      description: "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง",
    });
  };

  const handleLoadingToast = () => {
    const toastId = toast.loading("กำลังบันทึกข้อมูลเข้าสู่ระบบ...");
    setTimeout(() => {
      toast.success("บันทึกข้อมูลเสร็จสมบูรณ์!", {
        id: toastId,
        description: "ระบบได้ทำการบันทึกข้อมูลลงฐานข้อมูลเรียบร้อยแล้ว",
      });
    }, 2000);
  };

  const handleWarningToast = () => {
    toast.warning("คำเตือนข้อมูลไม่สมบูรณ์", {
      description: "กรุณากรอกช่องข้อมูลที่จำเป็น (*) ให้ครบถ้วนก่อนกดบันทึก",
    });
  };

  const handleInfoToast = () => {
    toast.info("แจ้งเตือนการอัปเดตระบบ", {
      description: "ระบบ BTV Design System v2.4 พร้อมเปิดใช้งานสำหรับทุกทีมแล้ว",
    });
  };

  const codeSnippet = `import { toast } from "sonner";

// 1. บันทึกสำเร็จ (Success Toast - พื้นหลังขาว ข้อความเขียว)
toast.success(res.message || "บันทึกข้อมูลเรียบร้อยแล้ว");

// 2. บันทึกไม่สำเร็จ (Error Toast - พื้นหลังขาว ข้อความแดง)
toast.error(res.message || "ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่อีกครั้ง");

// 3. กำลังโหลดข้อมูล (Loading Toast - พื้นหลังขาว ตัวหมุนแดง)
const toastId = toast.loading("กำลังบันทึกข้อมูล...");
try {
  await saveData();
  toast.success("บันทึกเสร็จสมบูรณ์!", { id: toastId });
} catch (error) {
  toast.error("เกิดข้อผิดพลาดในการบันทึก", { id: toastId });
}

// 4. แจ้งเตือนคำเตือน (Warning Toast - พื้นหลังขาว ข้อความส้ม)
toast.warning("กรุณาตรวจสอบข้อมูลก่อนดำเนินการ");`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    toast.success("คัดลอก Code Snippet เรียบร้อยแล้ว!");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="toast-alerts" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>16</span>
          <span>•</span>
          <span>Notification System</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Toast Alert & User Feedback
        </h2>
        <p className="text-sm text-[#6B7280] dark:text-zinc-400 mt-1">
          ระบบแจ้งเตือนข้อความตอบสนองผู้ใช้ (Feedback Toasts) แสดงที่ <b>มุมขวาบน (Top-Right)</b> สไตล์สะอาด <b>พื้นหลังขาว (No Dark Background)</b>
        </p>
      </div>

      {/* Guidelines Spec Banner */}
      <div className="bg-red-50/60 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-[12px] p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#111827] dark:text-white flex items-center gap-2">
            <BellRing className="w-4 h-4 text-[#E30613]" />
            <span>📌 มาตรฐาน Toast Notification (พื้นหลังขาว / สีกระจ่างใส)</span>
          </h3>
          <Badge className="bg-[#E30613] text-white text-[10px]">White Background Spec</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="bg-white dark:bg-zinc-900 p-3 rounded-[8px] border border-red-100 dark:border-red-900/30 space-y-1">
            <span className="font-bold text-emerald-700 dark:text-emerald-400 block">1. บันทึกสำเร็จ (Success)</span>
            <p className="text-[#374151] dark:text-zinc-300">
              <b>พื้นหลังสีขาว</b> + <b>ข้อความและไอคอนสีเขียว</b> (`text-emerald-700 bg-white border-emerald-200`)
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-3 rounded-[8px] border border-red-100 dark:border-red-900/30 space-y-1">
            <span className="font-bold text-red-700 dark:text-red-400 block">2. บันทึกไม่สำเร็จ (Error)</span>
            <p className="text-[#374151] dark:text-zinc-300">
              <b>พื้นหลังสีขาว</b> + <b>ข้อความและไอคอนสีแดง</b> (`text-red-700 bg-white border-red-200`)
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-3 rounded-[8px] border border-red-100 dark:border-red-900/30 space-y-1">
            <span className="font-bold text-[#E30613] block">3. ตำแหน่งมุมขวาบน</span>
            <p className="text-[#374151] dark:text-zinc-300">
              แสดงผลที่ตำแหน่ง <b>Top-Right (`top-right`)</b> ไม่บดบังปุ่มการทำงานหลักหรือตารางข้อมูล
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Trigger Demo Cards */}
      <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-6">
        <div>
          <h3 className="text-sm font-bold text-[#111827] dark:text-zinc-100 mb-1">
            ทดลองกดปุ่มด้านล่างเพื่อทดสอบการแสดงผล Toast (พื้นหลังขาว มุมขวาบน)
          </h3>
          <p className="text-xs text-[#6B7280] dark:text-zinc-400">
            ทดสอบการเด้งแจ้งเตือนกรณีบันทึกสำเร็จ (ข้อความเขียว), บันทึกไม่สำเร็จ (ข้อความแดง), กำลังโหลดข้อมูล และคำเตือน
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Success Toast Trigger */}
          <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800/60 rounded-[8px] border border-[#E5E7EB] dark:border-zinc-700/60 space-y-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Success Toast</span>
              </div>
              <p className="text-[11px] text-[#6B7280] dark:text-zinc-400">
                พื้นหลังขาว + ข้อความเขียว เมื่อบันทึกสำเร็จ
              </p>
            </div>
            <Button
              onClick={handleSuccessToast}
              className="h-8 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-[6px] w-full active:scale-95"
            >
              ทดสอบบันทึกสำเร็จ
            </Button>
          </div>

          {/* Error Toast Trigger */}
          <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800/60 rounded-[8px] border border-[#E5E7EB] dark:border-zinc-700/60 space-y-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400">
                <AlertOctagon className="w-4 h-4" />
                <span>Error Toast</span>
              </div>
              <p className="text-[11px] text-[#6B7280] dark:text-zinc-400">
                พื้นหลังขาว + ข้อความแดง เมื่อเกิดข้อผิดพลาด
              </p>
            </div>
            <Button
              onClick={handleErrorToast}
              className="h-8 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white rounded-[6px] w-full active:scale-95"
            >
              ทดสอบบันทึกไม่สำเร็จ
            </Button>
          </div>

          {/* Loading Toast Trigger */}
          <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800/60 rounded-[8px] border border-[#E5E7EB] dark:border-zinc-700/60 space-y-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#E30613]">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Loading Toast</span>
              </div>
              <p className="text-[11px] text-[#6B7280] dark:text-zinc-400">
                แสดงหมุนโหลด แล้วเปลี่ยนเป็นสำเร็จอัตโนมัติ
              </p>
            </div>
            <Button
              onClick={handleLoadingToast}
              className="h-8 text-xs font-semibold bg-[#E30613] hover:bg-[#C8000E] text-white rounded-[6px] w-full active:scale-95"
            >
              ทดสอบกำลังโหลด
            </Button>
          </div>

          {/* Warning & Info Trigger */}
          <div className="p-4 bg-[#F8F9FA] dark:bg-zinc-800/60 rounded-[8px] border border-[#E5E7EB] dark:border-zinc-700/60 space-y-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
                <AlertTriangle className="w-4 h-4" />
                <span>Warning / Info</span>
              </div>
              <p className="text-[11px] text-[#6B7280] dark:text-zinc-400">
                แจ้งเตือนคำเตือน หรือข้อมูลข่าวสารทั่วไป
              </p>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <Button
                onClick={handleWarningToast}
                variant="outline"
                className="h-8 text-[11px] font-semibold border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 rounded-[6px]"
              >
                คำเตือน
              </Button>
              <Button
                onClick={handleInfoToast}
                variant="outline"
                className="h-8 text-[11px] font-semibold border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-[6px]"
              >
                ข้อมูล
              </Button>
            </div>
          </div>
        </div>

        {/* Copyable Code Snippet Block */}
        <div className="pt-4 border-t border-[#EEEEEE] dark:border-zinc-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#111827] dark:text-zinc-200">
              💻 Code Snippet สำหรับนักพัฒนา (คัดลอกไปใช้งานในหน้าเว็บ):
            </span>
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="h-7 px-3 text-xs font-semibold border-[#E5E7EB] dark:border-zinc-700 hover:bg-slate-100 rounded-[6px] active:scale-95"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  คัดลอกแล้ว!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 mr-1 text-slate-500" />
                  คัดลอกโค้ด
                </>
              )}
            </Button>
          </div>
          <pre className="p-4 bg-zinc-950 text-zinc-100 rounded-[8px] text-xs font-mono overflow-x-auto border border-zinc-800 leading-relaxed">
            {codeSnippet}
          </pre>
        </div>
      </Card>
    </section>
  );
}

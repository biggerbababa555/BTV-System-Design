"use client";

import React, { useState } from "react";
import { Search, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export function Section07Inputs() {
  const [showPassword, setShowPassword] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioValue, setRadioValue] = useState("express");
  const [otpValues, setOtpValues] = useState(["4", "0", "2", "3"]);

  return (
    <section id="inputs" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>07</span>
          <span>•</span>
          <span>Form Controls</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Inputs & Interactive Form Controls
        </h2>
        <p className="text-sm text-[#6B7280] dark:text-zinc-400 mt-1">
          ช่องกรอกข้อมูลและตัวเลือกการรับค่าสไตล์สลิมกะทัดรัด (Slim Controls: Height 32px / Text-xs / Border `#E5E7EB`)
        </p>
      </div>

      {/* Slim Input Specs Banner */}
      <div className="bg-red-50/60 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-[12px] p-5 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#111827] dark:text-white flex items-center gap-2">
            <span>✨ มาตรฐาน Slim Input & Textarea สำหรับทีมพัฒนา</span>
          </h3>
          <Badge className="bg-[#E30613] text-white text-[10px]">Slim Spec</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs">
          <div className="bg-white dark:bg-zinc-900 p-3 rounded-[8px] border border-red-100 dark:border-red-900/30 space-y-1">
            <span className="font-bold text-[#E30613]">Slim Input (h-8):</span>
            <code className="text-[11px] bg-slate-100 dark:bg-zinc-800 text-[#111827] dark:text-zinc-200 px-2 py-0.5 rounded font-mono block">
              className="h-8 text-xs bg-white dark:bg-zinc-900 border-[#E5E7EB]"
            </code>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-3 rounded-[8px] border border-red-100 dark:border-red-900/30 space-y-1">
            <span className="font-bold text-[#E30613]">Slim Textarea:</span>
            <code className="text-[11px] bg-slate-100 dark:bg-zinc-800 text-[#111827] dark:text-zinc-200 px-2 py-0.5 rounded font-mono block">
              className="text-xs p-2.5 min-h-[64px] bg-white border-[#E5E7EB]"
            </code>
          </div>
        </div>
      </div>

      <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900 rounded-[12px] p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Standard Slim Text Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#111827] dark:text-zinc-200">
              Slim Text Field (Height 32px)
            </label>
            <Input
              type="text"
              placeholder="กรอกชื่อ-นามสกุลผู้รับสินค้า..."
              className="h-8 text-xs bg-white dark:bg-zinc-900 border-[#E5E7EB] dark:border-zinc-700 rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#E30613]/20"
            />
          </div>

          {/* Slim Search Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#111827] dark:text-zinc-200">
              Slim Search Input
            </label>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#6B7280]" />
              <Input
                type="text"
                placeholder="ค้นหารหัสสินค้า, หมวดหมู่กระเบื้อง..."
                className="h-8 pl-8 text-xs bg-white dark:bg-zinc-900 border-[#E5E7EB] dark:border-zinc-700 rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#E30613]/20"
              />
            </div>
          </div>

          {/* Slim Password Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#111827] dark:text-zinc-200">
              Slim Password Field
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="กรอกรหัสผ่าน..."
                defaultValue="Boonthavorn2026!"
                className="h-8 pr-8 text-xs bg-white dark:bg-zinc-900 border-[#E5E7EB] dark:border-zinc-700 rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#E30613]/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Slim Select Dropdown */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#111827] dark:text-zinc-200">
              Slim Select Dropdown
            </label>
            <Select defaultValue="1070">
              <SelectTrigger className="h-8 text-xs bg-white dark:bg-zinc-900 border-[#E5E7EB] dark:border-zinc-700 rounded-[6px]">
                <SelectValue placeholder="เลือกสาขาบุญถาวร" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1070">1070 - สาขาเกษตร-นวมินทร์</SelectItem>
                <SelectItem value="1000">1000 - สำนักงานใหญ่ รัชดา</SelectItem>
                <SelectItem value="1050">1050 - สาขาราชพฤกษ์</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Slim Textarea */}
          <div className="sm:col-span-2 space-y-1.5">
            <label className="text-xs font-semibold text-[#111827] dark:text-zinc-200">
              Slim Textarea (Multi-line Input)
            </label>
            <Textarea
              placeholder="ระบุข้อความหมายเหตุการจัดส่งเพิ่มเติมถึงพนักงานขนส่ง..."
              rows={2}
              className="text-xs p-2.5 min-h-[64px] bg-white dark:bg-zinc-900 border-[#E5E7EB] dark:border-zinc-700 rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#E30613]/20"
            />
          </div>

          {/* Checkbox, Radio, Switch, OTP controls */}
          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#EEEEEE] dark:border-zinc-800">
            {/* Checkbox */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#111827] dark:text-zinc-200 block">Checkbox Control</span>
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-[#374151] dark:text-zinc-300">
                <input
                  type="checkbox"
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-[#E5E7EB] text-[#E30613] focus:ring-[#E30613]"
                />
                ยอมรับเงื่อนไขการจัดส่งสินค้า
              </label>
            </div>

            {/* Radio Group */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#111827] dark:text-zinc-200 block">Radio Selection</span>
              <div className="space-y-1.5 text-xs text-[#374151] dark:text-zinc-300">
                <label className="flex items-center gap-2 cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={radioValue === "express"}
                    onChange={(e) => setRadioValue(e.target.value)}
                    className="text-[#E30613] focus:ring-[#E30613]"
                  />
                  จัดส่งด่วน Express (1-2 วัน)
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    checked={radioValue === "standard"}
                    onChange={(e) => setRadioValue(e.target.value)}
                    className="text-[#E30613] focus:ring-[#E30613]"
                  />
                  จัดส่งปกติ Standard
                </label>
              </div>
            </div>

            {/* Switch Toggle */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#111827] dark:text-zinc-200 block">Switch Toggle</span>
              <div className="flex items-center justify-between bg-[#F8F9FA] dark:bg-zinc-800 p-2 rounded-[6px] border border-[#E5E7EB] dark:border-zinc-700">
                <span className="text-xs font-medium text-[#374151] dark:text-zinc-200">เปิดแจ้งเตือน SMS</span>
                <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
              </div>
            </div>
          </div>

          {/* OTP Code Input */}
          <div className="sm:col-span-2 space-y-2 pt-2">
            <span className="text-xs font-semibold text-[#111827] dark:text-zinc-200 block">OTP Verification Input</span>
            <div className="flex gap-2">
              {otpValues.map((val, idx) => (
                <Input
                  key={idx}
                  type="text"
                  maxLength={1}
                  value={val}
                  onChange={(e) => {
                    const newVals = [...otpValues];
                    newVals[idx] = e.target.value;
                    setOtpValues(newVals);
                  }}
                  className="w-9 h-9 text-center text-sm font-bold font-mono bg-white dark:bg-zinc-900 border-[#E5E7EB] dark:border-zinc-700 rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#E30613]"
                />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

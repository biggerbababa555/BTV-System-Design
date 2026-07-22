"use client";

import React, { useState } from "react";
import { Check, Copy, Sliders } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const SHADCN_CSS_THEME = `@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 356 95% 45%; /* Boonthavorn Red #E30613 */
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 356 95% 45%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71.4% 4.1%;
    --foreground: 210 40% 98%;
    --card: 224 71.4% 4.1%;
    --card-foreground: 210 40% 98%;
    --primary: 356 95% 45%;
    --primary-foreground: 210 40% 98%;
    --border: 215 27.9% 16.9%;
    --input: 215 27.9% 16.9%;
  }
}`;

export function Section13ShadcnTheme() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SHADCN_CSS_THEME);
    setCopied(true);
    toast.success("คัดลอก shadcn/ui Theme CSS Variables สำเร็จ!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="shadcn-theme" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>13</span>
          <span>•</span>
          <span>shadcn/ui Integration Theme</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          shadcn/ui Light & Dark CSS Theme Variables
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          ตัวแปร CSS สำหรับ shadcn/ui Theme (เข้ากันได้กับ Next.js App Router & Tailwind v4)
        </p>
      </div>

      <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-slate-900 text-slate-100 rounded-[12px] overflow-hidden p-0 py-0 gap-0">
        <div className="px-4 py-3 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300">
            <Sliders className="w-4 h-4 text-[#E30613]" />
            <span>globals.css (shadcn/ui Theme)</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-slate-700 hover:bg-slate-600 rounded-[6px] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "คัดลอกแล้ว!" : "คัดลอก CSS Theme"}</span>
          </button>
        </div>

        <pre className="p-4 sm:p-6 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed">
          <code>{SHADCN_CSS_THEME}</code>
        </pre>
      </Card>
    </section>
  );
}

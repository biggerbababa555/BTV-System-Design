"use client";

import React, { useState } from "react";
import { Check, Copy, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const TAILWIND_CODE = `// tailwind.config.ts / @theme in Tailwind v4
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#E30613', // Boonthavorn Red CI
          600: '#C8000E', // Hover
          700: '#A8000B', // Active / Pressed
        },
        surface: '#FFFFFF',
        'bg-main': '#F8F9FA',
        border: '#E5E7EB',
        divider: '#EEEEEE',
      },
      borderRadius: {
        input: '8px',
        button: '8px',
        card: '12px',
        dialog: '16px',
        badge: '999px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.08)',
        md: '0 4px 12px rgba(0,0,0,0.08)',
        lg: '0 12px 32px rgba(0,0,0,0.12)',
        dialog: '0 24px 64px rgba(0,0,0,0.18)',
      },
      maxWidth: {
        container: '1440px',
        content: '1280px',
      },
      fontFamily: {
        sans: ['IBM Plex Sans Thai', 'Noto Sans Thai', 'sans-serif'],
      },
    },
  },
};`;

export function Section12TailwindTokens() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TAILWIND_CODE);
    setCopied(true);
    toast.success("คัดลอก Tailwind Config Token สำเร็จ!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tailwind-tokens" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>12</span>
          <span>•</span>
          <span>Tailwind Tokens</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Tailwind CSS v4 Configuration Tokens
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          โค้ดคอนฟิก Tailwind Tokens (Colors, Spacing, Radius, Shadows, Container)
        </p>
      </div>

      <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs bg-slate-900 text-slate-100 rounded-[12px] overflow-hidden p-0 py-0 gap-0">
        <div className="px-4 py-3 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300">
            <Code2 className="w-4 h-4 text-[#E30613]" />
            <span>tailwind.config.ts</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-slate-700 hover:bg-slate-600 rounded-[6px] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "คัดลอกแล้ว!" : "คัดลอกโค้ด"}</span>
          </button>
        </div>

        <pre className="p-4 sm:p-6 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
          <code>{TAILWIND_CODE}</code>
        </pre>
      </Card>
    </section>
  );
}

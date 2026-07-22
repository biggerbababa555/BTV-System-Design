"use client";

import React from "react";
import Image from "next/image";
import { Search, Download, FileText, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png";

interface DsHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function DsHeader({ searchQuery, onSearchChange }: DsHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full h-[72px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-[#E5E7EB] dark:border-zinc-800 px-6 flex items-center justify-between">
      {/* Brand Logo & Design System Title */}
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-32 flex items-center">
            <Image
              src={logoImg}
              alt="Boonthavorn Logo"
              width={128}
              height={40}
              className="object-contain w-auto h-9"
              priority
            />
          </div>
          <div className="h-5 w-[1px] bg-[#E5E7EB] dark:bg-zinc-800" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#111827] dark:text-zinc-100 tracking-tight">
              Design System
            </span>
            <Badge className="bg-red-50 text-[#E30613] border border-red-200 text-[10px] font-bold px-2 py-0.5 rounded-full dark:bg-red-950/40 dark:text-red-400">
              v2.4 Enterprise
            </Badge>
          </div>
        </a>
      </div>

      {/* Global Interactive Search Bar & Download Documentation Button */}
      <div className="flex items-center gap-4">
        {/* Interactive Search Bar */}
        <div className="relative w-64 sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            type="text"
            placeholder="ค้นหา Tokens, Slim Specs, Toasts..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-9 pl-9 pr-8 text-xs bg-[#F8F9FA] dark:bg-zinc-900 border-[#E5E7EB] dark:border-zinc-800 rounded-[8px] focus-visible:ring-2 focus-visible:ring-[#E30613]/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Prominent Download system-design.md Button */}
        <a
          href="/system-design.md"
          download="system-design.md"
          className="inline-flex items-center"
        >
          <Button className="h-8 text-xs font-bold bg-[#E30613] hover:bg-[#C8000E] active:scale-95 text-white shadow-xs rounded-[6px] transition-all flex items-center gap-1.5 px-3.5">
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download system-design.md</span>
            <span className="sm:hidden">.md</span>
          </Button>
        </a>
      </div>
    </header>
  );
}

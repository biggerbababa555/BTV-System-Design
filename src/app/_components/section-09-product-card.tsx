"use client";

import React, { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SingleProductCardProps {
  title: string;
  sku: string;
  brand: string;
  price: string;
  oldPrice: string;
  discount: string;
  rating: number;
  imageUrl: string;
}

function DemoProductCard({
  title,
  sku,
  brand,
  price,
  oldPrice,
  discount,
  rating,
  imageUrl,
}: SingleProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="border-[#E5E7EB] dark:border-zinc-800 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 bg-white dark:bg-zinc-900 rounded-[12px] p-4 flex flex-col justify-between space-y-4 group">
      {/* 1:1 Square Image Container */}
      <div className="relative aspect-square w-full rounded-[8px] overflow-hidden bg-[#F8F9FA] dark:bg-zinc-800 flex items-center justify-center border border-[#E5E7EB]/50">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Brand & Discount Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <Badge className="bg-[#3B82F6] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
            {brand}
          </Badge>
          <Badge className="bg-[#E30613] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
            {discount}
          </Badge>
        </div>

        {/* Wishlist Heart */}
        <button
          onClick={() => {
            setLiked(!liked);
            toast.success(liked ? "ลบออกจากรายการโปรด" : "เพิ่มในรายการโปรดแล้ว");
          }}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 dark:bg-zinc-900/90 shadow-xs flex items-center justify-center text-slate-400 hover:text-[#E30613] transition-colors"
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-[#E30613] text-[#E30613]" : ""}`} />
        </button>
      </div>

      {/* Product Content Details */}
      <div className="space-y-2">
        <div className="flex items-center gap-1 text-amber-500 text-xs">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className={`w-3.5 h-3.5 ${
                idx < rating ? "fill-amber-400 text-amber-400" : "text-slate-200"
              }`}
            />
          ))}
          <span className="text-[11px] text-[#6B7280] ml-1 font-mono">(128)</span>
        </div>

        <h4 className="text-sm font-semibold text-[#111827] dark:text-zinc-100 line-clamp-2 leading-snug">
          {title}
        </h4>

        <p className="text-[11px] text-[#6B7280] font-mono">SKU: {sku}</p>

        {/* Pricing Section */}
        <div className="pt-1 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-[#E30613] tracking-tight">
            ฿{price}
          </span>
          <span className="text-xs text-[#6B7280] line-through font-mono">
            ฿{oldPrice}
          </span>
          <span className="text-[11px] text-[#6B7280] ml-auto">/ ตร.ม.</span>
        </div>
      </div>

      {/* Add to Cart CTA Button */}
      <Button
        onClick={() => toast.success(`เพิ่ม "${title}" ลงในตะกร้าแล้ว`)}
        className="w-full h-10 text-xs font-semibold bg-[#E30613] hover:bg-[#C8000E] text-white shadow-xs rounded-[8px] active:scale-95 transition-all"
      >
        <ShoppingCart className="w-4 h-4 mr-2" />
        เพิ่มลงตะกร้า
      </Button>
    </Card>
  );
}

export function Section09ProductCard() {
  return (
    <section id="product-card" className="scroll-mt-24 space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
          <span>09</span>
          <span>•</span>
          <span>E-Commerce Product Card Specification</span>
        </div>
        <h2 className="text-3xl font-bold text-[#111827] dark:text-zinc-100 tracking-tight mt-1">
          Boonthavorn Product Card Pattern
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          รูปแบบการ์ดแสดงสินค้ามาตรฐานสำหรับบุญถาวร (Aspect Ratio 1:1, Price 24px Red, Radius 12px)
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <DemoProductCard
          title="MARMOL STATUARIO (06103) 60X60 ซม. ลายหินอ่อน ขาว"
          sku="1250534"
          brand="Dora"
          price="358.28"
          oldPrice="398.00"
          discount="-10%"
          rating={5}
          imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80"
        />

        <DemoProductCard
          title="COTTO ก๊อกผสมอ่างล้างหน้าแบบก้านโยก รุ่น SCIROCCO CHROME"
          sku="1089421"
          brand="COTTO"
          price="1,890.00"
          oldPrice="2,290.00"
          discount="-17%"
          rating={4}
          imageUrl="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80"
        />

        <DemoProductCard
          title="กระเบื้องพอร์ซเลน 60x60 ซม. ขาวเงาพรีเมียม ขาวกว่า สวยกว่า"
          sku="1192834"
          brand="Basieq"
          price="359.00"
          oldPrice="450.00"
          discount="-20%"
          rating={5}
          imageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80"
        />
      </div>
    </section>
  );
}

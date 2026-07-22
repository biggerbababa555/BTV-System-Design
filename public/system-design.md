# Boonthavorn Enterprise System Design Guidelines

> **Version:** 2.4 Enterprise  
> **Target Audience:** Developers, Designers, & Product Teams  
> **Design Language:** Minimal, Premium, Clean, & Intuitive  
> **Last Updated:** July 2026

---

## 🧭 Executive Summary & Core Principles

This document serves as the official enterprise system design specification for the Boonthavorn web ecosystem and e-commerce platforms. All software components must adhere strictly to these standardized design tokens, UI specifications, and feedback patterns to guarantee consistency, usability, and premium performance.

---

## 🎨 1. Color System & Design Tokens

### Primary Brand Color
- **Primary Red:** `#E30613` (Main CTA buttons, active states, key brand highlights)
- **Primary Hover:** `#C8000E`
- **Primary Active:** `#A8000B`
- **Primary Subtle Light:** `#FEF2F2` (Red 50)
- **Primary Border Tint:** `#FECACA` (Red 200)

### Neutral & Surface Colors
- **Page Background:** `#FFFFFF` (Dark Mode: `oklch(0.141 0.005 285.823)`)
- **Card / Surface Background:** `#FFFFFF` / `#F8F9FA`
- **Primary Text:** `#111827` (Text Black)
- **Secondary Text:** `#6B7280` (Muted Gray)
- **Border Default:** `#E5E7EB`

### Semantic Status Palette
- **Success:** `#10B981` (Emerald)
- **Error / Danger:** `#EF4444` (Red)
- **Warning:** `#F59E0B` (Amber)
- **Info:** `#3B82F6` (Blue)

---

## 🔤 2. Typography System & Rules

### Font Families
- **Primary Fonts:** `IBM Plex Sans Thai`, `Noto Sans Thai`, sans-serif.

### Mandatory Typography Rules for Developers
- **Component & Card Headers (Titles):**  
  `font-bold text-sm text-black` (`dark:text-white`)  
  *Used for card titles, form labels, table headers, and modal headings.*
  
- **Body Content & General Text:**  
  `text-sm text-black` (`dark:text-zinc-200`)  
  *Used for descriptions, table data cells, form helper text, and general UI text.*

### Standard Scale Reference

| Level | Font Size | Font Weight | Line Height | CSS Utility Class |
| :--- | :--- | :--- | :--- | :--- |
| **Section Title** | `14px` | `700 Bold` | `150%` | `font-bold text-sm text-black` |
| **Body Content** | `14px` | `400 Regular` | `150%` | `text-sm text-black` |
| **Display Title** | `48px` | `700 Bold` | `120%` | `text-5xl font-bold` |
| **H1 Header** | `32px` | `700 Bold` | `130%` | `text-3xl font-bold` |
| **H2 Header** | `24px` | `600 SemiBold` | `140%` | `text-xl font-semibold` |
| **Small Text** | `12px` | `400 Regular` | `150%` | `text-xs font-normal text-zinc-600` |

---

## ⚡ 3. Slim UI Controls & Interactive Actions

To maintain a clean and space-efficient enterprise layout, all action buttons, input fields, and textareas use compact **Slim UI Specifications**.

### Button Specifications

```tsx
// 1. Standard Slim Button (Recommended Default)
<Button className="h-8 text-xs font-semibold px-4 bg-[#E30613] hover:bg-[#C8000E] text-white rounded-[6px] duration-150 active:scale-95">
  Save Changes
</Button>

// 2. Extra Slim Button (Table Toolbars & In-line Actions)
<Button className="h-7 text-[11px] font-semibold px-3 rounded-[6px] active:scale-95">
  Add Item
</Button>

// 3. Secondary Slim Button
<Button variant="outline" className="h-8 text-xs font-semibold border-[#E5E7EB] rounded-[6px] active:scale-95">
  Cancel
</Button>
```

### Form Input & Textarea Specifications

```tsx
// 1. Slim Text Input (Height 32px)
<Input
  type="text"
  placeholder="Enter value..."
  className="h-8 text-xs bg-white border-[#E5E7EB] rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#E30613]/20"
/>

// 2. Slim Textarea
<Textarea
  placeholder="Enter notes..."
  rows={2}
  className="text-xs p-2.5 min-h-[64px] bg-white border-[#E5E7EB] rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#E30613]/20"
/>
```

---

## 📦 4. Iconography System

- **Source Library:** `lucide-react` ([https://lucide.dev](https://lucide.dev))
- **Standard Sizing Grid:**
  - `16px` (`w-4 h-4`): Small inline icons, button icons, badge icons.
  - `20px` (`w-5 h-5`): Standard navigation & card icons.
  - `24px` (`w-6 h-6`): Feature headers.
  - `32px` (`w-8 h-8`): Large banner / Hero icons.

---

## 🔔 5. Notification System & Toast Alerts

Feedback notifications inform users of action results. All toasts must be triggered using `sonner` and appear in the **Top-Right Position**.

### Toast Styling Specification (White Background Rule)
All toast popups **MUST NOT** use black or dark backgrounds. They must render with a **clean white background**, crisp border, and colored status text:

- **Success Toast:** White background + Green Text/Icon (`text-emerald-700 bg-white border-emerald-200`)
- **Error Toast:** White background + Red Text/Icon (`text-red-700 bg-white border-red-200`)
- **Warning Toast:** White background + Amber Text/Icon (`text-amber-700 bg-white border-amber-200`)
- **Info Toast:** White background + Blue Text/Icon (`text-blue-700 bg-white border-blue-200`)

### Developer Toast Code Examples

```typescript
import { toast } from "sonner";

// 1. Action Success
toast.success(res.message || "Data saved successfully!");

// 2. Action Error
toast.error(res.message || "Failed to save data. Please try again.");

// 3. Loading State (Async Promise Resolution)
const toastId = toast.loading("Processing request...");
try {
  await executeApiCall();
  toast.success("Successfully updated!", { id: toastId });
} catch (err) {
  toast.error("Operation failed", { id: toastId });
}
```

---

## 📐 6. Grid, Container & Elevation Standard

- **Max Container Width:** `1440px` (`max-w-[1440px] mx-auto`)
- **Grid Layout:** `12-Column Grid` with `24px` gap (`gap-6`)
- **Corner Radii (`border-radius`):**
  - Controls (Buttons/Inputs): `6px` (`rounded-[6px]`)
  - Cards & Panels: `12px` (`rounded-[12px]`)
  - Modals & Banners: `16px` (`rounded-[16px]`)
- **Elevation:** Clean border `#E5E7EB` combined with soft `shadow-xs`.

---

© 2026 Boonthavorn Retail Corporation. All rights reserved.

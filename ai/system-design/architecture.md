# Page Architecture & Loading Guidelines

This document outlines the standard rules for folder structure, Next.js page architectures, routing, and asynchronous loading states.

---

## 🏛️ Component Structure
All modules must follow this directory pattern:

```
app/module/
├── page.tsx
├── [id]/
│   └── page.tsx
└── _components/
    ├── module-table.tsx
    ├── module-columns.tsx
    └── module-detail.tsx
```

---

## 📄 Main `page.tsx` Architecture
The main entry page acts only as a renderer for the module component.

### Rules
- **MUST NOT** contain any UI markup directly.
- **❌ NO** headers.
- **❌ NO** padding.
- **❌ NO** layout styling.

### Example
```tsx
export default function ModulePage() {
  return <ModuleTable />;
}
```

---

## 📍 Detail Page (`[id]/page.tsx`)
- **MUST** use the `findOne` API method (or equivalent) to fetch the single entity.
- **MUST** fetch the data *every time* the detail page is opened.
- **MUST NOT** reuse or pass down list data from the table to the detail view (to prevent stale data issues).

---

## 🌐 Navigation
Navigation between pages must use the Next.js router standard pattern:
```ts
router.push(`/${module}/${id}`);
```

---

## ⏳ Loading / Async Action Rules (CRITICAL)

Managing loading states professionally is highly important to ensure a smooth user experience.

### Suspense Rules
- **MUST** use `React.Suspense` or `Suspense` when loading data.
- **MUST** use Suspense in the following cases:
  1. Pages or sections waiting for API data.
  2. Components that must fetch data before rendering.
  3. Lazy loaded components.
- **SHOULD** isolate loading states to specific sections rather than blocking the entire page.
- **MUST** provide an appropriate `fallback` (e.g., Skeleton UI or standard loading state).
- **MUST NOT** leave the screen blank while waiting for data.

### Suspense Implementation Example
```tsx
import { Suspense } from "react";
import { ModuleTable } from "./_components/module-table";
import { TableSkeleton } from "@/components/ui/skeleton";

export default function ModulePage() {
  return (
    <Suspense fallback={<TableSkeleton />}>
      <ModuleTable />
    </Suspense>
  );
}
```

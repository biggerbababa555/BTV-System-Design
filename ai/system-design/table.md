# Table UI & Search Standard

This document outlines the strict guidelines for designing and rendering data tables within the application.

---

## 📊 Table Standard
- **MUST** use the central `components/table/data-table.tsx` component.
- **MUST** define columns via `@tanstack/react-table` `ColumnDef`.
- **MUST** include the following standard elements in every table view:
  1. Search input
  2. Create button
  3. Action column

### ✅ Layout Structure
Always wrap the table and its controls (search, create button) in this flex layout:
```tsx
<div className="flex flex-col gap-4">
  {/* Controls and Table */}
</div>
```

### ❌ Forbidden UI Elements
To maintain a clean and consistent dashboard UI, the following are strictly prohibited:
- **NO Titles:** Do not add descriptive titles (e.g., "จัดการข้อมูล...").
- **NO Headings:** Do not use `h1`, `h2`, `h3` tags above the table.
- **NO Padding:** Do not wrap the table in padded containers like `p-4` or `p-6`.

---

## 🔍 Search functionality (CRITICAL)
- **MUST** contain all three elements:
  1. Local State (`search`)
  2. Input UI
  3. Filter Logic (`useMemo`)
- **MUST** filter on the frontend only.
- **MUST NOT** call the API for search keystrokes.

---

## ⚙️ Action Column Rules

### Design Standards
- **MUST** be icon only.
- **MUST** use `variant="ghost"`.
- **❌ NO text labels** on the buttons.

### Action Column Implementations
**Edit Button:**
```tsx
<Button size="icon" variant="ghost" onClick={() => onEdit(row.original)}>
  <SquarePen size={16} />
</Button>
```
**Delete Button:**
```tsx
<Button size="icon" variant="ghost">
  <Trash2 size={16} />
</Button>
```

---

## 📐 Action Column Alignment (CRITICAL)
The action column must **always** be pinned and aligned to the right.

### Alignment Rules:
- **MUST** align right (`end`) always.
- Header **MUST** be right-aligned (`text-right`).
- Cell **MUST** be right-aligned (`flex justify-end`).
- Cell **MUST** have a gap between buttons (`gap-2`).
- **❌ NO left or center alignment.**

### Complete Column Definition Example:
```tsx id="action-example"
{
  id: "actions",
  header: () => <div className="text-right">Actions</div>,
  cell: ({ row }) => (
    <div className="flex justify-end gap-2">
      <Button size="icon" variant="ghost" onClick={() => onEdit(row.original)}>
        <SquarePen size={16} />
      </Button>

      <Button size="icon" variant="ghost">
        <Trash2 size={16} />
      </Button>
    </div>
  ),
}
```

### 🎯 Expected Result
- The action column is always aligned to the right.
- The UI is perfectly consistent across every table in the system.

---

## 🏷️ Status UI
- **MUST** use the `Badge` component from shadcn/ui.
- **MUST** use established semantic variants (e.g., `success`, `error`, `default`, `destructive`).
- **MUST NOT** use custom inline tailwind colors (e.g., `bg-green-500` or `text-red-500`).

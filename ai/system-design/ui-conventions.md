# UI Conventions & Naming Rules

This document outlines the standard UI library components, element class styles, and React prop naming conventions.

---

## 🎨 UI Rules

### Standard Libraries
- **MUST** use components from `shadcn/ui`.
- **MUST** use icons from `lucide-react`.

### Form Element Styling

#### Button
Action buttons must adhere to this standard compact style:
```tsx
className="h-8 text-xs font-semibold duration-150 active:scale-95"
```

#### Input
Input fields must also adhere to this standard compact style:
```tsx
className="h-8 text-xs"
```

---

## 📝 Naming Convention (CRITICAL)

When creating custom components, passing functions, or handling events, the naming must be consistent.

### Props (Function / Action)
- **MUST** use the prefix `on`.
- **Format:** `on` + `ActionName`

### Implementation Example
```tsx
// Correct usage in a component
<CustomButton 
  label="เพิ่มคะแนน" 
  onAction={handleUpdateCount} 
/>

// Correct Type Definition
type Props = {
  onAction: () => void;
  onSuccess?: () => void;
  onDelete?: (id: number) => void;
};
```

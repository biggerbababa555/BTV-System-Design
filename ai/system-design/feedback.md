# User Feedback Guidelines (Toast + Confirm)

This document outlines the strict guidelines for providing feedback to the user after any system action (Create, Update, Delete).

---

## 🔔 Toast Notifications (MANDATORY)
Every data mutation action (create, update, delete) **MUST** trigger a toast notification to inform the user of the result.

### Core Rules for Toasts
- **MUST** display a toast for *every* action (create, update, delete).
- **MUST** use the dynamic `res.message` returned from the API response.
- **MUST NOT** hardcode success or error messages (except as a fallback for general try/catch errors).

### Toast Implementation Example
```ts
try {
  const res = await action();

  if (res?.is_success) {
    toast.success(res.message || "ดำเนินการสำเร็จ");
  } else {
    toast.error(res.message || "เกิดข้อผิดพลาด");
  }
} catch (error) {
  toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
}
```

---

## 🗑️ Delete Confirm Dialog (MANDATORY)
Destructive actions require explicit user confirmation to prevent accidental data loss.

### Core Rules for Deletion
- **MUST** use the `AlertDialog` component from shadcn/ui.
- **MUST** confirm with the user before executing the delete API call every single time.

### Delete Confirm Implementation Example
```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button size="icon" variant="ghost">
      <Trash2 size={16} />
    </Button>
  </AlertDialogTrigger>

  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>ยืนยันการลบ</AlertDialogTitle>
      <AlertDialogDescription>
        คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete}>ลบ</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

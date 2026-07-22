# CRUD Standard Pattern & Store Guidelines

This document outlines the strict API response format and global state management rules using Zustand.

---

## 🔁 API Response Standard
All backend API responses must adhere to this JSON format:

```json
{
  "is_success": true,
  "statusCode": 200,
  "message": "string",
  "data": any,
  "meta": any
}
```

### Core API Rules
- **MUST** check `is_success` to verify the success of the operation.
- **MUST** use `res.data` to extract the actual payload.
- **MUST** use `res.message` for user feedback (e.g., Toast notifications).
- **MUST** wrap all API calls in `try/catch` blocks.
- **MUST NOT** use the raw response directly without checking its structure.

---

## 📦 Store (Zustand) Configuration

### 1. Standard State Variables
Every CRUD store must implement the following core state structure:
```ts
items: any[]
selectedItem: any | null
loading: boolean
meta: any
```

### 2. Standard Functions
The store must provide these fundamental functions:
- `fetchItems`
- `fetchItemById`
- `createItem`
- `updateItem`
- `deleteItem`

### 3. Store Architecture Rules
- **All API logic MUST be inside the store:** Do not place fetch calls inside React components.
- **Components MUST NOT call API directly:** They should only trigger store functions.
- **Auto-Refresh:** After any `create`, `update`, or `delete` action succeeds, the store **MUST** automatically refresh the list (e.g., by calling `fetchItems`).

### 4. Store API Implementation Patterns
```ts
// Create (POST)
await fetch(router.vendor.create, {
  method: "POST",
  body: payload,
});

// Update (PATCH)
await fetch(router.vendor.update(id), {
  method: "PATCH",
  body: payload,
});

// Delete (DELETE)
await fetch(router.vendor.delete(id), {
  method: "DELETE",
});

// Fetch (GET)
await fetch(router.vendor.findAll);
await fetch(router.vendor.findOne(id));
```

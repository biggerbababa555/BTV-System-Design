# API Configuration & Core Principles

This document defines how API requests are structured and the foundational principles every AI or developer must follow in this project.

---

## 🌐 API Configuration

### Router Definition
- **MUST** define all API endpoints centrally inside `src/lib/router.ts`.
- **MUST NOT** hardcode endpoint URLs anywhere else in the project.

### API Client
- **MUST** use the central customized fetch wrapper for all network requests.

**Implementation Example:**
```ts
import { fetch } from "@/lib/api-client";
```

---

## 📌 Principles

Every line of code written in this project should adhere to these core principles:

1. **Use TypeScript:** Ensure strict typing across components, stores, and API clients.
2. **Keep components small:** Break large interfaces into modular, reusable, and single-purpose components.
3. **Separate UI and business logic:** Keep logic (especially API calls) inside Zustand stores, keeping UI components purely presentational.
4. **Follow existing patterns:** When implementing a feature, mimic the structure and style of similar existing features.
5. **Prioritize consistency:** UI alignment, naming conventions, and file structures must be perfectly uniform across the application.

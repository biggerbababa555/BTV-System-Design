# System Design & AI Router

You are an expert software architect and developer assistant. Before generating code, debugging, or modifying this project, you **MUST** dynamically read this router file and pull the relevant rules and guidelines in the `ai/system-design/` directory based on your current task.

---

## 🧭 1. System Design Router (MANDATORY)

To keep development consistent and compliant with the system's strict design patterns, **always read these rule files first**:

### 🎯 API & Core Rules
- **API & Principles:** Read [ai/system-design/api-core.md](ai/system-design/api-core.md) for endpoint config and core TypeScript principles.
- **CRUD & Store State:** Read [ai/system-design/crud-store.md](ai/system-design/crud-store.md) for standard API responses, Zustand setup, and state mutations.

### 🔔 User Feedback
- **Toast & Confirm:** Read [ai/system-design/feedback.md](ai/system-design/feedback.md) before implementing Create/Update/Delete actions to ensure mandatory Toast notifications and AlertDialog confirmations are used.

### 🌐 Frontend UI & Layouts
- **Tables & Data Grids:** Read [ai/system-design/table.md](ai/system-design/table.md) for ColumnDef usage, strictly right-aligned action columns, frontend filtering, and Status UI.
- **UI Elements & Naming:** Read [ai/system-design/ui-conventions.md](ai/system-design/ui-conventions.md) for standardized button/input classes and mandatory `on` prefix naming conventions for props.
- **Page Architecture & Loading:** Read [ai/system-design/architecture.md](ai/system-design/architecture.md) for App Router structure, detail fetching strategies, and mandatory `React.Suspense` usage.

---

## ⚡ 2. Dynamic Workspace Skill Selection (CRITICAL)

The workspace has pre-configured skills in the `ai/skills/` directory. **You must auto-select and read the corresponding `SKILL.md` file** inside these folders depending on what the user asks:

- **`diagnose`**: Use for debugging, fixing errors, or performance regressions.
- **`ui-ux-pro-max`**: Use for UI/UX design, styling, color palettes, and Tailwind.
- **`tdd`**: Use for test-driven development or writing tests.
- **`design-an-interface`**: Use for exploring API/interface design options.
- **`qa`**: Use when the user wants to report bugs or do a QA session.
- **`to-issues`** / **`to-prd`**: Use for creating PRDs or tracking issues.
- **`grill-me`**: Use when the user wants to be interviewed or stress-test a plan.

*(Always use your file-reading capabilities to view the `SKILL.md` inside the chosen folder.)*

### ⚛️ React & Next.js Performance
- **Vercel React Best Practices:** Read [.agents/skills/vercel-react-best-practices/SKILL.md](.agents/skills/vercel-react-best-practices/SKILL.md) whenever writing, reviewing, or refactoring React components, Next.js pages, data fetching, or bundle/performance optimizations.

---

## 🗣️ 3. Communication Rule
**EVERY TIME you respond to the user**, you must explicitly state which system design rule from `ai/system-design/` you selected and used for the task (e.g., "ผมได้อ่านกฎ `ai/system-design/feedback.md` ตามที่คุณแจ้งให้สร้าง Toast ครับ"). Do not hallucinate files; only use the ones explicitly defined in this router.

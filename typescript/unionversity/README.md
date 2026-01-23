# Unionversity (TypeScript)

## Overview

**Unionversity** is a TypeScript project that simulates enrolling in courses and study groups using a **type-safe search and enrollment system**.
The core goal of this project is to practice modeling real-world data with **union types**, **type guards**, and **inference**, while keeping the runtime JavaScript simple and predictable.

This project mirrors common frontend and backend scenarios where different entities share partial structure but require safe differentiation at runtime.

---

## Why This Project Matters

This project demonstrates skills that are critical in modern TypeScript and Angular codebases:

### 1. Type Safety Without Overengineering

* Uses **union types** instead of inheritance or complex class hierarchies
* Relies on **TypeScript’s structural typing** to keep code flexible
* Avoids unnecessary generics or abstractions

### 2. Real-World Data Modeling

* Courses and study groups share similarities but are not identical
* Search logic must safely handle **multiple input types** (`string | number`)
* Enrollment must accept **multiple entity shapes** while preserving correctness

### 3. Runtime vs Compile-Time Thinking

* TypeScript ensures correctness **before runtime**
* JavaScript logic remains clean, readable, and testable
* Explicit type guards (`typeof`) align runtime checks with compile-time guarantees

This mirrors how Angular services, API clients, and state management layers are typically designed.

---

## Key Concepts Demonstrated

* Union types (`string | number`, `Course | StudyGroup`)
* Literal unions (`'courses' | 'groups'`)
* Type guards with `typeof`
* Type inference (letting TS infer return types)
* Array transformations (`filter`, `includes`)
* Separation of data (`courses.ts`, `studyGroups.ts`) from logic (`index.ts`)
* Practical `tsconfig.json` usage

---

## Project Structure

```
unionversity/
├─ index.ts        // search + enroll logic
├─ courses.ts      // course data
├─ studyGroups.ts  // study group data
├─ tsconfig.json   // TypeScript compiler rules
└─ README.md
```

---

## How It Works (High Level)

1. **Search**

   * Accepts a query (`string | number`) and an event type
   * Uses type guards to safely match IDs or keywords
   * Returns a union array of matching results

2. **Enroll**

   * Accepts either a course or a study group
   * Adds it to a shared enrollment list
   * Preserves type safety without runtime checks

3. **Output**

   * Logs enrolled events in a predictable, readable format

---

## Future Improvements

This project is intentionally lightweight, but it is designed to scale.

### Planned / Natural Extensions

* **Refactor search and enroll logic into a service**

  * Direct path toward Angular service architecture

* **Introduce discriminated unions**

  * Add a shared `eventType` literal for stronger narrowing

* **Add validation and error handling**

  * Prevent duplicate enrollments
  * Handle invalid search queries gracefully

* **Add a UI layer**

  * Angular component for searching and enrolling
  * Observable-based state management

* **Replace static data with API input**

  * Fetch courses and study groups asynchronously
  * Introduce async/await and typed API responses

---

## Why This Fits Well Before Angular

Unionversity builds the mental model required for Angular:

* **Components consume typed data**
* **Services return union-based results**
* **Templates rely on narrowing and inference**
* **Errors are caught early by the compiler**

This project acts as a clean bridge between **JavaScript fundamentals** and **Angular architecture**.

---

## Status

✅ Complete
🔜 Planned refactor into Angular service + UI

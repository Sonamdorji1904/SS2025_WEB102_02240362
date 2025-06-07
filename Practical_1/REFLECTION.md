
# Reflection – Practical 1

## Main Concepts Applied

- **RESTful API Design** – Structured endpoints logically using resources like `/users`, `/posts`, etc.
- **HTTP Methods and Status Codes** – Used correct methods like GET, POST, PUT, DELETE and proper status responses (e.g., 200, 201, 404).
- **Content Negotiation** – Implemented middleware to respond in different formats (JSON/HTML).
- **Project Structure** – Followed MVC patterns for maintainability.
- **Mock Data** – Simulated database interactions using mock files.

---

## What I Learned

I learned to:

- Design full CRUD APIs for multiple resources.
- Use middleware effectively for reusable logic.
- Document APIs clearly using HTML.
- Create meaningful API responses and handle different request formats.
- Lay the groundwork for backend architecture before integrating a real database.

---

## Challenges and Solutions

### 1. Designing scalable routes
- **Problem:** I wasn’t sure how to keep routes DRY across resources.
- **Solution:** I reused controller logic patterns and abstracted common response logic.

### 2. Content negotiation logic
- **Problem:** I initially returned only JSON.
- **Solution:** Added `Accept` header handling to return HTML when required.

---

## Conclusion

This practical taught me how to build robust, maintainable RESTful APIs from scratch. I feel more confident designing backend systems that follow industry standards.

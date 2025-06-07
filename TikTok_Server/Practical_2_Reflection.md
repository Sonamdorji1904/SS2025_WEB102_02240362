# Reflection

## Main Concepts Applied

- **Express.js Routing** – Built RESTful endpoints for users, videos, and comments.
- **Modular Controllers** – Separated concerns into video, user, and comment controllers.
- **In-Memory Data Handling** – Simulated database operations using in-memory JS objects.
- **HTTP Methods** – Implemented GET, POST, PUT, DELETE routes.
- **Testing Tools** – Used Postman and curl for API testing.

---

## What I Learned

I learned how to:

- Design and implement REST APIs from scratch using Express.
- Structure a backend server in a modular and maintainable way.
- Map logical resources (users, videos, comments) into RESTful routes.
- Test and debug endpoints efficiently with Postman and curl.

---

## Challenges and How I Solved Them

### 1. Route Structuring
- **Problem:** Confusion with nested routes like `/users/:id/videos`.
- **Solution:** Carefully followed route file separation and used route parameters effectively.

### 2. In-Memory Data Reset
- **Problem:** All data was lost on server restart.
- **Solution:** Accepted this as a limitation until connected to a real database in later practicals.

---

## Conclusion

This practical gave me a strong foundation in backend API development and paved the way for database integration in later tasks.


# Practical 1 – Designing and Implementing RESTful API Endpoints

This practical focuses on designing a RESTful API for a social media app (similar to Instagram), and implementing it using Node.js and Express. The app supports managing posts, users, comments, likes, and followers.

---

## Objectives

- Design RESTful API endpoints following best URI practices.
- Implement GET, POST, PUT, DELETE operations.
- Return appropriate HTTP status codes.
- Set up content negotiation (JSON, HTML).
- Document all available endpoints.

---

## Technologies Used

- Node.js
- Express
- CORS
- Helmet (for security headers)
- Morgan (for logging)

---

## Project Setup

```bash
git clone <your-repo-url>
cd social-media-api
npm install
npm run dev
````

---

## Folder Structure

```
social-media-api/
├── controllers/
├── routes/
├── middleware/
├── utils/
├── public/           # for docs.html
├── server.js
└── .env
```

---

## API Endpoints Overview

Example: `/users`

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/users`     | List all users   |
| POST   | `/users`     | Create new user  |
| GET    | `/users/:id` | Get user by ID   |
| PUT    | `/users/:id` | Update user info |
| DELETE | `/users/:id` | Delete a user    |

(Similar structure exists for `/posts`, `/comments`, `/likes`, and `/followers`)

---

## Documentation

HTML documentation page available at:

```
http://localhost:3000/docs.html
```

---

## Mock Data

Mock data is located in `utils/mockData.js` to simulate real database operations for testing.

---

## Content Negotiation

Middleware `formatResponse.js` handles different response types (JSON by default, HTML if requested).

---
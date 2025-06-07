
# Practical 1 – API Endpoint Design Table

This file documents the RESTful API endpoint design for a social media platform including users, posts, comments, likes, and followers.

---

## Users

| URI/Endpoint | Method | Request Body | Response Body | Description |
|--------------|--------|---------------|----------------|-------------|
| `/users` | GET | Header: `Authorization: Bearer {token}`<br>Query: `page=1&limit=10` | 200 OK<br>`{ success: true, count: 50, page: 1, total_pages: 5, data: [...] }` | Get a paginated list of users |
| `/users` | POST | `{ "username": "new_user", "email": "test@example.com", "password": "pass123", "full_name": "Test User", "bio": "Hello world" }` | 201 Created<br>`{ success: true, data: { id, username, full_name, created_at } }` | Create a new user |
| `/users/:id` | GET | – | 200 OK<br>`{ success: true, data: { id, username, email, bio } }` | Get a specific user by ID |
| `/users/:id` | PUT | `{ "full_name": "Updated Name", "bio": "Updated bio" }` | 200 OK<br>`{ success: true, data: { id, updated_fields... } }` | Update an existing user |
| `/users/:id` | DELETE | – | 204 No Content | Delete a user account |

---

## Posts

| URI/Endpoint | Method | Request Body | Response Body | Description |
|--------------|--------|---------------|----------------|-------------|
| `/posts` | GET | Query: `page=1&limit=10` | 200 OK<br>`{ success: true, count, data: [...] }` | Get all posts (paginated) |
| `/posts` | POST | `{ "userId": 1, "caption": "My first post", "image_url": "https://..." }` | 201 Created<br>`{ success: true, data: { id, caption, created_at } }` | Create a new post |
| `/posts/:id` | GET | – | 200 OK<br>`{ success: true, data: { id, caption, author } }` | Get a post by ID |
| `/posts/:id` | PUT | `{ "caption": "Updated caption" }` | 200 OK<br>`{ success: true, data: { id, caption } }` | Update an existing post |
| `/posts/:id` | DELETE | – | 204 No Content | Delete a post |

---

## Comments

| URI/Endpoint | Method | Request Body | Response Body | Description |
|--------------|--------|---------------|----------------|-------------|
| `/comments` | GET | Query: `postId=1` | 200 OK<br>`{ success: true, data: [comments] }` | Get comments for a post |
| `/comments` | POST | `{ "postId": 1, "userId": 2, "text": "Nice photo!" }` | 201 Created<br>`{ success: true, data: { id, text, created_at } }` | Add a comment |
| `/comments/:id` | GET | – | 200 OK<br>`{ success: true, data: { id, text } }` | Get comment by ID |
| `/comments/:id` | PUT | `{ "text": "Updated comment" }` | 200 OK<br>`{ success: true, data: { id, text } }` | Edit a comment |
| `/comments/:id` | DELETE | – | 204 No Content | Delete a comment |

---

## Likes

| URI/Endpoint | Method | Request Body | Response Body | Description |
|--------------|--------|---------------|----------------|-------------|
| `/likes` | POST | `{ "userId": 2, "postId": 10 }` | 201 Created<br>`{ success: true, data: { id, liked_at } }` | Like a post |
| `/likes/:id` | DELETE | – | 204 No Content | Unlike a post |
| `/posts/:postId/likes` | GET | – | 200 OK<br>`{ success: true, count: 100 }` | Get like count for a post |

---

## Followers

| URI/Endpoint | Method | Request Body | Response Body | Description |
|--------------|--------|---------------|----------------|-------------|
| `/followers` | POST | `{ "followerId": 2, "followingId": 1 }` | 201 Created<br>`{ success: true }` | Follow a user |
| `/followers/:id` | DELETE | – | 204 No Content | Unfollow a user |
| `/users/:id/followers` | GET | – | 200 OK<br>`{ success: true, followers: [...] }` | Get all followers of a user |
| `/users/:id/following` | GET | – | 200 OK<br>`{ success: true, following: [...] }` | Get all users the user is following |

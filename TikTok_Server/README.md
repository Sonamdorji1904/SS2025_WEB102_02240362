
# TikTok Full-Stack Practicals (WEB101)

This repository includes completed implementations for three key backend-focused practicals:
1. REST API Design using Express.js
2. Database Integration using PostgreSQL and Prisma ORM
3. Cloud Storage Integration using Supabase

Each folder includes the code for that practical. Below are detailed instructions for setup, dependencies, and how to run each project.

---

## Practical 2: TikTok REST API with Express.js

### Setup Instructions

1. Navigate into the project:
   ```bash
   cd Practical_2_REST_API


2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

### API Overview

| Method | Endpoint                | Description                 |
| ------ | ----------------------- | --------------------------- |
| GET    | `/api/videos`           | Fetch all videos            |
| POST   | `/api/videos`           | Create a new video          |
| GET    | `/api/videos/:id`       | Fetch a specific video      |
| PUT    | `/api/videos/:id`       | Update a video              |
| DELETE | `/api/videos/:id`       | Delete a video              |
| GET    | `/api/users/:id/videos` | Get videos posted by a user |
| GET    | `/api/comments`         | Fetch all comments          |

### Test With:

* Postman
* curl (e.g., `curl -X GET http://localhost:3000/api/videos`)

---

## Practical 4: PostgreSQL Integration with Prisma ORM


### Setup Instructions

1. **Create a PostgreSQL database:**

   ```bash
   createdb tiktok_db
   ```

2. **Create `.env` file** with:

   ```
   DATABASE_URL="postgresql://<user>:<password>@localhost:5432/tiktok_db"
   JWT_SECRET="yoursecret"
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run Prisma migration and seed:**

   ```bash
   npx prisma migrate dev --name init
   npm run seed
   ```

5. **Start the server:**

   ```bash
   npm run dev
   ```

### Features

* Persistent user, video, comment, and like data
* Prisma schema with one-to-many and many-to-many relationships
* Bcrypt password hashing
* JWT-based auth with protected routes

### Key API routes

* `POST /api/users/register` – register a user
* `POST /api/users/login` – login and get token
* `POST /api/videos` – (protected) upload video
* `GET /api/videos` – fetch all videos

---

## Practical 5: Supabase Cloud Storage


This practical improves video uploads by using **Supabase Storage** instead of local file storage.

### Supabase Setup (One-Time)

1. Go to [supabase.com](https://supabase.com) and create a project.
2. In the dashboard, go to **Storage** → **Create Bucket**:

   * `videos` (public)
   * `thumbnails` (public)
3. Add policies:

   * Allow **authenticated users** to upload
   * Allow **public read access**

### Environment Variables

Update both backend `.env` and frontend `.env.local`:

#### Backend `.env`

```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_KEY=your-secret-service-key
SUPABASE_PUBLIC_KEY=your-public-key
SUPABASE_STORAGE_URL=https://your-project-id.supabase.co/storage/v1
```

#### Frontend `.env.local`

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLIC_KEY=your-public-key
```

### Steps to Run

1. In the **backend folder**:

   ```bash
   npm install
   npm run dev
   ```

2. In the **frontend folder**:

   ```bash
   npm install
   npm run dev
   ```

### Upload Flow

* Frontend directly uploads files to Supabase using `uploadService.js`.
* Supabase generates public URLs for thumbnails and videos.
* URLs are saved in the backend database.

### Bonus Step: Migrate Old Files

If you have existing videos stored locally, run:

```bash
cd server
node scripts/migrateVideosToSupabase.js
```

---

## Summary

| Practical | Stack Used                          | Key Features                                   |
| --------- | ----------------------------------- | ---------------------------------------------- |
| 2         | Express.js                          | REST API design and in-memory data models      |
| 4         | PostgreSQL + Prisma + JWT + Bcrypt  | Auth + persistent storage + ORM queries        |
| 5         | Supabase (cloud) + CDN + Upload SDK | Cloud file uploads and storage policy handling |

---


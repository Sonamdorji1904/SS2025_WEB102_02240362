
# Practical 3 – File Upload on the Server Application

This practical demonstrates how to implement secure file uploads using Node.js, Express, and Multer. It includes setting up a server to receive files from a React/Next.js frontend, with validations and error handling.

---

## Objectives

- Handle multipart/form-data from frontend file uploads.
- Store uploaded files on the server.
- Validate file types (e.g., only PDFs).
- Enforce size limits and show progress.
- Connect to a drag-and-drop UI on the frontend.

---

## Tech Stack

- Node.js
- Express.js
- Multer (file uploads)
- Morgan (logging)
- CORS
- dotenv

---

## Setup Instructions

1. Create project and install dependencies:
```bash
mkdir file-upload-server
cd file-upload-server
npm init -y
npm install express cors multer morgan dotenv
````

2. Add basic server in `server.js`.

3. Configure Multer:

* Define storage (e.g., `/uploads`)
* Set file filter (PDFs only)
* Limit file size

4. Create an upload API route:

```js
POST /api/upload
```

5. Connect to your frontend by updating Axios calls to:

```js
http://localhost:8000/api/upload
```

6. Run the server:

```bash
node server.js
```

---

## Project Structure

```
file-upload-server/
├── uploads/           # Saved files
├── server.js
└── .env
```

---

## Key Features

* Multer config for custom storage and validation
* CORS-enabled for frontend access
* Drag-and-drop UI integration on frontend
* Real-time upload progress via Axios
* Backend error handling for invalid files

---

## Testing

1. Run Express backend: `node server.js`
2. Run React frontend: `npm run dev`
3. Upload a PDF file and check:

   * Progress bar updates
   * File appears in `/uploads`
   * Invalid files are rejected
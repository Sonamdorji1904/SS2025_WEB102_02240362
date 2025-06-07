
# Reflection – Practical 3

## Main Concepts Applied

- **Multer Middleware** – Used for parsing multipart/form-data and handling disk storage.
- **Validation** – Enforced file size limits and allowed only specific MIME types (PDFs).
- **Error Handling** – Implemented both frontend and backend handling for invalid files.
- **Drag-and-Drop Upload** – Integrated file upload with a modern frontend UX.
- **CORS Configuration** – Allowed cross-origin requests between frontend and backend.

---

## What I Learned

This practical helped me:

- Understand how file uploads work under the hood (from frontend FormData to backend storage).
- Use Multer to securely handle and validate uploaded files.
- Connect frontend and backend over HTTP with real-time feedback using Axios.
- Debug and test file operations locally in a full-stack context.

---

## Challenges and Solutions

### 1. File not accepted
- **Problem:** Some files were silently rejected.
- **Solution:** Added file type filter using Multer’s `fileFilter`.

### 2. CORS errors
- **Problem:** Frontend requests were blocked.
- **Solution:** Configured CORS middleware to allow localhost frontend origin.

### 3. No progress feedback
- **Problem:** Uploads felt unresponsive for users.
- **Solution:** Used Axios’s `onUploadProgress` to display a progress bar.

---

## Conclusion

This practical was a hands-on introduction to one of the most useful backend features — file uploads. I now know how to build secure, user-friendly file upload systems connected to a frontend UI.

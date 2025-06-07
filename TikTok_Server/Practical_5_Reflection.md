# Reflection

## Main Concepts Applied

- **Cloud Storage** – Integrated Supabase Storage for scalable media file hosting.
- **Access Policies** – Applied role-based permissions for video and thumbnail access.
- **Direct Uploads** – Uploaded files from frontend directly to Supabase without server load.
- **Supabase SDK** – Used Supabase client in both frontend and backend.
- **Migration Scripts** – Created a script to move locally stored videos to the cloud.

---

## What I Learned

I learned how to:

- Use Supabase as a Firebase alternative for file storage.
- Set up public and private buckets for handling sensitive media.
- Replace local file serving with cloud-hosted URLs in video metadata.
- Securely store and retrieve media assets using environment variables and cloud links.

---

## Challenges and How I Solved Them

### 1. Supabase Keys Missing
- **Problem:** Application crashed due to missing API keys.
- **Solution:** Added environment variables to both frontend and backend `.env` files.

### 2. File Not Showing After Upload
- **Problem:** Video URLs were broken after uploading.
- **Solution:** Ensured the full public path from Supabase was correctly used in `VideoCard.jsx`.

---

## Conclusion

This practical was essential to transition from local development to scalable, production-ready architecture. I now feel confident managing cloud-hosted assets for a real application.

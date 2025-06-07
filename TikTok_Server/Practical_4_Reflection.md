# Reflection

## Main Concepts Applied

- **PostgreSQL Database** – Installed and configured PostgreSQL for backend use.
- **Prisma ORM** – Used Prisma for database modeling, migration, and querying.
- **JWT Authentication** – Implemented secure login with token generation.
- **Password Hashing** – Used bcrypt to store passwords securely.
- **Data Seeding** – Populated the database with users, videos, comments, and relationships.

---

## What I Learned

I learned how to:

- Connect an Express.js server to a real relational database.
- Use Prisma to manage schema migrations and write complex queries.
- Implement secure authentication systems using hashed passwords and JWT.
- Write scripts to seed databases for development testing.

---

## Challenges and How I Solved Them

### 1. Prisma Migration Errors
- **Problem:** Migrations failed due to schema mismatches.
- **Solution:** Carefully edited `schema.prisma` and reset migrations before retrying.

### 2. JWT Not Validating
- **Problem:** Invalid or missing tokens caused issues on protected routes.
- **Solution:** Debugged the `auth.js` middleware and checked token header format.

---

## Conclusion

This practical taught me how to manage real persistent data and implement full authentication systems, bringing me closer to full-stack development proficiency.

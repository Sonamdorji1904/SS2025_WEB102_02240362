const app = require('./app'); // Import the app object from app.js
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
});
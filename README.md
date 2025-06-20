 # 🌍 WanderLust - Hotel Listing Web App

WanderLust is a full-stack web application where users can create, read, update, and delete hotel listings. It supports user authentication, image handling, and reviews—built using the **MERN-style stack** but with EJS templating and server-side rendering.

---

## 🏗️ Tech Stack

- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Frontend:** EJS, Bootstrap 5, HTML/CSS
- **Authentication:** Passport.js (Local Strategy)
- **Image Handling:** Cloudinary + Multer (optional)
- **Validation:** Joi, Middleware
- **Flash Messages:** connect-flash

---

## 🔥 Features

- 🧾 Add/Edit/Delete Hotel Listings
- 📸 Upload hotel images (via Cloudinary or direct URL)
- 🔐 User Authentication (Register/Login/Logout)
- 📝 Post & delete reviews on hotels
- ✅ Form validation with error handling
- 📍 Hotel listing by location and price
- 💬 Flash success/error messages
- ⚙️ RESTful routes using Express Router

---

## 💻 Installation & Running Locally

1. **Clone the repository**
```bash
git clone https://github.com/vishalsinghtanwar/wanderlust.git
cd wanderlust


2. Install dependencies
npm install

3.Set up environment variables
AtLASDB_URL=your_mongodb_connection_string

4.Run the app
nodemon app.js

👨‍💻 Author
💼 Vishal Singh Tanwar
---

 Future Enhancements
Search and Filter by location or price

Sort listings by latest or rating

Pagination for large listing datasets

Favorite listings for logged-in users

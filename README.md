# Pinterest Clone 📌

A full-featured Pinterest clone built with Node.js, Express, and EJS templating. This application replicates the core functionality of Pinterest, allowing users to register, login, upload images, and view posts in a Pinterest-style feed.

## 🚀 Features

### User Authentication
- **User Registration**: Create new accounts with email, username, and full name
- **Secure Login**: Username and password authentication with session management
- **Logout Functionality**: Secure session cleanup on logout

### Image Management
- **File Upload**: Upload images using Multer middleware with UUID-based naming
- **Image Gallery**: View uploaded images in profile with Bootstrap cards
- **Captions**: Add descriptive text to uploaded images
- **Organized Storage**: Images stored in `public/images/uploads/` directory

### User Interface
- **Homepage**: Registration form with Pinterest branding
- **Login Page**: Dedicated login interface
- **Profile Page**: Personal profile with user posts in card layout
- **Feed Page**: Browse posts from all users (Pinterest-style)
- **Error Handling**: Custom error pages with graceful fallbacks

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Passport.js with Local Strategy
- **File Upload**: Multer middleware
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS + Bootstrap 5.3.3
- **Session Management**: Express Session with Flash messages
- **Unique IDs**: UUID for file naming

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanketBhangale1803/Pinterest-Clone.git
   cd Pinterest-Clone
   ```

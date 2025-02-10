# 🌐 MERN Blog – Full Stack Blog App with Admin Dashboard

A fully responsive **Blog Application** built using the **MERN Stack** (MongoDB, Express.js, React, Node.js) with features like JWT authentication, Google authentication (Firebase), Redux Toolkit for state management, and a modern UI.

🌐 **Live Demo**: [mern-blog-rg79.onrender.com](https://mern-blog-rg79.onrender.com/)

## ✨ Features

- 🔐 **JWT Authentication** – Secure user authentication and authorization.
- 🔑 **Google Authentication** – Sign in with Google using Firebase.
- 📝 **Create & Manage Blog Posts** – Admin can create, update, and delete blog post.
- 🔍 **Advanced Search** – Filter blog posts by category, tags, and keywords.
- 📱 **Fully Responsive** – Works seamlessly across all devices.
- 🛠️ **Redux Toolkit** – Efficient state management for a smooth user experience.
- 📸 **Image Uploads** – Upload images for blog posts and user profile.
- 👤 **User Profiles** – User can create, update, and delete his Profile.
- 🏢 **Admin Dashboard** – Manage users, blog posts, and comments.

## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens), Firebase (Google Authentication)
- **Deployment**: Render

## 📷 Screenshots

### Home Page
| Home Page 1 | Home Page 2 | Home Page 3 |
|-------------|-------------|-------------|
| ![Home Page 1](./home.png) | ![Home Page 2](./home1.png) | ![Home Page 3](./home2.png) |

### About Page
| About Page |
|------------|
| ![About Page](./about.png) |

### Project Page
| Project Page |
|--------------|
| ![Project Page](./project.png) |

### Comment Section
| Comment 1 | Comment 2 |
|------------|------------|
| ![Comment 1](./comment1.png) | ![Comment 2](./comment2.png) |

### Create Post Page
| Create Post Page |
|------------------|
| ![Create Post Page](./create-post.png) |

### Update Post Page
| Update Post Page |
|------------------|
| ![Update Post Page](./update-post.png) |

### user profile Page
| user profile Page |
|------------------|
| ![user profile Page](./userprofile.png) |

### Admin Dashboard
| Admin Profile | Manage Post | Delete Post | Manage User | Manage Comment | Dashboard |
|--------------|------------|-------------|-------------|--------------|------------|
| ![Admin Profile](./admin-profile.png) | ![Manage Post](./manage-post.png) | ![Delete Post](./delete-post.png) | ![Manage User](./manage-user.png) | ![Manage Comment](./manage-comment.png) | ![Dashboard](./dashboard.png) |

### Authentication Page
| Sign In | Sign Up | Password Conditions |
|------------|------------|------------------|
| ![Sign In](./signin.png) | ![Sign Up](./signup.png) | ![Password Conditions](./password-condition.png) |

### Search Page
| Search Page 1 | Search Page 2 |
|--------------|--------------|
| ![Search Page 1](./search1.png) | ![Search Page 2](./search2.png) |

### Post Details Page
| Post Details 1 | Post Details 2 | Post Details 3 |
|----------------|----------------|----------------|
| ![Post Details 1](./post.png) | ![Post Details 2](./post1.png) | ![Post Details 3](./post2.png) |

# MERN Blog

## 🎯 How to Use

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/hadialkari/MERN-Blog.gitc
   cd mern-blog
   ```

2. **Install Dependencies**  

   For the client (frontend):
   ```bash
   cd client
   npm install
   ```

   For the server (backend):
   ```bash
   cd api
   npm install
   ```

3. **Set Up Environment Variables**  

   Create a `.env` file in the `api` directory and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Create a `.env` file in the `client` directory and add the following:

   ```env
   VITE_FIREBASE_API_KEY = 'your_VITE_FIREBASE_API_KEY'
   ```

4. **Run the Application**  

   Start the backend server:
   ```bash
   cd api
   npm run dev
   ```

   Start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```

5. **Open the Application**  
   Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

## 🔑 Google Authentication Setup

To enable Google authentication:

1. Go to the Firebase Console.
2. Create a new project and set up authentication using Google.
3. Add your web app to the Firebase project and copy the Firebase configuration.

## 🏷️ Topics

- Node.js
- JavaScript
- Blog
- MongoDB
- React.js
- Express.js
- Admin Dashboard
- Fullstack Development
- JWT Authentication
- MERN Stack
- Redux Toolkit

## 📜 License

This project is **open-source**.

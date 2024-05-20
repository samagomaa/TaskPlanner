# TaskPlanner

TaskPlanner is a backend project implemented using Node.js and Mongoose that allows users to manage tasks. It provides CRUD operations for both users and tasks, with additional features for error handling, authentication, and more.

## Features

- **User CRUD Operations**: Sign up, Sign in, Update, Update Password, Delete, Soft Delete, and Logout.
- **Task CRUD Operations**: Add, Delete, Update, Get all tasks for a user, and Get all tasks not done after the deadline.
- **Authentication**: User authentication using `jsonwebtoken`.
- **Password Hashing**: Secure password storage using `bcrypt`.
- **Middleware**: Implemented custom middleware for authentication and error handling.
- **Environment Variables**: Configuration using `dotenv`.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken
- dotenv

## Methods Practiced

- **CRUD Operations**: Implemented Create, Read, Update, and Delete operations for users and tasks.
- **Mongoose Models**: Defined and used Mongoose schemas and models to interact with MongoDB.
- **RESTful API Design**: Designed RESTful endpoints for managing users and tasks.
- **Error Handling**: Implemented middleware to handle errors gracefully.
- **Authentication**: Used `jsonwebtoken` for secure user authentication.
- **Password Hashing**: Used `bcrypt` to hash user passwords.
- **Environment Variables**: Managed configuration using `dotenv`.

## What I Learned

- **Backend Development**: Gained hands-on experience with backend development using Node.js and Express.
- **Database Management**: Learned how to interact with MongoDB using Mongoose for data storage and retrieval.
- **API Design**: Understood the principles of designing RESTful APIs.
- **Security Best Practices**: Implemented secure password hashing with `bcrypt` and token-based authentication with `jsonwebtoken`.
- **Middleware**: Developed custom middleware for handling authentication and errors.
- **Configuration Management**: Utilized `dotenv` for environment variable management.

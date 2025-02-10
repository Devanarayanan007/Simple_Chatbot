Simple Chatbot

This is a full-stack chat application with user authentication, JWT-based protected routes, and a chatbot that provides predefined responses.

Features

Backend:

User Authentication:

Register users (POST /register)

Login users (POST /login)

Secure routes with JWT (GET /profile)

Chat Functionality:

Save user messages and chatbot responses (POST /savechat)

Retrieve chat history for logged-in users (GET /chat)

Frontend:

Authentication System:

User registration and login

Store JWT in localStorage

Redirect unauthorized users to an error page

Chat Interface:

Users can send messages

Chatbot returns predefined responses

Displays chat history when the user logs in

UI/UX Enhancements:

Material UI and Tailwind CSS styling

Loading spinner while authenticating and fetching chatbot responses

Proper routing with React Router

Not Found and Unauthorized pages

Installation and Setup

Prerequisites

Ensure you have the following installed:

Node.js (v18+ recommended)

MongoDB (for backend storage)

Backend Setup

Navigate to the backend folder:

cd backend

Install dependencies:

npm install

Start the backend server:

npm run dev

The backend will run on http://localhost:5000

Frontend Setup

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Setup TailwindCSS:

npx tailwindcss init -p

Configure tailwind.config.js:

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

Add Tailwind to src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

Start the React app:

npm start

The frontend will run on http://localhost:3000

API Endpoints

Method

Endpoint

Description

POST

/register

Register a new user

POST

/login

Authenticate a user and return a JWT

GET

/profile

Get user profile (Protected)

POST

/savechat

Save user question and chatbot response

GET

/chat

Retrieve chat history (Protected)


License

This project is open-source under the MIT License.

Author

Developed by Devanarayanan C S.



## **Simple Chatbot**

This is a full-stack chat application with user authentication, JWT-based protected routes, and a chatbot that provides predefined responses.

#### **FEATURES**

#### Backend:

##### User Authentication:

Register users (POST /register)

Login users (POST /login)

Secure routes with JWT (GET /profile)

##### Chat Functionality:

Save user messages and chatbot responses (POST /savechat)

Retrieve chat history for logged-in users (GET /chat)

#### Frontend:

##### Authentication System:

User registration and login

Store JWT in localStorage

Redirect unauthorized users to an error page

##### Chat Interface:

Users can send messages

Chatbot returns predefined responses

Displays chat history when the user logs in

##### UI/UX Enhancements:

Material UI and Tailwind CSS styling

Proper routing with React Router

Not Found and Unauthorized pages

#### Installation and Setup

##### Prerequisites

Ensure you have the following installed:

Node.js (v18+ recommended)

MongoDB (for backend storage)

##### Backend Setup

Navigate to the backend folder:

cd chatbot-node

##### Install dependencies:

npm install

##### Start the backend server:

npm run dev

The backend will run on http://localhost:5000

##### Frontend Setup

Navigate to the frontend folder:

cd chatbot-react

##### Install dependencies:

npm install

##### Start the React app:

npm start

The frontend will run on http://localhost:3000


License

This project is open-source under the MIT License.

Author

Developed by Devanarayanan C S.



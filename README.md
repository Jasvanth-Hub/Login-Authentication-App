# Basic Login Authentication System

## Description
This project is a basic login authentication system designed to provide a secure, user-friendly interface for user registration, authentication, and secure storage of user-uploaded photos. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) on the backend and utilizes React and Redux Toolkit for the frontend. The system implements advanced encryption techniques for password security, token-based authentication, and rigorous error handling to ensure reliability.

## Key Features

### 🔑 User Registration & Authentication
- **Stack**: MERN (MongoDB, Express.js, React.js, Node.js)
- **Description**: The application allows users to securely sign up and log in. It utilizes **bcrypt** for hashing passwords, ensuring that user credentials are securely stored and handled. The system provides robust authentication mechanisms to protect against unauthorized access.

### 🔒 Token-Based Authentication
- **Frontend Technologies**: React.js, Redux, Redux Toolkit
- **Description**: Token-based authentication is implemented to maintain secure user sessions. Upon successful login, an authentication token is generated and stored securely. Session management is handled through cookies, which have expiration settings to automatically terminate expired sessions, ensuring that user access remains secure at all times.

### 🔐 Secured Data Storage
- **Technology**: Cloudinary
- **Description**: The system uses **Cloudinary** for securely storing user-uploaded images. Cloudinary's secure storage protocols ensure that all images are protected with top-notch security measures, giving users confidence that their data is safe.

### 🛠️ Error Handling & Testing
- **Description**: Comprehensive error handling mechanisms are in place to effectively manage various scenarios such as invalid user input, server errors, and connection issues. The system is thoroughly tested to cover both positive and negative cases, ensuring that it remains reliable under different conditions and handles exceptions gracefully.

## Getting Started

### Prerequisites
- **Node.js**: Ensure that Node.js is installed on your machine.
- **MongoDB**: Install MongoDB locally or set up a MongoDB Atlas account for cloud-based storage.
- **Cloudinary**: Create an account on Cloudinary for secure image storage.

### Clone the Repository
To get started, clone the repository:

```bash
git clone https://github.com/your-username/project-name.git
```

### Frontend Setup
1. Navigate to the project directory:
```bash 
  cd project-name
```
3. Navigate to the frontend directory:
```bash 
  cd frontend
```
4. Install frontend dependencies:
```bash 
  npm install
```
5. Start the frontend development server:
```bash 
  npm start
```

### Backend Setup
1. Navigate to the backend directory:
 ```bash 
  cd ../backend
 ```
3. Install backend dependencies:
```bash 
  npm install
```
4. Set up environment variables:
  Create a `.env` file in the `backend` directory and configure the following variables:

  MONGO_URI=your_mongo_db_connection_string
  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret
  JWT_SECRET=your_jwt_secret

4. Start the backend development server:
  ```bash 
  npm run dev
  ```

## Running the Application
Once both frontend and backend servers are running, open your browser and navigate to `http://localhost:3000` to access the application.


## Technologies Used
- **Frontend**: React.js, Redux, Redux Toolkit, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Security**: Bcrypt, JWT (JSON Web Token)
- **Storage**: Cloudinary for image storage
- **Testing**: Jest, React Testing Library (optional)

## Contributions
Feel free to fork this project and submit pull requests. For significant changes, please open an issue first to discuss what you would like to modify.

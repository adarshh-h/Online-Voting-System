# Electrify Voting System

Electrify is a secure and user-friendly voting system designed to ensure fair and transparent voting processes. The system leverages modern web technologies to provide a seamless experience for both users and administrators.

## Features

- **One-Time Voting**: Each user is allowed to vote only once to maintain the integrity of the voting process.
- **Secure Authentication**: Utilizes JWT (JSON Web Tokens) for secure authentication.
- **Encrypted Passwords**: User passwords are securely stored using Bcrypt.
- **Real-Time Updates**: Votes are updated in real-time using React.js.
- **Secure**: Only admins can see all of votes.

## Technologies Used

- **Frontend**: React.js , Tailwind
- **Backend**: Node.js , Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)
- **Password Encryption**: Bcrypt

## Getting Started

### Prerequisites

- Node.js
- React.js
- MongoDB Atlas account
- dotenv
- Express.js
- Mongoose

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/electrify.git
   cd electrify
2. **Install dependencies for the backend:**
   ```bash
   cd backend
   npm install
3. **Install dependencies for the frontend:**
   ```bash
   cd ../frontend
   npm install
4. **Set up environment variables:**

   Create a .env file in the backend directory and add the following:
   ```bash
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
5. **Run the application::**
- **Backend**: 
    ``` bash
    cd backend
    npm start
- **Frontend**: 
  ```bash
  cd frontend
  npm start
  
 ## Usage

  ### Users
- **Register**: Users can register by providing a valid Aadhar-Number and password.
- **Login**: Registered users can log in using their credentials.
- **Vote**: Once logged in, users can cast their vote. The system ensures that each user can vote only once.

### Admins
- **Dashboard**: Admins have access to a dashboard where they can monitor the voting process.
- **Manage Users**: Admins can manage user accounts, including resetting passwords and deleting accounts.
- **View Results**: Admins can view real-time voting results and generate reports.

### Security
- **JWT Authentication**: Ensures that only authenticated users can access the voting system.
- **Bcrypt Password Hashing**: Passwords are hashed using Bcrypt before being stored in the database, ensuring that even if the database is compromised, the passwords remain secure.
- **One-Time Voting**: The system enforces a one-time voting rule, preventing multiple votes from the same user.

## Contributing
I welcome contributions to improve Electrify. Please follow these steps to contribute:
1. **Fork the repository.**
2. **Create a new branch (git checkout -b feature-branch).**
3. **Make your changes.**
4. **Commit your changes (git commit -m 'Add some feature').**
5. **Push to the branch (git push origin feature-branch).**
6. **Open a pull request.**

## License
This project is licensed under the MIT License. See the LICENSE file for detail

## Contact
For any inquiries or issues, please contact me at **abhishekbelaganj0609@gmail.com.**


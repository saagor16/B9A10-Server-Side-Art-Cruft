# Art And Cruft - Server Side

This is the server-side repository for the Art And Cruft web application, which is designed to showcase and manage art and craft items.

## Features
- **User Authentication:** Secure user registration, login, and logout functionalities.
- **Private Routes:** Restrict access to certain routes based on user authentication status.
- **Database Integration:** Uses MongoDB Atlas for data storage.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **JWT (JSON Web Token)** for authentication

## Client Side
**GitHub Repository:** [Client Side](https://github.com/saagor16/B9A10-Cline-Side-Art-Cruft)


## GitHub Repository
**Server Side Repository:** [Server Side](https://github.com/saagor16/B9A10-Server-Side-Art-Cruft)

## Installation and Setup Instructions

### Prerequisites
- Node.js
- npm or yarn
- MongoDB Atlas account

## API Endpoints

### Authentication
- **POST /api/auth/register:** Register a new user
- **POST /api/auth/login:** Login an existing user

### Craft Items
- **GET /api/crafts:** Get all craft items (accessible to all users)
- **POST /api/crafts:** Add a new craft item (accessible only to logged-in users)
- **GET /api/crafts/:id:** Get details of a specific craft item
- **GET /api/mycrafts:** Get all craft items added by the logged-in user

## Usage
- Ensure the server is running by executing `npm start`.
- Use a tool like Postman or a front-end application to interact with the API endpoints.

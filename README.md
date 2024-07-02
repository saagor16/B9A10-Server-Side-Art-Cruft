# Art And Cruft - Server Side

This repository contains the server-side code for the Art And Cruft web application, dedicated to showcasing and managing art and craft items.

## Features

- **User Authentication:** Secure user registration, login, and logout functionalities.
- **Private Routes:** Restrict access to certain routes based on user authentication status.
- **Database Integration:** Utilizes MongoDB Atlas for efficient data storage and management.

## Technologies Used

- **Node.js:** Server-side runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB Atlas:** Cloud-hosted MongoDB database service.
- **JWT (JSON Web Token):** Token-based authentication for enhanced security.

## Client Side

**GitHub Repository:** [Client Side](https://github.com/saagor16/B9A10-Cline-Side-Art-Cruft)

## GitHub Repository

**Server Side Repository:** [Server Side](https://github.com/saagor16/B9A10-Server-Side-Art-Cruft)

## Installation and Setup Instructions

### Prerequisites

- Node.js
- npm or yarn
- MongoDB Atlas account

### Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/saagor16/B9A10-Server-Side-Art-Cruft.git
    ```

2. Navigate to the project directory:
    ```bash
    cd B9A10-Server-Side-Art-Cruft
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables in a `.env` file:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_atlas_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### Authentication

- **POST /api/auth/register:** Register a new user.
- **POST /api/auth/login:** Login an existing user.

### Craft Items

- **GET /api/crafts:** Retrieve all craft items (public access).
- **POST /api/crafts:** Add a new craft item (authenticated users only).
- **GET /api/crafts/:id:** Retrieve details of a specific craft item.
- **GET /api/mycrafts:** Retrieve all craft items added by the logged-in user.

## Usage

Ensure the server is running using `npm start`. Use tools like Postman or integrate with a front-end application to interact with the API endpoints effectively.

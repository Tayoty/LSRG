# LSGR API

A RESTful API for a transportation seat reservation system with user and admin functionality.

## Overview

The LSGR API provides a platform for commuters to register, book seats, and manage their reservations. The system includes admin capabilities for managing seats, viewing statistics, and overseeing the reservation system.

## Postman Link 

https://documenter.getpostman.com/view/41822725/2sAYdoDSPr

## Features

### Commuter Features
- User registration and authentication
- Seat reservation (Economy and Business class)
- View available seats and services
- Modify or cancel existing reservations

### Admin Features
- Admin authentication
- Upload and update seat availability
- View all registered commuters
- Track booking statistics

## Technologies Used

- Node.js and Express.js
- MongoDB with Mongoose ODM
- Authentication with bcrypt.js
- HTTP request logging with Morgan
- Environment variable management with dotenv

## API Endpoints

### Commuter Endpoints

```
POST /api/v1/commuter/signup - Register a new user
POST /api/v1/commuter/login - Authenticate a user
PUT /api/v1/commuter/bookseat - Reserve a seat with query param id
PATCH /api/v1/commuter/editbooking - Modify a reservation with query param id
PATCH /api/v1/commuter/deletebooking - Cancel a reservation with query param id
GET /api/v1/commuter/allservices - Get information about available services
```

### Admin Endpoints

```
POST /api/v1/admin/adminlogin - Authenticate an admin
POST /api/v1/admin/uploadreservation - Update available seats
GET /api/v1/admin/allcommunters - Get all registered commuters
GET /api/v1/admin/allbookings - Get booking statistics
```

## Setup and Installation

1. Clone the repository
   ```
   git clone https://github.com/tayoty/lsgr.git
   cd lsgr
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables
   ```
   PORT=5600
   MONGO_URL=mongodb://localhost:27017/lsgr
   ```

4. Start the server
   ```
   npm start
   ```

## Database Models

### User Model
- firstName: String (required)
- lastName: String (required)
- phoneNumber: String (required)
- email: String (required, unique)
- password: String (required)
- isReserved: Boolean (default: false)
- reservedTime: Date (default: null)
- seatNo: Number (default: null)
- seatType: String (default: null)

### Admin Model
- firstName: String
- email: String (unique)
- password: String

### Booking Model
- economySeat: Number
- businessSeat: Number

## Development

The application automatically seeds the database with admin accounts on startup for testing purposes.

## Error Handling

The API uses standard HTTP status codes and sends JSON responses with descriptive messages for error scenarios.

## Security

- Passwords are hashed before storage using bcrypt
- User input validation for required fields
- MongoDB connection security via environment variables

## Future Enhancements

- Implement JWT for authentication tokens
- Add payment integration
- Create a notification system for reservation updates
- Add ticket generation functionality
- Implement seat selection visualization
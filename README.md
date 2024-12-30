# Airbnb Clone - README

## Instructions for Running the Frontend and Backend Servers

### Prerequisites
1. Node.js and npm installed on your system.
2. MongoDB installed and running.
3. Environment variables configured:
   - Create a `.env` file and include the following:
     ```
     DATABASE=mongodb+srv://<username>:<PASSWORD>@cluster.mongodb.net/Airbnb?retryWrites=true&w=majority
     DATABASE_PASSWORD=yourpassword
     ```
4. A modern browser to view the application.
---
### Firstly:
1. Install dependencies:
   npm install

### Steps to Run the Backend Server

1. Start the server:
   npm start

2. The backend server should now be running at `http://localhost:3000`.
---

### Steps to Run the Frontend Server

1. Start the development server:
   npm run dev
   
2. The frontend server should now be running at `http://localhost:5173`.

---
## Details About Routing and Navigation

### Backend Routes

#### Listings Routes
- `GET /api/Airbnb/Listings` - Fetch all listings.
- `GET /api/Airbnb/Listings/:id` - Fetch listing by id.
- `POST /api/Airbnb/Listings` - Create a new listing.
- `DELETE /api/Airbnb/Listings/:id` - Delete a listing.
- `SEARCH /api/Airbnb/Listings/search?query=""`

#### Bookings Routes
- `GET /api/Airbnb/Bookings` - Fetch all bookings.
- `GET /api/Airbnb/Bookings/:id` - Fetch booking by id.
- `POST /api/Airbnb/Bookings` - Create a new booking.
- `DELETE /api/Airbnb/Bookings/:id` - Delete a booking.

#### Authentication Routes
- `POST /api/Airbnb/auth/register` - Register a new user.
- `POST /api/Airbnb/auth/login` - Log in a user.
- `GET /api/Airbnb/auth/me` - Fetch the currently authenticated user.

### Frontend Navigation

#### Homepage (`/`)
- Displays the Navbar, Search Bar, Categories, and Listings.
- Users can browse listings or use the search functionality.

#### Listing Details (`/ListingDetails/:id`)
- Displays detailed information about a specific listing.

#### Admin Dashboard (`/admin`)
- Displays an admin panel to manage listings.

#### Login (`/login`)
- Allows users to log into their accounts.

#### Registration (`/register`)
- Allows users to create a new account.

#### Add New Property (`/NewProperty`)
- Allows users to add a new property to the listings.

#### Booking Details (`/booking/:id`)
- Displays details of a booking for a specific listing.

---

## Notes
- Ensure both frontend and backend servers are running simultaneously for full functionality.
- If you encounter issues, check for missing dependencies or incorrect environment configurations.
- To populate the database with sample data, uncomment and run the `importJsonData` function in the backend's `server.js` file.


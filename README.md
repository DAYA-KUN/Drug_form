*Drug Data Management System

This is a Drug Data Management System project, consisting of a frontend developed using React (drug-app folder) and a backend built with Node.js/Express (project folder). The application allows users to manage drug data, including adding, bulk uploading, and viewing drug records.

*Features

- Authentication: Signup, login, and secure session management with cookies.
- Drug Management: 
    -> Add individual drug records.
    -> Bulk upload drug data via CSV files. 
    -> View all stored drug data in a tabular format.
- Role-Based Access: Restricts access to features based on authentication.
- Modern UI: Developed with React and styled using Tailwind CSS for a clean, responsive design.

*Project Structure

**Frontend (drug-app folder)

- Components:

    -> Signup: Handles user registration.
    -> Login: Manages user authentication.
    -> DrugForm: Form to add individual drug records.
    -> CsvUploader: Feature to upload CSV files for bulk drug data.
    -> DrugTable: Displays the list of drugs in a table.
    -> Routing: Defined in App.jsx to manage navigation across components.
    -> State Management: Uses React's useState and useEffect for dynamic UI updates.

**Backend (project folder)

- Folders:

    -> models: Contains database schema for the drug data and user authentication.
    -> controllers: Implements business logic for handling requests.
    -> routes: Defines API endpoints for various operations.
    -> config: Stores configuration details (e.g., database connection).
    -> middleware: Includes authentication and error-handling middleware.

*Prerequisites

- Before running the project, ensure you have the following installed:

    -> Node.js (v14 or above)
    -> npm (comes with Node.js)
    -> MongoDB (or your preferred database)

*Running the Project

1. Start the Backend Server

    -> Navigate to the project folder and run:

        cd project
        npm start

2. Start the Frontend Development Server

    -> Navigate to the drug-app folder and run:

        cd ../drug-app
        npm run dev

    -> The backend will run on http://localhost:5000 (default port), and the frontend will run on http://localhost:5173 (default Vite port).

*Environment Variables

-> Create a .env file in the project folder and add the following variables:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

-> Replace your_mongodb_connection_string and your_secret_key with your actual MongoDB URI and JWT secret.

*Usage

- Sign Up/Login: Use the Signup and Login pages to register and authenticate users.
- Add Drugs: Navigate to the "Add Drug" page to add individual drug records.
- Bulk Upload: Upload a CSV file from the "Bulk Upload" page to add multiple drugs at once.
- View Drugs: Go to the "View Drugs" page to see all drug data in a tabular format.
- Logout: Use the "Logout" button in the navbar to end the session.

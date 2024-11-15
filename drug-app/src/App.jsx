// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import DrugForm from "./components/DrugForm";
import CsvUploader from "./components/CsvUploader";
import { checkAuth } from "./utils/auth";
import DrugTable from "./components/DrugTable";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // This checks the cookie or localStorage for authentication status
    const authStatus = checkAuth();
    setIsAuthenticated(authStatus);
  }, []);

  // This will handle logout and set authentication to false
  const handleLogout = () => {
    Cookies.remove("token"); // Removes token cookie on logout
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex flex-col">
        {/* Navbar */}
        <nav className="w-full bg-gradient-to-r from-purple-600 to-purple-800 shadow-lg">
          <div className="container  flex justify-between items-center p-6">
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              Drug Data Management
            </h2>
            <div className="space-x-8">
              <Link
                to="/"
                className="text-lg text-white hover:text-purple-300 transition-all duration-300"
              >
                Home
              </Link>
              {isAuthenticated && (
                <>
                  <Link
                    to="/upload"
                    className="text-lg text-white hover:text-purple-300 transition-all duration-300"
                  >
                    Add Drug
                  </Link>
                  <Link
                    to="/bulk-upload"
                    className="text-lg text-white hover:text-purple-300 transition-all duration-300"
                  >
                    Bulk Upload
                  </Link>
                  <Link
                    to="/drug-table"
                    className="text-lg text-white hover:text-purple-300 transition-all duration-300"
                  >
                    View Drugs
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-lg text-white hover:text-red-300 transition-all duration-300"
                  >
                    Logout
                  </button>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <Link
                    to="/login"
                    className="text-lg text-white hover:text-purple-300 transition-all duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-lg text-white hover:text-purple-300 transition-all duration-300"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <DrugForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/upload"
              element={isAuthenticated ? <DrugForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/bulk-upload"
              element={isAuthenticated ? <CsvUploader /> : <Navigate to="/login" />}
            />
            <Route
              path="/signup"
              element={!isAuthenticated ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/drug-table"
              element={isAuthenticated ? <DrugTable /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

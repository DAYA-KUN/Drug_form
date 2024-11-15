import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import DrugForm from './components/DrugForm';
import CsvUploader from './components/CsvUploader';
import { checkAuth } from './utils/auth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // This checks the cookie or localStorage for authentication status
    const authStatus = checkAuth();
    setIsAuthenticated(authStatus);
  }, []);

  // This will handle logout and set authentication to false
  const handleLogout = () => {
    Cookies.remove('token'); // Removes token cookie on logout
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex flex-col">
        {/* Navbar */}
        <nav className="w-full bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <h2 className="text-xl font-semibold text-gray-800">Drug Data Management</h2>
            <div className="space-x-6">
              <Link
                to="/"
                className="text-lg text-gray-800 hover:text-blue-600 transition-all duration-300"
              >
                Home
              </Link>
              {isAuthenticated && (
                <>
                  <Link
                    to="/upload"
                    className="text-lg text-gray-800 hover:text-blue-600 transition-all duration-300"
                  >
                    Add
                  </Link>
                  <Link
                    to="/bulk-upload"
                    className="text-lg text-gray-800 hover:text-blue-600 transition-all duration-300"
                  >
                    Bulk Upload
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-lg text-gray-800 hover:text-red-600 transition-all duration-300"
                  >
                    Logout
                  </button>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <Link
                    to="/login"
                    className="text-lg text-gray-800 hover:text-blue-600 transition-all duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-lg text-gray-800 hover:text-blue-600 transition-all duration-300"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

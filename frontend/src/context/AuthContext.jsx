import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Ensure correct import

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [role, setRole] = useState(localStorage.getItem('role') || null);
  const [username, setUsername] = useState(localStorage.getItem('username') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [url, setUrl]=useState('https://doctorapi-qm7h.onrender.com/');
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setRole(decodedToken.role);
        setUsername(decodedToken.username); // Extract username
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Invalid token', error);
        setIsAuthenticated(false);
        setRole(null);
        setUsername(null);
      }
    } else {
      setIsAuthenticated(false);
      setRole(null);
      setUsername(null);
    }
    setLoading(false);
  }, [token]);

  const login = (token) => {
    const decodedToken = jwtDecode(token);
    localStorage.setItem('token', token);
    localStorage.setItem('role', decodedToken.role);
    localStorage.setItem('username', decodedToken.username); // Store username
    setToken(token);
    setRole(decodedToken.role);
    setUsername(decodedToken.username);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    setToken(null);
    setRole(null);
    setUsername(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ token, role, username, isAuthenticated, loading, login, logout, url }}>
      {children}
    </AuthContext.Provider>
  );
};

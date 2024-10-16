import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './page/Dashbaord';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />
          <Route path='/login' element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>

      </Router>
    </>
  )
}

export default App;

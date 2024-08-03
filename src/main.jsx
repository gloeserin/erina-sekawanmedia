import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import React from 'react';
import Login from './pages/Login.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';
import Overview from './components/Overview.jsx';
import TicketCards from './components/Ticket.jsx';
import GuestDashboard from './guest/GuestDashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/guest',
    element: (
      <ProtectedRoute role="Guest">
        <GuestDashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute role="Admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: 'tickets',
        element: <TicketCards />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

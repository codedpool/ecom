import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';

import { toast, Toaster } from 'sonner';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* User Layout Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} /> {/* Home page */}
          {/* Add more user routes here if needed */}
        </Route>

        {/* Admin Layout Routes (Placeholder) */}
        <Route>
          {/* Admin routes will go here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
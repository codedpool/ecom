import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';

import { toast, Toaster } from 'sonner';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './components/Products/ProductDetails';
import Checkout from './components/Cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminLayout from './components/Admin/AdminLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* User Layout Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} /> 
          {/* Home page */}
          <Route path ="login" element ={<Login/>}/>
          <Route path ="register" element ={<Register/>}/>
          <Route path ="profile" element ={<Profile/>}/>
          <Route path ="collections/:collection" element ={<CollectionPage/>}/>
          <Route path ="product/:id" element ={<ProductDetails/>}/>
          <Route path ="checkout" element ={<Checkout/>}/>
          <Route path ="order-confirmation" element ={<OrderConfirmationPage/>}/>
          <Route path ="order/:id" element ={<OrderDetailsPage/>}/>
          <Route path ="my-orders" element ={<MyOrdersPage/>}/>
          <Route path ="/admin" element ={<AdminLayout/>}/>
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
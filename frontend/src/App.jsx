import React from 'react'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

import {toast,Toaster} from "sonner";
import Login from './pages/Login';




const App = () => {
  return (
    
    <BrowserRouter>
    <Toaster position="top-right"/>
    <Routes>
      <Route path='/' element={<UserLayout/>}>{/* User LAyout*/}</Route>
      <Route>{/* Admin Layout*/}</Route>
      <Route path="login" element={<Login/>}/>
      <Route/>
      
     
      
    </Routes>
    </BrowserRouter>
  )
}

export default App;
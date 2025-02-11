import React from 'react'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

import {toast,Toaster} from "sonner";
import Home from './pages/Home';



const App = () => {
  return (
    
    <BrowserRouter>
    <Toaster position="top-right"/>
    <Routes>
      <Route path='/' element={<UserLayout/>}>{/* User LAyout*/}</Route>
      <Route path='/best' element={<Home/>}>{/* User LAyout*/}</Route>
      
      <Route>{/* Admin Layout*/}</Route>
     
      
    </Routes>
    </BrowserRouter>
  )
}

export default App;
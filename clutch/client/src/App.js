import React from 'react'
import './App.css';
import Login from './components/Login';
import Products from './components/Products';
import Register from './components/Signup.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProduct from './components/Editproduct';
import Protected from './components/Protected';

const App = () => {
  return (
    <>
      <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Login/>}></Route>
      <Route path="/products" element={<Protected><Products/></Protected>}></Route>
      <Route path="/signup" element={<Register/>}></Route>
      <Route path="/products/edit" element={<Protected><EditProduct/></Protected>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

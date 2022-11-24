import Header from "./components/Header.jsx"
import "./App.css"
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Cart from "./components/Cart.jsx"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/home" element={<Home/>}  />
        <Route exact path='/cart' element={<Cart/>} /> 
      </Routes>
    </div>
  );
}

export default App;

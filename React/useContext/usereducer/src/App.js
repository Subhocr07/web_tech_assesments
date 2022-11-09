import './App.css';
import Header from './components/Header';
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
     <Header/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/cart" exact element={<Cart/>} />
    </Routes>
    </div>
  );
}

export default App;

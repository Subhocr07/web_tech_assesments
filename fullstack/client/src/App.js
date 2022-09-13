import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Login from "./Login";
import Signup from "./Signup";
import Private from "./Private/Private"
import Contacts from "./Table/Contact";


function App() {
return (
  <>
  <BrowserRouter>
  <Routes>
  <Route exact path="/" element={<Login/>}></Route>
  <Route exact path ="/signup" element={<Signup/>}></Route>
  <Route path='/dashboard' element={<Contacts/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
)
}

export default App;

import {BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
     <Routes>
       
        <Route path="/" element={<Homepage/>} />
        
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="*" element={<PageNotFound/>} />

        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
      
    
  )
}

export default App

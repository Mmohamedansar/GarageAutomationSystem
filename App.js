import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookService from "./pages/BookService";
import TrackService from "./pages/TrackService";
import VehicleReport from "./pages/VehicleReport"
import Navbar from './components/Navebar';

function App() {
  return (
         <BrowserRouter>
         <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/book" element={<BookService/>}/>
        <Route path="/track" element={<TrackService/>}/>
        <Route path="/vehicle-report" element={<VehicleReport/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Login from "./pages/Login";

import React from "react";
import Home from "./pages/Home";
import AddAnnonce from './pages/AddAnnonce'

function App() {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css'
        integrity='sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4'
        crossorigin='anonymous'>
         
      </link> 
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} /> 
          <Route path='/register' element={<Register />} /> 
          <Route path='/Profile' element={<Profile />} /> 
          <Route path='/' element={<Home />} />
          <Route path="/MyOffres" element={<Home />} />
          <Route path="/AddAnnonce"  element={ <AddAnnonce />}/>
        </Routes> 
      </Router> 
      <ToastContainer />
    </>
  );
}

export default App;

import {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Register from "./pages/Register"
import Login from "./pages/Login"
import User from "./pages/User"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

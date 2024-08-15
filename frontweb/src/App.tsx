import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./routes/Auth";
import Home from "./routes/Home";
import Register from "./routes/Auth/Login/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

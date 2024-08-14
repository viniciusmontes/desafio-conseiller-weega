import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./routes/Auth";
import Home from "./routes/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

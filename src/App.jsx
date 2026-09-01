// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Resources from "./pages/Resources/Resources";
import About from "./pages/About/About";
import SellabilityScore from "./pages/SellabilityScore/SellabilityScore";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sellability-score" element={<SellabilityScore />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

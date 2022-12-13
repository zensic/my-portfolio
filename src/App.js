import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Routes/Home";
import Layout from "./Routes/Layout";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Routes/About";
import Home from "./Routes/Home";
import Layout from "./Components/Layout";
import Projects from "./Routes/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

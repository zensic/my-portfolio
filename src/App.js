import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Routes/Home";
import Layout from "./Routes/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

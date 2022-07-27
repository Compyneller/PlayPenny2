import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NavBarComp from "./components/NavBarComp/NavBarComp";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Promotion from "./pages/Promotion";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotion" element={<Promotion />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

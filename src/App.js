import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NavBarComp from "./components/NavBarComp/NavBarComp";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Promotion from "./pages/Promotion";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/AboutUs/AboutUs";
import HowToPlay from "./pages/HowToPlay/HowToPlay";
import Privacy from "./pages/Privacy/Privacy";
import Disclaimer from "./pages/Disclaimer/Disclaimer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

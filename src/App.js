import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NavBarComp from "./components/NavBarComp/NavBarComp";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBarComp />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

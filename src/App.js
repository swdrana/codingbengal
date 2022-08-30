import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/about/AboutUs";
import Home from "./components/pages/home/Home";
import FooterEnd from "./components/shared/FooterEnd";
import Navber from "./components/shared/Navber";
import SideBar from "./components/shared/SideBar";

function App() {
  return (
    <div className="">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<SideBar />} />
      </Routes>
      <FooterEnd/>
    </div>
  );
}

export default App;

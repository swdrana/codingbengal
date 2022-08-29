import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Footer from "./components/shared/Footer";
import Navber from "./components/shared/Navber";

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

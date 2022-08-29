import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import FooterEnd from "./components/shared/FooterEnd";
import Navber from "./components/shared/Navber";

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterEnd/>
    </div>
  );
}

export default App;

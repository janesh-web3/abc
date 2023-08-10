import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/services"} element={<ServicesPage />} />
        <Route path={"/work"} element={<WorkPage />} />
        <Route path={"/contact"} element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;

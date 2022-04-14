import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import Footer from "./components/Footer/footer";

// User Image
import user_img from "./components/Home/user.jpg";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* Defining the Routes */}
        <Routes>
          <Route
            path="/"
            element={<Home user_name="Yatin" user_image={user_img} />}
          />
          <Route path="/projects" element={<Projects title="Projects" />} />
          <Route path="/skills" element={<Skills title="Skills" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

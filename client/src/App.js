import "./App.css";
import {Routes, Route} from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import BlogsPage from './Pages/BlogsPage/BlogsPage'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </div>
  );
}

export default App;

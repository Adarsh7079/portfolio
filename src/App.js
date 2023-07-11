
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/NavBar";
import About from './Component/About';
import CodingProfile from "./Component/CodingProfile";
import Projects from "../src/Component/Projects";
import Education from "../src/Component/Education";
import Contact  from "../src/Component/Contact";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Navbar/>
      <main className="mt-14 md:mt-20 px-6 md:px-28 py-4 w-full">
        <Routes>
           
          <Route path="/" element={<About/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/codingprofile" element={<CodingProfile/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
    </div>
    )
}

export default App;

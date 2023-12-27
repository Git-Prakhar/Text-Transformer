import { useState } from "react";
import "./App.css";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import { Routes, Route } from "react-router-dom";
import cardimg from "./Images/manga-36.jpg"

function App() {
  const [mode, setMode] = useState("white");
  const toggleMode = () => {
    if (mode === "white") {
      setMode("black");
    } else {
      setMode("white");
    }
  };
  return (
    <>
      <div>
        <Navbar title="Amazing Site" modeFunc={toggleMode} currMode={mode} />
      </div>
      <div className="container-fluid p-0" style={{backgroundColor : mode}}>
        <Routes>
          <Route exact path="/about" element={<About img={cardimg} mode={mode}/>}></Route>
          <Route exact path="/" element={<Home textbox="Fill the form" mode={mode} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

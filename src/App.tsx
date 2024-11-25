import "./App.css";
import ShowCase from "./components/Showcase";

import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App max-w-5xl w-11/12 mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show0" element={<ShowCase itemNumber={0} />} />
          <Route path="/show1" element={<ShowCase itemNumber={1} />} />
          <Route path="/show2" element={<ShowCase itemNumber={2} />} />
          <Route path="/show3" element={<ShowCase itemNumber={3} />} />
          <Route path="/show4" element={<ShowCase itemNumber={4} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <ShowCase title="Webmakers Studio" description="We help ambitious founders turn ideas into working products, fast. Our streamlined design and development process gets your startup from concept to launch in 2 to 4 weeks."/>
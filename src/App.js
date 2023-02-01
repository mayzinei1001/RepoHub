import { Route, Routes } from "react-router-dom";
import Contact from "./views/pages/Contact";
import Home from "./views/pages/Home";
import Service from "./views/pages/Service";
import Story from "./views/pages/Story";
import Navbar from "./views/components/Navbar";

const App = props =>{
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
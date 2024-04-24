import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Footer from "./components/Footer";
import Profile from "./components/Profile"
import About from "./components/About";
import Signin from "./components/Signin";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
);
};

function App() {
  const [origin, setOrigin] = useState('');
  const [odestination, setDestination] = useState('');
  const [Distance, setDistance] = useState('');
}

return (
  <div>
    
  </div>
)

export default App;
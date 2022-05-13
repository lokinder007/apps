import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Profile from "./components/pages/Profile";
import Projects from "./components/pages/Projects";
import Errorpage from "./components/pages/Errorpage";

import "./components/stylesheets/auth.css";
import "./components/stylesheets/layout.css";

import Calculator from "./components/projects/calculator/Calculator";
import Todo from "./components/projects/todo/Todo";
import ContactApp from "./components/projects/contactApp/ContactApp";

function App() {



  return (
    <Router>
      <>
        <Navbar />
        <div className="main">
          <Routes>
            {/* <Route path="/login" exact element={<Login />} /> */}
            {/* <Route path="/register" exact element={<Register />} /> */}
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/calculator" exact element={<Calculator />} />
            <Route path="/todo" exact element={<Todo />} />
            <Route path="/contactApp" exact element={<ContactApp />} />


            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
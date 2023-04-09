import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import Preloader from "./components/Preloader";
import NavBarHome from "./components/NavBarHome";
import ScrollToTop from "./components/ScrollToTop"
import FooterHome from "./components/FooterHome"
import AboutUs from "./pages/AboutUs";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";import Testimonials from "./components/Testimonials";
import CardHome from "./components/CardHome";
;



export default function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBarHome />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/service" element={<CardHome />} />
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <FooterHome />
      </div>
    </Router>


  )
}
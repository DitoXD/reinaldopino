import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="bg-void min-h-screen">
      <div className="grain-overlay" />
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

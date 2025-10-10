import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import CustomRouter from "./components/CustomRouter";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";
import Works from "./components/Works";
import Creators from "./components/Creators";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Studio from "./pages/Studio";
import CreatorsPage from "./pages/CreatorsPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return null;
}

function HomePage() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <News />
      <Works />
      <Creators />
      <Contact />
    </>
  );
}

function App() {
  return (
    <CustomRouter>
      <ScrollToTop />
      <ScrollToSection />
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studio/" element={<Studio />} />
          <Route path="/creators/" element={<CreatorsPage />} />
        </Routes>
        <Footer />
      </div>
    </CustomRouter>
  );
}

export default App;

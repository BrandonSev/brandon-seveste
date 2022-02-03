import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import "./index.scss";
import Navbar from "./components/Navbar";
import MesRealisations from "./components/Pages/MesRealisations";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Contact from "./components/Pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [activeScroll, setActiveScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggle = () => {
      if (window.scrollY > 200) {
        setActiveScroll(true);
      } else {
        setActiveScroll(false);
      }
    };
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mes-realisations" element={<MesRealisations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div
        className={`scrollTop ${activeScroll ? "show" : "hidden"}`}
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-arrow-up-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

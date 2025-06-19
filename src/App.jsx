import "../src/assets/styles/App.scss";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import TechStack from "./assets/pages/TechStack";
import Projects from "./assets/pages/Projects";
import Contact from "./assets/pages/Contact";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

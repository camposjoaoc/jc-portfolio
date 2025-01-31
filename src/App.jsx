import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import '../src/assets/styles/App.scss';
import Home from './assets/pages/Home'; // Home page component
import About from './assets/pages/About'; // About page component
import TechStack from './assets/pages/TechStack'; // TechStack page component
import Projects from './assets/pages/Projects'; // Projects page component
import Contact from './assets/pages/Contact'; // Contact page component
import Navbar from './assets/components/Navbar'; // Navbar component
import Footer from './assets/components/Footer'; // Footer component

function App() {
    return (
        <>
            {/* Provides routing capabilities */}
            <BrowserRouter basename="/jc-portfolio">
                {/* Navbar component displayed on all pages */}
                <Navbar></Navbar>
                {/* Routes define the paths for navigation */}
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/tech-stack" element={<TechStack />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    );
}

export default App;
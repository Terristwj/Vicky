import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../pages/Layout";
import LandingPage from "../pages/LandingPage";
import NoPage from "../pages/NoPage";

import Home from "../pages/Home/Home";
import ColorIdentifier from "../pages/ColorIdentifier";
import Experience from "../pages/Experience";
import About from "../pages/About/About";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="home" element={<Home />} />
                    <Route
                        path="coloridentifier"
                        element={<ColorIdentifier />}
                    />
                    <Route path="experience" element={<Experience />} />
                    <Route path="aboutus" element={<About />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

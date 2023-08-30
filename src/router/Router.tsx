import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home/Home";
import LandingPage from "../pages/LandingPage";
import NoPage from "../pages/NoPage";
import About from "../pages/About/About";

import ColorIdentifier from "../pages/ColorIdentifier";
import Experience from "../pages/Experience";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="landingpage" element={<LandingPage />} />
                    <Route
                        path="coloridentifier"
                        element={<ColorIdentifier />}
                    />
                    <Route path="aboutus" element={<About />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

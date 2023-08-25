import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import NoPage from "../pages/NoPage";

import ColorIdentifier from "../pages/ColorIdentifier";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route index path="landingpage" element={<LandingPage />} />
                    <Route
                        index
                        path="coloridentifier"
                        element={<ColorIdentifier />}
                    />
                    {/* <Route path="contact" element={<Contact />} /> */}
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import NavTabs from "../components/navigation/NavTabs";

function Layout() {
    return (
        <>
            <NavTabs />
            <div className="h-[72px]"></div>
            <Outlet />
            <Analytics />
        </>
    );
}

export default Layout;

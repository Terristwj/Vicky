import { Outlet } from "react-router-dom";

import NavTabs from "../components/navigation/NavTabs";

function Layout() {
    return (
        <>
            <NavTabs />
            <div className="h-[72px]"></div>
            <Outlet />
        </>
    );
}

export default Layout;

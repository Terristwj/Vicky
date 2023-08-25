import * as React from "react";
import { Outlet } from "react-router-dom";

import updateSession from "../../store/session";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../../store/navSlice";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return <Tab component="a" {...props} />;
}

export default function NavTabs() {
    // Redux Store
    const navValue = useSelector((state: any) => state.nav.count);
    const dispatch = useDispatch();

    // When a new tab is selected, update the redux store and session store
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
            event.type !== "click" ||
            (event.type === "click" &&
                samePageLinkNavigation(
                    event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ))
        ) {
            dispatch(set(newValue));
            updateSession("nav", newValue);
        }
    };

    // For debugging the current tab index
    // console.log("navValue: ", navValue);

    return (
        <Box sx={{ width: "100%" }}>
            <Tabs
                value={navValue}
                onChange={handleChange}
                aria-label="nav tabs example"
                centered
            >
                <LinkTab label="Home" href="/" />
                <LinkTab label="Landing page" href="/landingpage" />
                <LinkTab label="404 pages" href="/something" />
            </Tabs>
            <Outlet />
        </Box>
    );
}

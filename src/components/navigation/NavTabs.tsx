import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import { CardMedia } from "@mui/material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

import vicky from "../../img/Viiicky.png";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Items for settings menu
const settings = [
    {
        name: "Home",
        pageTitle: "Home",
        path: "/",
    },
    {
        name: "Color Identifier",
        pageTitle: "ColorIdentifier",
        path: "/coloridentifier",
    },
    {
        name: "Experience",
        pageTitle: "Experience",
        path: "/experience",
    },
    {
        name: "Settings",
        pageTitle: "Settings",
        path: "/a",
    },
];

function ResponsiveAppBar() {
    let navigate = useNavigate();
    const [clicked, setClicked] = React.useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setClicked(true);
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setClicked(false);
        setAnchorElUser(null);
    };

    const handleColor = () => {
        navigate(settings[3].path);
    };

    const handleHome = () => {
        navigate(settings[1].path);
    };

    return (
        <>
            <AppBar position="fixed" style={{ background: "#DEE1E6" }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <CardMedia
                            component="img"
                            image={vicky}
                            title="Vicky logo"
                            sx={{
                                margin: "16px 0 6px",
                                height: "50px",
                                width: "auto",
                            }}
                        />
                        <Box
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        ></Box>

                        {settings.map((setting) => (
                            <Button
                                key={setting.pageTitle}
                                onClick={() => {
                                    navigate(setting.path);
                                }}
                                sx={{
                                    my: 0,
                                    color: "black",
                                    display: { xs: "none", md: "flex" },
                                }}
                            >
                                {setting.name}
                            </Button>
                        ))}

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            ></IconButton>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        ></Box>

                        <Box sx={{ flexGrow: 0, display: { md: "none" } }}>
                            <Tooltip title="More options">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{
                                        borderRadius: "10%",
                                        color: "#000000",
                                    }}
                                >
                                    {clicked ? (
                                        <ExpandMoreIcon />
                                    ) : (
                                        <MenuIcon />
                                    )}
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <Link
                                        key={setting.pageTitle}
                                        to={setting.path}
                                    >
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">
                                                {setting.name}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default ResponsiveAppBar;

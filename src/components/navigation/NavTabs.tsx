
import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import logo from '../images/icon-white.png';
import { CardMedia } from "@mui/material";

import vicky from "../../img/Viiicky.png";


function ResponsiveAppBar() {
    let navigate = useNavigate();

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
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleColor = () => {
        navigate('/coloridentifier')
    };

    const handleHome = () => {
        navigate('/')
    }

    return (
        <>
            <AppBar position="sticky" style={{ background: "#DEE1E6" }}>
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
                        <Box justifyContent="center" alignItems="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
                            <Button key='Home' onClick={handleHome} sx={{ my: 0, color: 'black', display: 'block' }} >Home</Button>
                            <Button key='Color' onClick={handleColor} sx={{ my: 0, color: 'black', display: 'block' }} >Colour Identifier</Button>
                            <Button key='Profile' sx={{ my: 0, color: 'black', display: 'block' }} >Experience</Button>
                            <Button key='About'  sx={{ my: 0, color: 'black', display: 'block' }} >Settings</Button>
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
                            }}/>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default ResponsiveAppBar;

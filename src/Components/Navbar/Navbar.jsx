import React, {useState} from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText, Button,
} from "@mui/material";
import {Close as CloseIcon, Menu as MenuIcon} from "@mui/icons-material";
import logo from "../../Assets/Logo.png";
import "./navbar.scss";

export default function Navbar() {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return <AppBar position="sticky" className="navbar">
        <Toolbar>
            <img
                src={logo}
                alt="logo"
            />
            <IconButton
                className={"icon"}
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
            >
                {openDrawer ? <CloseIcon/> : <MenuIcon/>}

            </IconButton>
            <ul>
                <li onClick={handleDrawerClose}>
                    <a href={"#home"}>Home</a>
                </li>
                <li onClick={handleDrawerClose}>
                    <a href={"#about"}>About Me</a>
                </li>
                <li onClick={handleDrawerClose}>
                    <a href={"#category"}>Category</a>

                </li>
                <li onClick={handleDrawerClose}>
                    <a href={"#blog"}>Blog</a>
                </li>
                <li onClick={handleDrawerClose}>
                    <a href={"#home"}>Contact Me</a>

                </li>
                <li onClick={handleDrawerClose}>
                    <a href={"#home"}> <Button>Buy now</Button></a>
                </li>
            </ul>
            <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
                <List className={"drawer"}>
                    <ListItem onClick={handleDrawerClose}>
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </ListItem>
                    <ListItem button onClick={handleDrawerClose}>
                        <a href={"#home"}>
                            <ListItemText primary="Home"/>
                        </a>

                    </ListItem>
                    <ListItem button onClick={handleDrawerClose}>
                        <a href={"#about"}>
                        <ListItemText primary="About Me"/>
                        </a>
                    </ListItem>
                    <ListItem button onClick={handleDrawerClose}>
                        <a href={"#category"}>
                            <ListItemText primary="Category"/>
                        </a>

                    </ListItem>
                    <ListItem button onClick={handleDrawerClose}>
                        <a href={"#blog"}>
                            <ListItemText primary="Blog"/>
                        </a>

                    </ListItem>
                    <ListItem button onClick={handleDrawerClose}>
                        <a href={"#home"}>
                        <ListItemText primary="Contact Me"/>
                        </a>
                    </ListItem>
                    <ListItem button onClick={handleDrawerClose}>
                        <a href={"#home"}>
                            <Button variant={"outlined"}>
                                Buy now
                            </Button>
                        </a>


                    </ListItem>
                </List>
            </Drawer>
        </Toolbar>
    </AppBar>
}

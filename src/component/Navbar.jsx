import React, {useState} from 'react';
import {Alert, AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import PropTypes from "prop-types";
import {NavLink, useHistory} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

const drawerWidth = 240;

const Navbar = (props) => {
    const {window, children} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { logout } = useAuth();
    const [error, setError] = useState('');

    const history = useHistory();
    const handleLogout = async () => {
        try {
            await logout();
            history.replace("/login")
        } catch (error) {
            setError('Server Error')
        }
    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h6" component="div">
                    My Music App
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                    <ListItem button component={NavLink} to={"/index"}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Inicio"}/>
                    </ListItem>
                    <ListItem button component={NavLink} to={"/favorite"}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Favorito"}/>
                    </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem button onClick={handleLogout}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Salir"}/>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                color="common"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{flexGrow: 1}}>
                        <Typography variant="h6" noWrap component="h6" sx={{display: {sm: 'none'}}}>
                            My Music App
                        </Typography>
                    </Box>
                    <Button color="inherit">
                        <Avatar>N</Avatar>
                    </Button>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    height: '100vh',
                    bgcolor: '#ededed',
                    width: {sm: `calc(100% - ${drawerWidth}px)`}
                }}
            >
                <Toolbar/>
                {error && <Alert variant="filled" severity="error">
                    {error}
                </Alert>}
                {children}
            </Box>
        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;

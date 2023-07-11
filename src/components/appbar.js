import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import "../styles/appbar.css";
import logo from "../assets/ali.svg";
import { makeStyles } from "@mui/styles";

const pages = ["Home", "Blog", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const useStyles = makeStyles({
  appBar: {
    // width: "calc(100% - 240px)",
    // marginLeft: 240,
  },
  container: {
    maxWidth: "1160px",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

function ResponsiveAppBar() {
  console.log("nav rendered");

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className={classes.appBar}
      sx={{ bgcolor: "#00000000" }}
      elevation={0}
      position="static"
    >
      <Container maxWidth="lg" className={classes.container}>
        <Toolbar disableGutters>
          {/* this is the bug icon with LOGO in full width screen*/}
          <Link to="/">
            <Box component="img" sx={{ height: 20 }} alt="Logo" src={logo} />
          </Link>
          {/* <Typography
              variant="h6"
              color="green"
              noWrap
              component="a"
              href="/about"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                // color: "#000000",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography> */}

          {/* this is the hamburger menu inside the box element */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", justifyContent: "end", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* this is the responsive bug icon with LOGO */}
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="p"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography> */}

          {/* these are the pages of the nav bar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", justifyContent: "end", md: "flex" },
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  px: 2,
                  color: "secondary.main",
                  display: "block",
                  fontWeight: 700,
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Home
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/blog">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  px: 2,
                  color: "secondary.main",
                  display: "block",
                  fontWeight: 700,
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Blog
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/about">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  px: 2,
                  color: "secondary.main",
                  display: "block",
                  fontWeight: 700,
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                About
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/contact">
              <Button
                onClick={handleCloseNavMenu}
                variant="outlined"
                style={{ border: "1px solid" }}
                sx={{
                  my: 4,
                  px: 2,
                  color: "secondary.main",
                  display: "block",
                  fontWeight: 700,
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Contact
              </Button>
            </Link>
          </Box>

          {/* this is the profile icon */}
          {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../assets/darkLogo.svg";
import lightLogo from "../assets/lightLogo.svg";
import { useContext } from "react";
import { StateContext } from "../store/index";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const menu = [
  { name: "Home", route: "" },
  { name: "Blog", route: "blog" },
  { name: "About", route: "about" },
  { name: "Contact", route: "contact" },
];

function ResponsiveAppBar() {
  const [state, dispatch] = useContext(StateContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ bgcolor: "#00000000" }} elevation={0} position="static">
      <Container disableGutters maxWidth="container">
        <Toolbar disableGutters>
          <Link to="/">
            <Box
              component="img"
              sx={{ height: 20, mt: "0.6rem" }}
              alt="Logo"
              src={state.isDark ? lightLogo : logo}
            />
          </Link>

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
              sx={{ color: "primary.dark", p: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              elevation={0}
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
              zindex="10000"
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  bgcolor: "grey.800",
                  color: "white",
                  p: 1,
                  width: "100%",
                },
              }}
            >
              {menu.map((item, i) => (
                <MenuItem
                  key={i}
                  component={Link}
                  to={"/" + item.route}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#f5f5f5",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "1.5",
                    p: 2,
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  <Typography textAlign="center">{item.name}</Typography>
                </MenuItem>
              ))}
              <IconButton
                sx={{ m: 2, color: "#f5f5f5" }}
                onClick={() =>
                  dispatch({ type: "SET_MODE", payload: !state.isDark })
                }
              >
                {state.isDark ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Menu>
          </Box>

          {/* these are the pages of the nav bar */}
          <Box
            className="nav-bar"
            sx={{
              flexGrow: 1,
              display: { xs: "none", justifyContent: "end", md: "flex" },
            }}
          >
            {menu.map((item, i) => (
              <Link
                key={i}
                style={{ textDecoration: "none" }}
                to={"/" + item.route}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 4,
                    px: 2,
                    color: "primary.dark",
                    display: "block",
                    fontWeight: 700,
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <IconButton
              sx={{ my: 4, ml: 2, color: "primary.dark" }}
              onClick={() =>
                dispatch({ type: "SET_MODE", payload: !state.isDark })
              }
            >
              {state.isDark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

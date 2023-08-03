import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../../assets/ali.svg";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { StateContext } from "../../store/index";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  Container,
  Menu,
  MenuItem,
  Button,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";

const menu = [
  { name: "Home", route: "" },
  { name: "Blog", route: "blog" },
  { name: "About", route: "about" },
  { name: "Contact", route: "contact" },
];

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "#2b2b2b",
    borderRadius: "4px",
    marginTop: "8px",
    width: "200px",
  },
  menuItem: {
    color: "#333",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "1.5",
    padding: "8px 16px",
    "&:hover": {
      backgroundColor: "red",
    },
  },
}));

function ResponsiveAppBar() {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [state, dispatch] = useContext(StateContext);

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
              src={logo}
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
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "secondary.main", p: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              classes={{ paper: classes.menu }}
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
              {menu.map((item, i) => (
                <MenuItem
                  key={i}
                  component={Link}
                  to={"/" + item.route}
                  className={classes.menuItem}
                  classes={{ root: classes.menuItem }}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{item.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* these are the pages of the nav bar */}
          <Box
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
                    color: "#9AC9BC",
                    display: "block",
                    fontWeight: 700,
                    "&:hover": {
                      color: "#146B78",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <IconButton
              sx={{ my: 4, ml: 2, color: "#9AC9BC" }}
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

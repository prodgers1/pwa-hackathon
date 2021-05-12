import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const headersData = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "LBClusters",
    href: "/lbc",
  },
  {
    label: "SCOM",
    href: "/scom",
  },
  {
    label: "Site24x7",
    href: "/site24x7",
  },
  {
    label: "Billing Agent",
    href: "/billingAgent",
  }
];

const useStyles = makeStyles(() => ({
  header: {
    color: '#000',
    backgroundColor: "#1BDCDB",
    paddingRight: '3em',
    paddingLeft: '2em',
    "@media (max-width: 1000px)": {
      paddingLeft: 0,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    size: '1.2em',
    marginLeft: '2.2em',
  },
  drawerContainer: {
    padding: '20px 30px',
  },
  menuItem: {
    fontWeight: 'bold',
  }
}));

const Header = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });
  const { mobileView, drawerOpen } = state;
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1000
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {logo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>{logo}</div>
      </Toolbar>
    );
  };

  const logo = (
    <Typography variant="h6" component="h1">
      Mobile-Mod
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: classes.menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem className={classes.menuItem}>{label}</MenuItem>
        </Link>
      );
    });
  };
  
  return (
    <header>
      <AppBar className={classes.header}>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
    </header>
  );
}

export default Header;
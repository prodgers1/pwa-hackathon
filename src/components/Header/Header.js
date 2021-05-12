import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";

const headersData = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "LBC Clusters",
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
    padding: '0 3em 0 2em'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    size: '1.2em',
    marginLeft: '2.2em',
 },
}));

const Header = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false
  })
  const { mobileView } = state;
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
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
    return (<div></div>);
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
            component: Link,
            className: classes.menuButton
          }}
        >
          {label}
        </Button>
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
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography, Container, Button, Icon } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import useStyles from "./FlyoutNavStyles";

const FLyoutNav = ({ isopen, toggleFlyout }) => {
  const classes = useStyles();
  const [userIn, setUserIn] = useState(
    JSON.parse(localStorage.getItem("accountProfile"))
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch({ type: "LOGOUT" });
    setUserIn(null);
    navigate("/listings");
  };

  useEffect(() => {
    setUserIn(JSON.parse(localStorage.getItem("accountProfile")));
  }, [location]);

  return (
    <aside
      isopen={isopen}
      onClick={toggleFlyout}
      className={`${classes.FlyOutNavContainer} ${
        isopen ? `${classes.isOpen}` : ""
      }`}
    >
      {userIn ? (
        <>
          <Container className={classes.container}>
            <Button onClick={toggleFlyout}>
              <Icon>
                <Close />
              </Icon>
            </Button>
            <div>
              <Typography variant="h5" className={classes.userName}>
                {" "}
                Hi, {userIn?.result.name}{" "}
              </Typography>
              <Button
                className={classes.link}
                to="/newlisting"
                color="secondary"
                component={Link}
                onClick={toggleFlyout}
                variant="contained"
                fullWidth
              >
                {" "}
                Create a New Listing{" "}
              </Button>
              <Button
                className={classes.link}
                to="userlistings"
                color="primary"
                component={Link}
                onClick={toggleFlyout}
                variant="contained"
                fullWidth
              >
                {" "}
                View my Listings{" "}
              </Button>
            </div>

            <Button
              className={classes.link}
              color="primary"
              variant="contained"
              onClick={logOut}
              fullWidth
            >
              {" "}
              Log Out{" "}
            </Button>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Button onClick={toggleFlyout}>
              <Icon>
                <Close />
              </Icon>
            </Button>
            <Typography variant="h5" className={classes.userName}>
              {" "}
              Welcome to Plush Babies{" "}
            </Typography>
            <Button
              variant="contained"
              className={classes.link}
              to="/auth"
              color="secondary"
              component={Link}
              fullWidth
            >
              {" "}
              Sign In{" "}
            </Button>
            <Button
              variant="contained"
              className={classes.link}
              to="/newuser"
              color="primary"
              component={Link}
              fullWidth
            >
              {" "}
              Sign Up{" "}
            </Button>
          </Container>
        </>
      )}
    </aside>
  );
};

export default FLyoutNav;

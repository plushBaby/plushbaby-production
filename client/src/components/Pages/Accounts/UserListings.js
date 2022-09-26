import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useStyles from "../Home/HomeStyles";
import { fetchAllListings } from "../../../actions/listings";
import Listing from "../../Listings/Listing/Listing";

const UserListings = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentId, setCurrentId] = useState(null);
  const [currentCategory, setCategory] = useState(null);
  // const listings = useSelector((state) => state.listings);
  const [userIn, setUserIn] = useState(
    JSON.parse(localStorage.getItem("accountProfile"))
  );

  useEffect(() => {
    setUserIn(JSON.parse(localStorage.getItem("accountProfile")));
  }, [location]);

  const listings = useSelector((state) =>
    currentId
      ? state.listings.find((listing) => listing.creator === userIn.result._id)
      : null
  );

  useEffect(() => {
    dispatch(fetchAllListings());
  }, [currentId, dispatch]);

  const userListings = listings.map((listing) => {
    if (!listing.creator) {
      return null;
    } else {
      if (userIn.result._id === listing.creator) {
        console.log(userIn.result._id);
        return (
          <Grid key={listing._id} item xs={6} sm={4} md={3} lg={2}>
            <Listing
              listing={listing}
              setCategory={setCategory}
              setCurrentId={setCurrentId}
            />
          </Grid>
        );
      }
    }
    return null;
  });

  return (
    <Grow in>
      <>
        <Container className={classes.container}>
          <h1> My listings </h1>
          <Grid container spacing={2}>
            {userListings}
          </Grid>
          <h3 align="center"> End of Listings </h3>
        </Container>
      </>
    </Grow>
  );
};

export default UserListings;

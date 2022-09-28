import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useStyles from "./Home/HomeStyles";
import { fetchAllListings } from "../../actions/listings";
import Listing from "../Listings/Listing/Listing";

const CategoryPage = () => {
  const [currentId, setCurrentId] = useState(null);
  const [currentCategory, setCategory] = useState(null);
  const listings = useSelector((state) => state.listings);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchAllListings(currentCategory));
  }, [currentCategory, dispatch]);

  const filteredListings = listings.map((listing) => {
    if (!listing.category) {
      return null;
    } else {
      if (category === listing.category) {
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

  return !listings?.length ? (
    <CircularProgress />
  ) : (
    <Grow in>
      <Container className={classes.container}>
        <h1> {category} </h1>
        <Grid container spacing={2}>
          {filteredListings}
        </Grid>
        <h3 align="center"> End of Listings </h3>
      </Container>
    </Grow>
  );
};

export default CategoryPage;

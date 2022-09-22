import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Container } from "@material-ui/core";
import Listing from "./Listing/Listing";
import Categories from "../Categories/Categories";
import useStyles from "./ListingsStyles";

const Listings = ({ setCurrentId, setCategory }) => {
  const listings = useSelector((state) => state.listings);
  const classes = useStyles();

  return !listings?.length ? (
    <>
      <Container align="center">
        <CircularProgress className={classes.loading} />
      </Container>
    </>
  ) : (
    <>
      <Categories />
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={2}
      >
        {listings.map((listing) => (
          <Grid key={listing._id} item xs={6} sm={4} md={3} lg={2}>
            <Listing
              listing={listing}
              setCategory={setCategory}
              setCurrentId={setCurrentId}
            />
          </Grid>
        ))}
      </Grid>

      <Container>
        <h3 align="center"> End of Listings </h3>
      </Container>
    </>
  );
};

export default Listings;

import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./HomeStyles";
import { fetchAllListings } from "../../../actions/listings";
import Listings from "../../Listings/Listings";
import HeroBanner from "../../HeroBanner/HeroBanner";

import { homeObjectOne } from "../../HeroBanner/Data";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [currentCategory, setCategory] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllListings());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <>
        <HeroBanner {...homeObjectOne} />
        <Container className={classes.container}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={2}
          >
            <Listings setCategory={setCategory} setCurrentId={setCurrentId} />
          </Grid>
        </Container>
      </>
    </Grow>
  );
};

export default Home;

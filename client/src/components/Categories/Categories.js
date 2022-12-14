import React from "react";
import { Container, Grid } from "@material-ui/core";
import Category from "./Category";
import { categories } from "./Data";
import useStyles from "./CategoryStyles";

const Categories = () => {
  const classes = useStyles();

  return (
    <Container className={classes.categories}>
      <Grid container spacing={8}>
        {categories.map((category) => (
          <Grid key={category.id} item xs={6} md={2} lg={2}>
            <Category category={category} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;

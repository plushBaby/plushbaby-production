import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress  } from '@material-ui/core';

import Listing from './Listing/Listing';
import useStyles from './ListingsStyles';

const Listings = ({ setCurrentId }) => {
    const listings = useSelector((state) => state.listings);
    const classes = useStyles();

    return (
        !listings?.length ? <CircularProgress /> : (
            <Grid className={ classes.container } container alignItems="stretch" spacing={3}  >
                    {listings.map((listing) => (
                        <Grid key={listing._id} item xs={6} sm={3} md={3} >
                            <Listing listing={listing} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
            </Grid>
        )
    );
};

export default Listings;
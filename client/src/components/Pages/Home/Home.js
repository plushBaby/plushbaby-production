import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './HomeStyles';

import { fetchAllListings } from '../../../actions/listings';
import Listings from '../../Listings/Listings';


const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllListings()); 
    }, [currentId, dispatch]);
    
    return (
        <Grow in>
            <Container className={ classes.container }> 
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={2} >
                    <Listings setCurrentId={setCurrentId}/>
                    <h3> End of Listings </h3>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;

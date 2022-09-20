import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid,} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {  useLocation  } from 'react-router-dom';
import useStyles from './Home/HomeStyles';
import { fetchAllListings } from '../../actions/listings';
import Listings from '../Listings/Listings';
import Listing from '../Listings/Listing/Listing';

const CategoryPage = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location.pathname.split("/") [2])

    useEffect(() => {
        dispatch(fetchAllListings()); 
    }, [currentId, dispatch]);
    
    return (
        <Grow in>
            <Container className={ classes.container}> 
                <h1> {Listing.category} </h1>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={2} >
                    <Listings setCurrentId={setCurrentId}/>
                </Grid>
                <h3 align="center" > End of Listings </h3>
            </Container>
        </Grow>
    );
};


export default CategoryPage;
import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid , } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation  } from 'react-router-dom';
import useStyles from '../Home/HomeStyles';
import { fetchAllListings } from '../../../actions/listings';
import Listings from '../../Listings/Listings';


const UserListings = () => {
    const [currentId, setCurrentId] = useState(null);
    const listings = useSelector((state) => state.listings);
    const [ userIn, setUserIn ] = useState( JSON.parse( localStorage.getItem( 'accountProfile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect( () => {
        setUserIn( JSON.parse( localStorage.getItem( 'accountProfile')));
      }, [location]);

    useEffect(() => {
        dispatch(fetchAllListings()); 
        console.log("displaying all listings");
    }, [currentId, dispatch]);
    
    return (
        <Grow in>
            <Container className={ classes.container }> 
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={2} >
                    <Listings setCurrentId={setCurrentId}/> 
                </Grid>
                <h3 align="center" > End of Listings </h3>
            </Container>
        </Grow>
    );
};

export default UserListings;

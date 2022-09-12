import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import useStyles from './HomeStyles';

import Posts from '../../Posts/Posts';


const Home = () => {
    const classes = useStyles();
    
    return (
        <Grow in>
            <Container className={ classes.container }> 
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={2} >
                    <Posts />
                    <h3> End of Listings </h3>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;

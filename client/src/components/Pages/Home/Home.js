import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import useStyles from './HomeStyles';

import Posts from '../../Posts/Posts';
import Form from '../../Form/Form';

const Home = () => {
    const classes = useStyles();
    
    return (
        <Grow in>
            <Container className={ classes.container }> 
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={2} >
                    <Grid  item  xs={12} sm={8} md={9}  >
                        <Posts />
                        <h3> End of Listings </h3>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} >
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;

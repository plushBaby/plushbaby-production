import React from 'react';
import { Grid } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './PostsStyles';

const Posts = () => {
    
    const classes = useStyles();

    return (
        <Grid className={ classes.container } container alignItems="stretch" spacing={3}  >
            <Grid item xs={6} sm={6} md={4} lg={4} >
                <Post />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4} >
                <Post />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4} >
                <Post />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4} >
                <Post />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4} >
                <Post />
            </Grid>
                
        </Grid>
    );
};

export default Posts;
import React from 'react';
import { Grid } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './PostsStyles';

const Posts = () => {
    
    const classes = useStyles();

    return (
        <Grid className={ classes.container } container alignItems="stretch" spacing={3}  >
            <Grid item xs={6} sm={6} md={3}  >
                <Post />
            </Grid>

            {/* just for demo. these will be added dynamically */}
            <Grid item xs={6} sm={6} md={3}  >
                <Post />
            </Grid>
            <Grid item xs={6} sm={6} md={3}  >
                <Post />
            </Grid>
            <Grid item xs={6} sm={6} md={3}  >
                <Post />
            </Grid>
            <Grid item xs={6} sm={6} md={3}  >
                <Post />
            </Grid>
            <Grid item xs={6} sm={6} md={3}  >
                <Post />
            </Grid>
            <Grid item xs={6} sm={6} md={3}  >
                <Post />
            </Grid>
            <Grid item xs={6} sm={6} md={3}  >
                <Post />
            </Grid>
            <Grid item xs={6} sm={6} md={3}  >
                <Post />
            </Grid>
            {/* just for demo. these will be added dynamically */}
        </Grid>
    );
};

export default Posts;
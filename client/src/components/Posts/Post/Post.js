import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, IconButton, CardActionArea, CardActions } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './PostStyles';

const Post = () => {
    
    const classes = useStyles();
    const navigate = useNavigate();

    const doSomething = () => {
      console.log("A button was clicked");
    };

    const openPost = () => {
      navigate(`/posts/detailedpage`);
    };

   
    return (
      <Card className={classes.roundedCorners}>
        <CardActionArea onClick={openPost} >
          <CardMedia  component="img" height="200"  image='https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'/>
          <CardContent >
            <Typography variant="h6" >  Listing title </Typography>
            <Typography variant="body2" color="textSecondary" component="span"> Seller: </Typography>
            <Typography variant="body2" color="textSecondary" component="span"> Listed: Time created from now  </Typography> 
            <Typography variant="body2" color="textSecondary" component="span"> Listing description  </Typography>
            <Typography>  <b> $23.50 </b> </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <IconButton className={classes.icons}> <DeleteIcon fontSize="small"  onClick={ doSomething } /> </IconButton>
          <IconButton className={classes.icons}> <EditIcon fontSize="small"  onClick={ doSomething} /> </IconButton>     
        </CardActions>
      </Card>
    );
};

export default Post;


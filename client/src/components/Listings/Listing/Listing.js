import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@material-ui/core/';
import useStyles from './ListingStyles';

const Listing = ({ listing , setCurrentId  }) => {
    
    const classes = useStyles();
    const navigate = useNavigate();

    const openListingPage = () => {
      navigate(`/listings/${listing._id}`);
      setCurrentId(listing._id);
    };

   
    return (
      <Card className={classes.roundedCorners}>
        <CardActionArea onClick={openListingPage}>
          <CardMedia  component="img" height="200"  image={listing.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
          <CardContent>
            <Typography  className={classes.cardTitle} > <b>   { listing.title } </b>   </Typography>
            <Typography variant="body2"  gutterBottom> { listing.subtitle } </Typography>
            <Typography variant="body1"  component="p" color="textPrimary" gutterBottom> <b> Price: ${ listing.price }  </b> </Typography>
            <Typography variant="body2" color="textSecondary"> Listed: Time created from now  </Typography> 
          </CardContent>
        </CardActionArea>
      </Card>
    );
};

export default Listing;


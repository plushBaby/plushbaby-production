import React, { useEffect , useState }   from 'react';
import {  useLocation , useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@material-ui/core/';
import useStyles from './ListingStyles';
import moment from 'moment';

const Listing = ({ listing , setCurrentId  }) => {
    
    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const [ userIn, setUserIn ] = useState( JSON.parse( localStorage.getItem( 'profile')));

    useEffect( () => {
      // const token = userIn?.token;
      setUserIn( JSON.parse( localStorage.getItem( 'profile')));
    }, [location]);

    const openListingPage = () => {
      setCurrentId(listing._id);
      navigate(`/listings/${listing._id}`);
    };

   
    return (
      <Card className={classes.roundedCorners}>
        <CardActionArea onClick={openListingPage}>
          <CardMedia  component="img" height="200"  image={listing.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
          <CardContent className={classes.cardContent}>
            <div >

            </div>
            <Typography  className={classes.cardTitle} > <b>   { listing.title } </b>   </Typography>
            <Typography variant="body2" > { listing.subtitle } </Typography>
            
            <Typography variant="body2" color="textSecondary"> Listed: {moment(listing.createdAt).fromNow()} </Typography> 
          </CardContent>

          <CardActions className={classes.cardActions} >
            <Typography variant="body1"  component="p" color="textPrimary" > <b> Price: ${ listing.price }  </b> </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    );
};

export default Listing;


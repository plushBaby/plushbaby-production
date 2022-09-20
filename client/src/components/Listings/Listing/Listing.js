import React, { useEffect , useState }   from 'react';
import {  useLocation , useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, CardActionArea, CardActions , Avatar} from '@material-ui/core/';
import useStyles from './ListingStyles';

const Listing = ({ listing , setCurrentId }) => {
    
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [ userIn, setUserIn ] = useState( JSON.parse( localStorage.getItem( 'accountProfile')));

    useEffect( () => {
      setUserIn( JSON.parse( localStorage.getItem( 'accountProfile')));
    }, [location]);

    const openListingPage = () => {
      setCurrentId(listing._id);
      navigate(`/listings/${listing._id}`);
    };

    return (
      <Card className={classes.roundedCorners}>
        <CardActionArea onClick={openListingPage}>
          <CardMedia  component="img" height="200"  image={listing.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
          <div className={classes.overlay}>
          
          {( userIn?.result?._id === listing?.creator) && (
              <>
                <Avatar className={classes.avatar}>
                  { listing.name.charAt(0) }
                </Avatar>
              </>
            )}
          </div>
          <CardContent className={classes.cardContent}>
            <Typography  className={classes.cardTitle} > <b>   { listing.title } </b>   </Typography>
            <Typography variant="body2"  className={classes.p} > { listing.subtitle } </Typography>
          </CardContent>

          <CardActions className={classes.cardActions} >
            <Typography variant="body1"  component="p" color="textPrimary" > <b> ${listing.price ? listing.price : <i> Make an offer </i>}  </b> </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    );
};

export default Listing;


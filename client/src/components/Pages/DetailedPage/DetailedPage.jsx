import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Grid, Typography , IconButton, Grow, Container } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { fetchOneListing } from '../../../actions/listings';
import useStyles from './detailedpageStyles';

const DetailedPage = () => {

    const { listing } = useSelector( (state) => state.listings);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchOneListing(id));
    }, [id , dispatch ] );

    if (!listing) {
        console.log("No listing data found");
    };

    return (
        <Grow in className={ classes.paper } >
            <Container className={ classes.container } container>
                <Grid justifyContent='space-between' alignItems='stretch' spacing={2}>
                    <div className={classes.card}>
                        <Grid item md={6}  >
                            <img className={classes.media} alt={listing.title} src={listing.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
                            <div>
                                    <IconButton className={classes.icons}> <DeleteIcon fontSize="small"/> </IconButton>
                                </div>
                        </Grid >
                        <Grid item md={10} >
                            <div className={classes.section}>
                                <Typography variant="h3" component="h3"> <b> Listing Title </b> {listing.title} </Typography>
                                <Typography variant="h5" component="h5"> Listing Sub Title </Typography>

                                
                                <Typography variant="h5" component="h5" color="textPrimary">  <b> ${listing.price} </b> </Typography> 
                            </div>

                            <div className={classes.section}>           
                                <Typography variant="body1"  component="p"> <b> Condition:  </b>  {listing.condition}</Typography>
                                <Typography gutterBottom variant="body1" component="p"> <b> Description </b> 
                                    <p>  {listing.description}</p>
                                </Typography>
                                <Typography gutterBottom variant="body1" color="textSecondary" > <i> #tags #Beanie-Babies #Rare #New #Very-cute #High-sort-after #Discontinued </i> </Typography>
                            </div> 

                            <div className={classes.section}>
                                <Typography variant="body1"> <b> Seller: </b>  User name  </Typography> 
                                <Typography variant="body1"> <b> Listed:  </b> 4 days ago </Typography>
                                
                            </div> 

                            <div className={classes.section} >
                                <Typography variant="body1"><strong> Comment Section </strong></Typography>
                            </div>              
                        </Grid>
                    </div>
                </Grid>
            </Container>

        </Grow>
    )
}

export default DetailedPage;

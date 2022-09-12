import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Grid, Typography , IconButton, Grow, Container , Paper} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import Form from '../../Form/Form';
import { fetchOneListing } from '../../../actions/listings';
import useStyles from './detailedpageStyles';

const DetailedPage = () => {

    const { listing, listings, isLoading } = useSelector( (state) => state.listings);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = useParams();
    

    useEffect( () => {
        dispatch(fetchOneListing(id));
    }, [id ] );


    if (!listing) {
        console.log("No listing data found");
        return null;
    };

    return (
        <Grow in className={ classes.paper } >
            
            <Container>
                <Grid className={classes.card} justifyContent='space-between' alignItems='stretch'>
                    <Grid item md={6}  >
                        <div className={classes.imageSection}>
                            <img className={classes.media} src={listing.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={listing.title} />
                        </div>

                    </Grid >
                    <Grid item md={10} >
                        <div className={classes.section}>
                            <Typography variant="h3" component="h3"> {listing.title} </Typography>
                            <Typography gutterBottom variant="h6" color="textSecondary" component="h6"> <i> {listing.tags} </i> </Typography>

                            <div>
                                <IconButton className={classes.icons} > <DeleteIcon fontSize="small" /> </IconButton>
                                <IconButton className={classes.icons} > <EditIcon fontSize="small" /> </IconButton>     
                            </div>

                            <div> <Typography variant="h5" component="h5" color="textPrimary">  ${listing.price} </Typography>  </div>

                        </div>

                        <div className={classes.section}>           
                            <div> <Typography variant="body1"  component="p"> <b> Condition:  </b> {listing.condition ? listing.condition : <i> No info provided </i>} </Typography></div>
                            <div> <Typography variant="body1"  component="p"> <b> Description: </b> {listing.description ? listing.description : <i> No info provided </i> }    </Typography> </div>
                            <div> <Typography variant="body1"> <b> Seller: </b>  </Typography> </div>
                            <div> <Typography variant="body1"> <b> Listed:  </b>  </Typography> </div>
                        </div>  

                        <div className={classes.section} >
                            <Typography variant="body1"><strong> Comments </strong></Typography>
                            
                        </div>              
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default DetailedPage

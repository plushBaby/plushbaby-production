import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Typography , IconButton, Grow, Container } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import Form from '../../Form/Form';
import { fetchOneListing, deleteListing } from '../../../actions/listings';
import useStyles from './detailedpageStyles';

const DetailedPage = () => {
    const [currentId, setCurrentId] = useState(0);
    const { listing } = useSelector( (state) => state.listings);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = useParams();

    useEffect( () => {
        dispatch(fetchOneListing(id));
        setCurrentId(id);
    }, [id ] );

    const confirmDelete = () => {
        if(window.confirm("Do you want to delete listing: " + listing.title ) === true ) {
            dispatch(deleteListing(listing._id)) 
            setCurrentId(null);
        }
    };

    if (!listing) {
        return null
    };

    return (
        <Grow in className={ classes.paper } >
            <Container >
                {currentId !== null
                    ? <> 
                        <Grid className={classes.card}  alignItems="stretch">
                            <Grid item sm={6} md={5} >
                                <div className={classes.imageSection}>
                                    <img className={classes.media} src={listing.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={listing.title} />
                                </div>
                            </Grid >
                            <Grid item sm={6} md={7} >
                                <div className={classes.section}>
                                    <Typography variant="h5" component="h5"> <b> {listing.title} </b> </Typography>
                                    <Typography variant="h6" color="textSecondary" component="h6"> <i> {listing.tags} </i> </Typography>

                                    <div>
                                        {/* only account creator will see */}
                                        <IconButton className={classes.icons} onClick={ confirmDelete }> <DeleteIcon fontSize="small" /> </IconButton>
                                        <IconButton className={classes.icons} > <EditIcon fontSize="small" /> </IconButton>
                                    </div>

                                    <div> <Typography variant="h5" component="h5" color="textPrimary">  ${listing.price ? listing.price : <i> Make an offer </i>} </Typography>  </div>

                                </div>

                                <div className={classes.section}>           
                                    <div> <Typography variant="body2"  component="p"> <b> Condition:  </b> {listing.condition ? listing.condition : <i> No info provided </i>} </Typography></div>
                                    
                                </div> 
                                <div className={classes.section}>
                                    <div> <Typography variant="body2"  component="p"> <b> Description: </b> {listing.description ? listing.description : <i> No info provided </i> }    </Typography> </div>  
                                </div>

                                <div className={classes.section}> 
                                    <div> <Typography variant="body2"> <b> Seller: </b> {listing.name}  </Typography> </div>
                                    <div> <Typography variant="body2"> <b> Listed:  </b>  {moment(listing.createdAt).fromNow()}  </Typography> </div> 
                                </div> 

                                <div className={classes.section} >
                                    <Typography variant="body1"><strong> Comments </strong></Typography>
                                </div>    
                            </Grid>
                        </Grid>
                        < Form loadedListing={listing} />
                        
                    </>
                    : <> 
                        <h1 align="center"> This listing has been deleted </h1>
                    </>
                }
            </Container>
        </Grow>
    )
}

export default DetailedPage

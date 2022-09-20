import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Grid, Typography , IconButton, Grow, Container, Avatar, Button, Toolbar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import Form from '../../Form/Form';
import { fetchOneListing, deleteListing } from '../../../actions/listings';
import useStyles from './detailedpageStyles';
import HeroBanner from '../../HeroBanner/HeroBanner';
import {detailedPageBanner} from '../../HeroBanner/Data';

const DetailedPage = () => {
    const [currentId, setCurrentId] = useState(0);
    const { listing } = useSelector( (state) => state.listings);
    const [ userIn, setUserIn ] = useState( JSON.parse( localStorage.getItem( 'accountProfile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();
    const { id } = useParams();


    useEffect( () => {
        setUserIn( JSON.parse( localStorage.getItem( 'accountProfile')));
      }, [location]);

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
            <>
                <HeroBanner {...detailedPageBanner} />
                <Container>
                    {currentId !== null
                        ? <> 
                            <Grid className={classes.card}  alignItems="stretch">
                                <Grid item sm={6} md={5} >
                                    <div className={classes.imageSection}>
                                        <img className={classes.media} src={listing.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={listing.title} />
                                    </div>
                                    {( userIn?.result?._id === listing?.creator) && (
                                        <div className={classes.overlay}>
                                            <Avatar className={classes.avatar}>  { listing.name.charAt(0)} </Avatar>
                                        </div>
                                    )}
                                </Grid >

                                <Grid item sm={6} md={7} >
                                    <div className={classes.section}>
                                        <Typography variant="h5" component="h5"> <b> {listing.title} </b> </Typography>
                                        <Typography variant="h6" component="h6">  {listing.subtitle}  </Typography>
                                        <div> <Typography variant="h4" component="h4"  className={classes.price}>  ${listing.price ? listing.price : <i> Make an offer </i>} </Typography>  </div>
                                    </div>

                                    <div className={classes.section}>     
                                        <div> <Typography variant="body2"  component="p"> <b> Category:  </b> {listing.category ? listing.category : <i> No info provided </i>} </Typography></div>      
                                        <div> <Typography variant="body2"  component="p"> <b> Condition:  </b> {listing.condition ? listing.condition : <i> No info provided </i>} </Typography></div>
                                    </div> 

                                    <div className={classes.section}>
                                        <div> <Typography variant="body2"  component="p"> <b> Description: </b> {listing.description ? listing.description : <i> No info provided </i> }    </Typography> </div>  
                                    </div>

                                    <div className={classes.section}> 
                                        <div> <Typography variant="body2"> <b> Seller: </b> {listing.name}  </Typography> </div>
                                        <div> <Typography variant="body2"> <b> Listed:  </b>  {moment(listing.createdAt).fromNow()}  </Typography> </div> 
                                    </div> 

                                    <div className={classes.section}> 
                                        <Typography variant="body2" color="textSecondary" > <i> {listing.tags.map((tag) => `#${tag}, `)}</i> </Typography>
                                    </div>

                                    {( userIn?.result?._id === listing?.creator) && (
                                        <Toolbar className={classes.section} >
                                            <Button className={classes.icons} onClick={ confirmDelete }  color="secondary" variant="outlined"> <DeleteIcon fontSize="small" /> Delete this listing  </Button>
                                            <Button className={classes.icons}  color="secondary" variant="outlined"> <EditIcon fontSize="small" /> Edit this listing </Button>
                                        </Toolbar>
                                    )}

                                    <div className={classes.commentSection} >
                                        <Typography variant="body1"><strong> Comments </strong></Typography>
                                        <textarea />
                                        <Button className={classes.icons}  color="primary" variant="contained"> Submit </Button>
                                    
                                    </div>    
                                </Grid>
                            </Grid>
                            {( userIn?.result?._id === listing?.creator) && (
                                < Form loadedListing={listing} />
                            )}
                        </>
                        : <> 
                            <h1 align="center"> This listing has been deleted </h1>
                        </>
                    }
                </Container>
            </>
        </Grow>
    )
}

export default DetailedPage

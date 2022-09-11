import React from 'react';
import { Grid, Typography , IconButton, Grow, Container } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';

import useStyles from './detailedpageStyles';

const DetailedPage = () => {

    const classes = useStyles();

    return (
        <Grow in className={ classes.paper } >
            <Container className={ classes.container } container>
                <Grid justifyContent='space-between' alignItems='stretch' spacing={2}>
                    <div className={classes.card}>
                        <Grid item md={6}  >
                            <img className={classes.media} src={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
                        </Grid >
                        <Grid item md={10} >
                            <div className={classes.section}>
                                <Typography variant="h3" component="h3"> Listing Main Title </Typography>
                                <Typography variant="h5" component="h5"> Listing Sub Title </Typography>

                                <div>
                                    <IconButton>
                                        <FavoriteIcon /> <Typography variant="body2"> 20 </Typography>
                                    </IconButton>
                                    <IconButton className={classes.icons}> <DeleteIcon fontSize="small"/> </IconButton>
                                </div>
                                <Typography variant="h5" component="h5" color="textPrimary">  Asking price:  $87.70 </Typography> 
                            </div>

                            <div className={classes.section}>           
                                <div> <Typography variant="body1"  component="p"> <b> Condition:  </b> Brand new! </Typography></div>
                                <div> <Typography variant="body1"> <b> Seller: </b>  User name  </Typography> </div>
                                <div> <Typography variant="body1"> <b> Listed:  </b> 4 days ago </Typography> </div>
                                
                            </div> 
                            <div className={classes.section}>
                                <Typography gutterBottom variant="body1" component="p"> <b> Description </b> 
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc</p>
                                </Typography> 
                                <Typography gutterBottom variant="body1" color="textSecondary" > <i> #tags #Beanie-Babies #Rare #New #Very-cute #High-sort-after #Discontinued </i> </Typography>
                            </div> 

                            <div className={classes.section} >
                                <Typography variant="body1"><strong> Comments </strong></Typography>
                            </div>              
                        </Grid>
                    </div>
                </Grid>
            </Container>

        </Grow>
    )
}

export default DetailedPage;

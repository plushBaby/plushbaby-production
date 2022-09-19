import React from 'react';
import { Card,  CardMedia, CardContent, Typography, CardActionArea , Grid, Container} from '@material-ui/core';
import useStyles from './CategoryStyles';

const Category = () => {
const classes = useStyles();
  return (
    <Container className={classes.category}>
        <Grid container spacing={8}>
                <Grid item xs={6} md={2} lg={2}>
                    <Card className={classes.categoryCard}>
                    <CardActionArea  className={classes.wrapper} >
                        <CardMedia
                            className={classes.img}
                            component="img"
                            height="auto"
                            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0075%2F5043%2F5401%2Fproducts%2F428A8477.jpg%3Fv%3D1550785259&f=1&nofb=1"
                            alt="green iguana"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="body2" component="div"> Beanie Babies  </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6} md={2} lg={2}>
                    <Card className={classes.categoryCard}>
                        <CardActionArea  className={classes.wrapper} >
                            <CardMedia
                                className={classes.img}
                                component="img"
                                height="auto"
                                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2F9080d6646f00abbd54f13bdf74e8ad53%2Ftumblr_pd67qeK3Ap1w0plhh_640.jpg&f=1&nofb=1"
                                alt="green iguana"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="body2" component="div"> Furby </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6} md={2} lg={2}>
                    <Card className={classes.categoryCard}>
                        <CardActionArea  className={classes.wrapper} >
                            <CardMedia
                                className={classes.img}
                                component="img"
                                height="auto"
                                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fbe%2F5a%2Fbd%2Fbe5abdb5c5afaac7826500ac8fc5d2e7.jpg&f=1&nofb=1"
                                alt="green iguana"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="body2" component="div"> Disney </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6} md={2} lg={2}>
                    <Card className={classes.categoryCard}>
                        <CardActionArea  className={classes.wrapper} >
                            <CardMedia
                                className={classes.img}
                                component="img"
                                height="auto"
                                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F26695183%2Fr%2Fil%2F8f138c%2F3090167627%2Fil_1140xN.3090167627_kxq9.jpg&f=1&nofb=1"
                                alt="green iguana"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="body2" component="div"> Pokemon </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6} md={2} lg={2}>
                    <Card className={classes.categoryCard}>
                        <CardActionArea  className={classes.wrapper} >
                            <CardMedia
                                className={classes.img}
                                component="img"
                                height="auto"
                                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2F2GkAAOSwbdBfFUWE%2Fs-l400.jpg&f=1&nofb=1"
                                alt="green iguana"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="body2" component="div"> Riot Games  </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6} md={2} lg={2}>
                    <Card className={classes.categoryCard}>
                        <CardActionArea  className={classes.wrapper} >
                            <CardMedia
                                className={classes.img}
                                component="img"
                                height="auto"
                                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0043%2F8858%2F5507%2Fproducts%2Fproduct-image-1017273366_2000x.jpg%3Fv%3D1576082958&f=1&nofb=1"
                                alt="green iguana"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="body2" component="div"> Miscellaneous  </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
        </Grid>
        </Container>
   

    
  )
}

export default Category
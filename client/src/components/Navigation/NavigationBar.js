import React from 'react';
import { AppBar, Container, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './navigationBarStyles';



const NavigationBar = () => {
    
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Avatar className={classes.logo}>
                    P
                </Avatar>
                <Typography variant='h2' align='center' className={classes.heading} component={Link} to="/"> Plush Babies Marketplace </Typography>
            </div>

            <Toolbar className={classes.toolbar} >
                <div className={classes.profile}>
                    <div className={classes.profileName}>
                        <Typography variant='h6' >  User Name </Typography>
                    </div>
                    <Button className={classes.mainButton} color="secondary" component={Link} variant="contained" to="/auth"> Log In </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;

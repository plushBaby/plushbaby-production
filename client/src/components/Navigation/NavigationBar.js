import React from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/icons/Menu';
import useStyles from './navigationBarStyles';

const NavigationBar = ({toggleFlyout}) => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.mobileIcon} onClick={toggleFlyout}>
                <Menu fontSize='large'/>
            </div>

            <div className={classes.brandContainer}>
                <Avatar className={classes.logo}>
                    P
                </Avatar>
                <Typography variant='h2' align='center' className={classes.heading} component={Link} to="/"> Plush Babies </Typography>
            </div>

            <Toolbar className={classes.toolbar} >
                <Typography to="/newlisting" component={Link} > Create a New Listing </Typography>
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

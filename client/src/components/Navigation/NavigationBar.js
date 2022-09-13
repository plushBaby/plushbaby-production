import React from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/icons/Menu';
import Person from '@material-ui/icons/Person';
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

                {/*  only logged in users see */}
                <Button className={ classes.link } variant="outlined"  onClick={toggleFlyout} >  <Person fontSize='medium'/> User Name </Button>
                <Button to="/newlisting" className={classes.link} component={Link} color="secondary" variant="contained"> Create a New Listing </Button>
                
                {/*  only public users see */}
                <Button variant="outlined" className={classes.link} to="/auth" component={Link} > Sign In </Button> 
                <Button variant="contained" className={classes.link} color="secondary" to="/auth" component={Link} > Sign Up </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;

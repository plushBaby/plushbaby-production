import React, { useEffect , useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import Person from '@material-ui/icons/Person';
import useStyles from './navigationBarStyles';

const NavigationBar = ({toggleFlyout}) => {
    const classes = useStyles();
    const [ userIn, setUserIn ] = useState( JSON.parse( localStorage.getItem( 'accountProfile')));
    const location = useLocation();

    useEffect( () => {
        // const token = userIn?.token;
        setUserIn( JSON.parse( localStorage.getItem( 'accountProfile')));
    }, [location]);


    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.mobileIcon} onClick={toggleFlyout}>
                <Menu fontSize='large'/>
            </div>

            <div className={classes.brandContainer} >
                <Avatar className={classes.logo}>
                    P
                </Avatar>
                <Typography variant='h2' align='center' className={classes.heading} component={Link} to="/" > Plush Babies </Typography>
            </div>

            <Toolbar className={classes.toolbar} >
            {userIn ? (
                <>
                    <Button className={ classes.link } variant="outlined"  onClick={toggleFlyout} >  <Person fontSize='medium'/> {userIn.result.name} </Button>
                    <Button to="/newlisting" className={classes.link} component={Link} color="secondary" variant="contained"> Create a New Listing </Button>
                </>
            ): (
                <>
                    <Button variant="outlined" className={classes.link} to="/auth" component={Link} > Sign In </Button> 
                    <Button variant="contained" className={classes.link} to="/newuser" color="secondary" component={Link} > Sign Up </Button>
                </>
            )}
                
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;

import React from 'react';
import {  Typography, MenuItem, Container, Button, Icon, Toolbar } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import useStyles from './FlyoutNavStyles';

const FLyoutNav = ({isOpen, toggleFlyout}) => {
    const classes = useStyles(isOpen);

    return (
        <aside  isOpen={isOpen} onClick={toggleFlyout} className={`${classes.FlyOutNavContainer} ${isOpen ? `${classes.isOpen}` : ''}`}>
            <Container className={classes.container}>
                <Button onClick={toggleFlyout}>
                    <Icon >
                        <Close />
                    </Icon>
                </Button>

                <div>
                    <Typography variant='h5'> Hi, Account holder name </Typography>
                    <Button className={classes.link} to="/newlisting" color="secondary" component={Link} onClick={toggleFlyout} variant="contained" fullWidth gutterBottom>   Create a New Listing  </Button>
                    <Button className={classes.link} to="userlistings" color="secondary" component={Link}  onClick={toggleFlyout} variant="contained"  fullWidth>   View my Listings  </Button>
                </div>

                <Button  className={classes.link} color="primary" component={Link} variant="contained" to="/auth" fullWidth> Log Out </Button>

            </Container>
        </aside>
    )
}

export default FLyoutNav;
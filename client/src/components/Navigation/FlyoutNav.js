import React from 'react';
import {  Typography, MenuItem, Container, Button, Icon } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import useStyles from './FlyoutNavStyles';

const FLyoutNav = ({isOpen, toggleFlyout}) => {
    const classes = useStyles(isOpen);

    return (
        <aside  isOpen={isOpen} onClick={toggleFlyout} className={`${classes.FlyOutNavContainer} ${isOpen ? `${classes.isOpen}` : ''}`}>
            <Container>
                <Button onClick={toggleFlyout}>
                <Icon >
                    <Close />
                </Icon>
                </Button>
                
                <Typography variant='h5' component={Link} to="/"> Hi, Account holder name </Typography>
                <MenuItem>  <Typography to="/newlisting" component={Link} onClick={toggleFlyout} > Create a New Listing </Typography> </MenuItem>
                <MenuItem>  <Typography to="userlistings" component={Link}  onClick={toggleFlyout} > View my Listings </Typography> </MenuItem>
                <Button  color="secondary" component={Link} variant="contained" to="/auth"> Log Out </Button>
            </Container>
        </aside>
    )
}

export default FLyoutNav;
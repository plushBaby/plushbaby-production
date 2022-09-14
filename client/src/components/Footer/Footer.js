import React from 'react';
import { Box, Typography } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import useStyles from './FooterStyles';

const Footer = () => {
    
    // const classes = useStyles();
    return (
        <Box component="footer">
            <Typography variant="h6" align="center">
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="secondary"
                component="p"
            >
                Plush Babies - Your one stop place for all the cute and fuzzies
            </Typography>
            {/* End footer */}
        </Box>
    );
};

export default Footer;
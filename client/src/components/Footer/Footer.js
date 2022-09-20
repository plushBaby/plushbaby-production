import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import useStyles from './FooterStyles';

const Footer = () => {
    
    const classes = useStyles();

    return (
        <Box component="footer" className={classes.container }>
            <Container>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="secondary"
                    component="p"
                    className={classes.slogan }
                >
                    Your one stop place for all the cute and fuzzies
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="secondary"
                    component="p"
                    className={classes.slogan }
                >
                    &copy; 2022 Plush Babies
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
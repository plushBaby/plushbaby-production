import React from 'react';
import { Button, Container, Box, Typography, Avatar, Grid, Grow } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';

import useStyles from './UserAuthenticateStyles';

const UserAuthenticate = () => {

    const classes = useStyles();

    return (
      <Grow in>
        <Container className={classes.main} component="main" maxWidth="xs">
          <Box className={classes.box}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutLinedIcon />
            </Avatar>
            <Typography variant="h5"> Log in/Sign up form </Typography>

            <form className={classes.form}>
              <Grid container spacing={2}>
                <Input name="firstName" label="First Name" half /> 
                <Input name="lastName" label="Last Name" half /> 
                <Input name="email" label="Email Address" type="email" />
                <Input name="password" label="Password" type={"password"}/>
                <Input name="confirmPassword" label="Repeat Password" type="password"/> 
              </Grid>
              <Button className={classes.mainButton} type="submit" fullWidth variant="contained"  color="primary"> Sign Up/ Log in </Button>
              <Button  fullWidth>  I already have an account / I Don't have an account </Button>
            </form>
          </Box>
        </Container>
      </Grow>
    );
};

export default UserAuthenticate;
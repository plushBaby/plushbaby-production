import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from './Input';
import useStyles from './UserAuthenticateStyles.js';
import { signup } from '../../../actions/AUTH';


const inititalFormState = { firstName: '', lastName:'', email: '', password: '', confirmPassword: '' }

const UserCreate = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ showPassword, setShowPassword ] = useState(false);
    const [ signUpsignInFormData, setSignUpsignInFormData] = useState(inititalFormState);

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch( signup(signUpsignInFormData, navigate) )
      console.log(signUpsignInFormData);
    };

    const handleChange = (e) => {
      setSignUpsignInFormData({ ...signUpsignInFormData, [e.target.name]: e.target.value});
    };

    const handleShowPassword = () =>  setShowPassword((prevShowPassword) => !prevShowPassword);

    return (
      <Container className={classes.main} component="main" maxWidth="xs" align="center">
          
            <AccountCircle />
          
          <Typography variant="h5"> Create an Account </Typography>

          <form className={classes.form} onSubmit={ handleSubmit }>
            <Grid container spacing={2}>
                <Input name="firstName" label="First Name" handleChange={ handleChange } half /> 
                <Input name="lastName" label="Last Name" handleChange={ handleChange } half /> 
                <Input name="email" label="Email Address" handleChange={ handleChange } type="email" />
                <Input name="password" label="Password" handleChange={ handleChange } type={ showPassword ? "text" : "password" } handleShowPassword={ handleShowPassword } />
                <Input name="confirmPassword" label="Repeat Password" handleChange={ handleChange } type="password" /> 
            </Grid>
            <Button type="submit" fullWidth variant="contained" className={classes.submit} color="primary" > Create my account  </Button>
            <Button fullWidth to="/auth" component={Link} > I already have an account </Button>
          </form>
      </Container>
    )
}

export default UserCreate;
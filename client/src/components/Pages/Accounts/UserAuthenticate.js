import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import useStyles from './UserAuthenticateStyles.js';
import { signin } from '../../../actions/AUTH';


const inititalFormState = { email: '', password: '' }

const UserAuthenticate = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ showPassword, setShowPassword ] = useState(false);
    const [ signUpsignInFormData, setSignUpsignInFormData] = useState(inititalFormState);

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch( signin(signUpsignInFormData, navigate));
    };

    const handleChange = (e) => {
      setSignUpsignInFormData({ ...signUpsignInFormData, [e.target.name]: e.target.value});
    };

    const handleShowPassword = () =>  setShowPassword((prevShowPassword) => !prevShowPassword);

    return (
      <Container className={classes.main} component="main" maxWidth="xs" align="center">
          
          <LockOutLinedIcon />
          
          <Typography variant="h5"> Sign in </Typography>

          <form className={classes.form} onSubmit={ handleSubmit }>
            <Grid container spacing={2}>
              <Input name="email" label="Email Address" handleChange={ handleChange } type="email" />
              <Input name="password" label="Password" handleChange={ handleChange } type={ showPassword ? "text" : "password" } handleShowPassword={ handleShowPassword } />
            </Grid>
            <Button type="submit" fullWidth variant="contained" className={classes.submit} color="primary" > Sign in </Button>
            <Button to="/newuser" component={Link} fullWidth> I Don't have an account </Button>
          </form>
      </Container>
    )
}

export default UserAuthenticate;
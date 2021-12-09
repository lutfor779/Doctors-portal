import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, error, signInWithGoogle, signInWithEmailPassword, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...loginData };
        newLogInData[field] = value;
        setLoginData(newLogInData);
    }

    const handleLoginSubmit = (e) => {
        signInWithEmailPassword(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>

                    {<form onSubmit={handleLoginSubmit} >
                        <TextField id="standard-basic"
                            sx={{ width: "75%", m: 1 }}
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />

                        <TextField id="standard-basic"
                            label="Your Password"
                            sx={{ width: "75%", m: 1 }}
                            type="password"
                            name='password'
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />

                        <Button variant="contained"
                            sx={{ width: '75%', m: 1 }}
                            type="submit" >Login</Button>
                        <NavLink to="/resister"
                            style={{ textDecoration: "none" }}>
                            <Button variant="text">New User? Please Resister.</Button>
                        </NavLink>
                    </form>}

                    {isLoading && <CircularProgress />
                    }


                    <Button variant="contained"
                        sx={{ width: '75%', m: 1 }}
                        onClick={() => signInWithGoogle(location, history)} >Google Login</Button>

                    {user.email && <Alert severity="success">Login Successfully</Alert>
                    }

                    {error && <Alert severity="error">{error}</Alert>
                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="Login Img" width="100%" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
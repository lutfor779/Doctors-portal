import React, { useState } from 'react';
import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';


const Resister = () => {
    const [registrationData, setRegistrationData] = useState({});
    const { user, resisterUser, isLoading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...registrationData };
        newLogInData[field] = value;
        setRegistrationData(newLogInData);
    }

    const handleRegistrationSubmit = (e) => {
        e.preventDefault();
        if (registrationData.password !== registrationData.confirmPassword) {
            alert("Password did not match");
            return
        }
        resisterUser(registrationData.email, registrationData.confirmPassword, registrationData.name, location, history);
        // alert('Registration Successful')

    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Resister</Typography>

                    {!isLoading && <form onSubmit={handleRegistrationSubmit} >
                        <TextField id="standard-basic"
                            sx={{ width: "75%", m: 1 }}
                            label="Your Name"
                            type="text"
                            name='name'
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />

                        <TextField id="standard-basic"
                            sx={{ width: "75%", m: 1 }}
                            label="Your Email"
                            type="email"
                            name='email'
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

                        <TextField id="standard-basic"
                            label="Retype Your Password"
                            sx={{ width: "75%", m: 1 }}
                            type="password"
                            name='confirmPassword'
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />



                        <Button variant="contained"
                            sx={{ width: '75%', m: 1 }}
                            type="submit" >Resister</Button>

                        <NavLink to="/login"
                            style={{ textDecoration: "none" }}>
                            <Button variant="text">Already have an account? Login Here</Button>
                        </NavLink>
                    </form>}

                    {isLoading && <CircularProgress />
                    }

                    {user.email && <Alert severity="success">Registration Successfully</Alert>
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

export default Resister;
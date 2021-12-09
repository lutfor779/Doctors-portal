import { Button, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    height: 400
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}
            style={{ background: `url(${bg})` }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 14, color: 'gray', fontWeight: '350px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est fugit soluta tenetur quibusdam veniam cupiditate error consectetur eaque commodi.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={chair} alt="chair" width="300px" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
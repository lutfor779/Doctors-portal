import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const AppointmentBanner = () => {
    return (
        <Box style={{
            background: `url(${bg})`,
            backgroundColor: 'rgba(45, 58, 74, 0.9)',
            backgroundBlendMode: 'darken, luminosity',
            marginTop: 150
        }} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={doctor} style={{ width: 400, marginTop: -110 }} alt="doctor" />
                </Grid>
                <Grid item xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: "flex-start",
                        alignItems: 'center',
                        textAlign: 'left'
                    }}
                >
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white' }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, voluptas?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;
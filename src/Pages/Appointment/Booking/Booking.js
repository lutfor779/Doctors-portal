import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openBooking, setOpen] = React.useState(false);
    const handleBookingOpen = () => setOpen(true);
    const handleBookingClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h6" gutterBottom component="div" style={{ color: '#5CE7ED', fontWeight: 600 }}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div" >
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained" style={{ backgroundColor: '#5CE7ED', marginTop: 15 }}>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal booking={booking}
                date={date}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess} />
        </>
    );
};

export default Booking;
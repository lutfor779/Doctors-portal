import { CircularProgress } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    const { isLoading } = useAuth();

    return (
        <div>
            {isLoading ? <CircularProgress /> : <div>
                <Navbar />
                <Banner />
                <Services />
                <AppointmentBanner />
            </div>}
        </div>
    );
};

export default Home;
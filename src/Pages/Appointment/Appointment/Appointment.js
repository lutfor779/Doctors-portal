import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navbar />
            <AppointmentHeader date={date} setDate={setDate} />
            <AvailableAppointments date={date} setDate={setDate} />
        </div>
    );
};

export default Appointment;
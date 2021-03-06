import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque fugiat nobis neque! Id ad iusto deserunt. Nemo, quae consequatur.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque fugiat nobis neque! Id ad iusto deserunt. Nemo, quae consequatur.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque fugiat nobis neque! Id ad iusto deserunt. Nemo, quae consequatur.',
        img: whitening
    }
]



const Services = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 500, color: 'success.main', m: 5 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.name}
                            service={service} />)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;
import React from 'react';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Section from '../components/Section';
import TableReservation from "../components/TableReservation";
import { GlobalStyle } from '../globalStyles';
import { Sliding } from '../animations/index';

const Reservation = () => {
    return (
        <motion.div
            initial='out'
            animate='end'
            exit='in'
            variants={Sliding}
            transition={{duration: 0.5}}
        >
            <GlobalStyle />
            <Hero 
                heading={'Réservation'}
                desc={'Parce que vous mourez d\'envie de manger chez nous'}
                button={'Accueil'}
                path='/'
            />
            <Section 
                heading={'Contact'}
                title={'Les différents moyens'}
                text={"Pour réserver aujourd'hui : Avec le système ci-dessous ou par téléphone au 07 90 91 53 35. " +
                      "Pour réserver dans plusieurs jours : Uniquement par téléphone au 07 90 91 53 35."}
                isBg={false}
                isImg={false}
                isBtn={false}
            />
            <TableReservation />
            <Footer />
        </motion.div>
    )
}

export default Reservation
import React from 'react';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { GlobalStyle } from '../globalStyles';
import { Sliding } from '../animations/index';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
                heading={'Nous contacter'}
                desc={'Pour nous dire à quel point notre restaurant est au top.'}
                button={'Accueil'}
                path='/'
            />
            <ContactForm />
            <Footer />
        </motion.div>
    )
}

export default Contact
import React from 'react';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import Error from '../components/Error';
import { GlobalStyle } from '../globalStyles';
import { Sliding } from '../animations/index';

const NotFound = () => {
    return (
        <motion.div
            initial='out'
            animate='end'
            exit='in'
            variants={Sliding}
            transition={{duration: 0.5}}
        >
            <GlobalStyle />
            <Error />
            <Footer />
        </motion.div>
    )
}

export default NotFound
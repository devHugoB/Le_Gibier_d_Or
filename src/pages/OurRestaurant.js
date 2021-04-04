import React from 'react';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { GlobalStyle } from '../globalStyles';
import { Sliding } from '../animations/index';
import ImageSlider from '../components/ImageSlider';
import { SliderDataOne } from '../components/ImageSlider/SliderData';

const OurRestaurant = () => {
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
                heading={'Notre restaurant'}
                desc={'Qui sommes nous ?'}
                button={'Accueil'}
                path='/'
            />
            <ImageSlider data={SliderDataOne} />
            <Section 
                heading={'Notre restaurant'}
                title={'D\'abbord une passion'}
                text={"Le gibier d'or est un restaurant crée par la passion de la cuisine, l'amour du gout de la viande," +
                " et l'envie de vous le partager. Crée en mars 2021, Ce restaurant a pour but, de vous faire découvrir" +
                " des plats simple mais travailler pour sublimer le gout de nos viande. De la cuisson, à l'accompagnement," +
                " et même jusqu'à la sauce, tout a été pensé pour vous faire explorer tout le panel de gout de nos viandes." +
                " Ce restaurant a été crée par des amoureux de la viande pour des amoureux de la viande, et des plats" +
                " travaillés !"}
                isBg={false}
                isImg={false}
                isBtn={true}
                pathBtn={'/carte'}
                button={'Notre carte'}
            />
            <Footer />
        </motion.div>
    )
}

export default OurRestaurant
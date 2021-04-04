import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { ImageSliderContainer, FaIconsLeft, FaIconsRight, ImageSliderActif, ImageSliderInactif, ImageSliderImg } from './ImageSliderElements'
import { ZoomIn } from '../../animations/index'

const ImageSlider = ({data}) => {
    const [current, setCurrent] = useState(0);
    const length = data.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    
    if (!Array.isArray(data) || data.length <= 0) {
        return null;
    }

    return (
        <ImageSliderContainer>
            <FaIconsLeft onClick={prevSlide} />
            <FaIconsRight onClick={nextSlide} />
            {data.map((slide, index) => {
                if (index === current) return (
                    <ImageSliderActif key={index} >
                        <motion.div
                            whileHover='in'
                            whileTap='out'
                            variants={ZoomIn}
                        >
                            {index === current &&(<ImageSliderImg src={slide.image} />)}
                        </motion.div>
                    </ImageSliderActif>
                )
                else return (
                    <ImageSliderInactif>
                        {index === current &&(<ImageSliderImg src={slide.image} key={index} />)}
                    </ImageSliderInactif>
                )
                    })}
                </ImageSliderContainer>
    )
}

export default ImageSlider

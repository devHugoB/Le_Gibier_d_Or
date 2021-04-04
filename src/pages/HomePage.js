import React from 'react';
import { motion } from 'framer-motion';

import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { ProductData, ProductDataTwo } from '../components/Products/data';
import { GlobalStyle } from '../globalStyles';
import { Sliding } from '../animations/index'

const HomePage = () => {
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
          heading={'Le Gibier d\'or'}
          desc={'Meilleures viandes de la région'}
          button={'Notre carte'}
          path='/carte'
        />
        <Products 
          heading={'Quelques Plats'} 
          data={ProductData}
          isImg={true}
        />
        <Feature />
        <Products 
          heading={'Quelques Desserts'} 
          data={ProductDataTwo}
          isImg={true}  
        />
        <Footer />
    </motion.div>
  );
}

export default HomePage;

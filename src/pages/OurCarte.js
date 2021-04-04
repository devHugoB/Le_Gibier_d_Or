import React from 'react';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Menus from '../components/Menus';
import Products from '../components/Products';
import { GlobalStyle } from '../globalStyles';
import { ProductDataThree, ProductDataFour } from '../components/Products/data';
import { MenuData } from '../components/Menus/data';
import { Sliding } from '../animations';

const OurCarte = () => {
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
              heading={'Notre carte'}
              desc={'Régalez-vous'}
              button={'Accueil'}
              path='/'
          />
          <Menus data={MenuData} />
          <Products
              heading={'Nos Bouteilles'}
              data={ProductDataThree}
              isImg={false}
          />
          <Products
              heading={'Nos Desserts'}
              data={ProductDataFour}
              isImg={true}
          />
          <Footer />
      </motion.div>
    )
}

export default OurCarte
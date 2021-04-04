import React from 'react';
import { motion } from 'framer-motion'
import { ZoomIn } from '../../animations';

import { 
    MenusContainer, 
    MenusHeading, 
    MenuWrapper, 
    MenuCard, 
    MenuInfo, 
    MenuTitle, 
    MenuSubTitle, 
    MenuDesc, 
    MenuPrice, 
    MenuBtn 
} from './MenuElements'

const Menus = ({data}) => {
    return (
        <MenusContainer>
            <MenusHeading>Nos Menus</MenusHeading>
            <MenuWrapper>
                {data.map((menu, index) => {
                    return(
                        <motion.div
                        key={index}
                        whileHover='in'
                        whileTap='out'
                        variants={ZoomIn}
                        >
                            <MenuCard >
                                <MenuInfo>
                                    <MenuTitle>{menu.nom}</MenuTitle>
                                    <MenuSubTitle>Entrées</MenuSubTitle>
                                    {menu.entrees.map((entree, index) => {
                                        return(
                                          <MenuDesc key={index}>{entree}</MenuDesc>
                                        )
                                    })}
                                    <MenuSubTitle>Plats</MenuSubTitle>
                                    {menu.plats.map((plat, index) => {
                                        return(
                                          <MenuDesc key={index}>{plat}</MenuDesc>
                                        )
                                    })}
                                    <MenuSubTitle>Desserts</MenuSubTitle>
                                    {menu.desserts.map((dessert, index) => {
                                        return(
                                          <MenuDesc key={index}>{dessert}</MenuDesc>
                                        )
                                    })}
                                    <MenuPrice>{menu.price} €</MenuPrice>
                                    <MenuBtn to="/reservation">Réserver une table</MenuBtn>
                                </MenuInfo>
                            </MenuCard>
                        </motion.div>
                    )
                })}
            </MenuWrapper>
        </MenusContainer>
    )
}

export default Menus

import React from 'react';
import { motion } from 'framer-motion';

import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarMenuSeparation, SidebarBtnWrap, SidebarRoute } from './SidebarElements'
import { FallIn } from '../../animations';

const Sidebar = ({isOpen, toggle}) => {
    return (
            <SidebarContainer isOpen={isOpen} onClick={toggle} >
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <motion.div
                    animate={isOpen ? 'in' : 'out'}
                    variants={FallIn}
                    transition={{duration: 1}}
                >
                    <SidebarMenu>
                        <SidebarLink to="/">Accueil</SidebarLink>
                        <SidebarLink to="/restaurant">Notre Restaurant</SidebarLink>
                        <SidebarLink to="/carte">La Carte</SidebarLink>
                        <SidebarMenuSeparation />
                        <SidebarLink to="/contact">Nous Contacter</SidebarLink>
                    </SidebarMenu>
                </motion.div>
                <motion.div
                    animate={isOpen ? 'in' : 'out'}
                    variants={FallIn}
                    transition={{duration: 1}}
                >
                    <SidebarBtnWrap>
                        <SidebarRoute to="/reservation">Réserver Maintenant</SidebarRoute>
                    </SidebarBtnWrap>
                </motion.div>
            </SidebarContainer>
    )
}

export default Sidebar

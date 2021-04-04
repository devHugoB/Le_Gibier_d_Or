import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi'

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled.div`
    color: #fff;
    font-size: 2.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;


    p {
        transform: translate(-175%, 100%);
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

export const Bars = styled(FiMenu)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;
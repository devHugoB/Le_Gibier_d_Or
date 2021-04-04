import styled from 'styled-components';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

export const ImageSliderContainer = styled.div`
    background: #0d0909;
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FaIconsLeft = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 200px;
    font-size: 3rem;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 1400px) {
        left: 32px;
    }
`;

export const FaIconsRight = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 200px;
    font-size: 3rem;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 1400px) {
        right: 32px;
    }
`;

export const ImageSliderActif = styled.div`
    opacity: 1;
    transition: opacity 1s;
    transform: scale(1.1);
`;

export const ImageSliderInactif = styled.div`
    opacity: 0;
    transition: opacity 2000ms;
`;


export const ImageSliderImg = styled.img`
    max-width: 1000px;
    max-height: 600px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;
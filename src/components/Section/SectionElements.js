import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const SectionContainer = styled.div`
    background: ${({isBg}) => (isBg ? `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1))` : '#150f0f')}; 
    min-height: 100vh;
    max-height: 100%;
    background-position: center;
    background-size: cover;
`;

export const SectionHeading = styled.div`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #fff;
    font-weight: bold;
`;

export const SectionItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 100%;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;

    @media screen and (max-width: 650px) {
    width: 100%;
    }
`;

export const SectionH1 = styled.h3`
    font-size: clamp(1.8rem, 2.4vw, 2.4rem);
    text-align: center;
    margin-bottom: 5rem;
`;

export const SectionImg = styled.img`
    visibility : ${({ isImg }) => (isImg ? 'visible' : 'hidden')};
    height: ${({ isImg }) => (isImg ? '320px' : '0')};
    min-width: 320px;
    max-width: 100%;
    box-shadow: 8px 8px #CCB03D;
    margin: 1rem 0 2rem 0;
`;

export const SectionP = styled.p`
    margin-bottom: 1.5rem;
    font-size: 2rem;
    text-align: justify;
`;

export const SectionBtn = styled(Link)`
    visibility: ${({ isBtn }) => (isBtn ? 'visible' : 'hidden')};
    font-size: 1rem;
    padding: 1rem 2rem;
    border: none;
    background: #CCB03D;
    text-decoration: none;
    color: #fff;

    &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    }
`;

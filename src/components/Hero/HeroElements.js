import styled from 'styled-components'
import { Link } from 'react-router-dom';
import ImgBg from '../../images/meat_wallpaper.jpg'

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 700px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.4rem, 10vw, 5.3rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #CCB03D;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  padding: 1rem 4rem;
  border: none;
  background: #CCB03D;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImgBg from '../../images/menu-wallpaper.jpg'

export const MenusContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  background: #0d0909;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const MenuCard = styled.div`
  background: radial-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${ImgBg});
  background-position: center;
  background-size: cover;
  border: #EAE1AC solid 3px;
  margin: 0 2rem 0.5rem;
  line-height: 2;
  width: 350px;
`;

export const MenusHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const MenuTitle = styled.h2`
  color: #E9CA48;
  font-weight: 400;
  font-size: 1.8rem;
  text-decoration: underline;
`;

export const MenuSubTitle = styled.h3`
  font-weight: 300;
  color: #CCB03D;
  font-size: 1.4rem;
`;

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const MenuDesc = styled.p`
  margin-bottom: 1rem;
`;

export const MenuPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const MenuBtn = styled(Link)`
  font-size: 1rem;
  padding: 1rem 2rem;
  text-decoration: none;
  border: none;
  background: #CCB03D;
  color: #fff;

  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
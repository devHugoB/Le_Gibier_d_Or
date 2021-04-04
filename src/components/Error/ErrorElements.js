import styled from 'styled-components'
import ImgBg from '../../images/meat_wallpaper.jpg'

export const ErrorContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const ErrorContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
`;

export const ErrorItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 760px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const ErrorH1 = styled.h1`
  font-size: clamp(2.9rem, 9vw, 5rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const ErrorP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;
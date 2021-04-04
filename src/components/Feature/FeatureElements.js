import styled from 'styled-components';
import { Link } from 'react-router-dom'
import FeaturePic from '../../images/featured.jpg';

export const FeatureContainer = styled.div`
  background: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureBtn = styled(Link)`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #CCB03D;
  color: #fff;
  text-decoration: none;
  transition: 0.2s ease-out;

  &:hover {
    color: #000;
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
import styled from "styled-components";
import {IoMdClose} from "react-icons/io";

export const ReservationFormContainer = styled.div`
  background: linear-gradient(45deg, #222, 20%, #555);
  color: #CCB03D;
  min-height: 100vh;
  height: 100%;
`;

export const ReservationFormContent = styled.div`
  padding-top: 5%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ReservationFormContentLeft = styled.div`
    margin: 0 auto 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 0 30px 10px;
`;

export const ReservationFormContentRight = styled.div`
    background: rgba(55,55,55,0.5);
    margin: 0 auto 3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 0 30px 10px;
    height: 60%;
    width: 80%;

    @media screen and (max-width: 1000px) {
      width: 95%;
    }
`;

export const CloseIcon = styled(IoMdClose)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  right: 0.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const ReservationFormItems = styled.div`
  width: 50%;
  display: grid;
  grid-template-rows: repeat(3, 1fr) 105px;
`;

export const ReservationFormInput = styled.input`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.1rem;
  border: none;
  border-bottom: 1px solid rgba(255,200,0,8);
  background: rgba(20, 20, 20, .2);
  outline: none;
  color: #fff;
  width: 100%;
  margin: 1rem 0;
  padding: 24px 0 12px;

  &::placeholder {
    color: rgb(190, 188, 188);
  }

  &:focus {
    border: 2px solid #CCB03D;
  }
`;

export const ReservationFormPhoneContent = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

export const ReservationFormLabel = styled.label`
  display: none;
  position: absolute;
  top: 20px;
  color: #ff4d4d;
  right: 5px;
  transform-origin: 50% 50%;

  @keyframes dongle {
    0% {
      transform: translate(0px, 0px);
    }
    10% {
      transform: translate(-10px, 0px);
    }
    20% {
      transform: translate(10px, 0px);
    }
    30% {
      transform: translate(-10px, 0px);
    }
    40% {
      transform: translate(10px, 0px);
    }
    50% {
      transform: translate(-10px, 0px);
    }
    60% {
      transform: translate(10px, 0px);
    }
    70% {
      transform: translate(-10px, 0px);
    }
    80% {
      transform: translate(10px, 0px);
    }
    90% {
      transform: translate(-10px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`;

export const ReservationFormOptions = styled.select`
  margin-top: 1rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,200,0,8);
  font-size: 1.1rem;
  color: #fff;
`;

export const ReservationFormOptionsItem = styled.option`
  background: #555;
`;

export const ReservationFormInputBtn = styled.button`
  background: transparent;
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #cec950;
  border: 1px solid rgba(255,200,0,8);
  cursor: pointer;
  transition: .2s;
  padding-left: 1rem;
  padding-right: 1rem;

  &:hover {
    font-weight: bold;
    color: #CCB03D;
    font-size: 1.6rem;
  }
`;

export const ReservationFormFooterMessage = styled.div`
  margin-top: 20px;
  padding: 12px;
  opacity: 0;
  transition: 0.2s ease;
  color: black;
  border-radius: 4px;
  box-shadow: 0 0 2px rgba(51, 51, 51, 0.3);
`;

import styled from 'styled-components';

export const ContactFormContainer = styled.form`
    background: linear-gradient(45deg, #222, 20%, #555);
    color: #CCB03D;
    min-height: 100vh;
    height: 100%;
  
`;

export const ContactFormContent = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const ContactFormContentLeft = styled.div`
    margin: 0 auto 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 0 30px 10px;
    width: 50%;

  @media screen and (max-width: 1000px) {
    width: 95%;
  }
`;

export const ContactFormContentRight = styled.div`
    background: rgba(55,55,55,0.5);
    margin: 0 auto 3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 0 30px 10px;
    height: 60%;
`;

export const ContactFormH2 = styled.h2`
    text-align: center;
    margin-bottom: 3rem;
`;

export const ContactFormItems = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr) 105px;
`;

export const ContactFormInput = styled.input`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.1rem;
    border: none;
    border-bottom: 1px solid rgba(255,200,0,8);
    background: rgba(20, 20, 20, .2);
    outline: none;
    color: #fff;
    width: 100%;
    margin: 0 auto 15px;
    padding: 24px 0 12px;

    &::placeholder {
        color: rgb(190, 188, 188);
    }

    &:focus {
        border: 2px solid #CCB03D;
    }
`;

export const ContactFormEmailContent = styled.div`
    margin: 0 auto;
    position: relative;
    width: 100%;
`;

export const ContactFormLabel = styled.label`
    display: none;
    position: absolute;
    top: 4px;
    color: #ff4d4d;
    right: 0;
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


export const ContactFormTextArea = styled.textarea`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.1rem;
    border: none;
    border-bottom: 1px solid rgba(255,200,0,8);
    background: rgba(20, 20, 20, .2);
    outline: none;
    color: #fff;
    width: 100%;
    overflow-y: auto;
    margin: 0 auto;
    resize: none;
    padding: 24px 0;

    &::placeholder {
        color: rgb(190, 188, 188);
    }

    &:focus {
        border: 2px solid #CCB03D;
    }
`;

export const ContactFormInputBtn = styled.input`
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

export const ContactFormFooterMessage = styled.div`
    margin-top: 20px;
    padding: 12px;
    opacity: 0;
    transition: 0.2s ease;
    color: black;
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(51, 51, 51, 0.3);
`;

export const ContactFormItemsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ContactFormLogo = styled.img`
  height: 64px;
  width: 64px;
`;

export const ContactFormP = styled.p`
  font-size: 1.2rem;
  margin-left: 1rem;
`;

export const ContactFormSeparation = styled.div`
  border-top: 1px solid #CCB03D;
  margin: 10px 2%;
`;
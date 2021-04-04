import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";

import mapIcon from '../../images/map.png';
import mailIcon from '../../images/mail.png';
import phoneIcon from '../../images/phone.png';
import {
  ContactFormContainer,
  ContactFormContent,
  ContactFormContentLeft,
  ContactFormContentRight,
  ContactFormH2,
  ContactFormItems,
  ContactFormInput,
  ContactFormEmailContent,
  ContactFormLabel,
  ContactFormTextArea,
  ContactFormInputBtn,
  ContactFormFooterMessage,
  ContactFormItemsContent,
  ContactFormLogo,
  ContactFormP,
  ContactFormSeparation
} from "./ContactFormElements";

const ContactForm = () => {
  init("user_2wfeeQGZPr3r10aVnngjZ");

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [objet, setObjet] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
      let mail = document.getElementById('not-mail');
      let format = /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,4}$/;

      if (email.match(format)) {
          mail.style.display = 'none';
          return true
      } else {
          mail.style.display = 'block';
          mail.style.animation = 'dongle 1s';
          setTimeout(() => {
              mail.style.animation = 'none';
          }, 1001);
          return false;
      }
  }

  const invalidInfos = () => {
      let footerMessage = document.querySelector(ContactFormFooterMessage);

      footerMessage.innerHTML = 'Merci de remplir tous les champs requis (*) !';
      footerMessage.style.opacity = '1';
      footerMessage.style.background = 'rgb(252,89,89)';

      if (!nom) document.getElementById('nom').style.border = '2px solid rgb(252,89,89)'; 
      if (!prenom) document.getElementById('prenom').style.border = '2px solid rgb(252,89,89)'     
      if (!objet) document.getElementById('objet').style.border = '2px solid rgb(252,89,89)'     
      if (!email || !isEmail()) document.getElementById('email').style.border = '2px solid rgb(252,89,89)'     
      if (!message) document.getElementById('message').style.border = '2px solid rgb(252,89,89)'     
  };

  const successInfos = () => {
    let footerMessage = document.querySelector(ContactFormFooterMessage);

    footerMessage.innerHTML = 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus bref délais.'
    footerMessage.style.opacity = '1';
    footerMessage.style.background = 'rgb(89,252,89)';

    document.getElementById('nom')
        .style.border = 'none'
        .style.borderBottom = '1px solid #cec950';

    document.getElementById('prenom')
        .style.border = 'none'
        .style.borderBottom = '1px solid #cec950';    

    document.getElementById('objet')
        .style.border = 'none'
        .style.borderBottom = '1px solid #cec950'; 

    document.getElementById('email')
        .style.border = 'none'
        .style.borderBottom = '1px solid #cec950';

    document.getElementById('message')
        .style.border = 'none'
        .style.borderBottom = '1px solid #cec950';  

    setTimeout(() => {
        footerMessage.style.opacity = '0';
    }, 10000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nom && prenom && objet && isEmail() && message) {
        sendFeedback("template_hfsxhga", {
            nom,
            prenom,
            objet,
            email,
            message,
        });
    } else {
        invalidInfos();
    }
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send("gmail", templateId, variables)
      .then(() => {
        successInfos();
        setNom("");
        setPrenom("");
        setObjet("");
        setEmail("");
        setMessage("");
      })
      .catch(() => (
        document.querySelector(ContactFormFooterMessage)
            .innerHTML ="Une erreur s'est produite, veuillez réessayer..."
            .style.opacity = '1'
            
        )
      );
  };

  return (
    <ContactFormContainer>
      <ContactFormH2>Formulaire de contact</ContactFormH2>
      <ContactFormContent>
        <ContactFormContentLeft>
          <ContactFormItems>
            <ContactFormInput
              type="text"
              id="nom"
              name="nom"
              onChange={(e) => setNom(e.target.value)}
              placeholder="Nom *"
              value={nom}
              autoComplete="off"
            />
            <ContactFormInput
              type="text"
              id="prenom"
              name="prenom"
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Prénom *"
              autoComplete="off"
              value={prenom}
            />
            <ContactFormInput
              type="text"
              id="objet"
              name="objet"
              onChange={(e) => setObjet(e.target.value)}
              placeholder="Objet *"
              autoComplete="off"
              value={objet}
            />
            <ContactFormEmailContent className="email-content">
              <ContactFormLabel id="not-mail">Email non valide</ContactFormLabel>
              <ContactFormInput
                type="mail"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email *"
                value={email}
                autoComplete="on"
              />
            </ContactFormEmailContent>
            <ContactFormTextArea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message *"
              autoComplete="off"
              value={message}
            />
          </ContactFormItems>
          <ContactFormInputBtn
            type="button"
            value="Envoyer"
            onClick={handleSubmit}
          />
          <ContactFormFooterMessage />
        </ContactFormContentLeft>
        <ContactFormContentRight>
          <ContactFormH2>Nos différentes coordonnées</ContactFormH2>
          <ContactFormItemsContent>
            <ContactFormLogo src={mapIcon} />
            <ContactFormP>85 Rue Saint-Blaise, 61000 Alençon</ContactFormP>
          </ContactFormItemsContent>
          <ContactFormSeparation />
          <ContactFormItemsContent>
            <ContactFormLogo src={mailIcon} />
            <ContactFormP>legibierdor@contact.fr</ContactFormP>
          </ContactFormItemsContent>
          <ContactFormSeparation />
          <ContactFormItemsContent>
            <ContactFormLogo src={phoneIcon} />
            <ContactFormP>07 90 91 53 35</ContactFormP>
          </ContactFormItemsContent>
        </ContactFormContentRight>
      </ContactFormContent>
    </ContactFormContainer>
  );
};

export default ContactForm;

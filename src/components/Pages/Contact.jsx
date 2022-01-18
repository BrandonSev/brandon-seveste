import React from 'react';
import Hero from "../Hero";

const Contact = () => {
  return (
    <div>
      <Hero title={"Me contacter"}
            text={"Actuellement en formation développeur web et Mobile, je maîtrise le Html / css / Javascript , ainsi que l’utilisation de la librairie React."}
            linkText={"A propos de moi"}
            linkUrl={"/"}
      />
      <div className="contact">
        <div className="container">
          <h2 className="active">Me contacter</h2>
          <div className="contact_wrapper">
            <div className="contact_image">
              <img src="/image/mail.svg" alt="mail image"/>
            </div>
            <form action="" className="contact_form">
              <div className="contact_form__group">
                <label htmlFor="name">Nom / Prénom:</label>
                <input type="text" name="name" id="name" className="input_controll"/>
              </div>
              <div className="contact_form__group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" className="input_controll"/>
              </div>
              <div className="contact_form__group">
                <label htmlFor="text">Votre message:</label>
                <textarea rows={10} id="text" name="text" className="input_controll"/>
              </div>
              <div className="contact_form__group">
                <button type="submit" className="button pulse">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

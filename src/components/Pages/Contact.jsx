import React from "react";
import Hero from "../Hero";
import { useFormik } from "formik";
import { ContactValidationSchema } from "../../Validations";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactValidationSchema,
    onSubmit: async (values) => {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/api/email/send`, values)
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.message);
            formik.resetForm();
          }
          toast.error(res.data.message);
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <div>
      <Hero
        title={"Me contacter"}
        text={
          "Actuellement en formation développeur web et Mobile, je maîtrise le Html / css / Javascript , ainsi que l’utilisation de la librairie React."
        }
        linkText={"A propos de moi"}
        linkUrl={"/"}
      />
      <div className="contact">
        <div className="container">
          <h2 className="active">Me contacter</h2>
          <div className="contact_wrapper">
            <div className="contact_image">
              <img src="/image/mail.svg" alt="mail image" />
            </div>
            <form className="contact_form">
              <div className="contact_form__group">
                <label htmlFor="name">Nom / Prénom:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className={`input_controll ${
                    formik.errors.name ? "input-error" : ""
                  }`}
                />
                {formik.errors.name && (
                  <p className="error">{formik.errors.name}</p>
                )}
              </div>
              <div className="contact_form__group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className={`input_controll ${
                    formik.errors.email ? "input-error" : ""
                  }`}
                />
                {formik.errors.email && (
                  <p className="error">{formik.errors.email}</p>
                )}
              </div>
              <div className="contact_form__group">
                <label htmlFor="subject">Sujet:</label>
                <input
                  type="subject"
                  name="subject"
                  id="subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  className={`input_controll ${
                    formik.errors.email ? "input-error" : ""
                  }`}
                />
                {formik.errors.subject && (
                  <p className="error">{formik.errors.subject}</p>
                )}
              </div>
              <div className="contact_form__group">
                <label htmlFor="message">Votre message:</label>
                <textarea
                  rows={10}
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  className={`input_controll ${
                    formik.errors.message ? "input-error" : ""
                  }`}
                />
                {formik.errors.message && (
                  <p className="error">{formik.errors.message}</p>
                )}
              </div>
              <div className="contact_form__group">
                <button
                  type="submit"
                  className="button pulse"
                  onClick={formik.handleSubmit}
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

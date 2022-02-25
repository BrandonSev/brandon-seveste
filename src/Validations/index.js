import * as Yup from "yup";

export const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum de 3 caractères")
    .required("Ce champ est obligatoire"),
  email: Yup.string()
    .email("Email incorrect")
    .required("L'email est obligatoire"),
  subject: Yup.string().required("Ce champ est obligatoire"),
  message: Yup.string()
    .min(20, "Le message doit comporter au minimum 20 caractères")
    .required("Ce champ est obligatoire"),
});

import * as Yup from "yup";
const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};
export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
export const signUpSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .matches(
      /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].**$/,
      getCharacterValidationError("Need one special character")
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Please retype your Password")
    .oneOf([Yup.ref("password")], "Your passwords do`nt match."),
});

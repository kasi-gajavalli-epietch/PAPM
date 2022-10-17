import * as yup from "yup";

export const userRegisterSchema = yup.object().shape({
  firstname: yup.string().max(128).required(),
  lastname: yup.string().max(128).required(),
  email: yup.string().email().max(128).required(),
  password: yup.string().min(8).max(128).required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const userLoginSchema = yup.object().shape({
  email: yup.string().email().max(128).required(),
  password: yup.string().min(8).max(128).required(),
});

export const userUpdateSchema = yup.object().shape({
  firstname: yup.string().max(128).required(),
  lastname: yup.string().max(128).required(),
  email: yup.string().email().max(128).required(),
  password: yup.string().min(8).max(128).required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  role: yup.string().oneOf(['Admin', 'User']).required(),
});

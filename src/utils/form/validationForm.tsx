import * as yup from 'yup';
import { EnterdigitCode, enterEmail } from '../constants/en';



export const Fieldnames={
    firstName:"firstName",
    lastName:"lastName",
    email:"email",
    password:"password",
    confirmPassword:"confirmPassword",
    phone:"phone",
    code:"code",
}
const requiredEmail='Email is required'
const validEmail='Please enter valid email'
const requiredPassword='Password is required'
const requiredPhone='Phone number is required'
const First_Required='First name is required'
const Last_Required='Last name is required'
const minRequired=`Password must be at least 8 characters`
const donotMatch='Passwords do not match'
const ConfirmMatch='Confirm password is required'
const THREEletters="At least 3 characters"
const regxTHREEletters=/(.*[a-z]){3}/
const numRegex=/^[0-9]{1,45}$/
const letterRegex=/^[a-zA-Z].*/
const MUST_Letter='Must be in characters'
const MUST_Number='Must be in number'
const featureRequire="Features is required"
const PriceRequire="Price Range is required"
const milageRequire="Milage is required"
const descriptionRequire="Description is required"
export const loginEmailValidation = yup.object().shape({
  email: yup
      .string()
      .email(validEmail)
      .required(requiredEmail),
  password: yup
    .string()
    .min(8, minRequired)
    .required(requiredPassword),
})
export const loginNumberValidation = yup.object().shape({
  phone: yup
  .string()
  .required(requiredPhone),
  password: yup
    .string()
    .min(8,  minRequired)
    .required(requiredPassword),
})


export const signUpValidationSchema = yup.object().shape({
  firstName: yup
      .string()
      .matches(regxTHREEletters,  THREEletters)
      .required(First_Required),
      lastName: yup
      .string()
       .matches(regxTHREEletters,  THREEletters)
      .required(Last_Required),
    email: yup
      .string()
      .email(validEmail)
      .required(requiredEmail),
    password: yup
      .string()
      .min(8,  minRequired)
      .required(requiredPassword),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], donotMatch)
      .required(ConfirmMatch),
  })
  export const signUpNumberValidation = yup.object().shape({
    firstName: yup
        .string()
        .matches(regxTHREEletters,  THREEletters)
        .required(First_Required),
        lastName: yup
        .string()
         .matches(regxTHREEletters,  THREEletters)
        .required(Last_Required),
      phone: yup
        .string()
        // .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
        .required(requiredPhone),
      password: yup
        .string()
        .min(8, minRequired)
        .required(requiredPassword),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], donotMatch)
        .required(ConfirmMatch),
    })



  export const verificationValidationSchema = yup.object({
   
    email: yup
    .string()
    .email(validEmail)
    .required(requiredEmail),
     
    })
    export const verificationNumberValidation = yup.object({
   
      phone: yup
      .string()
      .required(requiredPhone),
       
      })
    
export const DropdownValidation = yup.object().shape({
  location: yup.string().required(),
  city: yup.string().required(),
  carModel: yup
  .string()
  .matches(letterRegex,MUST_Letter)
  .required(),
  carMake: yup.string().required(),
  year: yup
  .string() 
  .matches(numRegex,MUST_Number)
  .required(),
  condition: yup.string().required(),
  registrationCity: yup.string().required(),
  bodycolor: yup.string().required(),
  bodyType: yup.string().required(),
  engineType: yup.string().required(),
  assembly: yup.string().required(),
  transmission: yup.string().required(),
  milage:yup
  .string() 
  .matches(numRegex,MUST_Number)
  .required(milageRequire),
  priceRange: yup
  .string()
  .matches(numRegex,MUST_Number)
  .required(PriceRequire),
  features: yup.string().required(featureRequire),
  description: yup.string().required(descriptionRequire),
});
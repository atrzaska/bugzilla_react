import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'This is a required field',
    oneOf: 'Must be one of the following values: ${values}',
  },
  string: {
    min: 'Must be at least ${min} characters',
    max: 'Must be at most ${max} characters',
    email: 'Must be a valid email',
  },
  number: {
    positive: 'Must be a positive number',
    integer: 'Must be an integer',
  },
})

const signUpSchema = yup.object().shape({
  name: yup.string().required().min(8).max(255),
  email: yup.string().required().email().max(255),
  password: yup.string().required().min(8).max(255),
  termsAccepted: yup
    .boolean()
    .required()
    .oneOf([true], 'Terms and conditions must be accepted.'),
  newsletterSubscribed: yup.boolean(),
})

const signInSchema = yup.object().shape({
  email: yup.string().required().email().max(255),
  password: yup.string().required().min(8).max(255),
  rememberMe: yup.boolean(),
})

const projectSchema = yup.object().shape({
  name: yup.string().required().max(255),
})

const storySchema = yup.object().shape({
  name: yup.string().required().max(255),
  description: yup.string().required().max(255),
  kind: yup
    .string()
    .required()
    .oneOf(['feature', 'bug', 'chore', 'release'], 'Invalid value'),
  container: yup
    .string()
    .required()
    .oneOf(['icebox', 'backlog'], 'Invalid value'),
  projectId: yup.number().required().positive().integer(),
})

const newMemberSchema = yup.object().shape({
  email: yup.string().required().email().max(255),
  projectId: yup.number().required().positive().integer(),
})

const editMemberSchema = yup.object().shape({
  role: yup.string().required().oneOf(['owner', 'member'], 'Invalid value'),
})

const recoverPasswordSchema = yup.object().shape({
  email: yup.string().required().email().max(255),
})

const confirmEmailSchema = yup.object().shape({
  email: yup.string().required().email().max(255),
})

const resetPasswordSchema = yup.object().shape({
  password: yup.string().required().min(8).max(255),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const commentSchema = yup.object().shape({
  content: yup.string().required().max(1000),
  storyId: yup.number().required().positive().integer(),
})

const taskSchema = yup.object().shape({
  description: yup.string().required().max(1000),
  complete: yup.boolean(),
  storyId: yup.number().required().positive().integer(),
})

const settingsSchema = yup.object().shape({
  name: yup.string().required().min(8).max(255),
  newsletterSubscribed: yup.boolean(),
})

const changeEmailSchema = yup.object().shape({
  email: yup.string().required().email().max(255),
  password: yup.string().required().min(8).max(255),
})

const changePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required().min(8).max(255),
  password: yup.string().required().min(8).max(255),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export {
  signUpSchema,
  signInSchema,
  projectSchema,
  storySchema,
  newMemberSchema,
  editMemberSchema,
  recoverPasswordSchema,
  confirmEmailSchema,
  resetPasswordSchema,
  commentSchema,
  taskSchema,
  settingsSchema,
  changeEmailSchema,
  changePasswordSchema,
}

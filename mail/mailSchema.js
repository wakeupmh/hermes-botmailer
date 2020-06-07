import * as yup from 'yup'
const { setLocale } = yup

setLocale({
  mixed: {
    notType: 'o ${path} é obrigatório',
    required: 'o campo ${path} é obrigatório'
  }
})

const text = yup.string().required()

const subject = yup.string().required()

const name = yup.string().required()

const email = yup.string().required()

const to = yup.string().required()

export const mailSchema = yup.object().shape({
  text,
  subject,
  name,
  email,
  to
}).label('payload')

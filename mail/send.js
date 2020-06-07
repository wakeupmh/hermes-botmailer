import Bluebird from 'bluebird'
import nodemailer from 'nodemailer'
import { credentials } from '../config'

const transporter = nodemailer.createTransport({
  host: credentials.host,
  port: credentials.port,
  secure: credentials.secure,
  auth: {
    user: credentials.user,
    pass: credentials.pass,
  },
  tls: {
    rejectUnauthorized: false
  }}
)

export const sendMail = async ({ text, subject, name, email, to}) => 
  Bluebird.resolve(transporter.sendMail(
    {
      text,
      subject,
      from: `${name} <${email}>`,
      to
    }
  ))
  .then(() => ({send: true}))
  .catch(() => ({error: true, send: false}))


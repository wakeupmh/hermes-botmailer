import Bluebird from 'bluebird'
import { sendMail, mailSchema } from '../mail'
import { Logger } from '../infrastructure'
import { validateSchema, handleSuccessResponse, handleErrorResponse } from '../common'
import { allowCors } from '../common'

const handler = (req, res) => {
  return Bluebird.resolve(req.body)
    .tap(validateSchema(mailSchema))
    .then(schema => sendMail(schema))
    .then(handleSuccessResponse(res))
    .catch(handleErrorResponse(res, Logger))
}

export default allowCors(handler)

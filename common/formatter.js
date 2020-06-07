export const handleSuccessResponse = response => ([message]) => response.status(200).json(message)

export const handleErrorResponse = (response, Logger) => error => {
  if (error.code) {
    return response.status(error.code)
      .json({
        error: error.errors
      })
  }

  Logger.error(error.cause)

  return response.status()
    .json({
      code: 500,
      error: 'Ocorreu um erro de conectividade com a opera  dora, favor tente mais tarde!'
    })
}

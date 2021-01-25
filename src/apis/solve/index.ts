import { ApiToken, OptiganRequest, OptiganResponse, ErrorResponse } from '../@types'

export type Methods = {
  post: {
    reqHeaders: ApiToken
    reqBody: OptiganRequest
    resBody: OptiganResponse | ErrorResponse
  }
}

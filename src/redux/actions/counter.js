import { createRequestTypes } from '@UTILS/reduxHelper'

export const ADD = createRequestTypes('ADD')
export const MINUS = createRequestTypes('MINUS')

export default {
  add(payload) {
    return {
      type: ADD.REQUEST,
      payload,
    }
  },
  minus(payload) {
    return {
      type: MINUS.REQUEST,
      payload,
    }
  },
}

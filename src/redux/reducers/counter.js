import Immutable from 'seamless-immutable'
import createReducer from '@UTILS/reduxHelper'
import { ADD, MINUS } from '@ACTIONS/counter'

const INITIAL_STATE = Immutable({
  num: 0,
  count: 0,
})

export default createReducer(INITIAL_STATE, {
  [ADD.SUCCESS]: state => state.merge({ num: state.num + 1, count: state.count + 1 }),
  [MINUS.SUCCESS]: state => state.merge({ num: state.num - 1, count: state.count + 1 }),
})

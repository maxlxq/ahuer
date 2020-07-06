import Taro from '@tarojs/taro'
import { put, all, takeLatest } from 'redux-saga/effects'
import { ADD, MINUS } from '@ACTIONS/counter'

const add = function* add() {
  try {
    Taro.showLoading({
      title: 'ADD ONE',
    })
    yield put({ type: ADD.SUCCESS })
    Taro.showToast({
      title: 'ADD Action Success',
      duration: 1000
    })
  } catch (e) {
    Taro.hideLoading()
    yield put({ type: ADD.FAILURE })
  }
}
const minus = function* minus() {
  try {
    Taro.showLoading({
      title: 'MINUS ONE',
    })
    yield put({ type: MINUS.SUCCESS })
    Taro.showToast({
      title: 'MINUS Action Success',
      duration: 1000
    })
  } catch (e) {
    Taro.hideLoading()
    yield put({ type: MINUS.FAILURE })
  }
}

export default function* () {
  yield all([
    takeLatest(ADD.REQUEST, add),
    takeLatest(MINUS.REQUEST, minus),
  ])
}

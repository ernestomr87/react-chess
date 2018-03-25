import { takeEvery, call, put } from 'redux-saga/effects';
import { START_GAME_REQUEST } from './constants';
import { startGameResponse } from './actions';
const Chess = require('chess.js');


function* startSaga() {
  try {
    const chess = new Chess();
    yield put(startGameResponse(chess));
  } catch (error) {
    yield put(startGameResponse(error));
  }
}

export default function* watchSourcesSaga() {
  yield takeEvery(START_GAME_REQUEST, startSaga);
}

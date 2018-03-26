import { takeEvery, put, call } from 'redux-saga/effects';
import { START_GAME_REQUEST, START_GAME_CPU_VS_CPU_REQUEST } from './constants';
import { startGameResponse, startGameCpuVSCpuResponse } from './actions';
import { game } from './api';
const Chess = require('chess.js');

function* startSaga() {
  try {
    const chess = new Chess();
    yield put(startGameResponse(chess));
  } catch (error) {
    yield put(startGameResponse(error));
  }
}

function* startCpuVSCpuSaga(action) {
  try {
    let chess = action.payload.chess;
    let move = '';
    let fen = '';
    const history = chess.history({ verbose: true });
    if (history.length) {
      move = history[history.length - 1].from + history[history.length - 1].to;
      fen = chess.fen();
    }
    const { data } = yield call(game, fen, '');
    chess.move(data.turn.bestMove, { sloppy: true });

    yield put(startGameCpuVSCpuResponse(chess));
  } catch (error) {
    yield put(startGameCpuVSCpuResponse(error));
  }
}

export default function* watchSourcesSaga() {
  yield takeEvery(START_GAME_REQUEST, startSaga);
  yield takeEvery(START_GAME_CPU_VS_CPU_REQUEST, startCpuVSCpuSaga);
}

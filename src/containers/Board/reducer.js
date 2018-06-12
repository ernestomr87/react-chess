import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  startGameRequest,
  startGameResponse,
  startGameCpuVSCpuRequest,
  startGameCpuVSCpuResponse,
  startGamePlayerVSCpuRequest,
  startGamePlayerVSCpuResponse,
} from './actions';

const mode = handleActions(
  {
    [startGameRequest]() {
      return null;
    },
    [startGameCpuVSCpuRequest]() {
      return 'CpuVsCpu';
    },
    [startGamePlayerVSCpuRequest]() {
      return 'PlayerVsCpu';
    },

    [startGameResponse]() {
      return null;
    },
    [startGameCpuVSCpuResponse]() {
      return 'CpuVsCpu';
    },
    [startGamePlayerVSCpuResponse]() {
      return 'PlayerVsCpu';
    },
  },
  null,
);
const loading = handleActions(
  {
    [startGameRequest]() {
      return true;
    },
    [startGameCpuVSCpuRequest]() {
      return true;
    },
    [startGamePlayerVSCpuRequest]() {
      return true;
    },

    [startGameResponse]() {
      return false;
    },
    [startGameCpuVSCpuResponse]() {
      return false;
    },
    [startGamePlayerVSCpuResponse]() {
      return false;
    },
  },
  true,
);

const chess = handleActions(
  {
    [startGameRequest]() {
      return null;
    },
    [startGameCpuVSCpuRequest](state) {
      return state;
    },
    [startGamePlayerVSCpuRequest](state) {
      return state;
    },
    [startGameResponse](state, action) {
      return action.error ? state : action.payload;
    },
    [startGameCpuVSCpuResponse](state, action) {
      return action.error ? state : action.payload;
    },
    [startGamePlayerVSCpuResponse](state, action) {
      return action.error ? state : action.payload;
    },
  },
  null,
);

const error = handleActions(
  {
    [startGameRequest]() {
      return false;
    },
    [startGameCpuVSCpuRequest]() {
      return false;
    },
    [startGamePlayerVSCpuRequest]() {
      return false;
    },
    [startGameResponse](state, action) {
      return action.error ? action.payload : false;
    },
    [startGameCpuVSCpuResponse](state, action) {
      return action.error ? action.payload : false;
    },
    [startGamePlayerVSCpuResponse](state, action) {
      return action.error ? action.payload : false;
    },
  },
  false,
);

export default combineReducers({
  loading,
  chess,
  error,
  mode,
});
